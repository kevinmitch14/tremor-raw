import{j as o}from"./jsx-runtime-CfatFE5O.js";import{R as t}from"./index-ClcD9ViR.js";import{O as f,C as D,T as y,D as x,R as N,a as w,b as h,P as j}from"./index-C976OFh7.js";import{c as r}from"./cx-CYgzbKIn.js";import{f as u}from"./focusRing-49zpLVVu.js";const i=a=>o.jsx(N,{...a});i.displayName="Dialog";const _=w;_.displayName="DialogTrigger";const b=h;b.displayName="DialogClose";const l=j;l.displayName="DialogPortal";const d=t.forwardRef(({className:a,...e},s)=>o.jsx(f,{ref:s,className:r("fixed inset-0 z-50 overflow-y-auto","bg-black/70","data-[state=open]:animate-dialogOverlayShow",a),...e}));d.displayName="DialogOverlay";const n=t.forwardRef(({className:a,...e},s)=>o.jsx(l,{children:o.jsx(d,{children:o.jsx(D,{ref:s,className:r("fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border p-6 shadow-lg","border-gray-200 dark:border-gray-900","bg-white dark:bg-[#090E1A]","data-[state=open]:animate-dialogContentShow",u,a),"tremor-id":"tremor-raw",...e})})}));n.displayName="DialogContent";const g=({className:a,...e})=>o.jsx("div",{className:r("flex flex-col gap-y-1",a),...e});g.displayName="DialogHeader";const m=t.forwardRef(({className:a,...e},s)=>o.jsx(y,{ref:s,className:r("text-lg font-semibold","text-gray-900 dark:text-gray-50",a),...e}));m.displayName="DialogTitle";const c=t.forwardRef(({className:a,...e},s)=>o.jsx(x,{ref:s,className:r("text-gray-500 dark:text-gray-500",a),...e}));c.displayName="DialogDescription";const p=({className:a,...e})=>o.jsx("div",{className:r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...e});p.displayName="DialogFooter";i.__docgenInfo={description:"",methods:[],displayName:"Dialog"};n.__docgenInfo={description:"",methods:[],displayName:"DialogContent"};c.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};p.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};g.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};m.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};export{i as D,_ as a,n as b,g as c,m as d,c as e,p as f,b as g};