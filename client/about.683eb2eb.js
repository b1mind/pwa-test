import{S as t,i as e,s,K as a,e as r,c as n,a as l,d as c,f as o,g as i,L as h,u as f,v as u,J as m,C as $,B as v,M as p,h as g,n as d,k as E,t as x,o as I,b as y,E as b,l as w,j as P,N as A,O as D,m as H,q as V,p as B,r as j,w as z}from"./client.99604f31.js";function C(t){let e,s;const m=t[3].default,$=a(m,t,t[2],null);return{c(){e=r("div"),$&&$.c(),this.h()},l(t){e=n(t,"DIV",{class:!0,animation:!0});var s=l(e);$&&$.l(s),s.forEach(c),this.h()},h(){o(e,"class","triggered svelte-15wlzz0"),o(e,"animation",t[0])},m(a,r){i(a,e,r),$&&$.m(e,null),t[4](e),s=!0},p(t,[a]){$&&$.p&&4&a&&h($,m,t,t[2],a,null,null),(!s||1&a)&&o(e,"animation",t[0])},i(t){s||(f($,t),s=!0)},o(t){u($,t),s=!1},d(s){s&&c(e),$&&$.d(s),t[4](null)}}}function S(t,e,s){let a,{animation:r={autoAlpha:0,x:"+=100",stagger:.3}}=e;m(()=>{let t=$.create({trigger:a,pin:!0,scrub:!0,animation:v.from(a.children,{...r}),start:"center center",toggleActions:"play none none reverse"});return()=>{console.log($.getAll()),t.kill()}});let{$$slots:n={},$$scope:l}=e;return t.$set=t=>{"animation"in t&&s(0,r=t.animation),"$$scope"in t&&s(2,l=t.$$scope)},[r,a,l,n,function(t){p[t?"unshift":"push"](()=>{s(1,a=t)})}]}class T extends t{constructor(t){super(),e(this,t,S,C,s,{animation:0})}}function k(t){let e,s,a,h;return{c(){e=r("header"),s=r("h1"),a=r("img"),this.h()},l(t){e=n(t,"HEADER",{});var r=l(e);s=n(r,"H1",{class:!0});var o=l(s);a=n(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(c),r.forEach(c),this.h()},h(){a.src!==(h="images/svelte.png")&&o(a,"src","images/svelte.png"),o(a,"alt","logo"),o(a,"class","svelte-1xbat5n"),o(s,"class","svelte-1xbat5n")},m(t,r){i(t,e,r),g(e,s),g(s,a)},p:d,i:d,o:d,d(t){t&&c(e)}}}class L extends t{constructor(t){super(),e(this,t,null,k,s,{})}}function O(t){let e,s,a,h,f;return{c(){e=r("hr"),s=E(),a=r("footer"),h=r("div"),f=x("Copyright 2020"),this.h()},l(t){e=n(t,"HR",{}),s=I(t),a=n(t,"FOOTER",{class:!0});var r=l(a);h=n(r,"DIV",{class:!0});var o=l(h);f=y(o,"Copyright 2020"),o.forEach(c),r.forEach(c),this.h()},h(){o(h,"class","copyright"),o(a,"class","svelte-tjjwyp")},m(t,r){i(t,e,r),i(t,s,r),i(t,a,r),g(a,h),g(h,f)},p:d,i:d,o:d,d(t){t&&c(e),t&&c(s),t&&c(a)}}}class R extends t{constructor(t){super(),e(this,t,null,O,s,{})}}function M(t,e,s){const a=t.slice();return a[4]=e[s],a}function q(t){let e,s,a,h,f,u,m=t[4]+"";function $(...e){return t[3](t[4],...e)}return{c(){e=r("li"),s=r("div"),a=x(m),h=E(),this.h()},l(t){e=n(t,"LI",{class:!0});var r=l(e);s=n(r,"DIV",{class:!0});var o=l(s);a=y(o,m),o.forEach(c),h=I(r),r.forEach(c),this.h()},h(){o(s,"class","svelte-13rlnl7"),b(s,"active",t[4]===t[1]),o(e,"class","svelte-13rlnl7")},m(t,r){i(t,e,r),g(e,s),g(s,a),g(e,h),f||(u=w(e,"click",$),f=!0)},p(e,r){t=e,1&r&&m!==(m=t[4]+"")&&P(a,m),3&r&&b(s,"active",t[4]===t[1])},d(t){t&&c(e),f=!1,u()}}}function F(t){let e,s,a=t[0],h=[];for(let e=0;e<a.length;e+=1)h[e]=q(M(t,a,e));return{c(){e=r("div"),s=r("ul");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){e=n(t,"DIV",{class:!0});var a=l(e);s=n(a,"UL",{class:!0});var r=l(s);for(let t=0;t<h.length;t+=1)h[t].l(r);r.forEach(c),a.forEach(c),this.h()},h(){o(s,"class","svelte-13rlnl7"),o(e,"class","tabs svelte-13rlnl7")},m(t,a){i(t,e,a),g(e,s);for(let t=0;t<h.length;t+=1)h[t].m(s,null)},p(t,[e]){if(7&e){let r;for(a=t[0],r=0;r<a.length;r+=1){const n=M(t,a,r);h[r]?h[r].p(n,e):(h[r]=q(n),h[r].c(),h[r].m(s,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=a.length}},i:d,o:d,d(t){t&&c(e),A(h,t)}}}function G(t,e,s){let a=D(),{items:r}=e,{activeItem:n}=e;return t.$set=t=>{"items"in t&&s(0,r=t.items),"activeItem"in t&&s(1,n=t.activeItem)},[r,n,a,t=>a("tabChange",t)]}class J extends t{constructor(t){super(),e(this,t,G,F,s,{items:0,activeItem:1})}}function K(t){let e,s;return{c(){e=r("p"),s=x("History of svelte")},l(t){e=n(t,"P",{});var a=l(e);s=y(a,"History of svelte"),a.forEach(c)},m(t,a){i(t,e,a),g(e,s)},d(t){t&&c(e)}}}function N(t){let e,s,a,h,f;return{c(){e=r("p"),s=x("Bio"),a=E(),h=r("a"),f=x("test"),this.h()},l(t){e=n(t,"P",{});var r=l(e);s=y(r,"Bio"),r.forEach(c),a=I(t),h=n(t,"A",{href:!0});var o=l(h);f=y(o,"test"),o.forEach(c),this.h()},h(){o(h,"href","projects#anchor")},m(t,r){i(t,e,r),g(e,s),i(t,a,r),i(t,h,r),g(h,f)},d(t){t&&c(e),t&&c(a),t&&c(h)}}}function U(t){let e,s;return{c(){e=r("p"),s=x("This is the 'about' page. There's not much here.")},l(t){e=n(t,"P",{});var a=l(e);s=y(a,"This is the 'about' page. There's not much here."),a.forEach(c)},m(t,a){i(t,e,a),g(e,s)},d(t){t&&c(e)}}}function Q(t){let e,s,a,o,h,f,u,m;return{c(){e=r("p"),s=x("test"),a=E(),o=r("p"),h=x("test"),f=E(),u=r("p"),m=x("test")},l(t){e=n(t,"P",{});var r=l(e);s=y(r,"test"),r.forEach(c),a=I(t),o=n(t,"P",{});var i=l(o);h=y(i,"test"),i.forEach(c),f=I(t),u=n(t,"P",{});var $=l(u);m=y($,"test"),$.forEach(c)},m(t,r){i(t,e,r),g(e,s),i(t,a,r),i(t,o,r),g(o,h),i(t,f,r),i(t,u,r),g(u,m)},d(t){t&&c(e),t&&c(a),t&&c(o),t&&c(f),t&&c(u)}}}function W(t){let e,s,a,o,h,f,u,m;return{c(){e=r("p"),s=x("test"),a=E(),o=r("p"),h=x("test"),f=E(),u=r("p"),m=x("test")},l(t){e=n(t,"P",{});var r=l(e);s=y(r,"test"),r.forEach(c),a=I(t),o=n(t,"P",{});var i=l(o);h=y(i,"test"),i.forEach(c),f=I(t),u=n(t,"P",{});var $=l(u);m=y($,"test"),$.forEach(c)},m(t,r){i(t,e,r),g(e,s),i(t,a,r),i(t,o,r),g(o,h),i(t,f,r),i(t,u,r),g(u,m)},d(t){t&&c(e),t&&c(a),t&&c(o),t&&c(f),t&&c(u)}}}function X(t){let e,s,a,h,m,$,v,p,d,b,w,P,A,D,C,S,k;const O=new L({}),M=new J({props:{activeItem:t[0],items:t[1]}});function q(t,e){return"Bio"===t[0]?U:"Story"===t[0]?N:K}M.$on("tabChange",t[2]);let F=q(t),G=F(t);const X=new T({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),Y=new T({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),Z=new R({});return{c(){e=E(),H(O.$$.fragment),s=E(),a=r("h1"),h=x("About Svelte"),m=E(),$=r("div"),H(M.$$.fragment),v=E(),G.c(),p=E(),H(X.$$.fragment),d=E(),b=r("div"),w=x("test"),P=E(),H(Y.$$.fragment),A=E(),D=r("div"),C=x("test"),S=E(),H(Z.$$.fragment),this.h()},l(t){V('[data-svelte="svelte-1myew8g"]',document.head).forEach(c),e=I(t),B(O.$$.fragment,t),s=I(t),a=n(t,"H1",{});var r=l(a);h=y(r,"About Svelte"),r.forEach(c),m=I(t),$=n(t,"DIV",{class:!0});var o=l($);B(M.$$.fragment,o),v=I(o),G.l(o),o.forEach(c),p=I(t),B(X.$$.fragment,t),d=I(t),b=n(t,"DIV",{class:!0});var i=l(b);w=y(i,"test"),i.forEach(c),P=I(t),B(Y.$$.fragment,t),A=I(t),D=n(t,"DIV",{class:!0});var f=l(D);C=y(f,"test"),f.forEach(c),S=I(t),B(Z.$$.fragment,t),this.h()},h(){document.title="About",o($,"class","spacer svelte-x4hzh2"),o(b,"class","spacer svelte-x4hzh2"),o(D,"class","spacer svelte-x4hzh2")},m(t,r){i(t,e,r),j(O,t,r),i(t,s,r),i(t,a,r),g(a,h),i(t,m,r),i(t,$,r),j(M,$,null),g($,v),G.m($,null),i(t,p,r),j(X,t,r),i(t,d,r),i(t,b,r),g(b,w),i(t,P,r),j(Y,t,r),i(t,A,r),i(t,D,r),g(D,C),i(t,S,r),j(Z,t,r),k=!0},p(t,[e]){const s={};1&e&&(s.activeItem=t[0]),M.$set(s),F!==(F=q(t))&&(G.d(1),G=F(t),G&&(G.c(),G.m($,null)));const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),X.$set(a);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),Y.$set(r)},i(t){k||(f(O.$$.fragment,t),f(M.$$.fragment,t),f(X.$$.fragment,t),f(Y.$$.fragment,t),f(Z.$$.fragment,t),k=!0)},o(t){u(O.$$.fragment,t),u(M.$$.fragment,t),u(X.$$.fragment,t),u(Y.$$.fragment,t),u(Z.$$.fragment,t),k=!1},d(t){t&&c(e),z(O,t),t&&c(s),t&&c(a),t&&c(m),t&&c($),z(M),G.d(),t&&c(p),z(X,t),t&&c(d),t&&c(b),t&&c(P),z(Y,t),t&&c(A),t&&c(D),t&&c(S),z(Z,t)}}}function Y(t,e,s){let a="Bio";return[a,["Bio","Story","History"],t=>{s(0,a=t.detail)}]}export default class extends t{constructor(t){super(),e(this,t,Y,X,s,{})}}