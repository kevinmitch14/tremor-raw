import{j as n}from"./jsx-runtime-CfatFE5O.js";import{l as Pe,U as je,m as Le,G as Se}from"./index-BWmfHM-C.js";import{r as c,R as z}from"./index-ClcD9ViR.js";import{F as De}from"./index-ZuzByk-F.js";import{c as Fe,b as fe,d as L,a as M,u as B}from"./index-D-jls2fw.js";import{P as I,d as oe}from"./index-DDVkbYHz.js";import{u as F,c as Ae}from"./index-ClVxAquS.js";import{u as Oe}from"./index-BCyXaPxf.js";import{P as U}from"./index-CkP846ZC.js";import{u as ve}from"./index-ZVc5Krty.js";import{c as me}from"./index-D_eSFn5K.js";import{D as Ke}from"./index-8isb7LcM.js";import{u as Ve}from"./index-sY83p_TZ.js";import{R as ze}from"./index-DXJoflK3.js";import{c as W}from"./cx-CYgzbKIn.js";import{f as Ge}from"./focusRing-49zpLVVu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-VEzCCWBB.js";var D="NavigationMenu",[J,ge,Ue]=me(D),[$,He,Be]=me(D),[Q,Pt]=Fe(D,[Ue,Be]),[We,y]=Q(D),[$e,Ye]=Q(D),pe=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,value:r,onValueChange:o,defaultValue:i,delayDuration:s=200,skipDelayDuration:d=300,orientation:u="horizontal",dir:x,...l}=e,[g,C]=c.useState(null),R=F(t,h=>C(h)),N=Oe(x),p=c.useRef(0),w=c.useRef(0),T=c.useRef(0),[_,v]=c.useState(!0),[m="",f]=fe({prop:r,onChange:h=>{const j=h!=="",H=d>0;j?(window.clearTimeout(T.current),H&&v(!1)):(window.clearTimeout(T.current),T.current=window.setTimeout(()=>v(!0),d)),o==null||o(h)},defaultProp:i}),b=c.useCallback(()=>{window.clearTimeout(w.current),w.current=window.setTimeout(()=>f(""),150)},[f]),E=c.useCallback(h=>{window.clearTimeout(w.current),f(h)},[f]),P=c.useCallback(h=>{m===h?window.clearTimeout(w.current):p.current=window.setTimeout(()=>{window.clearTimeout(w.current),f(h)},s)},[m,f,s]);return c.useEffect(()=>()=>{window.clearTimeout(p.current),window.clearTimeout(w.current),window.clearTimeout(T.current)},[]),n.jsx(Ne,{scope:a,isRootMenu:!0,value:m,dir:N,orientation:u,rootNavigationMenu:g,onTriggerEnter:h=>{window.clearTimeout(p.current),_?P(h):E(h)},onTriggerLeave:()=>{window.clearTimeout(p.current),b()},onContentEnter:()=>window.clearTimeout(w.current),onContentLeave:b,onItemSelect:h=>{f(j=>j===h?"":h)},onItemDismiss:()=>f(""),children:n.jsx(I.nav,{"aria-label":"Main","data-orientation":u,dir:N,...l,ref:R})})});pe.displayName=D;var he="NavigationMenuSub",qe=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,value:r,onValueChange:o,defaultValue:i,orientation:s="horizontal",...d}=e,u=y(he,a),[x="",l]=fe({prop:r,onChange:o,defaultProp:i});return n.jsx(Ne,{scope:a,isRootMenu:!1,value:x,dir:u.dir,orientation:s,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:g=>l(g),onItemSelect:g=>l(g),onItemDismiss:()=>l(""),children:n.jsx(I.div,{"data-orientation":s,...d,ref:t})})});qe.displayName=he;var Ne=e=>{const{scope:t,isRootMenu:a,rootNavigationMenu:r,dir:o,orientation:i,children:s,value:d,onItemSelect:u,onItemDismiss:x,onTriggerEnter:l,onTriggerLeave:g,onContentEnter:C,onContentLeave:R}=e,[N,p]=c.useState(null),[w,T]=c.useState(new Map),[_,v]=c.useState(null);return n.jsx(We,{scope:t,isRootMenu:a,rootNavigationMenu:r,value:d,previousValue:Ve(d),baseId:ve(),dir:o,orientation:i,viewport:N,onViewportChange:p,indicatorTrack:_,onIndicatorTrackChange:v,onTriggerEnter:L(l),onTriggerLeave:L(g),onContentEnter:L(C),onContentLeave:L(R),onItemSelect:L(u),onItemDismiss:L(x),onViewportContentChange:c.useCallback((m,f)=>{T(b=>(b.set(m,f),new Map(b)))},[]),onViewportContentRemove:c.useCallback(m=>{T(f=>f.has(m)?(f.delete(m),new Map(f)):f)},[]),children:n.jsx(J.Provider,{scope:t,children:n.jsx($e,{scope:t,items:w,children:s})})})},xe="NavigationMenuList",we=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,...r}=e,o=y(xe,a),i=n.jsx(I.ul,{"data-orientation":o.orientation,...r,ref:t});return n.jsx(I.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:n.jsx(J.Slot,{scope:a,children:o.isRootMenu?n.jsx(Ee,{asChild:!0,children:i}):i})})});we.displayName=xe;var be="NavigationMenuItem",[Xe,Ce]=Q(be),Re=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,value:r,...o}=e,i=ve(),s=r||i||"LEGACY_REACT_AUTO_VALUE",d=c.useRef(null),u=c.useRef(null),x=c.useRef(null),l=c.useRef(()=>{}),g=c.useRef(!1),C=c.useCallback((N="start")=>{if(d.current){l.current();const p=q(d.current);p.length&&te(N==="start"?p:p.reverse())}},[]),R=c.useCallback(()=>{if(d.current){const N=q(d.current);N.length&&(l.current=st(N))}},[]);return n.jsx(Xe,{scope:a,value:s,triggerRef:u,contentRef:d,focusProxyRef:x,wasEscapeCloseRef:g,onEntryKeyDown:C,onFocusProxyEnter:C,onRootContentClose:R,onContentFocusOutside:R,children:n.jsx(I.li,{...o,ref:t})})});Re.displayName=be;var Y="NavigationMenuTrigger",Je=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,disabled:r,...o}=e,i=y(Y,e.__scopeNavigationMenu),s=Ce(Y,e.__scopeNavigationMenu),d=c.useRef(null),u=F(d,s.triggerRef,t),x=Ie(i.baseId,s.value),l=ke(i.baseId,s.value),g=c.useRef(!1),C=c.useRef(!1),R=s.value===i.value;return n.jsxs(n.Fragment,{children:[n.jsx(J.ItemSlot,{scope:a,value:s.value,children:n.jsx(ye,{asChild:!0,children:n.jsx(I.button,{id:x,disabled:r,"data-disabled":r?"":void 0,"data-state":ne(R),"aria-expanded":R,"aria-controls":l,...o,ref:u,onPointerEnter:M(e.onPointerEnter,()=>{C.current=!1,s.wasEscapeCloseRef.current=!1}),onPointerMove:M(e.onPointerMove,G(()=>{r||C.current||s.wasEscapeCloseRef.current||g.current||(i.onTriggerEnter(s.value),g.current=!0)})),onPointerLeave:M(e.onPointerLeave,G(()=>{r||(i.onTriggerLeave(),g.current=!1)})),onClick:M(e.onClick,()=>{i.onItemSelect(s.value),C.current=R}),onKeyDown:M(e.onKeyDown,N=>{const w={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];R&&N.key===w&&(s.onEntryKeyDown(),N.preventDefault())})})})}),R&&n.jsxs(n.Fragment,{children:[n.jsx(ze,{"aria-hidden":!0,tabIndex:0,ref:s.focusProxyRef,onFocus:N=>{const p=s.contentRef.current,w=N.relatedTarget,T=w===d.current,_=p==null?void 0:p.contains(w);(T||!_)&&s.onFocusProxyEnter(T?"start":"end")}}),i.viewport&&n.jsx("span",{"aria-owns":l})]})]})});Je.displayName=Y;var Qe="NavigationMenuLink",re="navigationMenu.linkSelect",Te=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,active:r,onSelect:o,...i}=e;return n.jsx(ye,{asChild:!0,children:n.jsx(I.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:M(e.onClick,s=>{const d=s.target,u=new CustomEvent(re,{bubbles:!0,cancelable:!0});if(d.addEventListener(re,x=>o==null?void 0:o(x),{once:!0}),oe(d,u),!u.defaultPrevented&&!s.metaKey){const x=new CustomEvent(V,{bubbles:!0,cancelable:!0});oe(d,x)}},{checkForDefaultPrevented:!1})})})});Te.displayName=Qe;var Z="NavigationMenuIndicator",Ze=c.forwardRef((e,t)=>{const{forceMount:a,...r}=e,o=y(Z,e.__scopeNavigationMenu),i=!!o.value;return o.indicatorTrack?De.createPortal(n.jsx(U,{present:a||i,children:n.jsx(et,{...r,ref:t})}),o.indicatorTrack):null});Ze.displayName=Z;var et=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,...r}=e,o=y(Z,a),i=ge(a),[s,d]=c.useState(null),[u,x]=c.useState(null),l=o.orientation==="horizontal",g=!!o.value;c.useEffect(()=>{var p;const N=(p=i().find(w=>w.value===o.value))==null?void 0:p.ref.current;N&&d(N)},[i,o.value]);const C=()=>{s&&x({size:l?s.offsetWidth:s.offsetHeight,offset:l?s.offsetLeft:s.offsetTop})};return X(s,C),X(o.indicatorTrack,C),u?n.jsx(I.div,{"aria-hidden":!0,"data-state":g?"visible":"hidden","data-orientation":o.orientation,...r,ref:t,style:{position:"absolute",...l?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...r.style}}):null}),S="NavigationMenuContent",tt=c.forwardRef((e,t)=>{const{forceMount:a,...r}=e,o=y(S,e.__scopeNavigationMenu),i=Ce(S,e.__scopeNavigationMenu),s=F(i.contentRef,t),d=i.value===o.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?n.jsx(nt,{forceMount:a,...u,ref:s}):n.jsx(U,{present:a||d,children:n.jsx(Me,{"data-state":ne(d),...u,ref:s,onPointerEnter:M(e.onPointerEnter,o.onContentEnter),onPointerLeave:M(e.onPointerLeave,G(o.onContentLeave)),style:{pointerEvents:!d&&o.isRootMenu?"none":void 0,...u.style}})})});tt.displayName=S;var nt=c.forwardRef((e,t)=>{const a=y(S,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=a;return B(()=>{r(e.value,{ref:t,...e})},[e,t,r]),B(()=>()=>o(e.value),[e.value,o]),null}),V="navigationMenu.rootContentDismiss",Me=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,value:r,triggerRef:o,focusProxyRef:i,wasEscapeCloseRef:s,onRootContentClose:d,onContentFocusOutside:u,...x}=e,l=y(S,a),g=c.useRef(null),C=F(g,t),R=Ie(l.baseId,r),N=ke(l.baseId,r),p=ge(a),w=c.useRef(null),{onItemDismiss:T}=l;c.useEffect(()=>{const v=g.current;if(l.isRootMenu&&v){const m=()=>{var f;T(),d(),v.contains(document.activeElement)&&((f=o.current)==null||f.focus())};return v.addEventListener(V,m),()=>v.removeEventListener(V,m)}},[l.isRootMenu,e.value,o,T,d]);const _=c.useMemo(()=>{const m=p().map(j=>j.value);l.dir==="rtl"&&m.reverse();const f=m.indexOf(l.value),b=m.indexOf(l.previousValue),E=r===l.value,P=b===m.indexOf(r);if(!E&&!P)return w.current;const h=(()=>{if(f!==b){if(E&&b!==-1)return f>b?"from-end":"from-start";if(P&&f!==-1)return f>b?"to-start":"to-end"}return null})();return w.current=h,h},[l.previousValue,l.value,l.dir,p,r]);return n.jsx(Ee,{asChild:!0,children:n.jsx(Ke,{id:N,"aria-labelledby":R,"data-motion":_,"data-orientation":l.orientation,...x,ref:C,disableOutsidePointerEvents:!1,onDismiss:()=>{var m;const v=new Event(V,{bubbles:!0,cancelable:!0});(m=g.current)==null||m.dispatchEvent(v)},onFocusOutside:M(e.onFocusOutside,v=>{var f;u();const m=v.target;(f=l.rootNavigationMenu)!=null&&f.contains(m)&&v.preventDefault()}),onPointerDownOutside:M(e.onPointerDownOutside,v=>{var E;const m=v.target,f=p().some(P=>{var h;return(h=P.ref.current)==null?void 0:h.contains(m)}),b=l.isRootMenu&&((E=l.viewport)==null?void 0:E.contains(m));(f||b||!l.isRootMenu)&&v.preventDefault()}),onKeyDown:M(e.onKeyDown,v=>{var b;const m=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!m){const E=q(v.currentTarget),P=document.activeElement,h=E.findIndex(_e=>_e===P),H=v.shiftKey?E.slice(0,h).reverse():E.slice(h+1,E.length);te(H)?v.preventDefault():(b=i.current)==null||b.focus()}}),onEscapeKeyDown:M(e.onEscapeKeyDown,v=>{s.current=!0})})})}),ee="NavigationMenuViewport",ot=c.forwardRef((e,t)=>{const{forceMount:a,...r}=e,i=!!y(ee,e.__scopeNavigationMenu).value;return n.jsx(U,{present:a||i,children:n.jsx(rt,{...r,ref:t})})});ot.displayName=ee;var rt=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,children:r,...o}=e,i=y(ee,a),s=F(t,i.onViewportChange),d=Ye(S,e.__scopeNavigationMenu),[u,x]=c.useState(null),[l,g]=c.useState(null),C=u?(u==null?void 0:u.width)+"px":void 0,R=u?(u==null?void 0:u.height)+"px":void 0,N=!!i.value,p=N?i.value:i.previousValue;return X(l,()=>{l&&x({width:l.offsetWidth,height:l.offsetHeight})}),n.jsx(I.div,{"data-state":ne(N),"data-orientation":i.orientation,...o,ref:s,style:{pointerEvents:!N&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":C,"--radix-navigation-menu-viewport-height":R,...o.style},onPointerEnter:M(e.onPointerEnter,i.onContentEnter),onPointerLeave:M(e.onPointerLeave,G(i.onContentLeave)),children:Array.from(d.items).map(([T,{ref:_,forceMount:v,...m}])=>{const f=p===T;return n.jsx(U,{present:v||f,children:n.jsx(Me,{...m,ref:Ae(_,b=>{f&&b&&g(b)})})},T)})})}),at="FocusGroup",Ee=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,...r}=e,o=y(at,a);return n.jsx($.Provider,{scope:a,children:n.jsx($.Slot,{scope:a,children:n.jsx(I.div,{dir:o.dir,...r,ref:t})})})}),ae=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],it="FocusGroupItem",ye=c.forwardRef((e,t)=>{const{__scopeNavigationMenu:a,...r}=e,o=He(a),i=y(it,a);return n.jsx($.ItemSlot,{scope:a,children:n.jsx(I.button,{...r,ref:t,onKeyDown:M(e.onKeyDown,s=>{if(["Home","End",...ae].includes(s.key)){let u=o().map(g=>g.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(s.key)&&u.reverse(),ae.includes(s.key)){const g=u.indexOf(s.currentTarget);u=u.slice(g+1)}setTimeout(()=>te(u)),s.preventDefault()}})})})});function q(e){const t=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)t.push(a.currentNode);return t}function te(e){const t=document.activeElement;return e.some(a=>a===t?!0:(a.focus(),document.activeElement!==t))}function st(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const a=t.dataset.tabindex;t.setAttribute("tabindex",a)})}}function X(e,t){const a=L(t);B(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(a)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,a])}function ne(e){return e?"open":"closed"}function Ie(e,t){return`${e}-trigger-${t}`}function ke(e,t){return`${e}-content-${t}`}function G(e){return t=>t.pointerType==="mouse"?e(t):void 0}var ct=pe,ut=we,lt=Re,dt=Te;function ft(e,t){const{asChild:a,children:r}=e;if(!a)return typeof t=="function"?t(r):t;const o=z.Children.only(r);return z.cloneElement(o,{children:typeof t=="function"?t(o.props.children):t})}const A=z.forwardRef(({className:e,children:t,...a},r)=>n.jsx(ct,{ref:r,...a,"tremor-id":"tremor-raw",asChild:!1,children:n.jsx(ut,{className:W("flex items-center justify-start whitespace-nowrap border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden","border-gray-200 dark:border-gray-800",e),children:t})}));A.displayName="TabNavigation";const k=z.forwardRef(({asChild:e,disabled:t,className:a,children:r,...o},i)=>n.jsx(lt,{className:"flex","aria-disabled":t,children:n.jsx(dt,{"aria-disabled":t,className:W("group relative flex shrink-0 select-none items-center justify-center",t?"pointer-events-none":""),ref:i,onSelect:()=>{},asChild:e,...o,children:ft({asChild:e,children:r},s=>n.jsx("span",{className:W("-mb-px flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-3 pb-2 text-sm font-medium transition-all","text-gray-500 dark:text-gray-500","group-hover:text-gray-700 group-hover:dark:text-gray-400","group-hover:border-gray-300 group-hover:dark:border-gray-400","group-data-[active]:border-blue-500 group-data-[active]:text-blue-500","group-data-[active]:dark:border-blue-500 group-data-[active]:dark:text-blue-500",t?"pointer-events-none text-gray-300 dark:text-gray-700":"",Ge,a),children:s}))})}));k.displayName="TabNavigationLink";A.__docgenInfo={description:"",methods:[],displayName:"TabNavigation"};k.__docgenInfo={description:"",methods:[],displayName:"TabNavigationLink",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const jt={title:"ui/TabNavigation",component:A,parameters:{}},O={render:()=>n.jsxs(A,{children:[n.jsx(k,{href:"#",active:!0,children:"Home"}),n.jsx(k,{href:"#",children:"Balances"}),n.jsx(k,{href:"#",children:"Transactions"}),n.jsx(k,{href:"#",disabled:!0,children:"Customers"})]})},K={render:()=>n.jsxs(A,{children:[n.jsxs(k,{href:"#",active:!0,className:"inline-flex gap-2",children:[n.jsx(Pe,{className:"size-4","aria-hidden":"true"}),"Home"]}),n.jsxs(k,{href:"#",className:"inline-flex gap-2",children:[n.jsx(je,{className:"-ml-1 size-4","aria-hidden":"true"}),"Balances"]}),n.jsxs(k,{href:"#",className:"inline-flex gap-2",children:[n.jsx(Le,{className:"-ml-1 size-4","aria-hidden":"true"}),"Transactions"]}),n.jsxs(k,{href:"#",className:"inline-flex gap-2",children:[n.jsx(Se,{className:"-ml-1 size-4","aria-hidden":"true"}),"Customers"]})]})};var ie,se,ce;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <TabNavigation>
      <TabNavigationLink href="#" active>
        Home
      </TabNavigationLink>
      <TabNavigationLink href="#">Balances</TabNavigationLink>
      <TabNavigationLink href="#">Transactions</TabNavigationLink>
      <TabNavigationLink href="#" disabled>
        Customers
      </TabNavigationLink>
    </TabNavigation>
}`,...(ce=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ue,le,de;K.parameters={...K.parameters,docs:{...(ue=K.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <TabNavigation>
      <TabNavigationLink href="#" active className="inline-flex gap-2">
        <RiHome2Line className="size-4" aria-hidden="true" />
        Home
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <RiBankCard2Line className="-ml-1 size-4" aria-hidden="true" />
        Balances
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <RiExchange2Line className="-ml-1 size-4" aria-hidden="true" />
        Transactions
      </TabNavigationLink>
      <TabNavigationLink href="#" className="inline-flex gap-2">
        <RiCustomerService2Fill className="-ml-1 size-4" aria-hidden="true" />
        Customers
      </TabNavigationLink>
    </TabNavigation>
}`,...(de=(le=K.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Lt=["Default","Icons"];export{O as Default,K as Icons,Lt as __namedExportsOrder,jt as default};