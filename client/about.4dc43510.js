import{S as t,i as e,s,K as a,e as r,c as n,a as c,d as l,f as o,g as i,L as h,u as f,v as u,J as m,C as $,B as v,M as p,k as g,t as d,o as E,b as x,h as I,n as y,E as b,l as P,j as w,N as A,O as D,m as V,q as B,p as j,r as z,w as C}from"./client.162e8ce4.js";function H(t){let e,s;const m=t[5].default,$=a(m,t,t[4],null);return{c(){e=r("div"),$&&$.c(),this.h()},l(t){e=n(t,"DIV",{class:!0,animation:!0});var s=c(e);$&&$.l(s),s.forEach(l),this.h()},h(){o(e,"class","triggered svelte-15wlzz0"),o(e,"animation",t[0])},m(a,r){i(a,e,r),$&&$.m(e,null),t[6](e),s=!0},p(t,[a]){$&&$.p&&16&a&&h($,m,t,t[4],a,null,null),(!s||1&a)&&o(e,"animation",t[0])},i(t){s||(f($,t),s=!0)},o(t){u($,t),s=!1},d(s){s&&l(e),$&&$.d(s),t[6](null)}}}function S(t,e,s){let a,r,{animation:n={autoAlpha:0,x:"+=100",stagger:.3}}=e;function c(){r=$.create({trigger:a,pin:!0,scrub:!0,animation:v.from(a.children,{...n}),start:"center center",toggleActions:"play none none reverse"})}m(()=>(c(),()=>{console.log($.getAll()),r.kill()}));let{$$slots:l={},$$scope:o}=e;return t.$set=t=>{"animation"in t&&s(0,n=t.animation),"$$scope"in t&&s(4,o=t.$$scope)},[n,a,r,c,o,l,function(t){p[t?"unshift":"push"](()=>{s(1,a=t)})}]}class T extends t{constructor(t){super(),e(this,t,S,H,s,{animation:0})}}function k(t){let e,s,a,h,f;return{c(){e=r("hr"),s=g(),a=r("footer"),h=r("div"),f=d("Copyright 2020"),this.h()},l(t){e=n(t,"HR",{}),s=E(t),a=n(t,"FOOTER",{class:!0});var r=c(a);h=n(r,"DIV",{class:!0});var o=c(h);f=x(o,"Copyright 2020"),o.forEach(l),r.forEach(l),this.h()},h(){o(h,"class","copyright"),o(a,"class","svelte-tjjwyp")},m(t,r){i(t,e,r),i(t,s,r),i(t,a,r),I(a,h),I(h,f)},p:y,i:y,o:y,d(t){t&&l(e),t&&l(s),t&&l(a)}}}class L extends t{constructor(t){super(),e(this,t,null,k,s,{})}}function O(t,e,s){const a=t.slice();return a[4]=e[s],a}function R(t){let e,s,a,h,f,u,m=t[4]+"";function $(...e){return t[3](t[4],...e)}return{c(){e=r("li"),s=r("div"),a=d(m),h=g(),this.h()},l(t){e=n(t,"LI",{class:!0});var r=c(e);s=n(r,"DIV",{class:!0});var o=c(s);a=x(o,m),o.forEach(l),h=E(r),r.forEach(l),this.h()},h(){o(s,"class","svelte-13rlnl7"),b(s,"active",t[4]===t[1]),o(e,"class","svelte-13rlnl7")},m(t,r){i(t,e,r),I(e,s),I(s,a),I(e,h),f||(u=P(e,"click",$),f=!0)},p(e,r){t=e,1&r&&m!==(m=t[4]+"")&&w(a,m),3&r&&b(s,"active",t[4]===t[1])},d(t){t&&l(e),f=!1,u()}}}function q(t){let e,s,a=t[0],h=[];for(let e=0;e<a.length;e+=1)h[e]=R(O(t,a,e));return{c(){e=r("div"),s=r("ul");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){e=n(t,"DIV",{class:!0});var a=c(e);s=n(a,"UL",{class:!0});var r=c(s);for(let t=0;t<h.length;t+=1)h[t].l(r);r.forEach(l),a.forEach(l),this.h()},h(){o(s,"class","svelte-13rlnl7"),o(e,"class","tabs svelte-13rlnl7")},m(t,a){i(t,e,a),I(e,s);for(let t=0;t<h.length;t+=1)h[t].m(s,null)},p(t,[e]){if(7&e){let r;for(a=t[0],r=0;r<a.length;r+=1){const n=O(t,a,r);h[r]?h[r].p(n,e):(h[r]=R(n),h[r].c(),h[r].m(s,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=a.length}},i:y,o:y,d(t){t&&l(e),A(h,t)}}}function F(t,e,s){let a=D(),{items:r}=e,{activeItem:n}=e;return t.$set=t=>{"items"in t&&s(0,r=t.items),"activeItem"in t&&s(1,n=t.activeItem)},[r,n,a,t=>a("tabChange",t)]}class J extends t{constructor(t){super(),e(this,t,F,q,s,{items:0,activeItem:1})}}function K(t){let e,s;return{c(){e=r("p"),s=d("History of svelte")},l(t){e=n(t,"P",{});var a=c(e);s=x(a,"History of svelte"),a.forEach(l)},m(t,a){i(t,e,a),I(e,s)},d(t){t&&l(e)}}}function M(t){let e,s,a,h,f;return{c(){e=r("p"),s=d("Bio"),a=g(),h=r("a"),f=d("test"),this.h()},l(t){e=n(t,"P",{});var r=c(e);s=x(r,"Bio"),r.forEach(l),a=E(t),h=n(t,"A",{href:!0});var o=c(h);f=x(o,"test"),o.forEach(l),this.h()},h(){o(h,"href","projects#anchor")},m(t,r){i(t,e,r),I(e,s),i(t,a,r),i(t,h,r),I(h,f)},d(t){t&&l(e),t&&l(a),t&&l(h)}}}function N(t){let e,s;return{c(){e=r("p"),s=d("This is the 'about' page. There's not much here.")},l(t){e=n(t,"P",{});var a=c(e);s=x(a,"This is the 'about' page. There's not much here."),a.forEach(l)},m(t,a){i(t,e,a),I(e,s)},d(t){t&&l(e)}}}function U(t){let e,s,a,o,h,f,u,m;return{c(){e=r("p"),s=d("test"),a=g(),o=r("p"),h=d("test"),f=g(),u=r("p"),m=d("test")},l(t){e=n(t,"P",{});var r=c(e);s=x(r,"test"),r.forEach(l),a=E(t),o=n(t,"P",{});var i=c(o);h=x(i,"test"),i.forEach(l),f=E(t),u=n(t,"P",{});var $=c(u);m=x($,"test"),$.forEach(l)},m(t,r){i(t,e,r),I(e,s),i(t,a,r),i(t,o,r),I(o,h),i(t,f,r),i(t,u,r),I(u,m)},d(t){t&&l(e),t&&l(a),t&&l(o),t&&l(f),t&&l(u)}}}function G(t){let e,s,a,o,h,f,u,m;return{c(){e=r("p"),s=d("test"),a=g(),o=r("p"),h=d("test"),f=g(),u=r("p"),m=d("test")},l(t){e=n(t,"P",{});var r=c(e);s=x(r,"test"),r.forEach(l),a=E(t),o=n(t,"P",{});var i=c(o);h=x(i,"test"),i.forEach(l),f=E(t),u=n(t,"P",{});var $=c(u);m=x($,"test"),$.forEach(l)},m(t,r){i(t,e,r),I(e,s),i(t,a,r),i(t,o,r),I(o,h),i(t,f,r),i(t,u,r),I(u,m)},d(t){t&&l(e),t&&l(a),t&&l(o),t&&l(f),t&&l(u)}}}function Q(t){let e,s,a,h,m,$,v,p,y,b,P,w,A,D,H,S;const k=new J({props:{activeItem:t[0],items:t[1]}});function O(t,e){return"Bio"===t[0]?N:"Story"===t[0]?M:K}k.$on("tabChange",t[2]);let R=O(t),q=R(t);const F=new T({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),Q=new T({props:{animation:t[3],$$slots:{default:[G]},$$scope:{ctx:t}}}),W=new L({});return{c(){e=g(),s=r("h1"),a=d("About Svelte"),h=g(),m=r("div"),V(k.$$.fragment),$=g(),q.c(),v=g(),V(F.$$.fragment),p=g(),y=r("div"),b=d("test"),P=g(),V(Q.$$.fragment),w=g(),A=r("div"),D=d("test"),H=g(),V(W.$$.fragment),this.h()},l(t){B('[data-svelte="svelte-1myew8g"]',document.head).forEach(l),e=E(t),s=n(t,"H1",{});var r=c(s);a=x(r,"About Svelte"),r.forEach(l),h=E(t),m=n(t,"DIV",{class:!0});var o=c(m);j(k.$$.fragment,o),$=E(o),q.l(o),o.forEach(l),v=E(t),j(F.$$.fragment,t),p=E(t),y=n(t,"DIV",{class:!0});var i=c(y);b=x(i,"test"),i.forEach(l),P=E(t),j(Q.$$.fragment,t),w=E(t),A=n(t,"DIV",{class:!0});var f=c(A);D=x(f,"test"),f.forEach(l),H=E(t),j(W.$$.fragment,t),this.h()},h(){document.title="About",o(m,"class","spacer svelte-x4hzh2"),o(y,"class","spacer svelte-x4hzh2"),o(A,"class","spacer svelte-x4hzh2")},m(t,r){i(t,e,r),i(t,s,r),I(s,a),i(t,h,r),i(t,m,r),z(k,m,null),I(m,$),q.m(m,null),i(t,v,r),z(F,t,r),i(t,p,r),i(t,y,r),I(y,b),i(t,P,r),z(Q,t,r),i(t,w,r),i(t,A,r),I(A,D),i(t,H,r),z(W,t,r),S=!0},p(t,[e]){const s={};1&e&&(s.activeItem=t[0]),k.$set(s),R!==(R=O(t))&&(q.d(1),q=R(t),q&&(q.c(),q.m(m,null)));const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),F.$set(a);const r={};16&e&&(r.$$scope={dirty:e,ctx:t}),Q.$set(r)},i(t){S||(f(k.$$.fragment,t),f(F.$$.fragment,t),f(Q.$$.fragment,t),f(W.$$.fragment,t),S=!0)},o(t){u(k.$$.fragment,t),u(F.$$.fragment,t),u(Q.$$.fragment,t),u(W.$$.fragment,t),S=!1},d(t){t&&l(e),t&&l(s),t&&l(h),t&&l(m),C(k),q.d(),t&&l(v),C(F,t),t&&l(p),t&&l(y),t&&l(P),C(Q,t),t&&l(w),t&&l(A),t&&l(H),C(W,t)}}}function W(t,e,s){let a="Bio";return[a,["Bio","Story","History"],t=>{s(0,a=t.detail)},{autoAlpha:0,x:"-=100",stagger:.3}]}export default class extends t{constructor(t){super(),e(this,t,W,Q,s,{})}}