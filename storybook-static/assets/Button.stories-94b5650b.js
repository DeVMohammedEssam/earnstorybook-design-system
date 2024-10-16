import{a as r,j as l,F as f}from"./emotion-react-jsx-runtime.browser.esm-112d1c7e.js";import{c as h,I as d}from"./Icon-2776f34d.js";import{r as C}from"./index-ccf6a75d.js";import{P as i}from"./index-f4906635.js";import{r as p,c as O}from"./polished.esm-ed3ce7df.js";import{t as v,a}from"./styles-3f311bed.js";import{e as j}from"./animation-1ac10000.js";import{S as t}from"./StoryLinkWrapper-45bed328.js";import"./jsx-runtime-6b79a019.js";import"./extends-98964cd2.js";import"./v4-4a60fe23.js";const y=h("span",{target:"eltcyvq3"})({name:"x9illq",styles:"display:inline-block;vertical-align:top"}),m=h("span",{target:"eltcyvq2"})({name:"142i4ns",styles:"position:absolute;top:50%;left:0;right:0;opacity:0"}),u={PRIMARY:"primary",PRIMARY_OUTLINE:"primaryOutline",SECONDARY:"secondary",SECONDARY_OUTLINE:"secondaryOutline",TERTIARY:"tertiary",OUTLINE:"outline"},s={SMALL:"small",MEDIUM:"medium"},S=h("button",{target:"eltcyvq1"})("border:0;border-radius:3em;cursor:pointer;display:inline-block;overflow:hidden;padding:",n=>n.size===s.SMALL?"8px 16px":"13px 20px",";position:relative;text-align:center;text-decoration:none;transition:all 150ms ease-out;transform:translate3d(0, 0, 0);vertical-align:top;white-space:nowrap;user-select:none;opacity:1;margin:0;background:transparent;font-size:",n=>n.size===s.SMALL?v.size.s1:v.size.s2,"px;font-weight:",v.weight.extrabold,";line-height:1;",n=>!n.isLoading&&`
      &:hover {
        transform: translate3d(0, -2px, 0);
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: ${p(a.primary,.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: ${p(a.primary,.2)} 0 8px 18px 0px;
      }
    `," ",y,"{transform:scale3d(1, 1, 1) translate3d(0, 0, 0);transition:transform 700ms ",j.rubber,";opacity:1;}",m,"{transform:translate3d(0, 100%, 0);}svg{height:",n=>n.size===s.SMALL?"14":"16","px;width:",n=>n.size===s.SMALL?"14":"16","px;vertical-align:top;margin-right:",n=>n.size===s.SMALL?"4":"6","px;margin-top:",n=>n.size===s.SMALL?"-1":"-2","px;margin-bottom:",n=>n.size===s.SMALL?"-1":"-2","px;pointer-events:none;}",n=>n.disabled&&`
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `," ",n=>n.isUnclickable&&`
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `," ",n=>n.isLoading&&`
      cursor: progress !important;
      opacity: 0.7;

      ${m} {
        transition: transform 700ms ${j.rubber};
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${y} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `," ",n=>n.containsIcon&&`
      svg {
        display: block;
        margin: 0;
      }
      padding: ${n.size===s.SMALL?"7":"12"}px;
    `," ",n=>n.appearance===u.PRIMARY&&`
      background: ${a.primary};
      color: ${a.lightest};

      ${!n.isLoading&&`
          &:hover {
            background: ${O(.05,a.primary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${p(a.primary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${p(a.primary,.2)} 0 8px 18px 0px;
          }
        `}
    `," ",n=>n.appearance===u.SECONDARY&&`
      background: ${a.secondary};
      color: ${a.lightest};

      ${!n.isLoading&&`
          &:hover {
            background: ${O(.05,a.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${p(a.secondary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${p(a.secondary,.2)} 0 8px 18px 0px;
          }
        `}
    `," ",n=>n.appearance===u.TERTIARY&&`
      background: ${a.tertiary};
      color: ${a.darkest};

      ${!n.isLoading&&`
          &:hover {
            background: ${O(.05,a.tertiary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${p(a.tertiary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${p(a.tertiary,.2)} 0 8px 18px 0px;
          }
        `}
    `," ",n=>n.appearance===u.OUTLINE&&`
      box-shadow: ${a.medium} 0 0 0 1px inset;
      color: ${a.dark};
      background: transparent;

      ${!n.isLoading&&`
          &:hover {
            box-shadow: ${a.mediumdark} 0 0 0 1px inset;
          }

          &:active {
            background: ${a.medium};
            box-shadow: ${a.medium} 0 0 0 1px inset;
            color: ${a.darkest};
          }
          &:focus {
            box-shadow: ${a.medium} 0 0 0 1px inset, ${p(a.secondary,.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${a.medium} 0 0 0 1px inset, ${p(a.secondary,.2)} 0 8px 18px 0px;
          }
        `};
    `,";",n=>n.appearance===u.PRIMARY_OUTLINE&&`
        box-shadow: ${a.primary} 0 0 0 1px inset;
        color: ${a.primary};

        &:hover {
          box-shadow: ${a.primary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${a.primary};
          box-shadow: ${a.primary} 0 0 0 1px inset;
          color: ${a.lightest};
        }
        &:focus {
          box-shadow: ${a.primary} 0 0 0 1px inset, ${p(a.primary,.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${a.primary} 0 0 0 1px inset, ${p(a.primary,.2)} 0 8px 18px 0px;
        }
      `,";",n=>n.appearance===u.SECONDARY_OUTLINE&&`
        box-shadow: ${a.secondary} 0 0 0 1px inset;
        color: ${a.secondary};

        &:hover {
          box-shadow: ${a.secondary} 0 0 0 1px inset;
          background: transparent;
        }

        &:active {
          background: ${a.secondary};
          box-shadow: ${a.secondary} 0 0 0 1px inset;
          color: ${a.lightest};
        }
        &:focus {
          box-shadow: ${a.secondary} 0 0 0 1px inset,
            ${p(a.secondary,.4)} 0 1px 9px 2px;
        }
        &:focus:hover {
          box-shadow: ${a.secondary} 0 0 0 1px inset,
            ${p(a.secondary,.2)} 0 8px 18px 0px;
        }
      `,";"),N=h("a",{target:"eltcyvq0"})(""),e=C.forwardRef(function({isDisabled:z,isLoading:c,loadingText:k,isLink:M,children:x,ButtonWrapper:$,...W},L){return $?r(S,{as:$,disabled:z,isLoading:c,...W,ref:L,children:l(f,{children:[r(y,{children:x}),c&&r(m,{children:k||"Loading..."})]})}):M?r(S,{as:N,isLoading:c,...W,ref:L,children:l(f,{children:[r(y,{children:x}),c&&r(m,{children:k||"Loading..."})]})}):r(S,{disabled:z,isLoading:c,...W,ref:L,children:l(f,{children:[r(y,{children:x}),c&&r(m,{children:k||"Loading..."})]})})});e.propTypes={isLoading:i.bool,loadingText:i.node,isLink:i.bool,children:i.node.isRequired,appearance:i.oneOf(Object.values(u)),isDisabled:i.bool,isUnclickable:i.bool,containsIcon:i.bool,size:i.oneOf(Object.values(s)),ButtonWrapper:i.oneOfType([i.func,i.object])};e.defaultProps={isLoading:!1,loadingText:null,isLink:!1,appearance:u.TERTIARY,isDisabled:!1,isUnclickable:!1,containsIcon:!1,size:s.MEDIUM,ButtonWrapper:void 0};e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},description:"Checks if the button is in a loading state",type:{name:"bool"},required:!1},loadingText:{defaultValue:{value:"null",computed:!1},description:"When a button is in the loading state you can supply custom text",type:{name:"node"},required:!1},isLink:{defaultValue:{value:"false",computed:!1},description:"Buttons that have hrefs should use <a> instead of <button>",type:{name:"bool"},required:!1},appearance:{defaultValue:{value:"'tertiary'",computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"primaryOutline"',computed:!1},{value:'"secondary"',computed:!1},{value:'"secondaryOutline"',computed:!1},{value:'"tertiary"',computed:!1},{value:'"outline"',computed:!1}]},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isUnclickable:{defaultValue:{value:"false",computed:!1},description:"Prevents users from clicking on a button multiple times (for things like payment forms)",type:{name:"bool"},required:!1},containsIcon:{defaultValue:{value:"false",computed:!1},description:"Buttons with icons by themselves have a circular shape",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1}]},required:!1},ButtonWrapper:{defaultValue:{value:"undefined",computed:!0},description:`A component that wraps the button
Can be used to add custom styles or props to the button`,type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},children:{description:"",type:{name:"node"},required:!0}}};const U=h("button",{target:"evlwrqf0"})({name:"wurlq1",styles:"border:1px solid green;background:lightgreen;color:rebeccapurple;padding:1em;font-size:1.2em"});function o(n){return r(U,{...n})}const rr={title:"Design System/Button",component:e},B={name:"all buttons",render:()=>l(f,{children:[r(e,{appearance:"primary",children:"Primary"}),r(e,{appearance:"secondary",children:"Secondary"}),r(e,{appearance:"tertiary",children:"Tertiary"}),r(e,{appearance:"outline",children:"Outline"}),r(e,{appearance:"primaryOutline",children:"Outline primary"}),r(e,{appearance:"secondaryOutline",children:"Outline secondary"}),r(e,{appearance:"primary",isDisabled:!0,children:"Disabled"}),r("br",{}),r(e,{appearance:"primary",isLoading:!0,children:"Primary"}),r(e,{appearance:"secondary",isLoading:!0,children:"Secondary"}),r(e,{appearance:"tertiary",isLoading:!0,children:"Tertiary"}),r(e,{appearance:"outline",isLoading:!0,children:"Outline"}),r(e,{appearance:"outline",isLoading:!0,loadingText:"Custom...",children:"Outline"}),r("br",{}),r(e,{appearance:"primary",size:"small",children:"Primary"}),r(e,{appearance:"secondary",size:"small",children:"Secondary"}),r(e,{appearance:"tertiary",size:"small",children:"Tertiary"}),r(e,{appearance:"outline",size:"small",children:"Outline"}),r(e,{appearance:"primary",isDisabled:!0,size:"small",children:"Disabled"}),r(e,{appearance:"outline",size:"small",containsIcon:!0,children:r(d,{icon:"link","aria-label":"Link"})}),l(e,{appearance:"outline",size:"small",children:[r(d,{icon:"link"}),"Link"]})]})},b={name:"button wrapper",render:()=>l("div",{children:[r(o,{children:"Original Button Wrapper"}),r("br",{}),r(e,{ButtonWrapper:o,appearance:"primary",children:"Primary"}),r(e,{ButtonWrapper:o,appearance:"secondary",children:"Secondary"}),r(e,{ButtonWrapper:o,appearance:"tertiary",children:"Tertiary"}),r(e,{ButtonWrapper:o,appearance:"outline",children:"Outline"}),r(e,{ButtonWrapper:o,appearance:"primaryOutline",children:"Outline primary"}),r(e,{ButtonWrapper:o,appearance:"secondaryOutline",children:"Outline secondary"}),r(e,{ButtonWrapper:o,appearance:"primary",isDisabled:!0,children:"Disabled"}),r("br",{}),r(e,{ButtonWrapper:o,appearance:"primary",isLoading:!0,children:"Primary"}),r(e,{ButtonWrapper:o,appearance:"secondary",isLoading:!0,children:"Secondary"}),r(e,{ButtonWrapper:o,appearance:"tertiary",isLoading:!0,children:"Tertiary"}),r(e,{ButtonWrapper:o,appearance:"outline",isLoading:!0,children:"Outline"}),r(e,{ButtonWrapper:o,appearance:"outline",isLoading:!0,loadingText:"Custom...",children:"Outline"}),r("br",{}),r(e,{ButtonWrapper:o,appearance:"primary",size:"small",children:"Primary"}),r(e,{ButtonWrapper:o,appearance:"secondary",size:"small",children:"Secondary"}),r(e,{ButtonWrapper:o,appearance:"tertiary",size:"small",children:"Tertiary"}),r(e,{ButtonWrapper:o,appearance:"outline",size:"small",children:"Outline"}),r(e,{ButtonWrapper:o,appearance:"primary",isDisabled:!0,size:"small",children:"Disabled"}),r(e,{ButtonWrapper:o,appearance:"outline",size:"small",containsIcon:!0,children:r(d,{icon:"link","aria-label":"Link"})}),l(e,{ButtonWrapper:o,appearance:"outline",size:"small",children:[r(d,{icon:"link"}),"Link"]})]})},g={name:"anchor wrapper",render:()=>l("div",{children:[r(t,{to:"http://storybook.js.org",children:"Original Link Wrapper"}),r("br",{}),r(e,{ButtonWrapper:t,appearance:"primary",href:"http://storybook.js.org",children:"Primary"}),r(e,{ButtonWrapper:t,appearance:"secondary",href:"http://storybook.js.org",children:"Secondary"}),r(e,{ButtonWrapper:t,appearance:"tertiary",href:"http://storybook.js.org",children:"Tertiary"}),r(e,{ButtonWrapper:t,appearance:"outline",href:"http://storybook.js.org",children:"Outline"}),r(e,{ButtonWrapper:t,appearance:"primaryOutline",href:"http://storybook.js.org",children:"Outline primary"}),r(e,{ButtonWrapper:t,appearance:"secondaryOutline",href:"http://storybook.js.org",children:"Outline secondary"}),r(e,{ButtonWrapper:t,appearance:"primary",isDisabled:!0,href:"http://storybook.js.org",children:"Disabled"}),r("br",{}),r(e,{ButtonWrapper:t,appearance:"primary",isLoading:!0,href:"http://storybook.js.org",children:"Primary"}),r(e,{ButtonWrapper:t,appearance:"secondary",isLoading:!0,href:"http://storybook.js.org",children:"Secondary"}),r(e,{ButtonWrapper:t,appearance:"tertiary",isLoading:!0,href:"http://storybook.js.org",children:"Tertiary"}),r(e,{ButtonWrapper:t,appearance:"outline",isLoading:!0,href:"http://storybook.js.org",children:"Outline"}),r(e,{ButtonWrapper:t,appearance:"outline",isLoading:!0,loadingText:"Custom...",href:"http://storybook.js.org",children:"Outline"}),r("br",{}),r(e,{ButtonWrapper:t,appearance:"primary",size:"small",href:"http://storybook.js.org",children:"Primary"}),r(e,{ButtonWrapper:t,appearance:"secondary",size:"small",href:"http://storybook.js.org",children:"Secondary"}),r(e,{ButtonWrapper:t,appearance:"tertiary",size:"small",href:"http://storybook.js.org",children:"Tertiary"}),r(e,{ButtonWrapper:t,appearance:"outline",size:"small",href:"http://storybook.js.org",children:"Outline"}),r(e,{ButtonWrapper:t,appearance:"primary",isDisabled:!0,size:"small",href:"http://storybook.js.org",children:"Disabled"}),r(e,{ButtonWrapper:t,appearance:"outline",size:"small",containsIcon:!0,href:"http://storybook.js.org",children:r(d,{icon:"link","aria-label":"Link"})}),l(e,{ButtonWrapper:t,appearance:"outline",size:"small",href:"http://storybook.js.org",children:[r(d,{icon:"link"}),"Link"]})]})};var w,T,I;B.parameters={...B.parameters,docs:{...(w=B.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'all buttons',
  render: () => <>\r
      <Button appearance='primary'>Primary</Button>\r
      <Button appearance='secondary'>Secondary</Button>\r
      <Button appearance='tertiary'>Tertiary</Button>\r
      <Button appearance='outline'>Outline</Button>\r
      <Button appearance='primaryOutline'>Outline primary</Button>\r
      <Button appearance='secondaryOutline'>Outline secondary</Button>\r
      <Button appearance='primary' isDisabled>\r
        Disabled\r
      </Button>\r
      <br />\r
      <Button appearance='primary' isLoading>\r
        Primary\r
      </Button>\r
      <Button appearance='secondary' isLoading>\r
        Secondary\r
      </Button>\r
      <Button appearance='tertiary' isLoading>\r
        Tertiary\r
      </Button>\r
      <Button appearance='outline' isLoading>\r
        Outline\r
      </Button>\r
      <Button appearance='outline' isLoading loadingText='Custom...'>\r
        Outline\r
      </Button>\r
      <br />\r
      <Button appearance='primary' size='small'>\r
        Primary\r
      </Button>\r
      <Button appearance='secondary' size='small'>\r
        Secondary\r
      </Button>\r
      <Button appearance='tertiary' size='small'>\r
        Tertiary\r
      </Button>\r
      <Button appearance='outline' size='small'>\r
        Outline\r
      </Button>\r
      <Button appearance='primary' isDisabled size='small'>\r
        Disabled\r
      </Button>\r
      <Button appearance='outline' size='small' containsIcon>\r
        <Icon icon='link' aria-label='Link' />\r
      </Button>\r
      <Button appearance='outline' size='small'>\r
        <Icon icon='link' />\r
        Link\r
      </Button>\r
    </>
}`,...(I=(T=B.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var D,A,P;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'button wrapper',
  render: () => <div>\r
      <ButtonWrapper>Original Button Wrapper</ButtonWrapper>\r
      <br />\r
      <Button ButtonWrapper={ButtonWrapper} appearance='primary'>\r
        Primary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='secondary'>\r
        Secondary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='tertiary'>\r
        Tertiary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='outline'>\r
        Outline\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='primaryOutline'>\r
        Outline primary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='secondaryOutline'>\r
        Outline secondary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' isDisabled>\r
        Disabled\r
      </Button>\r
      <br />\r
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' isLoading>\r
        Primary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='secondary' isLoading>\r
        Secondary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='tertiary' isLoading>\r
        Tertiary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' isLoading>\r
        Outline\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' isLoading loadingText='Custom...'>\r
        Outline\r
      </Button>\r
      <br />\r
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' size='small'>\r
        Primary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='secondary' size='small'>\r
        Secondary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='tertiary' size='small'>\r
        Tertiary\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' size='small'>\r
        Outline\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='primary' isDisabled size='small'>\r
        Disabled\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' size='small' containsIcon>\r
        <Icon icon='link' aria-label='Link' />\r
      </Button>\r
      <Button ButtonWrapper={ButtonWrapper} appearance='outline' size='small'>\r
        <Icon icon='link' />\r
        Link\r
      </Button>\r
    </div>
}`,...(P=(A=b.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,E,q;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'anchor wrapper',
  render: () => <div>\r
      <StoryLinkWrapper to='http://storybook.js.org'>\r
        Original Link Wrapper\r
      </StoryLinkWrapper>\r
      <br />\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' href='http://storybook.js.org'>\r
        Primary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondary' href='http://storybook.js.org'>\r
        Secondary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='tertiary' href='http://storybook.js.org'>\r
        Tertiary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' href='http://storybook.js.org'>\r
        Outline\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primaryOutline' href='http://storybook.js.org'>\r
        Outline primary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondaryOutline' href='http://storybook.js.org'>\r
        Outline secondary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' isDisabled href='http://storybook.js.org'>\r
        Disabled\r
      </Button>\r
      <br />\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' isLoading href='http://storybook.js.org'>\r
        Primary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondary' isLoading href='http://storybook.js.org'>\r
        Secondary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='tertiary' isLoading href='http://storybook.js.org'>\r
        Tertiary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' isLoading href='http://storybook.js.org'>\r
        Outline\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' isLoading loadingText='Custom...' href='http://storybook.js.org'>\r
        Outline\r
      </Button>\r
      <br />\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' size='small' href='http://storybook.js.org'>\r
        Primary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='secondary' size='small' href='http://storybook.js.org'>\r
        Secondary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='tertiary' size='small' href='http://storybook.js.org'>\r
        Tertiary\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' size='small' href='http://storybook.js.org'>\r
        Outline\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='primary' isDisabled size='small' href='http://storybook.js.org'>\r
        Disabled\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' size='small' containsIcon href='http://storybook.js.org'>\r
        <Icon icon='link' aria-label='Link' />\r
      </Button>\r
      <Button ButtonWrapper={StoryLinkWrapper} appearance='outline' size='small' href='http://storybook.js.org'>\r
        <Icon icon='link' />\r
        Link\r
      </Button>\r
    </div>
}`,...(q=(E=g.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const er=["AllButtons","buttonWrapper","AnchorWrapper"];export{B as AllButtons,g as AnchorWrapper,er as __namedExportsOrder,b as buttonWrapper,rr as default};
