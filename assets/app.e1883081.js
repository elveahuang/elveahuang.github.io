import{o as l,b as d,w as f,l as i,k as p,a as m,t as h,s as r,Z as _,$ as g,a0 as y,a1 as A,a2 as v,a3 as C,a4 as w,a5 as P,a6 as b,a7 as D,a8 as E,d as R,u as x,j as L,y as T,a9 as S,aa as V,ab as j,ac as k}from"./chunks/framework.5ae544db.js";import{t as u}from"./chunks/theme.f7cb23ae.js";const B={id:"site-home-footer",class:"site-home-footer"},F=p("a",{target:"_blank",href:"https://beian.miit.gov.cn"},"粤ICP备19026479号",-1),O={__name:"CustomLayout",setup(e){const{Layout:t}=u,a=new Date().getFullYear();return(n,s)=>(l(),d(i(t),null,{"home-footer":f(()=>[p("div",B,[m(" Copyright©"+h(i(a))+" Elvea Huang | ",1),F])]),_:1}))}};const $={...u,Layout:O};function c(e){if(e.extends){const t=c(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=c($),I=R({name:"VitePressApp",setup(){const{site:e}=x();return L(()=>{T(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),S(),V(),j(),o.setup&&o.setup(),()=>k(o.Layout)}});async function N(){const e=M(),t=H();t.provide(g,e);const a=y(e.route);return t.provide(A,a),t.component("Content",v),t.component("ClientOnly",C),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:w}),{app:t,router:e,data:a}}function H(){return P(I)}function M(){let e=r,t;return b(a=>{let n=D(a),s=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s=E(()=>import(n),[])),r&&(e=!1),s},o.NotFound)}r&&N().then(({app:e,router:t,data:a})=>{t.go().then(()=>{_(t.route,a.site),e.mount("#app")})});export{N as createApp};