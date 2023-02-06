"use strict";(self.webpackChunkadkaora_com=self.webpackChunkadkaora_com||[]).push([[427],{1128:function(e,t,a){a.d(t,{Z:function(){return c}});var s=a(7294),n=a(710),r=a(6687),o=a(5893);var l=e=>{const{closed:t=!1,style:a,children:n,...r}=e,{0:l,1:c}=(0,s.useState)(t),i=(0,s.useRef)(null);return(0,s.useEffect)((()=>{t?i.current&&(i.current.style.height=i.current.scrollHeight+"px",i.current.offsetHeight,i.current.ontransitionend=()=>{i.current&&(i.current.style.height="",i.current.ontransitionend=null,c(!0))},i.current.style.height="0px"):i.current&&(i.current.ontransitionend=()=>{i.current&&(i.current.style.removeProperty("height"),i.current.ontransitionend=null,c(!1))},i.current.style.height=i.current.scrollHeight+"px")}),[t]),(0,o.jsx)("div",{...r,style:{overflow:"hidden",transitionDuration:"0.5s",transitionTimingFunction:"cubic-bezier(0.645, 0.045, 0.355, 1)",...l?{height:"0px"}:{},...a},ref:i,children:n})};var c=e=>{const{className:t,title:a,startClosed:c=!1,children:i,...d}=e,{0:u,1:h}=(0,s.useState)(c);return(0,o.jsxs)("div",{className:(0,r.S)("search-k5ec",u?"closed-k5ec":"",t),...d,children:[(0,o.jsxs)("button",{className:"button-k5ec",onClick:e=>h((e=>!e)),children:[(0,o.jsx)(n.Z,{className:"icon-k5ec"}),(0,o.jsx)("span",{className:"title-k5ec",children:a})]}),(0,o.jsx)(l,{closed:u,className:"content-k5ec",children:i})]})}},6433:function(e,t,a){var s=a(3723),n=a(7294),r=a(1480),o=a(4200),l=a(8967),c=a(6334),i=a(6687),d=a(4248),u=a(5893);t.Z=e=>{const{date:t,image:a,title:h,category:p,tags:m,description_short:g,pdf:v,slug:x,customer:y,project:j,className:f,children:C,type:b,...N}=e,S=(0,l.y)(),Z=(0,n.useContext)(o.ZP);let k;t&&(k=new Intl.DateTimeFormat(Z.language,{day:"numeric",month:"long",year:"numeric"}).format(new Date(t)));let w=1;switch(b){case c.t.blog:w=1;break;case c.t.caseHistory:w=2;break;case c.t.academy:case c.t.events:w=1;break;case c.t.analysis:case c.t.video:case c.t.onDemand:case c.t.podcast:w=v?4:3}return(0,u.jsxs)("div",{className:(0,i.S)("post-n3j4",f),...N,children:[(0,u.jsxs)(r.Z,{...v?{to:null==v?void 0:v.url}:{to:`/${Z.language}/${b}/${x}/`},className:"left-n3j4",children:[(null==a?void 0:a.gatsbyImageData)&&a.title&&(0,u.jsx)(s.G,{alt:a.title,image:null==a?void 0:a.gatsbyImageData,className:"image-n3j4"}),(1===w||2===w)&&(0,u.jsxs)("div",{className:"overlay-n3j4",children:[k&&1===w&&(0,u.jsx)("span",{className:"date-n3j4",children:k}),1===w&&(0,u.jsx)("h5",{className:"title-n3j4",children:h}),1!==w&&(0,u.jsx)("h4",{className:"title-n3j4",children:h})]})]}),(0,u.jsxs)("div",{className:"right-n3j4",children:[(0,u.jsx)("div",{className:"lip-n3j4"}),(3===w||4===w)&&(0,u.jsx)("div",{className:"text-n3j4",children:h}),1===w&&(0,u.jsxs)("div",{className:"text-n3j4",children:[`${S.category}: `,(0,u.jsx)("span",{className:"green-n3j4",children:p})]}),1===w&&(0,u.jsxs)("div",{className:"text-n3j4",children:[`${S.tag}: `,(0,u.jsx)("span",{className:"green-n3j4",children:null==m?void 0:m.join(", ")})]}),2===w&&(0,u.jsxs)("div",{className:"text-n3j4",children:[`${S.customer}: `,(0,u.jsx)("span",{className:"green-n3j4",children:y})]}),2===w&&(0,u.jsxs)("div",{className:"text-n3j4",children:[`${S.project}: `,(0,u.jsx)("span",{className:"green-n3j4",children:j})]}),(0,u.jsx)("div",{className:"text-n3j4",children:g}),(0,u.jsxs)("div",{className:"cta-n3j4",children:[4!==w&&(0,u.jsx)(d.Z,{to:`/${Z.language}/${b}/${x}/`,children:S.read}),4===w&&(0,u.jsx)(d.Z,{to:null==v?void 0:v.url,download:!0,children:S.downloadPdf})]})]})]})}},5930:function(e,t,a){var s=a(7294),n=a(82),r=a(8967),o=a(6687),l=a(397),c=a(4159),i=a(5893);let d;t.Z=e=>{const{className:t,title:a,loading:u,label:h,withSorting:p=!1,withShowMore:m=!1,sortyBy:g,onSortSelect:v,show:x=5,children:y,...j}=e,{0:f,1:C}=(0,s.useState)(x),{0:b,1:N}=(0,s.useState)(g||d.DateC),{0:S,1:Z}=(0,s.useState)(),{0:k,1:w}=(0,s.useState)(!1),$=(0,s.useRef)(),D=(0,r.y)(),T=async()=>{let e=s.Children.toArray(y);switch(b){case d.CategoryC:e.sort(((e,t)=>e.props.category?t.props.category?e.props.category.localeCompare(t.props.category):-1:1));break;case d.CategoryD:e.sort(((e,t)=>e.props.category?t.props.category?t.props.category.localeCompare(e.props.category):1:-1));break;case d.CustomerC:e.sort(((e,t)=>e.props.customer?t.props.customer?e.props.customer.localeCompare(t.props.customer):-1:1));break;case d.CustomerD:e.sort(((e,t)=>e.props.customer?t.props.customer?t.props.customer.localeCompare(e.props.customer):1:-1));break;case d.DateC:e.sort(((e,t)=>e.props.date?t.props.date?e.props.date>t.props.date?-1:t.props.date>e.props.date?1:0:-1:1));break;case d.DateD:e.sort(((e,t)=>e.props.date?t.props.date?e.props.date>t.props.date?1:t.props.date>e.props.date?-1:0:1:-1));break;case d.TitleC:e.sort(((e,t)=>e.props.title?t.props.title?e.props.title.localeCompare(t.props.title):-1:1));break;case d.TitleD:e.sort(((e,t)=>e.props.title?t.props.title?t.props.title.localeCompare(e.props.title):1:-1));break;case d.TypeC:e.sort(((e,t)=>e.props.type?t.props.type?e.props.type.localeCompare(t.props.type):-1:1));break;case d.TypeD:e.sort(((e,t)=>e.props.type?t.props.type?t.props.type.localeCompare(e.props.type):1:-1))}Z(e.slice(0,f))};(0,s.useEffect)((()=>(C(x),(u||b)&&(w(!0),T().then((e=>$.current=setTimeout((()=>w(!1)),0)))),()=>{$.current&&clearTimeout($.current)})),[u,b]),(0,s.useEffect)((()=>{T()}),[f]);return(0,i.jsxs)("div",{className:(0,o.S)("shelf-ym83",t),...j,children:[(p||h)&&(0,i.jsxs)("header",{className:"header-ym83",children:[(0,i.jsx)("span",{className:"label-ym83",children:h}),p&&(0,i.jsxs)("span",{className:"sort-ym83",children:[(0,i.jsx)("label",{className:"sort-label-ym83",htmlFor:"select-ym83",children:D.sortBy}),D.ascending&&D.descending&&D.category&&D.customer&&D.date&&D.title&&D.type&&(0,i.jsxs)(c.Z,{id:"select-ym83",className:"select-ym83",value:b,onChange:e=>{N(e.currentTarget.value),v&&v(e.currentTarget.value)},children:[(0,i.jsx)(c.W,{value:d.CategoryC,children:`${D.category} ${D.ascending}`}),(0,i.jsx)(c.W,{value:d.CategoryD,children:`${D.category} ${D.descending}`}),(0,i.jsx)(c.W,{value:d.CustomerC,children:`${D.customer} ${D.ascending}`}),(0,i.jsx)(c.W,{value:d.CustomerD,children:`${D.customer} ${D.descending}`}),(0,i.jsx)(c.W,{value:d.DateC,children:`${D.date} ${D.ascending}`}),(0,i.jsx)(c.W,{value:d.DateD,children:`${D.date} ${D.descending}`}),(0,i.jsx)(c.W,{value:d.TitleC,children:`${D.title} ${D.ascending}`}),(0,i.jsx)(c.W,{value:d.TitleD,children:`${D.title} ${D.descending}`}),(0,i.jsx)(c.W,{value:d.TypeC,children:`${D.type} ${D.ascending}`}),(0,i.jsx)(c.W,{value:d.TypeD,children:`${D.type} ${D.descending}`})]})]})]}),S&&(0,i.jsxs)(s.Fragment,{children:[S.length>0&&(0,i.jsx)("div",{className:"items-ym83",children:S}),S.length<1&&(0,i.jsx)("div",{className:"no-result-ym83",children:(0,i.jsx)("p",{children:D.noMatchingResult})})]}),m&&f<s.Children.count(y)&&(0,i.jsx)("footer",{className:"shelf-footer-ym83",children:(0,i.jsxs)(l.Z,{className:"show-more-button-ym83",onClick:e=>{C((e=>e+x))},type:"button",color:"transparent",children:[(0,i.jsx)(n.Z,{className:"show-more-icon-ym83"}),(0,i.jsx)("span",{className:"show-more-text-ym83",children:D.showMore})]})})]})},function(e){e.CategoryC="categoryC",e.CategoryD="categoryD",e.CustomerC="customerC",e.CustomerD="customerD",e.DateC="dateC",e.DateD="dateD",e.TitleC="titleC",e.TitleD="titleD",e.TypeC="typeC",e.TypeD="typeD"}(d||(d={}))},4248:function(e,t,a){var s=a(3631),n=a(1082),r=a(7294),o=a(9564),l=a(1060),c=a(6687),i=a(6627),d=a(5893);t.Z=e=>{const{color:t="green",to:a="",children:u,download:h,withoutTransition:p,onClick:m,className:g,ref:v,...x}=e,y=/^\/(?!\/)/.test(a||""),j=(0,r.useContext)(l.ZP),f=(0,r.useContext)(i.Z);let C="light-green";switch(t){case"green":C="light-green";break;case"white":C="green";break;case"blue":C="blue";break;case"gray":C="gray";break;case"red":C="red"}const b=y&&a?(0,d.jsx)(n.Link,{className:(0,c.S)("button-8p4x",`${t}-8p4x`,g),to:a,download:h,target:"_self",onClick:e=>{var t;e.preventDefault(),f.hide(1e3),m&&m(e),(t=e.currentTarget.href)&&(p?(0,s.navigate)(t):j.navigateTo(t))},...x,children:u}):(0,d.jsx)("a",{href:null!=a?a:void 0,className:(0,c.S)("button-8p4x",`${t}-8p4x`,g),download:h,target:h?"_self":"_blank",...x,ref:v,children:u});return(0,d.jsx)(o.Z,{color:C,children:b})}},8335:function(e,t,a){var s=a(7294),n=a(6687),r=a(5893);const o=e=>{const{selected:t,onSelect:a,className:o,slideClass:l,children:c,...i}=e,d=(0,s.useRef)(),u=(0,s.useCallback)((e=>{var t;d.current=null===(t=e.touches[0])||void 0===t?void 0:t.screenX}),[]),h=(0,s.useCallback)((e=>{var n;const r=null===(n=e.touches[0])||void 0===n?void 0:n.screenX;if(void 0===r||void 0===d.current)return;const o=r>d.current+50,l=r<d.current-50;return o?(null==a||a(Math.max(t-1,0)),void(d.current=void 0)):l?(null==a||a(Math.min(t+1,s.Children.count(c)-1)),void(d.current=void 0)):void 0}),[t]);return(0,r.jsx)("div",{...i,className:(0,n.S)("fader-kpz3",o),children:s.Children.map(c,((e,a)=>(0,r.jsx)("div",{className:(0,n.S)("slide-kpz3",l,{"selected-kpz3":t===a}),onTouchStart:u,onTouchMove:h,children:e},a)))})};t.Z=o;o.Slide=e=>(0,r.jsx)(r.Fragment,{children:e.children})},3942:function(e,t,a){var s=a(6687),n=a(5893);t.Z=e=>{const{className:t,centered:a=!1,...r}=e;return(0,n.jsx)("div",{className:(0,s.S)("gap-q2z3",a?"centered-q2z3":"",t),...r})}},5957:function(e,t,a){var s=a(82),n=a(6687),r=a(5893);t.Z=e=>{const{onClick:t,className:a,...o}=e;return(0,r.jsxs)("div",{className:(0,n.S)("scroller-r94f",a),...o,children:[(0,r.jsx)("div",{className:"mouse-r94f",children:(0,r.jsx)("div",{className:"scroll-r94f"})}),(0,r.jsx)(s.Z,{className:"icon-r94f"})]})}},4159:function(e,t,a){a.d(t,{W:function(){return c}});var s=a(7294),n=a(82),r=a(6687),o=a(5893);const l=(0,s.forwardRef)(((e,t)=>{const{className:a,invalid:l,id:c,onChange:i,placeholder:d=" - ",containerProps:u,children:h,...p}=e,{0:m,1:g}=(0,s.useState)("undefined");return(0,o.jsxs)("div",{className:(0,r.S)("select-container-fn79","undefined"===m?"gray-x8np":"",l?"invalid-fn79":"",a),...u,children:[(0,o.jsxs)("select",{id:c,className:"select-fn79",onChange:e=>{i&&i(e),g(e.currentTarget.value)},ref:t,...p,children:[(0,o.jsx)("option",{value:"undefined",children:d},"-1"),h]}),(0,o.jsx)("div",{className:"icon-container-fn79",children:(0,o.jsx)(n.Z,{className:"icon-fn79"})})]})}));t.Z=l;const c=e=>{const{children:t,value:a,...s}=e;return(0,o.jsx)("option",{value:a||t,...s,children:t})}},3599:function(e,t,a){var s=a(7294),n=a(9564),r=a(6687),o=a(5893);t.Z=e=>{const{className:t,selected:a=!1,onSelect:l,children:c,...i}=e,{0:d,1:u}=(0,s.useState)(a);(0,s.useEffect)((()=>{u(a)}),[a]);return(0,o.jsx)(n.Z,{children:(0,o.jsx)("button",{className:(0,r.S)("switch-n8h6",d?"selected-n8h6":"",t),onClick:e=>{l&&l(e)},...i,children:c})})}},1306:function(e,t,a){a.d(t,{e:function(){return o}});var s=a(1082),n=a(7294),r=a(4200);const o=()=>{const e=(0,n.useContext)(r.ZP),t=(0,s.useStaticQuery)("1606276155"),a=[];for(const s of t.allContentfulContenutoCaseHistory.nodes)s.node_locale===e.language&&a.push(s);return a}},2251:function(e,t,a){a.r(t),a.d(t,{MagazineSearchParam:function(){return k},MagazineSectionParam:function(){return Z},MagazineSortParam:function(){return w},SectionIndex:function(){return $},default:function(){return D},sectionNameToIndex:function(){return P},sectionsIndexToname:function(){return z}});var s=a(5785),n=a(4125),r=a(7294),o=a(3996),l=a(1128),c=a(6433),i=a(5930),d=a(397),u=a(8335),h=a(3942),p=a(449),m=a(852),g=a(5957),v=a(3190),x=a(3599),y=a(4200),j=a(1082);var f=a(1306);var C=a(9743),b=a(6334),N=a(3873),S=a(5893);const Z="section",k="search",w="sort";let $;!function(e){e[e.index=0]="index",e[e.blog=1]="blog",e[e.caseHistory=2]="caseHistory",e[e.academy=3]="academy",e[e.events=4]="events"}($||($={}));var D=e=>{var t,a,D,I,M;const L=e.pageContext.data,_=(0,C.J)(),W=(0,r.useContext)(y.ZP),H=()=>{let e=[];return E.forEach((t=>{if(G===b.t.all||t.type===G){if(""!==U){let e=!1,a=!1,s=!1,n=!1,r=!1,o=!1;const l=U.toLowerCase();if(t.title&&t.title.toLowerCase().indexOf(l)>-1&&(e=!0),t.description_short&&t.description_short.toLowerCase().indexOf(l)>-1&&(a=!0),t.category&&t.category.toLowerCase().indexOf(l)>-1&&(s=!0),t.customer&&t.customer.toLowerCase().indexOf(l)>-1&&(n=!0),t.project&&t.project.toLowerCase().indexOf(l)>-1&&(r=!0),t.tags&&t.tags.forEach((e=>{e&&e.toLowerCase().indexOf(l)>-1&&(o=!0)})),!(e||s||a||o||n||r))return}e.push(t)}})),e},E=[].concat((0,s.Z)((()=>{const e=(0,r.useContext)(y.ZP),t=(0,j.useStaticQuery)("3264836892"),a=[];for(const s of t.allContentfulContenutoMagazine.nodes)s.node_locale===e.language&&a.push(s);return a})()),(0,s.Z)((0,f.e)()),(0,s.Z)((()=>{const e=(0,r.useContext)(y.ZP),t=(0,j.useStaticQuery)("3382024452"),a=[];for(const s of t.allContentfulContenutoMagazine.nodes)s.node_locale===e.language&&a.push(s);return a})()),(0,s.Z)((()=>{const e=(0,r.useContext)(y.ZP),t=(0,j.useStaticQuery)("1482469019"),a=[];for(const s of t.allContentfulContenutoMagazine.nodes)s.node_locale===e.language&&a.push(s);return a})())),R=T(e.pageContext),A=(0,N.Ph)(Z),B=(0,N.Ph)(k),F=(0,N.Ph)(w),{0:O,1:Q}=(0,r.useState)(P(A)),{0:G,1:q}=(0,r.useState)(A||""),{0:J,1:X}=(0,r.useState)(F||""),{0:U,1:K}=(0,r.useState)(B||""),{0:V,1:Y}=(0,r.useState)(H()),{0:ee,1:te}=(0,r.useState)(!1),ae=(0,r.useRef)(null);(0,r.useLayoutEffect)((()=>{A&&(q(A),Q(P(A)))}),[A]),(0,r.useLayoutEffect)((()=>{ne()}),[G,J]);const se=e=>{const t=Number(e.currentTarget.value);Q(t),q(z(t))},ne=()=>{re(),te(!0),(async()=>H())().then((e=>{Y(e)})).then((()=>{te(!1)}))},re=()=>{(0,N.BT)({name:Z,value:G},{name:k,value:U},{name:w,value:J})};return(0,S.jsxs)(r.Fragment,{children:[(0,S.jsx)(n.GatsbySeo,{title:L.titolo?L.titolo:"",canonical:`https://adkaora.com${_.magazine.url}`,language:W.language,openGraph:{url:`https://adkaora.com${_.magazine.url}`,title:`${L.titolo}`,locale:W.language,images:[{url:`${null===(t=L.header)||void 0===t?void 0:t.url}`,width:Number(null===(a=L.header)||void 0===a?void 0:a.width),height:Number(null===(D=L.header)||void 0===D?void 0:D.height),alt:`${null===(I=L.header)||void 0===I?void 0:I.title}`}]}}),(0,S.jsx)(u.Z,{selected:O,children:R.map(((e,t)=>(0,S.jsx)(u.Z.Slide,{children:(0,S.jsx)(o.Z,{image:null==e?void 0:e.image,imageAlt:null==e?void 0:e.imageAlt,mobileImage:null==e?void 0:e.mobileImage,children:(0,S.jsx)(m.Z,{flex:!0,className1:"hero-title-part-1-d2bh",className2:"hero-title-part-2-d2bh",children:e.title})})},t)))}),(0,S.jsx)(v.Z,{tabbed:!0,marginPost:!0,customTab:(0,S.jsx)(g.Z,{}),ref:ae,children:(0,S.jsxs)(l.Z,{title:L.titolo,children:[(0,S.jsxs)(h.Z,{centered:!0,style:{marginTop:"var(--gutter-4)"},children:[(0,S.jsx)(x.Z,{selected:O===$.index,onSelect:se,value:$.index,children:L.allLabel},L.allLabel),null===(M=L.sezioni)||void 0===M?void 0:M.map(((e,t)=>{const a=t+1;return(0,S.jsx)(x.Z,{selected:O===a,onSelect:se,value:a,children:null==e?void 0:e.titolo},null==e?void 0:e.slug)}))]}),(0,S.jsx)("form",{onSubmit:e=>{e.preventDefault(),ne()},children:(0,S.jsxs)(h.Z,{centered:!0,children:[(0,S.jsx)(p.Z,{...L.searchInputPlaceholder?{placeholder:L.searchInputPlaceholder}:{},onChange:e=>{K(e.currentTarget.value)},value:U,style:{width:"min(30vw,500px)",minWidth:"240px",fontStyle:"italic"}}),(0,S.jsx)(d.Z,{color:"green",type:"submit",children:L.searchButtonLabel})]})})]})}),(0,S.jsx)(v.Z,{children:(0,S.jsx)(i.Z,{withShowMore:!0,withSorting:!0,loading:ee,sortyBy:F,onSortSelect:e=>{X(e)},children:V.map(((e,t)=>(0,S.jsx)(c.Z,{date:e.date,title:e.title,image:e.image,category:e.category,tags:e.tags,description_short:e.description_short,slug:e.slug,type:e.type,customer:e.customer,project:e.project},t)))})})]})};const T=e=>{var t,a,s,n;let r=[];const o={title:e.data.titolo,image:null===(t=e.data.header)||void 0===t?void 0:t.gatsbyImageData,mobileImage:null===(a=e.data.headerMobile)||void 0===a?void 0:a.gatsbyImageData,imageAlt:null===(s=e.data.headerMobile)||void 0===s?void 0:s.title,slug:e.data.slug};return r.push(o),null===(n=e.data.sezioni)||void 0===n||n.forEach((e=>{var t,a,s;r.push({title:null==e?void 0:e.titolo,image:null==e||null===(t=e.header)||void 0===t?void 0:t.gatsbyImageData,mobileImage:null==e||null===(a=e.headerMobile)||void 0===a?void 0:a.gatsbyImageData,imageAlt:null==e||null===(s=e.header)||void 0===s?void 0:s.title,slug:null==e?void 0:e.slug})})),r},P=e=>{switch(e){case b.t.blog:return $.blog;case b.t.caseHistory:return $.caseHistory;case b.t.academy:return $.academy;case b.t.events:return $.events;default:return $.index}},z=e=>{switch(e){case $.academy:return b.t.academy;case $.blog:return b.t.blog;case $.caseHistory:return b.t.caseHistory;case $.events:return b.t.events;default:return b.t.all}}},3873:function(e,t,a){a.d(t,{BT:function(){return r},NJ:function(){return o},Ph:function(){return n}});var s=a(3631);const n=e=>new URLSearchParams((0,s.useLocation)().search).get(e),r=function(){const e=o.apply(void 0,arguments);e.length>0?history.replaceState(null,"",`?${e}`):history.replaceState(null,"",location.pathname)},o=function(){const e=[];for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];a.forEach((t=>{t&&t.name&&t.value&&e.push(`${t.name}=${t.value}`)}));return e.join("&")}}}]);
//# sourceMappingURL=f32607fbb31eb9096f76d63a054c6f6354373d52-50deba758bc0eb09f34b.js.map