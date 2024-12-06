"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1516],{51516:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y,getPaginationUtilityClass:()=>l,paginationClasses:()=>p});var o=a(7552),r=a(93878),i=a(70799),s=a(33761),n=a(85693);function l(e){return(0,n.Ay)("MuiPagination",e)}const p=(0,s.A)("MuiPagination",["root","ul","outlined","text"]);var d=a(97609),c=a(35960),u=a(51148),v=a(4785),g=a(69500);const m=(0,u.Ay)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),b=(0,u.Ay)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function h(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}const y=o.forwardRef((function(e,t){const a=(0,v.b)({props:e,name:"MuiPagination"}),{boundaryCount:o=1,className:s,color:n="standard",count:p=1,defaultPage:u=1,disabled:y=!1,getItemAriaLabel:x=h,hideNextButton:A=!1,hidePrevButton:f=!1,onChange:$,page:C,renderItem:P=e=>(0,g.jsx)(c.A,{...e}),shape:w="circular",showFirstButton:z=!1,showLastButton:k=!1,siblingCount:M=1,size:R="medium",variant:O="text",...S}=a,{items:L}=function(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:o=1,defaultPage:r=1,disabled:i=!1,hideNextButton:s=!1,hidePrevButton:n=!1,onChange:l,page:p,showFirstButton:c=!1,showLastButton:u=!1,siblingCount:v=1,...g}=e,[m,b]=(0,d.A)({controlled:p,default:r,name:a,state:"page"}),h=(e,t)=>{p||b(t),l&&l(e,t)},y=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},x=y(1,Math.min(t,o)),A=y(Math.max(o-t+1,t+1),o),f=Math.max(Math.min(m-v,o-t-2*v-1),t+2),$=Math.min(Math.max(m+v,t+2*v+2),o-t-1),C=[...c?["first"]:[],...n?[]:["previous"],...x,...f>t+2?["start-ellipsis"]:t+1<o-t?[t+1]:[],...y(f,$),...$<o-t-1?["end-ellipsis"]:o-t>t?[o-t]:[],...A,...s?[]:["next"],...u?["last"]:[]],P=e=>{switch(e){case"first":return 1;case"previous":return m-1;case"next":return m+1;case"last":return o;default:return null}};return{items:C.map((e=>"number"==typeof e?{onClick:t=>{h(t,e)},type:"page",page:e,selected:e===m,disabled:i,"aria-current":e===m?"true":void 0}:{onClick:t=>{h(t,P(e))},type:e,page:P(e),selected:!1,disabled:i||!e.includes("ellipsis")&&("next"===e||"last"===e?m>=o:m<=1)})),...g}}({...a,componentName:"Pagination"}),N={...a,boundaryCount:o,color:n,count:p,defaultPage:u,disabled:y,getItemAriaLabel:x,hideNextButton:A,hidePrevButton:f,renderItem:P,shape:w,showFirstButton:z,showLastButton:k,siblingCount:M,size:R,variant:O},j=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,i.A)(o,l,t)})(N);return(0,g.jsx)(m,{"aria-label":"pagination navigation",className:(0,r.A)(j.root,s),ownerState:N,ref:t,...S,children:(0,g.jsx)(b,{className:j.ul,ownerState:N,children:L.map(((e,t)=>(0,g.jsx)("li",{children:P({...e,color:n,"aria-label":x(e.type,e.page,e.selected),shape:w,size:R,variant:O})},t)))})})}))},35960:(e,t,a)=>{a.d(t,{A:()=>z});var o=a(7552),r=a(93878),i=a(70799),s=a(963),n=a(23456),l=a(9547),p=a(48054),d=a(15622),c=a(58520),u=a(30627),v=a(27103),g=a(74893),m=a(69500);const b=(0,g.A)((0,m.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),h=(0,g.A)((0,m.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var y=a(43045),x=a(51148),A=a(84893),f=a(4785);const $=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,d.A)(a.size)}`],"text"===a.variant&&t[`text${(0,d.A)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,d.A)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},C=(0,x.Ay)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:$})((0,A.A)((({theme:e})=>({...e.typography.body2,borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${l.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:{size:"small"},style:{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}}]})))),P=(0,x.Ay)(p.A,{name:"MuiPaginationItem",slot:"Root",overridesResolver:$})((0,A.A)((({theme:e})=>({...e.typography.body2,borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${l.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${l.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.A.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.X4)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${l.A.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.X4)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${l.A.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}},variants:[{props:{size:"small"},style:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}},{props:{shape:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"outlined"},style:{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${l.A.selected}`]:{[`&.${l.A.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}}}},{props:{variant:"text"},style:{[`&.${l.A.selected}`]:{[`&.${l.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}}},...Object.entries(e.palette).filter((0,c.A)(["dark","contrastText"])).map((([t])=>({props:{variant:"text",color:t},style:{[`&.${l.A.selected}`]:{color:(e.vars||e).palette[t].contrastText,backgroundColor:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:(e.vars||e).palette[t].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t].main}},[`&.${l.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t].dark},[`&.${l.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}}}))),...Object.entries(e.palette).filter((0,c.A)(["light"])).map((([t])=>({props:{variant:"outlined",color:t},style:{[`&.${l.A.selected}`]:{color:(e.vars||e).palette[t].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.5)`:(0,s.X4)(e.palette[t].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.X4)(e.palette[t].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.A.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.X4)(e.palette[t].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}}}})))]})))),w=(0,x.Ay)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((0,A.A)((({theme:e})=>({fontSize:e.typography.pxToRem(20),margin:"0 -8px",variants:[{props:{size:"small"},style:{fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:e.typography.pxToRem(22)}}]})))),z=o.forwardRef((function(e,t){const a=(0,f.b)({props:e,name:"MuiPaginationItem"}),{className:o,color:s="standard",component:p,components:c={},disabled:g=!1,page:x,selected:A=!1,shape:$="circular",size:z="medium",slots:k={},slotProps:M={},type:R="page",variant:O="text",...S}=a,L={...a,color:s,disabled:g,selected:A,shape:$,size:z,type:R,variant:O},N=(0,n.I)(),j=(e=>{const{classes:t,color:a,disabled:o,selected:r,size:s,shape:n,type:p,variant:c}=e,u={root:["root",`size${(0,d.A)(s)}`,c,n,"standard"!==a&&`color${(0,d.A)(a)}`,"standard"!==a&&`${c}${(0,d.A)(a)}`,o&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[p]],icon:["icon"]};return(0,i.A)(u,l.q,t)})(L),B={slots:{previous:k.previous??c.previous,next:k.next??c.next,first:k.first??c.first,last:k.last??c.last},slotProps:M},[I,T]=(0,y.A)("previous",{elementType:b,externalForwardedProps:B,ownerState:L}),[F,W]=(0,y.A)("next",{elementType:h,externalForwardedProps:B,ownerState:L}),[X,V]=(0,y.A)("first",{elementType:u.A,externalForwardedProps:B,ownerState:L}),[_,q]=(0,y.A)("last",{elementType:v.A,externalForwardedProps:B,ownerState:L}),G=N?{previous:"next",next:"previous",first:"last",last:"first"}[R]:R,U={previous:I,next:F,first:X,last:_}[G],H={previous:T,next:W,first:V,last:q}[G];return"start-ellipsis"===R||"end-ellipsis"===R?(0,m.jsx)(C,{ref:t,ownerState:L,className:(0,r.A)(j.root,o),children:"…"}):(0,m.jsxs)(P,{ref:t,ownerState:L,component:p,disabled:g,className:(0,r.A)(j.root,o),...S,children:["page"===R&&x,U?(0,m.jsx)(w,{...H,className:j.icon,as:U}):null]})}))},9547:(e,t,a)=>{a.d(t,{A:()=>s,q:()=>i});var o=a(33761),r=a(85693);function i(e){return(0,r.Ay)("MuiPaginationItem",e)}const s=(0,o.A)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"])},30627:(e,t,a)=>{a.d(t,{A:()=>i}),a(7552);var o=a(74893),r=a(69500);const i=(0,o.A)((0,r.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},27103:(e,t,a)=>{a.d(t,{A:()=>i}),a(7552);var o=a(74893),r=a(69500);const i=(0,o.A)((0,r.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=1516.8919cfe7.chunk.js.map