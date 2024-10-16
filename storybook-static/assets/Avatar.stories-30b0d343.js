import{a,j as p,F as h}from"./emotion-react-jsx-runtime.browser.esm-112d1c7e.js";import{c as M,I as E}from"./Icon-2776f34d.js";import{P as d}from"./index-f4906635.js";import{a as y,c as t,t as g}from"./styles-3f311bed.js";import{g as R}from"./animation-1ac10000.js";const s={large:40,medium:28,small:20,tiny:16},B=M("div",{target:"e4gt52h1"})("background:",e=>e.loading?y.light:"transparent",";border-radius:50%;display:inline-block;vertical-align:top;overflow:hidden;text-transform:uppercase;height:",s.medium,"px;width:",s.medium,"px;line-height:",s.medium,"px;",e=>e.size==="tiny"&&t("height:",s.tiny,"px;width:",s.tiny,"px;line-height:",s.tiny,"px;","")," ",e=>e.size==="small"&&t("height:",s.small,"px;width:",s.small,"px;line-height:",s.small,"px;","")," ",e=>e.size==="large"&&t("height:",s.large,"px;width:",s.large,"px;line-height:",s.large,"px;","")," ",e=>!e.src&&t("background:",!e.loading&&"#37D5D3",";","")," img{width:100%;height:auto;display:block;}svg{position:relative;bottom:-2px;height:100%;width:100%;vertical-align:top;}path{fill:",y.medium,";animation:",R," 1.5s ease-in-out infinite;}"),G=M("div",{target:"e4gt52h0"})("color:",y.lightest,";text-align:center;font-size:",g.size.s2,"px;line-height:",s.medium,"px;",e=>e.size==="tiny"&&t("font-size:",g.size.s1-2,"px;line-height:",s.tiny,"px;","")," ",e=>e.size==="small"&&t("font-size:",g.size.s1,"px;line-height:",s.small,"px;","")," ",e=>e.size==="large"&&t("font-size:",g.size.s3,"px;line-height:",s.large,"px;",""),";");function r({loading:e,username:v,src:f,size:b,...U}){let z=a(E,{icon:"useralt"});const c={};return e?(c["aria-busy"]=!0,c["aria-label"]="Loading avatar ..."):f?z=a("img",{src:f,alt:v}):(c["aria-label"]=v,z=a(G,{size:b,"aria-hidden":"true",children:v.substring(0,1)})),a(B,{size:b,loading:e,src:f,...c,...U,children:z})}r.propTypes={loading:d.bool,username:d.string,src:d.string,size:d.oneOf(Object.keys(s))};r.defaultProps={loading:!1,username:"loading",src:null,size:"medium"};r.__docgenInfo={description:`- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.`,methods:[],displayName:"Avatar",props:{loading:{defaultValue:{value:"false",computed:!1},description:"Use the loading state to indicate that the data Avatar needs is still loading.",type:{name:"bool"},required:!1},username:{defaultValue:{value:"'loading'",computed:!1},description:"Avatar falls back to the user's initial when no image is provided.\n    Supply a `username` and omit `src` to see what this looks like.",type:{name:"string"},required:!1},src:{defaultValue:{value:"null",computed:!1},description:"The URL of the Avatar's image.",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"Avatar comes in four sizes. In most cases, you'll be fine with `medium`.",type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"medium"',computed:!1},{value:'"small"',computed:!1},{value:'"tiny"',computed:!1}]},required:!1}}};const H={title:"Design System/Avatar",component:r,argTypes:{size:{control:{type:"select"},options:["tiny","small","medium","large"]}}},n={args:{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"}},i={args:{username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"},render:e=>p(h,{children:[a(r,{...e,size:"large"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"small"}),a(r,{...e,size:"tiny"})]})},o={render:e=>p(h,{children:[a(r,{username:"Tom Coleman"}),a(r,{username:"Dominic Nguyen"}),a(r,{username:"Varun Vachhar"}),a(r,{username:"Michael Shilman"})]})},l={args:{loading:!0},render:e=>p(h,{children:[a(r,{...e,size:"large"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"small"}),a(r,{...e,size:"tiny"})]})},m={render:()=>p(h,{children:[a(r,{loading:!0,size:"large"}),a(r,{size:"large",username:"Tom Coleman"}),a(r,{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"})]})},u={args:{loading:!1,size:"tiny",username:"Dominic Nguyen",src:"https://avatars.githubusercontent.com/u/263385"}};var x,A,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  }
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var T,w,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554'
  },
  render: args => <>\r
      <Avatar {...args} size='large' />\r
      <Avatar {...args} size='medium' />\r
      <Avatar {...args} size='small' />\r
      <Avatar {...args} size='tiny' />\r
    </>
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var I,_,k;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <>\r
      <Avatar username='Tom Coleman' />\r
      <Avatar username='Dominic Nguyen' />\r
      <Avatar username='Varun Vachhar' />\r
      <Avatar username='Michael Shilman' />\r
    </>
}`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var V,D,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <>\r
      <Avatar {...args} size='large' />\r
      <Avatar {...args} size='medium' />\r
      <Avatar {...args} size='small' />\r
      <Avatar {...args} size='tiny' />\r
    </>
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var j,N,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>\r
      <Avatar loading size='large' />\r
      <Avatar size='large' username='Tom Coleman' />\r
      <Avatar size='large' username='Tom Coleman' src='https://avatars2.githubusercontent.com/u/132554' />\r
    </>
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,q,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loading: false,
    size: 'tiny',
    username: 'Dominic Nguyen',
    src: 'https://avatars.githubusercontent.com/u/263385'
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const J=["Standard","Sizes","Initials","Loading","Large","Controls"],Z=Object.freeze(Object.defineProperty({__proto__:null,Controls:u,Initials:o,Large:m,Loading:l,Sizes:i,Standard:n,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as A,u as C,o as I,l as L,n as S,i as a};
