import{j as u}from"./jsx-runtime-CfatFE5O.js";import{r as a,R as W}from"./index-ClcD9ViR.js";import{c as z,a as C,b as J}from"./index-D-jls2fw.js";import{u as H,a as Q}from"./index-ClVxAquS.js";import{D as Z}from"./index-8isb7LcM.js";import{u as ee}from"./index-ZVc5Krty.js";import{c as I,A as te,C as oe,a as re,R as ne}from"./index-a6sp4N9A.js";import{P as ae}from"./index-B7xKYiWN.js";import{P as S}from"./index-CkP846ZC.js";import{P as se}from"./index-DDVkbYHz.js";import{R as ie}from"./index-DXJoflK3.js";import{c as le}from"./cx-CYgzbKIn.js";var[_,Ge]=z("Tooltip",[I]),A=I(),F="TooltipProvider",ce=700,j="tooltip.open",[ue,k]=_(F),q=t=>{const{__scopeTooltip:o,delayDuration:e=ce,skipDelayDuration:r=300,disableHoverableContent:n=!1,children:i}=t,[c,f]=a.useState(!0),s=a.useRef(!1),d=a.useRef(0);return a.useEffect(()=>{const l=d.current;return()=>window.clearTimeout(l)},[]),u.jsx(ue,{scope:o,isOpenDelayed:c,delayDuration:e,onOpen:a.useCallback(()=>{window.clearTimeout(d.current),f(!1)},[]),onClose:a.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>f(!0),r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:a.useCallback(l=>{s.current=l},[]),disableHoverableContent:n,children:i})};q.displayName=F;var D="Tooltip",[de,R]=_(D),G=t=>{const{__scopeTooltip:o,children:e,open:r,defaultOpen:n=!1,onOpenChange:i,disableHoverableContent:c,delayDuration:f}=t,s=k(D,t.__scopeTooltip),d=A(o),[l,p]=a.useState(null),v=ee(),m=a.useRef(0),h=c??s.disableHoverableContent,T=f??s.delayDuration,x=a.useRef(!1),[g=!1,y]=J({prop:r,defaultProp:n,onChange:N=>{N?(s.onOpen(),document.dispatchEvent(new CustomEvent(j))):s.onClose(),i==null||i(N)}}),b=a.useMemo(()=>g?x.current?"delayed-open":"instant-open":"closed",[g]),E=a.useCallback(()=>{window.clearTimeout(m.current),x.current=!1,y(!0)},[y]),P=a.useCallback(()=>{window.clearTimeout(m.current),y(!1)},[y]),M=a.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{x.current=!0,y(!0)},T)},[T,y]);return a.useEffect(()=>()=>window.clearTimeout(m.current),[]),u.jsx(ne,{...d,children:u.jsx(de,{scope:o,contentId:v,open:g,stateAttribute:b,trigger:l,onTriggerChange:p,onTriggerEnter:a.useCallback(()=>{s.isOpenDelayed?M():E()},[s.isOpenDelayed,M,E]),onTriggerLeave:a.useCallback(()=>{h?P():window.clearTimeout(m.current)},[P,h]),onOpen:E,onClose:P,disableHoverableContent:h,children:e})})};G.displayName=D;var O="TooltipTrigger",B=a.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,n=R(O,e),i=k(O,e),c=A(e),f=a.useRef(null),s=H(o,f,n.onTriggerChange),d=a.useRef(!1),l=a.useRef(!1),p=a.useCallback(()=>d.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),u.jsx(te,{asChild:!0,...c,children:u.jsx(se.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...r,ref:s,onPointerMove:C(t.onPointerMove,v=>{v.pointerType!=="touch"&&!l.current&&!i.isPointerInTransitRef.current&&(n.onTriggerEnter(),l.current=!0)}),onPointerLeave:C(t.onPointerLeave,()=>{n.onTriggerLeave(),l.current=!1}),onPointerDown:C(t.onPointerDown,()=>{d.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:C(t.onFocus,()=>{d.current||n.onOpen()}),onBlur:C(t.onBlur,n.onClose),onClick:C(t.onClick,n.onClose)})})});B.displayName=O;var L="TooltipPortal",[pe,fe]=_(L,{forceMount:void 0}),V=t=>{const{__scopeTooltip:o,forceMount:e,children:r,container:n}=t,i=R(L,o);return u.jsx(pe,{scope:o,forceMount:e,children:u.jsx(S,{present:e||i.open,children:u.jsx(ae,{asChild:!0,container:n,children:r})})})};V.displayName=L;var w="TooltipContent",U=a.forwardRef((t,o)=>{const e=fe(w,t.__scopeTooltip),{forceMount:r=e.forceMount,side:n="top",...i}=t,c=R(w,t.__scopeTooltip);return u.jsx(S,{present:r||c.open,children:c.disableHoverableContent?u.jsx(Y,{side:n,...i,ref:o}):u.jsx(me,{side:n,...i,ref:o})})}),me=a.forwardRef((t,o)=>{const e=R(w,t.__scopeTooltip),r=k(w,t.__scopeTooltip),n=a.useRef(null),i=H(o,n),[c,f]=a.useState(null),{trigger:s,onClose:d}=e,l=n.current,{onPointerInTransitChange:p}=r,v=a.useCallback(()=>{f(null),p(!1)},[p]),m=a.useCallback((h,T)=>{const x=h.currentTarget,g={x:h.clientX,y:h.clientY},y=xe(g,x.getBoundingClientRect()),b=Te(g,y),E=ye(T.getBoundingClientRect()),P=Ce([...b,...E]);f(P),p(!0)},[p]);return a.useEffect(()=>()=>v(),[v]),a.useEffect(()=>{if(s&&l){const h=x=>m(x,l),T=x=>m(x,s);return s.addEventListener("pointerleave",h),l.addEventListener("pointerleave",T),()=>{s.removeEventListener("pointerleave",h),l.removeEventListener("pointerleave",T)}}},[s,l,m,v]),a.useEffect(()=>{if(c){const h=T=>{const x=T.target,g={x:T.clientX,y:T.clientY},y=(s==null?void 0:s.contains(x))||(l==null?void 0:l.contains(x)),b=!ge(g,c);y?v():b&&(v(),d())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[s,l,c,d,v]),u.jsx(Y,{...t,ref:i})}),[ve,he]=_(D,{isInside:!1}),Y=a.forwardRef((t,o)=>{const{__scopeTooltip:e,children:r,"aria-label":n,onEscapeKeyDown:i,onPointerDownOutside:c,...f}=t,s=R(w,e),d=A(e),{onClose:l}=s;return a.useEffect(()=>(document.addEventListener(j,l),()=>document.removeEventListener(j,l)),[l]),a.useEffect(()=>{if(s.trigger){const p=v=>{const m=v.target;m!=null&&m.contains(s.trigger)&&l()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[s.trigger,l]),u.jsx(Z,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:p=>p.preventDefault(),onDismiss:l,children:u.jsxs(oe,{"data-state":s.stateAttribute,...d,...f,ref:o,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[u.jsx(Q,{children:r}),u.jsx(ve,{scope:e,isInside:!0,children:u.jsx(ie,{id:s.contentId,role:"tooltip",children:n||r})})]})})});U.displayName=w;var X="TooltipArrow",$=a.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,n=A(e);return he(X,e).isInside?null:u.jsx(re,{...n,...r,ref:o})});$.displayName=X;function xe(t,o){const e=Math.abs(o.top-t.y),r=Math.abs(o.bottom-t.y),n=Math.abs(o.right-t.x),i=Math.abs(o.left-t.x);switch(Math.min(e,r,n,i)){case i:return"left";case n:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Te(t,o,e=5){const r=[];switch(o){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function ye(t){const{top:o,right:e,bottom:r,left:n}=t;return[{x:n,y:o},{x:e,y:o},{x:e,y:r},{x:n,y:r}]}function ge(t,o){const{x:e,y:r}=t;let n=!1;for(let i=0,c=o.length-1;i<o.length;c=i++){const f=o[i].x,s=o[i].y,d=o[c].x,l=o[c].y;s>r!=l>r&&e<(d-f)*(r-s)/(l-s)+f&&(n=!n)}return n}function Ce(t){const o=t.slice();return o.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),we(o)}function we(t){if(t.length<=1)return t.slice();const o=[];for(let r=0;r<t.length;r++){const n=t[r];for(;o.length>=2;){const i=o[o.length-1],c=o[o.length-2];if((i.x-c.x)*(n.y-c.y)>=(i.y-c.y)*(n.x-c.x))o.pop();else break}o.push(n)}o.pop();const e=[];for(let r=t.length-1;r>=0;r--){const n=t[r];for(;e.length>=2;){const i=e[e.length-1],c=e[e.length-2];if((i.x-c.x)*(n.y-c.y)>=(i.y-c.y)*(n.x-c.x))e.pop();else break}e.push(n)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}var be=q,Ee=G,Pe=B,Re=V,_e=U,Ae=$;const K=W.forwardRef(({children:t,className:o,content:e,delayDuration:r,defaultOpen:n,open:i,onClick:c,onOpenChange:f,showArrow:s=!0,side:d,sideOffset:l=10,triggerAsChild:p=!1,...v},m)=>u.jsx(be,{delayDuration:150,children:u.jsxs(Ee,{open:i,defaultOpen:n,onOpenChange:f,delayDuration:r,"tremor-id":"tremor-raw",children:[u.jsx(Pe,{onClick:c,asChild:p,children:t}),u.jsx(Re,{children:u.jsxs(_e,{ref:m,side:d,sideOffset:l,align:"center",className:le("max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-md","text-gray-50 dark:text-gray-900","bg-gray-900 dark:bg-gray-50","will-change-[transform,opacity]","data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade data-[state=closed]:animate-hide",o),...v,children:[e,s?u.jsx(Ae,{className:"border-none fill-gray-900 dark:fill-gray-50",width:12,height:7,"aria-hidden":"true"}):null]})})]})}));K.displayName="Tooltip";K.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},side:{required:!1,tsType:{name:"union",raw:'"bottom" | "left" | "top" | "right"',elements:[{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"right"'}]},description:""},showArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},triggerAsChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sideOffset:{defaultValue:{value:"10",computed:!1},required:!1}},composes:["Omit","Pick"]};export{K as T};