import{s as u,e as m,t as b,c as l,b as d,d as g,f as c,i as f,j as _,k as h,n as p,o as v}from"../chunks/scheduler.Cp9sLtax.js";import{S as $,i as x}from"../chunks/index.0VHYdkE8.js";import{s as E}from"../chunks/entry.BMKaQjCk.js";const S=()=>{const e=E;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},y={subscribe(e){return S().page.subscribe(e)}};function j(e){var n;let s,t=((n=e[0].error)==null?void 0:n.message)+"",r;return{c(){s=m("h1"),r=b(t)},l(a){s=l(a,"H1",{});var o=d(s);r=g(o,t),o.forEach(c)},m(a,o){f(a,s,o),_(s,r)},p(a,[o]){var i;o&1&&t!==(t=((i=a[0].error)==null?void 0:i.message)+"")&&h(r,t)},i:p,o:p,d(a){a&&c(s)}}}function k(e,s,t){let r;return v(e,y,n=>t(0,r=n)),[r]}let w=class extends ${constructor(s){super(),x(this,s,k,j,u,{})}};export{w as component};
