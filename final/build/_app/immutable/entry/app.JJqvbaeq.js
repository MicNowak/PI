function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.DQ4H5uNu.js","../chunks/scheduler.DUwrI8RN.js","../chunks/index.CIuw_RT8.js","../chunks/index.8tZLYcRs.js","../chunks/ProgressBar.svelte_svelte_type_style_lang.CDwHlQwl.js","../assets/ProgressBar.Cirlo5Z8.css","../assets/0.Bj2tJMV_.css","../nodes/1.B4iWz8Wb.js","../chunks/entry.DiJpwfkO.js","../nodes/2.DrRB5vCJ.js","../chunks/spread.CN4WR7uZ.js","../nodes/3.BL9nvQZx.js","../chunks/each.D6YF6ztN.js","../nodes/4.Cm2hlA_f.js","../nodes/5.BQXmMr3P.js","../assets/5.R-6W4HF6.css","../nodes/6.DGCHd7eE.js","../assets/6.MZe7Z1QG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as q,a as B,I as h,b as U,i as E,f as p,J as G,K as J,e as K,c as W,d as j,h as D,L as d,t as z,k as F,m as H,G as O,M as y,N as Q}from"../chunks/scheduler.DUwrI8RN.js";import{S as X,i as Y,a as g,c as A,t as w,g as I,b as R,d as T,m as L,e as P}from"../chunks/index.CIuw_RT8.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},k=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const v=_[b];if(v.href===o&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Z,c||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),c)return new Promise((b,v)=>{u.addEventListener("load",b),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},re={};function $(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=y(s,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&L(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){I();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=y(s,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=y(s,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&L(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){I();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=y(s,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function _(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=y(s,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,r){e&&L(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){I();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),A()}s?(e=y(s,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[10](null),e&&P(e,t)}}}function S(a){let e,n=a[6]&&N(a);return{c(){e=K("div"),n&&n.c(),this.h()},l(i){e=W(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=j(e);n&&n.l(s),s.forEach(p),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){E(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=N(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&p(e),n&&n.d()}}}function N(a){let e;return{c(){e=z(a[7])},l(n){e=F(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&H(e,n[7])},d(n){n&&p(e)}}}function te(a){let e,n,i,s,_;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let c=a[5]&&S(a);return{c(){n.c(),i=B(),c&&c.c(),s=h()},l(l){n.l(l),i=U(l),c&&c.l(l),s=h()},m(l,m){r[e].m(l,m),E(l,i,m),c&&c.m(l,m),E(l,s,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?r[e].p(l,m):(I(),g(r[u],1,1,()=>{r[u]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=S(l),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(p(i),p(s)),r[e].d(l),c&&c.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:c=null}=e;G(i.page.notify);let l=!1,m=!1,u=null;J(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),f});function b(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function v(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,o=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,_,r,o,c,l,m,u,i,s,b,v,C]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.DQ4H5uNu.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>k(()=>import("../nodes/1.B4iWz8Wb.js"),__vite__mapDeps([7,1,2,8,3]),import.meta.url),()=>k(()=>import("../nodes/2.DrRB5vCJ.js"),__vite__mapDeps([9,1,2,4,3,5,10]),import.meta.url),()=>k(()=>import("../nodes/3.BL9nvQZx.js"),__vite__mapDeps([11,1,12,2]),import.meta.url),()=>k(()=>import("../nodes/4.Cm2hlA_f.js"),__vite__mapDeps([13,1,2]),import.meta.url),()=>k(()=>import("../nodes/5.BQXmMr3P.js"),__vite__mapDeps([14,1,2,15]),import.meta.url),()=>k(()=>import("../nodes/6.DGCHd7eE.js"),__vite__mapDeps([16,1,2,12,4,3,5,10,17]),import.meta.url)],le=[],ce={"/":[2],"/about":[3],"/hello-world":[4],"/html-css":[5],"/tic-tac-toe":[6]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,fe as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};