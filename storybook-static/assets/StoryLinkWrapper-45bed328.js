import{a as E}from"./emotion-react-jsx-runtime.browser.esm-112d1c7e.js";import{P as a}from"./index-f4906635.js";import{v as R}from"./v4-4a60fe23.js";const{addons:v}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:S}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:O}=__STORYBOOK_MODULE_GLOBAL__;var D="storybook/actions",P=`${D}/action-event`,w={depth:10,clearOnStoryChange:!0,limit:50},y=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:y(t,n)},I=e=>!!(typeof e=="object"&&e&&y(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),V=e=>{if(I(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(r.constructor.prototype)}),n}return e},b=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?R():Date.now().toString(36)+Math.random().toString(36).substring(2);function k(e,n={}){let t={...w,...n},r=function(...i){var u,f;if(n.implicit){let m=(u="__STORYBOOK_PREVIEW__"in O?O.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(o=>o.phase==="playing"||o.phase==="rendering");if(m){let o=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),_=new S({phase:m.phase,name:e,deprecated:o});if(o)console.warn(_);else throw _}}let c=v.getChannel(),p=b(),s=5,d=i.map(V),g=i.length>1?d:d[0],h={id:p,count:0,data:{name:e,args:g},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};c.emit(P,h)};return r.isAction=!0,r.implicit=n.implicit,r}const A=k("onLinkClick");function l({children:e,className:n,href:t,onClick:r,to:i,...c}){return E("a",{className:n,href:t||i,onClick:s=>{s.preventDefault(),r(),A(t||i)},...c,children:e})}l.propTypes={children:a.any.isRequired,className:a.string,href:a.string,onClick:a.func,to:a.string};l.defaultProps={className:"",href:null,onClick:()=>{},to:null};l.__docgenInfo={description:"",methods:[],displayName:"StoryLinkWrapper",props:{className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},href:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},to:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!0}}};export{l as S,k as a};
