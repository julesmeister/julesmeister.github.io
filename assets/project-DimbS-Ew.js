import{j as e,r as j}from"./jsx-runtime-DexIYAB0.js";import{c as i,a as l,n as u,H as x,T as _,B as N,b as k,m as I,t as b}from"./heading-ZPF0v02j.js";import{I as f}from"./image-CqMHUZOp.js";import{S as h}from"./meta-DNff5TqF.js";import{u as v}from"./useParallax-BwjgXEmq.js";const y="_project_1n18f_39",C="_section_1n18f_57",S="_sectionInner_1n18f_87",P="_sectionBackground_1n18f_177",B="_backgroundImage_1n18f_275",T="_backgroundImageElement_1n18f_313",w="_backgroundScrim_1n18f_351",H="_header_1n18f_383",R="_headerContent_1n18f_423",E="_details_1n18f_499",F="_title_1n18f_523",z="_projectFadeSlide_1n18f_1",D="_description_1n18f_543",M="_linkButton_1n18f_563",V="_meta_1n18f_583",$="_metaItem_1n18f_613",q="_image_1n18f_653",A="_sectionContent_1n18f_669",G="_sectionHeading_1n18f_715",J="_sectionText_1n18f_723",K="_textRow_1n18f_737",L="_sectionColumns_1n18f_849",t={project:y,section:C,sectionInner:S,sectionBackground:P,backgroundImage:B,backgroundImageElement:T,backgroundScrim:w,header:H,headerContent:R,details:E,title:F,projectFadeSlide:z,description:D,linkButton:M,meta:V,metaItem:$,image:q,sectionContent:A,sectionHeading:G,sectionText:J,textRow:K,sectionColumns:L},g=300;function Z({title:n,description:s,linkLabel:a="Visit website",url:o,roles:c,className:r}){return e.jsx(h,{className:i(t.header,r),as:"section",children:e.jsxs("div",{className:t.headerContent,style:l({initDelay:u(g)}),children:[e.jsxs("div",{className:t.details,children:[e.jsx(x,{className:t.title,level:2,as:"h1",children:n}),e.jsx(_,{className:t.description,size:"xl",as:"p",children:s}),!!o&&e.jsx(N,{secondary:!0,iconHoverShift:!0,className:t.linkButton,icon:"chevron-right",href:o,children:a})]}),!!(c!=null&&c.length)&&e.jsx("ul",{className:t.meta,children:c==null?void 0:c.map((d,m)=>e.jsx("li",{className:t.metaItem,style:l({delay:u(g+300+m*140)}),children:e.jsx(_,{secondary:!0,children:d})},d))})]})})}const ee=({className:n,...s})=>e.jsx("article",{className:i(t.project,n),...s}),te=j.forwardRef(({className:n,light:s,padding:a="both",fullHeight:o,backgroundOverlayOpacity:c=.9,backgroundElement:r,children:d,...m},p)=>e.jsxs("section",{className:i(t.section,n),"data-light":s,"data-full-height":o,ref:p,...m,children:[!!r&&e.jsx("div",{className:t.sectionBackground,style:l({opacity:c}),children:r}),e.jsx(h,{className:t.sectionInner,"data-padding":a,children:d})]})),ne=({opacity:n=.7,className:s,...a})=>{const o=j.useRef();return v(.6,c=>{o.current&&o.current.style.setProperty("--offset",`${c}px`)}),e.jsx(k,{in:!0,timeout:I(b.base.durationM),children:({visible:c,nodeRef:r})=>e.jsxs("div",{className:i(t.backgroundImage,s),"data-visible":c,ref:r,children:[e.jsx("div",{className:t.backgroundImageElement,ref:o,children:e.jsx(f,{cover:!0,alt:"",role:"presentation",...a})}),e.jsx("div",{className:t.backgroundScrim,style:l({opacity:n})})]})})},se=({className:n,alt:s,...a})=>e.jsx("div",{className:i(t.image,n),children:e.jsx(f,{reveal:!0,alt:s,delay:300,...a})}),O=({className:n,width:s="l",...a})=>e.jsx("div",{className:i(t.sectionContent,n),"data-width":s,...a}),ae=({className:n,level:s=3,as:a="h2",...o})=>e.jsx(x,{className:i(t.sectionHeading,n),as:a,level:s,align:"auto",...o}),ce=({className:n,...s})=>e.jsx(_,{className:i(t.sectionText,n),size:"l",as:"p",...s}),oe=({center:n,stretch:s,justify:a="center",width:o="m",noMargin:c,className:r,centerMobile:d,...m})=>e.jsx("div",{className:i(t.textRow,r),"data-center":n,"data-stretch":s,"data-center-mobile":d,"data-no-margin":c,"data-width":o,"data-justify":a,...m}),ie=({className:n,centered:s,...a})=>e.jsx(O,{className:i(t.sectionColumns,n),"data-centered":s,...a});export{ee as P,ne as a,Z as b,te as c,O as d,oe as e,ae as f,ce as g,se as h,ie as i};
