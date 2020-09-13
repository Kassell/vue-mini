/*!
 * vue-mini v0.1.0-rc.4
 * https://github.com/vue-mini/vue-mini
 * (c) 2019-present Yang Mingshan
 * @license MIT
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e={},t=()=>{},n=Object.assign,o=Object.prototype.hasOwnProperty,s=(e,t)=>o.call(e,t),r=Array.isArray,i=e=>"function"==typeof e,c=e=>"symbol"==typeof e,a=e=>null!==e&&"object"==typeof e,l=Object.prototype.toString,u=e=>(e=>l.call(e))(e).slice(8,-1),h=e=>"string"==typeof e&&"-"!==e[0]&&""+parseInt(e,10)===e,f=(e,t)=>e!==t&&(e==e||t==t),d=new WeakMap,_=[];let p;const v=Symbol(""),g=Symbol("");function m(t,n=e){(function(e){return e&&!0===e._isEffect})(t)&&(t=t.raw);const o=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!_.includes(n)){R(n);try{return S.push(w),w=!0,_.push(n),p=n,e()}finally{_.pop(),function(){const e=S.pop();w=void 0===e||e}(),p=_[_.length-1]}}};return n.id=b++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(t,n);return n.lazy||o(),o}function y(e){e.active&&(R(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let b=0;function R(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const S=[];function x(e,t,n){if(!w||void 0===p)return;let o=d.get(e);o||d.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=new Set),s.has(p)||(s.add(p),p.deps.push(s))}function P(e,t,n,o,s,i){const c=d.get(e);if(!c)return;const a=new Set,l=e=>{e&&e.forEach(e=>{e!==p&&a.add(e)})};if("clear"===t)c.forEach(l);else if("length"===n&&r(e))c.forEach((e,t)=>{("length"===t||t>=o)&&l(e)});else{void 0!==n&&l(c.get(n));const o="add"===t&&(!r(e)||h(n))||"delete"===t&&!r(e);(o||"set"===t&&e instanceof Map)&&l(c.get(r(e)?"length":v)),o&&e instanceof Map&&l(c.get(g))}a.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e()})}const E=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(c)),A=I(),T=I(!1,!0),j=I(!0),O=I(!0,!0),k={};function I(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&i===(e?ae:ce).get(n))return n;const l=r(n);if(l&&s(k,o))return Reflect.get(k,o,i);const u=Reflect.get(n,o,i);if(c(o)?E.has(o):"__proto__"===o||"__v_isRef"===o)return u;if(e||x(n,0,o),t)return u;if(me(u)){return!l||!h(o)?u.value:u}return a(u)?e?he(u):le(u):u}}["includes","indexOf","lastIndexOf"].forEach(e=>{k[e]=function(...t){const n=ve(this);for(let e=0,t=this.length;e<t;e++)x(n,0,e+"");const o=n[e](...t);return-1===o||!1===o?n[e](...t.map(ve)):o}});function C(e=!1){return function(t,n,o,i){const c=t[n];if(!e&&(o=ve(o),!r(t)&&me(c)&&!me(o)))return c.value=o,!0;const a=r(t)&&h(n)?Number(n)<t.length:s(t,n),l=Reflect.set(t,n,o,i);return t===ve(i)&&(a?f(o,c)&&P(t,"set",n,o):P(t,"add",n,o)),l}}function M(e,t){const n=Reflect.has(e,t);return c(t)&&E.has(t)||x(e,0,t),n}function H(e){return x(e,0,v),Reflect.ownKeys(e)}const z={get:A,set:C(),deleteProperty:function(e,t){const n=s(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&P(e,"delete",t,void 0),o},has:M,ownKeys:H},F={get:j,has:M,ownKeys:H,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},L=n({},z,{get:T,set:C(!0)}),B=n({},F,{get:O}),D=e=>a(e)?le(e):e,N=e=>a(e)?he(e):e,U=e=>e,W=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,o=!1){const s=ve(e=e.__v_raw),r=ve(t);t!==r&&!n&&x(s,0,t),!n&&x(s,0,r);const{has:i}=W(s),c=n?N:o?U:D;return i.call(s,t)?c(e.get(t)):i.call(s,r)?c(e.get(r)):void 0}function K(e,t=!1){const n=this.__v_raw,o=ve(n),s=ve(e);return e!==s&&!t&&x(o,0,e),!t&&x(o,0,s),e===s?n.has(e):n.has(e)||n.has(s)}function V(e,t=!1){return e=e.__v_raw,!t&&x(ve(e),0,v),Reflect.get(e,"size",e)}function $(e){e=ve(e);const t=ve(this),n=W(t),o=n.has.call(t,e),s=n.add.call(t,e);return o||P(t,"add",e,e),s}function q(e,t){t=ve(t);const n=ve(this),{has:o,get:s,set:r}=W(n);let i=o.call(n,e);i||(e=ve(e),i=o.call(n,e));const c=s.call(n,e),a=r.call(n,e,t);return i?f(t,c)&&P(n,"set",e,t):P(n,"add",e,t),a}function G(e){const t=ve(this),{has:n,get:o,delete:s}=W(t);let r=n.call(t,e);r||(e=ve(e),r=n.call(t,e));o&&o.call(t,e);const i=s.call(t,e);return r&&P(t,"delete",e,void 0),i}function J(){const e=ve(this),t=0!==e.size,n=W(e).clear.call(e);return t&&P(e,"clear",void 0,void 0),n}function X(e,t){return function(n,o){const s=this,r=s.__v_raw,i=ve(r),c=e?N:t?U:D;return!e&&x(i,0,v),r.forEach((e,t)=>n.call(o,c(e),c(t),s))}}function Y(e,t,n){return function(...o){const s=this.__v_raw,r=ve(s),i=r instanceof Map,c="entries"===e||e===Symbol.iterator&&i,a="keys"===e&&i,l=s[e](...o),u=t?N:n?U:D;return!t&&x(r,0,a?g:v),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Z(e){return function(...t){return"delete"!==e&&this}}const ee={get(e){return Q(this,e)},get size(){return V(this)},has:K,add:$,set:q,delete:G,clear:J,forEach:X(!1,!1)},te={get(e){return Q(this,e,!1,!0)},get size(){return V(this)},has:K,add:$,set:q,delete:G,clear:J,forEach:X(!1,!0)},ne={get(e){return Q(this,e,!0)},get size(){return V(this,!0)},has(e){return K.call(this,e,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:X(!0,!1)};function oe(e,t){const n=t?te:e?ne:ee;return(t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(s(n,o)&&o in t?n:t,o,r)}["keys","values","entries",Symbol.iterator].forEach(e=>{ee[e]=Y(e,!1,!1),ne[e]=Y(e,!0,!1),te[e]=Y(e,!1,!0)});const se={get:oe(!1,!1)},re={get:oe(!1,!0)},ie={get:oe(!0,!1)},ce=new WeakMap,ae=new WeakMap;function le(e){return e&&e.__v_isReadonly?e:fe(e,!1,z,se)}function ue(e){return fe(e,!1,L,re)}function he(e){return fe(e,!0,F,ie)}function fe(e,t,n,o){if(!a(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=t?ae:ce,r=s.get(e);if(r)return r;const i=(c=e).__v_skip||!Object.isExtensible(c)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(u(c));var c;if(0===i)return e;const l=new Proxy(e,2===i?o:n);return s.set(e,l),l}function de(e){return _e(e)?de(e.__v_raw):!(!e||!e.__v_isReactive)}function _e(e){return!(!e||!e.__v_isReadonly)}function pe(e){return de(e)||_e(e)}function ve(e){return e&&ve(e.__v_raw)||e}const ge=e=>a(e)?le(e):e;function me(e){return Boolean(e&&!0===e.__v_isRef)}class ye{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:ge(e)}get value(){return x(ve(this),0,"value"),this._value}set value(e){f(ve(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ge(e),P(ve(this),"set","value",e))}}function be(e,t=!1){return me(e)?e:new ye(e,t)}function Re(e){return me(e)?e.value:e}const we={get:(e,t,n)=>Re(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};class Se{constructor(e){this.__v_isRef=!0;const{get:t,set:n}=e(()=>x(this,0,"value"),()=>P(this,"set","value"));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}class xe{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Pe(e,t){return new xe(e,t)}class Ee{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=m(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,P(ve(this),"set","value"))}}),this.__v_isReadonly=n}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),x(ve(this),0,"value"),this._value}set value(e){this._setter(e)}}let Ae=null,Te=null,je=null;function Oe(){return Te||je}function ke(e){Ae=e}function Ie(e){Te=e}function Ce(e){je=e}function Me(e){const t=Oe();t&&(t.__effects__||(t.__effects__=[])).push(e)}let He=!1,ze=!1;const Fe=[];let Le=0;const Be=Promise.resolve();let De=null;function Ne(e){0!==Fe.length&&Fe.includes(e,He&&e.allowRecurse?Le+1:Le)||(Fe.push(e),He||ze||(ze=!0,De=Be.then(Ue)))}function Ue(e){ze=!1,He=!0;try{for(Le=0;Le<Fe.length;Le++){const e=Fe[Le];0,e()}}finally{Le=0,Fe.length=0,He=!1,De=null}}const{isArray:We}=Array;function Qe(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ke(e){return null!==e&&"object"==typeof e}function Ve(e){return"function"==typeof e}function $e(e){return`__${e}__`}const qe={};function Ge(e,t,n){return Je(e,t,n)}function Je(e,t,{immediate:n,deep:o,flush:s,onTrack:r,onTrigger:i}={}){let c;const a=me(e);if(a?c=()=>e.value:de(e)?(c=()=>e,o=!0):c=We(e)?()=>e.map(e=>me(e)?e.value:de(e)?Xe(e):Ve(e)?e():void 0):Ve(e)?t?()=>e():()=>(l&&l(),e(u)):()=>{},t&&o){const e=c;c=()=>Xe(e())}let l;const u=e=>{l=_.options.onStop=()=>e()};let h=We(e)?[]:qe;const f=()=>{if(_.active)if(t){const e=_();(o||a||function(e,t){return e!==t&&(e==e||t==t)}(e,h))&&(l&&l(),t(e,h===qe?void 0:h,u),h=e)}else _()};let d;f.allowRecurse=Boolean(t),d="sync"===s?f:()=>{Ne(f)};const _=m(c,{lazy:!0,onTrack:r,onTrigger:i,scheduler:d});Me(_),t?n?f():h=_():_();const p=Oe();return()=>{y(_),p&&function(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}(p.__effects__,_)}}function Xe(e,t=new Set){if(!Ke(e)||t.has(e))return e;if(t.add(e),me(e))Xe(e.value,t);else if(We(e))for(let n=0;n<e.length;n++)Xe(e[n],t);else if(e instanceof Map)e.forEach((n,o)=>{Xe(e.get(o),t)});else if(e instanceof Set)e.forEach(e=>{Xe(e,t)});else for(const n in e)Xe(e[n],t);return e}const Ye=Object.create(null);function Ze(e,t){const n=e[t];return function(...e){const o=this[$e(t)];o&&o.forEach(t=>t(...e)),void 0!==n&&n.call(this,...e)}}function et(e){if(function(e){const t=new Set(["undefined","boolean","number","string"]);return null===e||t.has(typeof e)}(e)||Ve(e))return e;if(me(e))return et(e.value);if(pe(e))return et(ve(e));if(We(e))return e.map(e=>et(e));if(function(e){return null!==e&&"Object"===Qe(e)}(e)){const t={};return Object.keys(e).forEach(n=>{t[n]=et(e[n])}),t}throw new TypeError(Qe(e)+" value is not supported")}function tt(e,t){Ke(t)&&Ge(me(t)?t:()=>t,()=>{this.setData({[e]:et(t)})},{deep:!0})}function nt(e,t){const n=e[t];return function(...e){const o=this[$e(t)];o&&o.forEach(t=>t(...e)),void 0!==n&&n.call(this,...e)}}const ot={onShow:"show",onHide:"hide",onResize:"resize",ready:"onReady"};function st(e,t){return ct(t,e.lifetimes[t]||e[t])}function rt(e,t){return ct(t,e.methods[t])}function it(e,t){return ct(t,e.pageLifetimes[ot[t]])}function ct(e,t){const n=$e(e);return function(...e){const o=this[n];o&&o.forEach(t=>t(...e)),void 0!==t&&t.call(this,...e)}}const at=Pt("onShow"),lt=Pt("onHide"),ut=Pt("onError"),ht=Pt("onPageNotFound"),ft=Pt("onUnhandledRejection"),dt=Pt("onThemeChange"),_t=Et("onShow"),pt=Et("onHide"),vt=Et("onUnload"),gt=Et("onPullDownRefresh"),mt=Et("onReachBottom"),yt=Et("onResize"),bt=Et("onTabItemTap"),Rt=At("onLoad"),wt=At("moved"),St=At("detached"),xt=At("error");function Pt(e){return t=>{Ae&&Tt(Ae,e,t)}}function Et(e){return t=>{const n=Oe();n&&Tt(n,e,t)}}function At(e){return t=>{je&&Tt(je,e,t)}}function Tt(e,t,n){const o=$e(t);void 0===e[o]&&(e[o]=[]),e[o].push(n)}exports.computed=function(e){const n=function(e){let n,o;return i(e)?(n=e,o=t):(n=e.get,o=e.set),new Ee(n,o,i(e)||!e.set)}(e);return Me(n.effect),n},exports.createApp=function(e){let t,n;if(Ve(e))t=e,n={};else{if(void 0===e.setup)return App(e);const{setup:o,...s}=e;t=o,n=s}const o=n.onLaunch;return n.onLaunch=function(e){ke(this);const n=t(e);void 0!==n&&Object.keys(n).forEach(e=>{this[e]=n[e]}),ke(null),void 0!==o&&o.call(this,e)},n.onShow=Ze(n,"onShow"),n.onHide=Ze(n,"onHide"),n.onError=Ze(n,"onError"),n.onPageNotFound=Ze(n,"onPageNotFound"),n.onUnhandledRejection=Ze(n,"onUnhandledRejection"),n.onThemeChange=Ze(n,"onThemeChange"),App(n)},exports.customRef=function(e){return new Se(e)},exports.defineComponent=function(e,t={listenPageScroll:!1}){let n,o,s=null;if(Ve(e))n=e,o={};else{if(void 0===e.setup)return Component(e);const{setup:t,...r}=e;n=t,o=r,o.properties&&(s=Object.keys(o.properties))}void 0===o.lifetimes&&(o.lifetimes={});const r=o.lifetimes.attached||o.attached;o.lifetimes.attached=function(){Ce(this);const e={};s&&s.forEach(t=>{e[t]=this.data[t]}),this.__props__=ue(e);const t={is:this.is,id:this.id,dataset:this.dataset,triggerEvent:this.triggerEvent.bind(this),createSelectorQuery:this.createSelectorQuery.bind(this),createIntersectionObserver:this.createIntersectionObserver.bind(this),selectComponent:this.selectComponent.bind(this),selectAllComponents:this.selectAllComponents.bind(this),selectOwnerComponent:this.selectOwnerComponent.bind(this),getRelationNodes:this.getRelationNodes.bind(this),getTabBar:this.getTabBar.bind(this),getPageId:this.getPageId.bind(this),animate:this.animate.bind(this),clearAnimation:this.clearAnimation.bind(this),getOpenerEventChannel:this.getOpenerEventChannel.bind(this)},o=n(this.__props__,t);void 0!==o&&Object.keys(o).forEach(e=>{const t=o[e];Ve(t)?this[e]=t:(this.setData({[e]:et(t)}),tt.call(this,e,t))}),Ce(null),void 0!==r&&r.call(this)};const i=st(o,"detached");return o.lifetimes.detached=function(){i.call(this),this.__effects__&&this.__effects__.forEach(e=>y(e))},o.lifetimes.ready=ct(ot.ready,o.lifetimes.ready||o.ready),o.lifetimes.moved=st(o,"moved"),o.lifetimes.error=st(o,"error"),void 0===o.methods&&(o.methods={}),(o.methods.onPageScroll||t.listenPageScroll)&&(o.methods.onPageScroll=rt(o,"onPageScroll"),o.methods.__listenPageScroll__=()=>!0),void 0===o.methods.onShareAppMessage&&(o.methods.onShareAppMessage=function(e){const t=this[$e("onShareAppMessage")];return t?t(e):{}},o.methods.__isInjectedShareHook__=()=>!0),void 0===o.methods.onAddToFavorites&&(o.methods.onAddToFavorites=function(e){const t=this[$e("onAddToFavorites")];return t?t(e):{}},o.methods.__isInjectedFavoritesHook__=()=>!0),o.methods.onLoad=rt(o,"onLoad"),o.methods.onPullDownRefresh=rt(o,"onPullDownRefresh"),o.methods.onReachBottom=rt(o,"onReachBottom"),o.methods.onTabItemTap=rt(o,"onTabItemTap"),void 0===o.pageLifetimes&&(o.pageLifetimes={}),o.pageLifetimes[ot.onShow]=it(o,"onShow"),o.pageLifetimes[ot.onHide]=it(o,"onHide"),o.pageLifetimes[ot.onResize]=it(o,"onResize"),s&&(void 0===o.observers&&(o.observers={}),s.forEach(e=>{const t=o.observers[e];o.observers[e]=function(n){this.__props__&&(this.__props__[e]=n),void 0!==t&&t.call(this,n)}})),Component(o)},exports.definePage=function(e,t={listenPageScroll:!1}){let n,o;if(Ve(e))n=e,o={};else{if(void 0===e.setup)return Page(e);const{setup:t,...s}=e;n=t,o=s}const s=o.onLoad;o.onLoad=function(e){Ie(this);const t={is:this.is,route:this.route,options:this.options,createSelectorQuery:this.createSelectorQuery.bind(this),createIntersectionObserver:this.createIntersectionObserver.bind(this),selectComponent:this.selectComponent.bind(this),selectAllComponents:this.selectAllComponents.bind(this),getTabBar:this.getTabBar.bind(this),getPageId:this.getPageId.bind(this),animate:this.animate.bind(this),clearAnimation:this.clearAnimation.bind(this),getOpenerEventChannel:this.getOpenerEventChannel.bind(this)},o=n(e,t);void 0!==o&&Object.keys(o).forEach(e=>{const t=o[e];Ve(t)?this[e]=t:(this.setData({[e]:et(t)}),tt.call(this,e,t))}),Ie(null),void 0!==s&&s.call(this,e)};const r=nt(o,"onUnload");return o.onUnload=function(){r.call(this),this.__effects__&&this.__effects__.forEach(e=>y(e))},(o.onPageScroll||t.listenPageScroll)&&(o.onPageScroll=nt(o,"onPageScroll"),o.__listenPageScroll__=()=>!0),void 0===o.onShareAppMessage&&(o.onShareAppMessage=function(e){const t=this[$e("onShareAppMessage")];return t?t(e):{}},o.__isInjectedShareHook__=()=>!0),void 0===o.onAddToFavorites&&(o.onAddToFavorites=function(e){const t=this[$e("onAddToFavorites")];return t?t(e):{}},o.__isInjectedFavoritesHook__=()=>!0),o.onShow=nt(o,"onShow"),o.onReady=nt(o,"onReady"),o.onHide=nt(o,"onHide"),o.onPullDownRefresh=nt(o,"onPullDownRefresh"),o.onReachBottom=nt(o,"onReachBottom"),o.onResize=nt(o,"onResize"),o.onTabItemTap=nt(o,"onTabItemTap"),Page(o)},exports.inject=function(e,t){return e in Ye?Ye[e]:arguments.length>1?t:void 0},exports.isProxy=pe,exports.isReactive=de,exports.isReadonly=_e,exports.isRef=me,exports.markRaw=function(e){return((e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})})(e,"__v_skip",!0),e},exports.nextTick=function(e){const t=De||Be;return e?t.then(e):t},exports.onAddToFavorites=e=>{const t=Oe();if(t&&t.__isInjectedFavoritesHook__){const n=$e("onAddToFavorites");void 0===t[n]&&(t[n]=e)}},exports.onAppError=ut,exports.onAppHide=lt,exports.onAppShow=at,exports.onDetach=St,exports.onError=xt,exports.onHide=pt,exports.onLoad=Rt,exports.onMove=wt,exports.onPageNotFound=ht,exports.onPageScroll=e=>{const t=Oe();t&&t.__listenPageScroll__&&Tt(t,"onPageScroll",e)},exports.onPullDownRefresh=gt,exports.onReachBottom=mt,exports.onReady=e=>{const t=Oe();t&&Tt(t,"onReady",e)},exports.onResize=yt,exports.onShareAppMessage=e=>{const t=Oe();if(t&&t.__isInjectedShareHook__){const n=$e("onShareAppMessage");void 0===t[n]&&(t[n]=e)}},exports.onShow=_t,exports.onTabItemTap=bt,exports.onThemeChange=dt,exports.onUnhandledRejection=ft,exports.onUnload=vt,exports.provide=function(e,t){Ye[e]=t},exports.proxyRefs=function(e){return de(e)?e:new Proxy(e,we)},exports.reactive=le,exports.readonly=he,exports.ref=function(e){return be(e)},exports.shallowReactive=ue,exports.shallowReadonly=function(e){return fe(e,!0,B,ie)},exports.shallowRef=function(e){return be(e,!0)},exports.toRaw=ve,exports.toRef=Pe,exports.toRefs=function(e){const t=r(e)?new Array(e.length):{};for(const n in e)t[n]=Pe(e,n);return t},exports.triggerRef=function(e){P(e,"set","value",void 0)},exports.unref=Re,exports.watch=Ge,exports.watchEffect=function(e,t){return Je(e,null,t)};