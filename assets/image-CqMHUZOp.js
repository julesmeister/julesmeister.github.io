import{r,j as f}from"./jsx-runtime-DexIYAB0.js";import{c as R,g as N,t as L,h as C,a as P,n as E,u as q,B as Q,I as J}from"./heading-ZPF0v02j.js";const X="/julesmeister.github.io/assets/gotham-bold-italic-C_msAlmW.woff2",Y="/julesmeister.github.io/assets/gotham-bold-D1kvQ7KV.woff2",Z="/julesmeister.github.io/assets/gotham-book-italic-Bm2IEtSK.woff2",ee="/julesmeister.github.io/assets/gotham-book-Bnaws0Ef.woff2",te="/julesmeister.github.io/assets/gotham-medium-italic-Dok430ou.woff2",oe="/julesmeister.github.io/assets/gotham-medium-0VT3RO8I.woff2",se="/julesmeister.github.io/assets/ipa-gothic-DimHCOud.woff2",z=r.createContext({}),Se=({theme:e="dark",children:t,className:n,as:s="div",toggleTheme:i,...a})=>{const o=W(),c=!o.theme;return f.jsxs(z.Provider,{value:{theme:e,toggleTheme:i||o.toggleTheme},children:[c&&t,!c&&f.jsx(s,{className:R(n),"data-theme":e,...a,children:t})]})};function W(){return r.useContext(z)}function y(e){return e.replace(/\s\s+/g," ")}function x(e){return y(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function ae(){return y(Object.keys(N).map(e=>`
        @media (max-width: ${N[e]}px) {
          :root {
            ${x(L[e])}
          }
        }
      `).join(`
`))}const ne=y(`
  @layer theme, base, components, layout;
`),re=y(`
  :root {
    ${x(L.base)}
  }

  ${ae()}

  [data-theme='dark'] {
    ${x(C.dark)}
  }

  [data-theme='light'] {
    ${x(C.light)}
  }
`),ce=y(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${ee}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${Z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${oe}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${te}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${X}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${se}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),Ie=y(`
  ${ne}

  @layer theme {
    ${re}
    ${ce}
  }
`);function ie(){const[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}function le(e,t,n={},s=!0){const[i,a]=r.useState(!1),[o,c]=r.useState(!1);return r.useEffect(()=>{if(!(e!=null&&e.current))return;const l=new IntersectionObserver(([u])=>{const{isIntersecting:m,target:h}=u;a(m),m&&t&&(l.unobserve(h),c(!0))},n);return!o&&s&&l.observe(e.current),()=>l.disconnect()},[e,t,n,o,s]),i}async function fe({src:e,srcSet:t,sizes:n}){return new Promise((s,i)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let a=new Image;e&&(a.src=e),t&&(a.srcset=t),n&&(a.sizes=n);const o=()=>{a.removeEventListener("load",o);const c=a.currentSrc;a=null,s(c)};a.addEventListener("load",o)}catch(a){i(`Error loading ${t}: ${a}`)}})}async function ue(e=1,t=1){return new Promise(n=>{const s=document.createElement("canvas"),i=s.getContext("2d");s.width=e,s.height=t,i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,e,t),s.toBlob(async a=>{if(!a)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(a);s.remove(),n(o)})})}async function me({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async o=>{const[c,l]=o.split(" "),u=Number(l.replace("w","")),m=await ue(u);return{src:c,image:m,width:l}})),s=n.map(({image:o,width:c})=>`${o} ${c}`).join(", "),i=await fe({srcSet:s,sizes:t});return n.find(o=>o.image===i).src}const de="_image_1yz75_3",he="_container_1yz75_83",ge="_elementWrapper_1yz75_97",ye="_placeholder_1yz75_141",pe="_element_1yz75_97",we="_button_1yz75_207",g={image:de,container:he,elementWrapper:ge,placeholder:ye,element:pe,button:we},$e=({className:e,style:t,reveal:n,delay:s=0,raised:i,src:a,srcSet:o,placeholder:c,...l})=>{const[u,m]=r.useState(!1),{theme:h}=W(),p=r.useRef(),w=a||o.split(" ")[0],j=le(p,!D(w)),b=r.useCallback(()=>{m(!0)},[]);return f.jsx("div",{className:R(g.image,e),"data-visible":j||u,"data-reveal":n,"data-raised":i,"data-theme":h,style:P({delay:E(s)},t),ref:p,children:f.jsx(be,{delay:s,onLoad:b,loaded:u,inViewport:j,reveal:n,src:w,srcSet:o,placeholder:c,...l})})},be=({onLoad:e,loaded:t,inViewport:n,srcSet:s,placeholder:i,delay:a,src:o,alt:c,play:l=!0,restartOnPause:u,reveal:m,sizes:h,width:p,height:w,noPauseButton:j,cover:b,...G})=>{const S=q(),[F,U]=r.useState(!0),[T,I]=r.useState(!S),[_,V]=r.useState(),[B,A]=r.useState(!1),O=r.useRef(),d=r.useRef(),v=D(o),M=n,H=ie();r.useEffect(()=>{v&&s?(async()=>{const k=await me({srcSet:s,sizes:h});V(k)})():v&&V(o)},[v,h,o,s]),r.useEffect(()=>{if(!d.current||!_)return;const $=()=>{I(!0),d.current.play()},k=()=>{I(!1),d.current.pause()};l||(k(),u&&(d.current.currentTime=0)),!B&&(n?n&&!S&&l&&$():k())},[n,l,S,u,B,_]);const K=$=>{$.preventDefault(),A(!0),d.current.paused?(I(!0),d.current.play()):(I(!1),d.current.pause())};return f.jsxs("div",{className:g.elementWrapper,"data-reveal":m,"data-visible":n||t,style:P({delay:E(a+1e3)}),children:[v&&H&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:g.element,"data-loaded":t,"data-cover":b,autoPlay:!S,onLoadStart:e,src:_,"aria-label":c,ref:d,...G}),!j&&f.jsxs(Q,{className:g.button,onClick:K,children:[f.jsx(J,{icon:T?"pause":"play"}),T?"Pause":"Play"]})]}),!v&&f.jsx("img",{className:g.element,"data-loaded":t,"data-cover":b,onLoad:e,decoding:"async",src:M?o:void 0,srcSet:M?s:void 0,width:p,height:w,alt:c,sizes:h,...G}),F&&f.jsx("img",{"aria-hidden":!0,className:g.placeholder,"data-loaded":t,"data-cover":b,style:P({delay:E(a)}),ref:O,src:i,width:p,height:w,onTransitionEnd:()=>U(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function D(e){return typeof e=="string"&&e.includes(".mp4")}export{oe as G,$e as I,Se as T,W as a,ee as b,me as r,Ie as t,le as u};
