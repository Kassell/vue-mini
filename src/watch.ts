import {
  effect,
  stop,
  isRef,
  Ref,
  ComputedRef,
  ReactiveEffectOptions
} from '@next-vue/reactivity'
import { queueJob } from './scheduler'
import { recordEffect } from './reactivity'
import { isArray, isObject, isFunction, hasChanged } from './utils'

export type WatchHandler<T = any> = (
  value: T,
  oldValue: T,
  onCleanup: CleanupRegistrator
) => any

export interface WatchOptions {
  lazy?: boolean
  flush?: 'pre' | 'post' | 'sync'
  deep?: boolean
  onTrack?: ReactiveEffectOptions['onTrack']
  onTrigger?: ReactiveEffectOptions['onTrigger']
}

type StopHandle = () => void

type WatcherSource<T = any> = Ref<T> | ComputedRef<T> | (() => T)

type MapSources<T> = {
  // eslint-disable-next-line @typescript-eslint/generic-type-naming
  [K in keyof T]: T[K] extends WatcherSource<infer V> ? V : never
}

export type CleanupRegistrator = (invalidate: () => void) => void

type SimpleEffect = (onCleanup: CleanupRegistrator) => void

// eslint-disable-next-line @typescript-eslint/ban-types
const invoke = (fn: Function): unknown => fn()

// Overload #1: simple effect
export function watch(effect: SimpleEffect, options?: WatchOptions): StopHandle

// Overload #2: single source + cb
export function watch<T>(
  source: WatcherSource<T>,
  cb: WatchHandler<T>,
  options?: WatchOptions
): StopHandle

// Overload #3: array of multiple sources + cb
// Readonly constraint helps the callback to correctly infer value types based
// on position in the source array. Otherwise the values will get a union type
// of all possible value types.
export function watch<T extends Readonly<Array<WatcherSource<unknown>>>>(
  sources: T,
  cb: WatchHandler<MapSources<T>>,
  options?: WatchOptions
): StopHandle

// Implementation
export function watch<T = any>(
  effectOrSource: WatcherSource<T> | Array<WatcherSource<T>> | SimpleEffect,
  cbOrOptions?: WatchHandler<T> | WatchOptions,
  options?: WatchOptions
): StopHandle {
  if (isFunction(cbOrOptions)) {
    // Effect callback as 2nd argument - this is a source watcher
    return doWatch(effectOrSource, cbOrOptions, options)
  }

  // 2nd argument is either missing or an options object
  // - this is a simple effect watcher
  return doWatch(effectOrSource, null, cbOrOptions)
}

function doWatch(
  source: WatcherSource | WatcherSource[] | SimpleEffect,
  cb: WatchHandler | null,
  { lazy, deep, flush, onTrack, onTrigger }: WatchOptions = {}
): StopHandle {
  let getter: () => any
  if (isArray(source)) {
    getter = () => source.map(s => (isRef(s) ? s.value : s()))
  } else if (isRef(source)) {
    getter = () => source.value
  } else if (cb) {
    // Getter with cb
    getter = () => (source as () => any)()
  } else {
    // No cb -> simple effect
    getter = () => {
      if (cleanup) {
        cleanup()
      }

      return source(registerCleanup)
    }
  }

  if (deep) {
    const baseGetter = getter
    getter = () => traverse(baseGetter())
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  let cleanup: Function
  const registerCleanup: CleanupRegistrator = (fn: () => void) => {
    // eslint-disable-next-line no-multi-assign
    cleanup = runner.options.onStop = () => fn()
  }

  let oldValue = isArray(source) ? [] : undefined
  const applyCb = cb
    ? () => {
        const newValue = runner()
        if (deep || hasChanged(newValue, oldValue)) {
          // Cleanup before running cb again
          if (cleanup) {
            cleanup()
          }

          cb(newValue, oldValue, registerCleanup)
          oldValue = newValue
        }
      }
    : undefined

  let scheduler: (job: () => any) => void
  if (flush === 'sync') {
    scheduler = invoke
  } else {
    scheduler = job => {
      queueJob(job)
    }
  }

  const runner = effect(getter, {
    lazy: true,
    // So it runs before component update effects in pre flush mode
    computed: true,
    onTrack,
    onTrigger,
    scheduler: applyCb ? () => scheduler(applyCb) : scheduler
  })

  if (lazy && cb) {
    oldValue = runner()
  } else {
    if (__DEV__ && lazy && !cb) {
      console.warn(
        `watch() lazy option is only respected when using the ` +
          `watch(getter, callback) signature.`
      )
    }

    if (applyCb) {
      scheduler(applyCb)
    } else {
      scheduler(runner)
    }
  }

  recordEffect(runner)
  return () => {
    stop(runner)
  }
}

function traverse(value: unknown, seen: Set<unknown> = new Set()): unknown {
  if (!isObject(value) || seen.has(value)) {
    return
  }

  seen.add(value)
  if (isArray(value)) {
    // eslint-disable-next-line unicorn/no-for-loop, @typescript-eslint/prefer-for-of
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen)
    }
  } else if (value instanceof Map) {
    value.forEach((_, key) => {
      // To register mutation dep for existing keys
      traverse(value.get(key), seen)
    })
  } else if (value instanceof Set) {
    value.forEach(v => {
      traverse(v, seen)
    })
  } else {
    // eslint-disable-next-line guard-for-in
    for (const key in value) {
      traverse((value as Record<any, any>)[key], seen)
    }
  }

  return value
}
