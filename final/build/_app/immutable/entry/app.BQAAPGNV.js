function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.D11PBSgP.js","../chunks/scheduler.Cp9sLtax.js","../chunks/index.0VHYdkE8.js","../chunks/lang.gUgOMxDf.js","../chunks/index.DhuhVkSG.js","../chunks/each.D6YF6ztN.js","../chunks/ProgressBar.svelte_svelte_type_style_lang.CK6d7DMI.js","../assets/ProgressBar.Cirlo5Z8.css","../assets/0.JHrSiExO.css","../nodes/1.CdWncJEd.js","../chunks/entry.Cpwbb3QO.js","../nodes/2.CPa8nsDZ.js","../nodes/3.EpzZv5zy.js","../nodes/4.BXA2S08n.js","../nodes/5.BaY0INXr.js","../nodes/6.DOMyKY0J.js","../nodes/7.CCGfME3N.js","../assets/7.R-6W4HF6.css","../nodes/8.CI3C8gqo.js","../assets/8.MZe7Z1QG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as N,a as j,p as h,g as B,i as v,f as g,q as U,r as W,e as z,c as F,b as G,h as I,u as p,t as H,d as J,k as K,v as O,w as R,x as Q}from"../chunks/scheduler.Cp9sLtax.js";import{S as X,i as Y,t as w,c as A,a as b,g as D,b as P,d as T,m as y,e as L}from"../chunks/index.0VHYdkE8.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},d=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const k=_[E];if(k.href===o&&(!c||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Z,c||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=R(r,_(t)),t[12](e),P(e.$$.fragment),b(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=R(r,_(t)),t[11](e),P(e.$$.fragment),b(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=R(r,_(t)),t[10](e),P(e.$$.fragment),b(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&b(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&q(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=G(e);n&&n.l(r),r.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function q(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let c=a[5]&&S(a);return{c(){n.c(),i=j(),c&&c.c(),r=h()},l(l){n.l(l),i=B(l),c&&c.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),c&&c.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(D(),w(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),b(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=S(l),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(l){_||(b(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(g(i),g(r)),s[e].d(l),c&&c.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:c=null}=e;U(i.page.notify);let l=!1,m=!1,u=null;W(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),f});function E(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function k(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,o=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,c,l,m,u,i,r,E,k,C]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>d(()=>import("../nodes/0.D11PBSgP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>d(()=>import("../nodes/1.CdWncJEd.js"),__vite__mapDeps([9,1,2,10,4]),import.meta.url),()=>d(()=>import("../nodes/2.CPa8nsDZ.js"),__vite__mapDeps([11,1,5,2,3,4]),import.meta.url),()=>d(()=>import("../nodes/3.EpzZv5zy.js"),__vite__mapDeps([12,1,5,2,3,4]),import.meta.url),()=>d(()=>import("../nodes/4.BXA2S08n.js"),__vite__mapDeps([13,1,2]),import.meta.url),()=>d(()=>import("../nodes/5.BaY0INXr.js"),__vite__mapDeps([14,1,2]),import.meta.url),()=>d(()=>import("../nodes/6.DOMyKY0J.js"),__vite__mapDeps([15,1,2]),import.meta.url),()=>d(()=>import("../nodes/7.CCGfME3N.js"),__vite__mapDeps([16,1,2,17]),import.meta.url),()=>d(()=>import("../nodes/8.CI3C8gqo.js"),__vite__mapDeps([18,1,2,5,6,4,7,19]),import.meta.url)],le=[],ce={"/":[2],"/about":[3],"/blog":[4],"/blog/1":[5],"/projects/hello-world":[6],"/projects/html-css":[7],"/projects/tic-tac-toe":[8]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,fe as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};