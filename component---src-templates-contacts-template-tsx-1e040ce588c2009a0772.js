"use strict";(self.webpackChunkadkaora_com=self.webpackChunkadkaora_com||[]).push([[478],{8249:function(e,a,n){var s=n(5341),l=n(1527);a.Z=e=>{const{className:a,children:n,...r}=e;return(0,l.jsx)("div",{className:(0,s.Z)("blank-x5d9",a),...r,children:n})}},8845:function(e,a,n){n.d(a,{Z:function(){return t}});var s=n(5341),l=n(959),r=n(1527);var i=e=>{const{viewBox:a,fill:n,stroke:s,...l}=e;return(0,r.jsx)("svg",{fill:n||"currentColor",viewBox:a||"0 0 24 24 ",...l,children:(0,r.jsx)("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})})};var t=(0,l.forwardRef)(((e,a)=>{const{className:n,id:t,invalid:o,placeholder:c,onChange:d,containerProps:u,children:m,...v}=e,{0:p,1:h}=(0,l.useState)(c),{0:f,1:x}=(0,l.useState)(!1),N=(0,l.useRef)(null);(0,l.useImperativeHandle)(a,(()=>N.current),[N]);return(0,r.jsxs)("div",{className:(0,s.Z)("file-upload-container-x8np",f?"":"gray-x8np",o?"invalid-x8np":"",n),...u,children:[(0,r.jsx)("label",{className:"label-x8np",htmlFor:t,tabIndex:0,onKeyDown:e=>{var a,n;switch(e.key){case"Enter":e.preventDefault(),null===(a=N.current)||void 0===a||a.click();break;case" ":e.preventDefault(),null===(n=N.current)||void 0===n||n.click()}},children:p}),(0,r.jsx)("input",{id:t,className:"file-upload-x8np",type:"file",ref:N,...v,onChange:e=>{var a;if(d&&d(e),!e.currentTarget.files||e.currentTarget.files.length<1)return h(c),void x(!1);const n=null===(a=e.currentTarget.files[0])||void 0===a?void 0:a.name;h(n),x(!0)}}),(0,r.jsx)("div",{className:"icon-container-x8np",children:(0,r.jsx)(i,{className:"icon-x8np"})})]})}))},9726:function(e,a,n){var s=n(764),l=n(5341),r=n(1527);a.Z=e=>{const{children:a,className:n,...i}=e;return"string"!=typeof a?null:(0,r.jsx)("div",{className:(0,l.Z)("rich-56aq",n),dangerouslySetInnerHTML:a?{__html:(0,s.S)(JSON.parse(a))}:void 0,...i})}},4662:function(e,a,n){var s=n(5341),l=n(9568),r=n(1527);a.Z=e=>{const{onClick:a,className:n,...i}=e;return(0,r.jsxs)("div",{className:(0,s.Z)("scroller-r94f",n),...i,children:[(0,r.jsx)("div",{className:"mouse-r94f",children:(0,r.jsx)("div",{className:"scroll-r94f"})}),(0,r.jsx)(l.Z,{className:"icon-r94f"})]})}},2692:function(e,a,n){var s=n(5341),l=n(959),r=n(1527);const i=(0,l.forwardRef)(((e,a)=>{const{className:n,children:l,placeholder:i,invalid:t,...o}=e;return(0,r.jsx)("textarea",{ref:a,className:(0,s.Z)("textarea-7t3r",t?"invalid-7t3r":"",n),placeholder:i||"",...o})}));a.Z=i},5838:function(e,a,n){n.d(a,{C:function(){return i}});var s=n(434),l=n(959),r=n(6383);const i=()=>{const e=(0,l.useContext)(r.ZP),a=(0,s.useStaticQuery)("1326363449");let n=a.allContentfulAuthenticationLabels.nodes[0],i=a.allContentfulAuthenticationLabels2.nodes[0];for(const s of a.allContentfulAuthenticationLabels.nodes)if(s.node_locale===e.language){n=s;break}for(const s of a.allContentfulAuthenticationLabels2.nodes)if(s.node_locale===e.language){i=s;break}return{...n,...i}}},661:function(e,a,n){n.r(a),n.d(a,{Head:function(){return L},default:function(){return q}});var s=n(959),l=n(5341),r=n(4578),i=n(4488),t=n(6467),o=n(8845),c=n(9814),d=n(1527);var u=(0,s.forwardRef)(((e,a)=>{const{className:n,selected:s,onSelect:r,containerProps:i,value:t,label:o,invalid:c,children:u,onClick:m,...v}=e;return(0,d.jsxs)("span",{className:(0,l.Z)("radio-container-eb96",n),...i,children:[(0,d.jsxs)("span",{className:(0,l.Z)("radio-eb96",s?"selected-eb96":"",c?"invalid-eb96":""),children:[(0,d.jsx)("input",{className:"radio-input-eb96",type:"radio",ref:a,"aria-checked":s,onClick:e=>{m&&m(e),r&&r(t)},value:t,...v}),(0,d.jsx)("div",{className:"check-dot-eb96"})]}),o&&(0,d.jsx)("span",{className:"label-eb96",children:o})]})}));var m=(0,s.forwardRef)(((e,a)=>{const{label:n,name:r,invalid:i,vertical:t=!1,className:o,children:c,...m}=e,{0:v,1:p}=(0,s.useState)(""),h=s.Children.map(c,(e=>{if(!(0,s.isValidElement)(e))return;const a=e;if(a.type!==u)return;return(0,s.cloneElement)(a,{invalid:i,selected:v===a.props.value,onSelect:p,name:r})}));return(0,d.jsxs)("div",{ref:a,className:(0,l.Z)("radio-group-w2zx",i?"invalid-w2zx":"",t?"vertical-w2zx":"",o),...m,children:[(0,d.jsx)("span",{className:"label-w2zx",children:n}),(0,d.jsx)("div",{className:"radio-buttons-w2zx",children:h})]})})),v=n(2692),p=n(833),h=n(8917),f=n(5051),x=n(5838),N=n(2660);var b=e=>{const{className:a,children:n,...b}=e,{0:j,1:y}=(0,s.useState)(),{register:g,handleSubmit:k,watch:Z,formState:{errors:w}}=(0,r.cI)(),C={...(0,h.y)(),...(0,x.C)()};return(0,d.jsxs)("form",{className:(0,l.Z)("form-ykf9","white-background-ykf9",a),onSubmit:k((async e=>{const a={...e,PhoneNumber_countrycode:e.PhoneNumber_countrycode.replace("+","00")},n=new FormData;for(const l in a){const e=l;if(a[e]instanceof FileList){const s=a[e];s[0]&&n.append(l,s[0],s[0].name)}else if("boolean"!=typeof a[e])n.append(l,a[e]);else{a[e]?n.append(l,"on"):n.append(l,"")}}const s={method:"POST",mode:"cors",body:n,redirect:"manual",cache:"no-cache",credentials:"same-origin"};await fetch("https://forms.zohopublic.eu/adkaora/form/AdKaoranewwebsiteLAVORACONNOI/formperma/0UrFrFIFXXh4TlYIYqqlCXQMMRyLHuAazd6AyGFit14/htmlRecords/submit",s).then((e=>{})).catch((e=>{})),y("success")})),...b,children:[(0,d.jsx)(c.Z,{type:"text",placeholder:C.name,invalid:void 0!==w.Name_First,...g("Name_First",{required:!0,pattern:N.yJ})}),(0,d.jsx)(c.Z,{type:"text",placeholder:C.lastName,invalid:void 0!==w.Name_Last,...g("Name_Last",{required:!0,pattern:N.yJ})}),(0,d.jsx)(c.Z,{type:"text",placeholder:C.company,invalid:void 0!==w.SingleLine,...g("SingleLine",{required:!1,pattern:N.yJ})}),(0,d.jsx)(c.Z,{type:"email",placeholder:C.eMail,invalid:void 0!==w.Email,...g("Email",{required:!0,pattern:N.HN})}),(0,d.jsxs)("div",{className:"full-width-ykf9",children:[(0,d.jsx)(c.Z,{containerClassName:"full-width-ykf9 phone-input-ykf9",type:"phone",placeholder:C.phoneNumber,invalid:void 0!==w.PhoneNumber_countrycode,...g("PhoneNumber_countrycode",{required:!0,pattern:N.n_})}),void 0!==w.PhoneNumber_countrycode&&(0,d.jsx)("div",{className:"messages-box-pt86",children:C.validationInvalidPhoneNumber})]}),(0,d.jsx)(o.Z,{id:"file",placeholder:C.attachedFile,accept:".pdf,.zip,.rar,.7z",invalid:void 0!==w.FileUpload,...g("FileUpload",{required:!1})}),(0,d.jsxs)(m,{className:"span2-ykf9",label:C.type?C.type:"",invalid:void 0!==w.Dropdown1,name:"Dropdown1",children:[(0,d.jsx)(u,{label:C.advertiser,value:"advertiser",...g("Dropdown1",{required:!1})}),(0,d.jsx)(u,{label:C.publisher,value:"publisher",...g("Dropdown1",{required:!1})}),(0,d.jsx)(u,{label:C.candidate,value:"cadidate",...g("Dropdown1",{required:!1})}),(0,d.jsx)(u,{label:C.other,value:"other",...g("Dropdown1",{required:!1})})]}),(0,d.jsx)(v.Z,{placeholder:C.message,rows:8,className:"span2-ykf9",invalid:void 0!==w.MultiLine,...g("MultiLine",{required:!1,pattern:N.A})}),(0,d.jsx)(t.Z,{label:C.privacyAcceptance,className:"span2-ykf9",invalid:void 0!==w.DecisionBox,...g("DecisionBox",{required:!0})}),(0,d.jsx)(t.Z,{label:C.userProfiling,className:"span2-ykf9",invalid:void 0!==w.DecisionBox1,...g("DecisionBox1",{required:!1})}),(0,d.jsx)(t.Z,{label:C.userMarketing,className:"span2-ykf9",invalid:void 0!==w.DecisionBox2,...g("DecisionBox2",{required:!1})}),(0,d.jsx)(i.Z,{className:"span2-ykf9 button-ykf9",type:"submit",children:C.submitForm}),"success"===j&&(0,d.jsx)("div",{className:"overlay-ykf9",children:(0,d.jsxs)("div",{className:"modal-ykf9",children:[(0,d.jsx)(p.Z,{className:"check-icon-ykf9"}),(0,d.jsx)("span",{className:"submit-success-message-ykf9",children:C.submitSuccessMessage})]})}),"error"===j&&(0,d.jsx)("div",{className:"overlay-ykf9",children:(0,d.jsxs)("div",{className:"modal-ykf9",children:[(0,d.jsx)(f.Z,{className:"error-icon-ykf9"}),(0,d.jsx)("span",{className:"submit-success-message-ykf9",children:"Error"})]})})]})},j=n(8249),y=n(7209),g=n(936),k=n(9726),Z=n(4662),w=n(5035),C=n(6067),S=n(7146),D=n(9601);var q=e=>{var a,n,l,r;const i=e.pageContext.data;return(0,d.jsxs)(s.Fragment,{children:[(0,d.jsx)(y.Z,{image:null===(a=i.immagine)||void 0===a?void 0:a.gatsbyImageData,imageAlt:null===(n=i.immagine)||void 0===n?void 0:n.title,mobileImage:null===(l=i.immagineMobile)||void 0===l?void 0:l.gatsbyImageData,children:(0,d.jsx)(g.Z,{flex:!0,className1:"hero-title-part-1-d2bh",className2:"hero-title-part-2-d2bh",children:i.titolo})}),(0,d.jsx)(w.Z,{tabbed:!0,marginPost:!0,customTab:(0,d.jsx)(Z.Z,{}),withFadeInEffect:!0,children:(0,d.jsxs)(j.Z,{children:[(0,d.jsx)("h3",{className:"no-margin",children:i.titolo2}),(0,d.jsx)(k.Z,{style:{marginTop:"var(--gutter-5)"},className:"font-h6 chars-h6-80",children:null===(r=i.testo)||void 0===r?void 0:r.raw})]})}),(0,d.jsx)(w.Z,{children:(0,d.jsx)(b,{})})]})};const L=e=>{var a,n,s;const l=e.pageContext.data,r=(0,C.J)();return(0,d.jsx)(S.H,{title:l.titolo,description:(0,D.Z)(null===(a=l.testo)||void 0===a?void 0:a.raw),language:e.pageContext.language,image:null===(n=l.immagine)||void 0===n?void 0:n.url,imageAlt:null===(s=l.immagine)||void 0===s?void 0:s.title,siteUrl:`https://adkaora.com${r.contacts.url}`})}},9601:function(e,a,n){var s=n(764);a.Z=e=>{if(!e)return"";let a=(0,s.S)(JSON.parse(e));return a=a.replaceAll(/<[^<>]+>/gm,""),a}}}]);
//# sourceMappingURL=component---src-templates-contacts-template-tsx-1e040ce588c2009a0772.js.map