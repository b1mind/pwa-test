function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e){let n;return function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(e,t=>n=t)(),n}function l(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function f(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=u(e,n,r,a);t.p(o,c)}}const p="undefined"!=typeof window;let d=p?()=>window.performance.now():()=>Date.now(),h=p?t=>requestAnimationFrame(t):t;const m=new Set;function g(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),0!==m.size&&h(g)}function $(t){let e;return 0===m.size&&h(g),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}function y(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t){return Array.from(t.childNodes)}function L(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):_(e)}function j(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return E(e)}function P(t){return j(t," ")}function N(t,e){e=""+e,t.data!==e&&(t.data=e)}function q(t,e){t.value=null==e?"":e}function O(t,e,n){t.classList[n?"add":"remove"](e)}function U(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const z=new Set;let B,M=0;function D(t,e,n,r,o,s,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,p=t.ownerDocument;z.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(_("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${o}ms 1 both`,M+=1,f}function I(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),M-=o,M||h(()=>{M||(z.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),z.clear())}))}function J(n,r,o,s){if(!r)return t;const a=n.getBoundingClientRect();if(r.left===a.left&&r.right===a.right&&r.top===a.top&&r.bottom===a.bottom)return t;const{delay:c=0,duration:i=300,easing:l=e,start:u=d()+c,end:f=u+i,tick:p=t,css:h}=o(n,{from:r,to:a},s);let m,g=!0,y=!1;function b(){h&&I(n,m),g=!1}return $(t=>{if(!y&&t>=u&&(y=!0),y&&t>=f&&(p(1,0),b()),!g)return!1;if(y){const e=0+1*l((t-u)/i);p(e,1-e)}return!0}),h&&(m=D(n,0,1,i,c,l,h)),c||(y=!0),p(0,1),b}function T(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:r}=e,o=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,K(t,o)}}function K(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),o="none"===r.transform?"":r.transform;t.style.transform=`${o} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function V(t){B=t}function F(){if(!B)throw new Error("Function called outside component initialization");return B}function H(t){F().$$.after_update.push(t)}function G(){const t=F();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=U(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const Y=[],Q=[],W=[],X=[],Z=Promise.resolve();let tt=!1;function et(t){W.push(t)}let nt=!1;const rt=new Set;function ot(){if(!nt){nt=!0;do{for(let t=0;t<Y.length;t+=1){const e=Y[t];V(e),st(e.$$)}for(Y.length=0;Q.length;)Q.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];rt.has(e)||(rt.add(e),e())}W.length=0}while(Y.length);for(;X.length;)X.pop()();tt=!1,nt=!1,rt.clear()}}function st(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}let at;function ct(t,e,n){t.dispatchEvent(U(`${e?"intro":"outro"}${n}`))}const it=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function ft(){lt.r||s(lt.c),lt=lt.p}function pt(t,e){t&&t.i&&(it.delete(t),t.i(e))}function dt(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),lt.c.push(()=>{it.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ht={duration:0};function mt(n,r,o,c){let i=r(n,o),l=c?0:1,u=null,f=null,p=null;function h(){p&&I(n,p)}function m(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:o=0,duration:a=300,easing:c=e,tick:g=t,css:y}=i||ht,b={start:d()+o,b:r};r||(b.group=lt,lt.r+=1),u?f=b:(y&&(h(),p=D(n,l,r,a,o,c,y)),r&&g(0,1),u=m(b,a),et(()=>ct(n,r,"start")),$(t=>{if(f&&t>f.start&&(u=m(f,a),f=null,ct(n,u.b,"start"),y&&(h(),p=D(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)g(l=u.b,1-l),ct(n,u.b,"end"),f||(u.b?h():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),g(l,1-l)}return!(!u&&!f)}))}return{run(t){a(i)?(at||(at=Promise.resolve(),at.then(()=>{at=null})),at).then(()=>{i=i(),g(t)}):g(t)},end(){h(),u=f=null}}}function gt(t,e){t.f(),function(t,e){dt(t,1,1,()=>{e.delete(t.key)})}(t,e)}function $t(t,e,n,r,o,s,a,c,i,l,u,f){let p=t.length,d=s.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),$.set(c,g[h]=i),c in m&&y.set(c,Math.abs(h-m[c]))}const b=new Set,v=new Set;function w(t){pt(t,1),t.m(c,u),a.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],r=e.key,o=n.key;e===n?(u=e.first,p--,d--):$.has(o)?!a.has(r)||b.has(r)?w(e):v.has(o)?p--:y.get(r)>y.get(o)?(v.add(r),w(e)):(b.add(o),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;d;)w(g[d-1]);return g}function yt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function bt(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function wt(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),et(()=>{const e=c.map(r).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(et)}function Et(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),tt||(tt=!0,Z.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(e,n,r,a,c,i,l=[-1]){const u=B;V(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let d=!1;if(p.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&xt(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=k(n.target);p.fragment&&p.fragment.l(t),t.forEach(v)}else p.fragment&&p.fragment.c();n.intro&&pt(e.$$.fragment),_t(e,n.target,n.anchor),ot()}V(u)}class Rt{$destroy(){Et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const At=[];function Ct(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!At.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),At.push(n,e)}if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const kt={},Lt=()=>({});function jt(e){let n,r,o,s,a,c;return{c(){n=_("nav"),r=_("ul"),o=_("li"),s=_("a"),a=E("home"),this.h()},l(t){n=L(t,"NAV",{class:!0});var e=k(n);r=L(e,"UL",{class:!0});var c=k(r);o=L(c,"LI",{class:!0});var i=k(o);s=L(i,"A",{"aria-current":!0,href:!0,class:!0});var l=k(s);a=j(l,"home"),l.forEach(v),i.forEach(v),c.forEach(v),e.forEach(v),this.h()},h(){C(s,"aria-current",c=void 0===e[0]?"page":void 0),C(s,"href","."),C(s,"class","svelte-amzbjn"),C(o,"class","svelte-amzbjn"),C(r,"class","svelte-amzbjn"),C(n,"class","svelte-amzbjn")},m(t,e){b(t,n,e),y(n,r),y(r,o),y(o,s),y(s,a)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&C(s,"aria-current",c)},i:t,o:t,d(t){t&&v(n)}}}function Pt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Nt extends Rt{constructor(t){super(),St(this,t,Pt,jt,c,{segment:0})}}function qt(t){let e,n,r;const o=new Nt({props:{segment:t[0]}}),s=t[2].default,a=l(s,t,t[1],null);return{c(){vt(o.$$.fragment),e=x(),n=_("main"),a&&a.c(),this.h()},l(t){wt(o.$$.fragment,t),e=P(t),n=L(t,"MAIN",{class:!0});var r=k(n);a&&a.l(r),r.forEach(v),this.h()},h(){C(n,"class","svelte-i0jbtm")},m(t,s){_t(o,t,s),b(t,e,s),b(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&f(a,s,t,t[1],e,null,null)},i(t){r||(pt(o.$$.fragment,t),pt(a,t),r=!0)},o(t){dt(o.$$.fragment,t),dt(a,t),r=!1},d(t){Et(o,t),t&&v(e),t&&v(n),a&&a.d(t)}}}function Ot(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class Ut extends Rt{constructor(t){super(),St(this,t,Ot,qt,c,{segment:0})}}function zt(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=E(r)},l(t){e=L(t,"PRE",{});var o=k(e);n=j(o,r),o.forEach(v)},m(t,r){b(t,e,r),y(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&N(n,r)},d(t){t&&v(e)}}}function Bt(e){let n,r,o,s,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&zt(e);return{c(){r=x(),o=_("h1"),s=E(e[0]),a=x(),c=_("p"),i=E(f),l=x(),p&&p.c(),u=S(),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(v),r=P(t),o=L(t,"H1",{class:!0});var n=k(o);s=j(n,e[0]),n.forEach(v),a=P(t),c=L(t,"P",{class:!0});var d=k(c);i=j(d,f),d.forEach(v),l=P(t),p&&p.l(t),u=S(),this.h()},h(){C(o,"class","svelte-1xjwv3d"),C(c,"class","svelte-1xjwv3d")},m(t,e){b(t,r,e),b(t,o,e),y(o,s),b(t,a,e),b(t,c,e),y(c,i),b(t,l,e),p&&p.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&N(s,t[0]),2&e&&f!==(f=t[1].message+"")&&N(i,f),t[2]&&t[1].stack?p?p.p(t,e):(p=zt(t),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&v(r),t&&v(o),t&&v(a),t&&v(c),t&&v(l),p&&p.d(t),t&&v(u)}}}function Mt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class Dt extends Rt{constructor(t){super(),St(this,t,Mt,Bt,c,{status:0,error:1})}}function It(t){let e,r;const o=[t[4].props];var s=t[4].component;function a(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}if(s)var c=new s(a());return{c(){c&&vt(c.$$.fragment),e=S()},l(t){c&&wt(c.$$.fragment,t),e=S()},m(t,n){c&&_t(c,t,n),b(t,e,n),r=!0},p(t,n){const r=16&n?yt(o,[bt(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){ut();const t=c;dt(t.$$.fragment,1,0,()=>{Et(t,1)}),ft()}s?(vt((c=new s(a())).$$.fragment),pt(c.$$.fragment,1),_t(c,e.parentNode,e)):c=null}else s&&c.$set(r)},i(t){r||(c&&pt(c.$$.fragment,t),r=!0)},o(t){c&&dt(c.$$.fragment,t),r=!1},d(t){t&&v(e),c&&Et(c,t)}}}function Jt(t){let e;const n=new Dt({props:{error:t[0],status:t[1]}});return{c(){vt(n.$$.fragment)},l(t){wt(n.$$.fragment,t)},m(t,r){_t(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(pt(n.$$.fragment,t),e=!0)},o(t){dt(n.$$.fragment,t),e=!1},d(t){Et(n,t)}}}function Tt(t){let e,n,r,o;const s=[Jt,It],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){a[e].m(t,n),b(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(ut(),dt(a[i],1,1,()=>{a[i]=null}),ft(),n=a[e],n||(n=a[e]=s[e](t),n.c()),pt(n,1),n.m(r.parentNode,r))},i(t){o||(pt(n),o=!0)},o(t){dt(n),o=!1},d(t){a[e].d(t),t&&v(r)}}}function Kt(t){let e;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Tt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=n(o,r[t]);const s=new Ut({props:o});return{c(){vt(s.$$.fragment)},l(t){wt(s.$$.fragment,t)},m(t,n){_t(s,t,n),e=!0},p(t,[e]){const n=12&e?yt(r,[4&e&&{segment:t[2][0]},8&e&&bt(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(pt(s.$$.fragment,t),e=!0)},o(t){dt(s.$$.fragment,t),e=!1},d(t){Et(s,t)}}}function Vt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f;return H(l),u=kt,f=r,F().$$.context.set(u,f),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class Ft extends Rt{constructor(t){super(),St(this,t,Vt,Kt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ht=[/^\/test\/?$/],Gt=[{js:()=>import("./index.ef51afa0.js"),css:[]}],Yt=[{pattern:/^\/$/,parts:[{i:0}]}];const Qt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Wt,Xt,Zt,te=!1,ee=[],ne="{}";const re={page:function(t){const e=Ct(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:Ct(null),session:Ct(Qt&&Qt.session)};let oe,se;re.session.subscribe(async t=>{if(oe=t,!te)return;se=!0;const e=de(new URL(location.href)),n=Xt={},{redirect:r,props:o,branch:s}=await $e(e);n===Xt&&await ge(r,s,o,e.page)});let ae,ce=null;let ie,le=1;const ue="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},fe={};function pe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function de(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Qt.baseUrl))return null;let e=t.pathname.slice(Qt.baseUrl.length);if(""===e&&(e="/"),!Ht.some(t=>t.test(e)))for(let n=0;n<Yt.length;n+=1){const r=Yt[n],o=r.pattern.exec(e);if(o){const n=pe(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function he(){return{x:pageXOffset,y:pageYOffset}}async function me(t,e,n,r){if(e)ie=e;else{const t=he();fe[ie]=t,e=ie=++le,fe[ie]=n?t:{x:0,y:0}}ie=e,Wt&&re.preloading.set(!0);const o=ce&&ce.href===t.href?ce.promise:$e(t);ce=null;const s=Xt={},{redirect:a,props:c,branch:i}=await o;if(s===Xt&&(await ge(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=fe[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}fe[ie]=t,t&&scrollTo(t.x,t.y)}}async function ge(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=de(new URL(t,document.baseURI));return n?(ue[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),me(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(re.page.set(r),re.preloading.set(!1),Wt)Wt.$set(n);else{n.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},n.level0={props:await Zt},n.notify=re.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)be(t.nextSibling);be(t),be(e)}Wt=new Ft({target:ae,props:n,hydrate:!0})}ee=e,ne=JSON.stringify(r.query),te=!0,se=!1}async function $e(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Zt||(Zt=Qt.preloaded[0]||Lt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},oe));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==ne)return!0;const o=ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!se&&!u&&ee[c]&&ee[c].part===e.i)return ee[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ye);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Gt[e.i]);let m;return m=te||!Qt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},oe):{}:Qt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function ye(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function be(t){t.parentNode.removeChild(t)}function ve(t){const e=de(new URL(t,document.baseURI));if(e)return ce&&t===ce.href||function(t,e){ce={href:t,promise:e}}(t,$e(e)),ce.promise}let we;function _e(t){clearTimeout(we),we=setTimeout(()=>{Ee(t)},20)}function Ee(t){const e=Se(t.target);e&&"prefetch"===e.rel&&ve(e.href)}function xe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Se(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=de(o);if(s){me(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),ue.pushState({id:ie},"",o.href)}}function Se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Re(t){if(fe[ie]=he(),t.state){const e=de(new URL(location.href));e?me(e,t.state.id):location.href=location.href}else le=le+1,function(t){ie=t}(le),ue.replaceState({id:ie},"",location.href)}var Ae;(Ae={target:document.querySelector("#sapper")},"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ue.scrollRestoration="auto"}),addEventListener("load",()=>{ue.scrollRestoration="manual"}),function(t){ae=t}(Ae.target),addEventListener("click",xe),addEventListener("popstate",Re),addEventListener("touchstart",Ee),addEventListener("mousemove",_e),Promise.resolve().then(()=>{const{hash:t,href:e}=location;ue.replaceState({id:le},"",e);const n=new URL(location.href);if(Qt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Qt;Zt||(Zt=s&&s[0]),ge(null,[],{error:c,status:a,session:o,level0:{props:Zt},level1:{props:{status:a,error:c},component:Dt},segments:s},{host:e,path:n,query:pe(r),params:{}})}();const r=de(n);return r?me(r,le,!0,t):void 0})).then(()=>{});export{G as A,vt as B,wt as C,q as D,_t as E,A as F,Et as G,H,T as I,K as J,J as K,et as L,mt as M,S as N,ut as O,$t as P,ft as Q,gt as R,Rt as S,St as a,x as b,L as c,k as d,_ as e,j as f,i as g,v as h,a as i,P as j,C as k,O as l,b as m,t as n,y as o,R as p,N as q,s as r,c as s,E as t,l as u,f as v,Ct as w,pt as x,dt as y,w as z};
