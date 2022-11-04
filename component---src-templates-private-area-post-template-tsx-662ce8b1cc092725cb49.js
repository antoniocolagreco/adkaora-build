"use strict";(self.webpackChunkadkaora_com=self.webpackChunkadkaora_com||[]).push([[145],{549:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var r=a(549),n={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n},6061:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=a(549),n=a(7845);function i(e,t){for(var a=0,r=Object.keys(e);a<r.length;a++){if(t===e[r[a]])return!0}return!1}t.isInline=function(e){return i(n.INLINES,e.nodeType)},t.isBlock=function(e){return i(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||r(t,e,a)},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return n(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var o=a(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return o.BLOCKS}});var c=a(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return c.INLINES}});var d=a(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(d).default}}),i(a(7951),t),i(a(167),t),i(a(1911),t);var u=a(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(u).default}});var E=s(a(6061));t.helpers=E},7845:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){var a;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(a||(a={})),t.default=a},1911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,a){var r,n=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,n=0,i=t.length;n<i;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var i=a(549),s=a(7845);t.TOP_LEVEL_BLOCKS=[i.BLOCKS.PARAGRAPH,i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6,i.BLOCKS.OL_LIST,i.BLOCKS.UL_LIST,i.BLOCKS.HR,i.BLOCKS.QUOTE,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET,i.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[i.BLOCKS.PARAGRAPH,i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6,i.BLOCKS.OL_LIST,i.BLOCKS.UL_LIST,i.BLOCKS.HR,i.BLOCKS.QUOTE,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[i.BLOCKS.TABLE,i.BLOCKS.TABLE_ROW,i.BLOCKS.TABLE_CELL,i.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[i.BLOCKS.HR,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[i.BLOCKS.OL_LIST]=[i.BLOCKS.LIST_ITEM],r[i.BLOCKS.UL_LIST]=[i.BLOCKS.LIST_ITEM],r[i.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[i.BLOCKS.QUOTE]=[i.BLOCKS.PARAGRAPH],r[i.BLOCKS.TABLE]=[i.BLOCKS.TABLE_ROW],r[i.BLOCKS.TABLE_ROW]=[i.BLOCKS.TABLE_CELL,i.BLOCKS.TABLE_HEADER_CELL],r[i.BLOCKS.TABLE_CELL]=[i.BLOCKS.PARAGRAPH],r[i.BLOCKS.TABLE_HEADER_CELL]=[i.BLOCKS.PARAGRAPH],r),t.HEADINGS=[i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([i.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[i.BLOCKS.DOCUMENT,i.BLOCKS.PARAGRAPH,i.BLOCKS.HEADING_1,i.BLOCKS.HEADING_2,i.BLOCKS.HEADING_3,i.BLOCKS.HEADING_4,i.BLOCKS.HEADING_5,i.BLOCKS.HEADING_6,i.BLOCKS.OL_LIST,i.BLOCKS.UL_LIST,i.BLOCKS.LIST_ITEM,i.BLOCKS.HR,i.BLOCKS.QUOTE,i.BLOCKS.EMBEDDED_ENTRY,i.BLOCKS.EMBEDDED_ASSET,s.INLINES.HYPERLINK,s.INLINES.ENTRY_HYPERLINK,s.INLINES.ASSET_HYPERLINK,s.INLINES.EMBEDDED_ENTRY,"text"]},167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},4736:function(e,t,a){var r=a(7294),n=a(7536),i=a(397),s=a(3610),l=a(449),o=a(838),c=a(5574),d=a(8967),u=a(6687),E=a(229),L=a(377),S=a(7031),h=a(5893);t.Z=e=>{const{className:t,children:a,...O}=e,{0:_,1:m}=(0,r.useState)(),{register:N,handleSubmit:f,watch:p,formState:{errors:B}}=(0,n.cI)(),v={...(0,d.y)(),...(0,L.C)()};return(0,h.jsxs)("form",{className:(0,u.S)("form-ykf9",t),onSubmit:f((async e=>{const t={...e,PhoneNumber_countrycode:e.PhoneNumber_countrycode.replace("+","00")},a=new FormData;for(let n in t){const e=n;if("boolean"!=typeof t[e])a.append(n,t[e]);else{t[e]?a.append(n,"on"):a.append(n,"")}}const r={method:"POST",mode:"cors",body:a,redirect:"manual",cache:"no-cache",credentials:"same-origin"};await fetch("https://forms.zohopublic.eu/adkaora/form/AdKaoranewwebsiteLAVORACONNOI/formperma/0UrFrFIFXXh4TlYIYqqlCXQMMRyLHuAazd6AyGFit14/htmlRecords/submit",r).catch((e=>{})),m("success")})),...O,children:[(0,h.jsx)("h4",{className:"title-ykf9 span2-ykf9",children:v.contactUs}),(0,h.jsx)(l.Z,{type:"text",placeholder:v.name,invalid:void 0!==B.Name_First,...N("Name_First",{required:!0,pattern:S.yJ})}),(0,h.jsx)(l.Z,{type:"text",placeholder:v.lastName,invalid:void 0!==B.Name_Last,...N("Name_Last",{required:!0,pattern:S.yJ})}),(0,h.jsx)(l.Z,{type:"email",placeholder:v.eMail,invalid:void 0!==B.Email,...N("Email",{required:!0,pattern:S.HN})}),(0,h.jsxs)("div",{className:"full-width-ykf9",children:[(0,h.jsx)(l.Z,{containerClassName:"full-width-ykf9 phone-input-ykf9",type:"phone",placeholder:v.phoneNumber,invalid:void 0!==B.PhoneNumber_countrycode,...N("PhoneNumber_countrycode",{required:!0,pattern:S.n_})}),void 0!==B.PhoneNumber_countrycode&&(0,h.jsx)("div",{className:"messages-box-pt86",children:v.validationInvalidPhoneNumber})]}),(0,h.jsx)(o.Z,{placeholder:v.message,rows:8,className:"span2-ykf9",invalid:void 0!==B.MultiLine,...N("MultiLine",{required:!1,pattern:S.A})}),(0,h.jsx)(s.Z,{label:v.privacyAcceptance,className:"span2-ykf9",invalid:void 0!==B.DecisionBox,...N("DecisionBox",{required:!0})}),(0,h.jsx)(i.Z,{className:"span2-ykf9 button-ykf9",type:"submit",children:v.submitForm}),"success"===_&&(0,h.jsx)("div",{className:"overlay-ykf9 gray-ykf9",children:(0,h.jsxs)("div",{className:"modal-ykf9",children:[(0,h.jsx)(c.Z,{className:"check-icon-ykf9"}),(0,h.jsx)("span",{className:"submit-success-message-ykf9",children:v.submitSuccessMessage})]})}),"error"===_&&(0,h.jsx)("div",{className:"overlay-ykf9 gray-ykf9",children:(0,h.jsxs)("div",{className:"modal-ykf9",children:[(0,h.jsx)(E.Z,{className:"error-icon-ykf9"}),(0,h.jsx)("span",{className:"submit-success-message-ykf9",children:"Error"})]})})]})}},1756:function(e,t,a){var r=a(2135),n=a(6437),i=a(6687),s=a(5893);const l="https://www.youtube.com/watch?v=",o="https://youtu.be/",c="https://vimeo.com/";t.Z=e=>{const{children:t,className:a,...d}=e,u=new Map;let E;if(t.references){for(var L of t.references)u.set(L.contentful_id,L);E={renderNode:{[n.BLOCKS.EMBEDDED_ENTRY]:e=>{const t=e.data.target.sys.id,a=u.get(t);let r="";return a&&a.url.indexOf(l)>-1&&(r=`https://www.youtube.com/embed/${a.url.replace(l,"")}`),a&&(null==a?void 0:a.url.indexOf(o))>-1&&(r=`https://www.youtube.com/embed/${a.url.replace(o,"")}`),a&&(null==a?void 0:a.url.indexOf(c))>-1&&(r=`https://player.vimeo.com/video/${a.url.replace(c,"")}`),`<div class="ref-container-z2vt">\n                        <iframe class="ref-z2vt"\n                            src=${r}\n                            frameBorder="0"\n                            allowFullScreen\n                        ></iframe>\n                    </div>`},[n.BLOCKS.EMBEDDED_ASSET]:e=>{const t=e.data.target.sys.id,a=u.get(t);return a&&(null==a?void 0:a.url.indexOf("https://videos.ctfassets.net/"))>-1?`<div class="ref-container-z2vt">\n                        <video class="ref-z2vt"\n                        controls\n                            playsInline\n                            src=${a.url}\n                        ></video>\n                    </div>`:a&&(null==a?void 0:a.url.indexOf("https://images.ctfassets.net/"))>-1?`\n                        <img class="ref-img-z2vt"\n                            src=${a.url}\n                        ></img>\n                    `:""}}}}return(0,s.jsx)("div",{className:(0,i.S)("reader-z2vt",a),...t?{dangerouslySetInnerHTML:{__html:(0,r.S)(JSON.parse(t.raw),E)}}:{},...d})}},838:function(e,t,a){var r=a(7294),n=a(6687),i=a(5893);const s=(0,r.forwardRef)(((e,t)=>{const{className:a,children:r,placeholder:s,invalid:l,...o}=e;return(0,i.jsx)("textarea",{ref:t,className:(0,n.S)("textarea-7t3r",l?"invalid-7t3r":"",a),placeholder:s||"",...o})}));t.Z=s},9601:function(e,t,a){a.r(t);var r=a(5785),n=a(4125),i=a(7294),s=a(4736),l=a(845),o=a(3996),c=a(1128),d=a(397),u=a(3942),E=a(1480),L=a(449),S=a(1756),h=a(8021),O=a(5957),_=a(3190),m=a(3599),N=a(534),f=a(4200),p=a(1060),B=a(5705),v=a(377),C=a(8967),A=a(9743),I=a(6476),y=a(4380),D=a(2789),T=a(6334),K=a(3873),g=a(607),x=a(5893);t.default=e=>{var t,a,b,j,P,H,R,M;const k=e.pageContext.data,G=e.pageContext.secondaryData,Z=(0,i.useContext)(f.ZP),w={...(0,C.y)(),...(0,v.C)()},$=(0,A.J)(),Y=[],U=(0,i.useContext)(N.ZP);[].concat((0,r.Z)((0,B.S)()),(0,r.Z)((0,D.A)()),(0,r.Z)((0,y.q)()),(0,r.Z)((0,I.x)())).forEach((e=>{e.type===k.type&&k.slug!==e.slug&&Y.push(e)}));const{0:F,1:q}=(0,i.useState)(0),{0:z,1:V}=(0,i.useState)(""),{0:Q,1:J}=(0,i.useState)(""),W=(0,i.useContext)(p.ZP),X=e=>{const t=Number(e.currentTarget.value);q(t),J((0,g.privateAreaSectionsIndexToName)(t))};let ee;k.date&&(ee=new Intl.DateTimeFormat(Z.language,{day:"numeric",month:"long",year:"numeric"}).format(new Date(k.date)));let te="";switch(k.type){case T.t.analysis:te=`https://adkaora.com${$.analysis.url}/${k.slug}`;break;case T.t.video:te=`https://adkaora.com${$.video.url}/${k.slug}`;break;case T.t.onDemand:te=`https://adkaora.com${$.onDemand.url}/${k.slug}`;break;case T.t.podcast:te=`https://adkaora.com${$.podcast.url}/${k.slug}`}return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(n.GatsbySeo,{title:`${k.title}`,canonical:te,description:`${k.description_short}`,language:Z.language,openGraph:{url:te,title:`${k.title}`,description:`${k.description_short}`,locale:Z.language,images:[{url:`${null===(t=k.image)||void 0===t?void 0:t.url}`,width:Number(null===(a=k.image)||void 0===a?void 0:a.width),height:Number(null===(b=k.image)||void 0===b?void 0:b.height),alt:`${null===(j=k.image)||void 0===j?void 0:j.title}`}]}}),(0,x.jsx)(o.Z,{image:null===(P=k.image)||void 0===P?void 0:P.gatsbyImageData,imageAlt:null===(H=k.image)||void 0===H?void 0:H.title,children:(0,x.jsxs)("div",{children:[(0,x.jsx)("h6",{className:"date-9jgh",children:ee}),(0,x.jsx)("h3",{className:"title-9jgh",children:k.title}),(0,x.jsxs)("h6",{className:"category-9jgh",children:[`${w.category}: `,(0,x.jsx)(E.Z,{className:"category-value-9jgh",to:`${$.privateArea.url}?search=${k.category}`,children:k.category})]})]})}),"SIGNED_IN"===U.status&&(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(_.Z,{children:(0,x.jsxs)(c.Z,{title:G.titolo,startClosed:!0,children:[(0,x.jsxs)(u.Z,{centered:!0,style:{marginTop:"var(--gutter-4)"},children:[(0,x.jsx)(m.Z,{selected:F===g.PrivateAreaSectionIndex.index,onSelect:X,value:g.PrivateAreaSectionIndex.index,children:w.all},w.all),null===(R=G.filtri)||void 0===R?void 0:R.map(((e,t)=>(0,x.jsx)(m.Z,{selected:F===t+1,onSelect:X,value:t+1,children:null==e?void 0:e.titolo},null==e?void 0:e.slug)))]}),(0,x.jsx)("form",{onSubmit:e=>{e.preventDefault();const t=(0,K.NJ)({name:g.PrivateAreaSectionParam,value:Q},{name:g.PrivateAreaSearchParam,value:z}),a=`${$.privateArea.url}?${t}`;W.navigateTo(a)},children:(0,x.jsxs)(u.Z,{centered:!0,children:[(0,x.jsx)(L.Z,{placeholder:w.searchInputPlaceholder,onChange:e=>{V(e.currentTarget.value)},value:z,style:{width:"min(30vw,500px)",minWidth:"240px",fontStyle:"italic"}}),(0,x.jsx)(d.Z,{color:"green",type:"submit",children:w.search})]})})]})}),(0,x.jsx)(_.Z,{children:(0,x.jsx)(l.Z,{children:k.content&&(0,x.jsx)(S.Z,{children:k.content})})}),(0,x.jsx)(_.Z,{className:"contact-us-section-9jgh",children:(0,x.jsx)(s.Z,{})})]}),"SIGNED_IN"!==U.status&&(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)(_.Z,{tabbed:!0,marginPost:!0,customTab:(0,x.jsx)(O.Z,{}),children:[(0,x.jsx)(l.Z,{children:(0,x.jsx)(h.Z,{children:null===(M=w.accountRequired)||void 0===M?void 0:M.raw})}),(0,x.jsx)("div",{className:"switch-container-8hxd",children:(0,x.jsxs)("span",{className:"switch-label-8hxd",children:[`${w.missingAccount} `,(0,x.jsx)(E.Z,{onClick:()=>U.setStatus("SIGN_UP"),to:$.authentication.url,children:w.clickHereLinkLabel})]})})]})})]})}}}]);
//# sourceMappingURL=component---src-templates-private-area-post-template-tsx-662ce8b1cc092725cb49.js.map