(self.webpackChunkadkaora_com=self.webpackChunkadkaora_com||[]).push([[921],{8341:function(e,a,t){var i=t(5112),r=t(30),l=t(3070).f,o=i("unscopables"),s=Array.prototype;null==s[o]&&l(s,o,{configurable:!0,value:r(null)}),e.exports=function(e){s[o][e]=!0}},490:function(e,a,t){var i=t(5005);e.exports=i("document","documentElement")},30:function(e,a,t){var i,r=t(9670),l=t(6048),o=t(748),s=t(3501),n=t(490),c=t(317),d=t(6200),u=d("IE_PROTO"),v=function(){},p=function(e){return"<script>"+e+"</"+"script>"},m=function(e){e.write(p("")),e.close();var a=e.parentWindow.Object;return e=null,a},h=function(){try{i=new ActiveXObject("htmlfile")}catch(r){}var e,a;h="undefined"!=typeof document?document.domain&&i?m(i):((a=c("iframe")).style.display="none",n.appendChild(a),a.src=String("javascript:"),(e=a.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):m(i);for(var t=o.length;t--;)delete h.prototype[o[t]];return h()};s[u]=!0,e.exports=Object.create||function(e,a){var t;return null!==e?(v.prototype=r(e),t=new v,v.prototype=null,t[u]=e):t=h(),void 0===a?t:l.f(t,a)}},6048:function(e,a,t){var i=t(9781),r=t(3353),l=t(3070),o=t(9670),s=t(5656),n=t(1956);a.f=i&&!r?Object.defineProperties:function(e,a){o(e);for(var t,i=s(a),r=n(a),c=r.length,d=0;c>d;)l.f(e,t=r[d++],i[t]);return e}},1956:function(e,a,t){var i=t(6324),r=t(748);e.exports=Object.keys||function(e){return i(e,r)}},3792:function(e,a,t){t(8341)("flat")},2081:function(e,a,t){"use strict";var i=t(3631),r=t(1597),l=t(7294),o=t(1339),s=t(4119),n=t(5934),c=t(5078),d=t(5893);a.Z=e=>{const{color:a="green",to:t="",children:u,download:v,withoutTransition:p,onClick:m,className:h,ref:g,...b}=e,x=/^\/(?!\/)/.test(t||""),y=(0,l.useContext)(s.ZP),k=(0,l.useContext)(c.Z);let j="light-green";switch(a){case"green":j="light-green";break;case"white":j="green";break;case"blue":j="blue";break;case"gray":j="gray";break;case"red":j="red"}const f=x&&t?(0,d.jsx)(r.Link,{className:(0,n.S)("button-8p4x",`${a}-8p4x`,h),to:t,download:v,target:"_self",onClick:e=>{var a;e.preventDefault(),k.hide(1e3),m&&m(e),(a=e.currentTarget.href)&&(p?(0,i.navigate)(a):y.navigateTo(a))},...b,children:u}):(0,d.jsx)("a",{href:null!=t?t:void 0,className:(0,n.S)("button-8p4x",`${a}-8p4x`,h),download:v,target:v?"_self":"_blank",...b,ref:g,children:u});return(0,d.jsx)(o.Z,{color:j,children:f})}},3589:function(e,a,t){"use strict";var i=t(5893);const r={backgroundColor:"transparent",padding:"4px",cursor:"pointer"},l={width:"16px",height:"16px",backgroundColor:"var(--color-neutral-300)",borderRadius:"var(--radius-5)"},o={backgroundColor:"var(--color-primary-700)"},s=e=>{const{style:a,dotStyle:t,...r}=e;return(0,i.jsx)("button",{style:{...a},...r,children:(0,i.jsx)("div",{style:t})})};a.Z=e=>{const{selected:a,length:t,selectedDotStyle:n,dotStyle:c,onSelect:d,children:u,...v}=e,p=[];for(let m=0;m<t;m++)p.push((0,i.jsx)(s,{style:r,...d?{onClick:()=>d(m)}:{},dotStyle:m===a?{...l,...c,...o,...n}:{...l,...c}},m));return(0,i.jsx)("div",{...v,children:p})}},4285:function(e,a,t){"use strict";var i=t(7294),r=t(5934),l=t(5893);const o=e=>{const{selected:a,onSelect:t,className:o,slideClass:s,children:n,...c}=e,d=(0,i.useRef)(),u=(0,i.useCallback)((e=>{var a;d.current=null===(a=e.touches[0])||void 0===a?void 0:a.screenX}),[]),v=(0,i.useCallback)((e=>{var r;const l=null===(r=e.touches[0])||void 0===r?void 0:r.screenX;if(void 0===l||void 0===d.current)return;const o=l>d.current+50,s=l<d.current-50;return o?(null==t||t(Math.max(a-1,0)),void(d.current=void 0)):s?(null==t||t(Math.min(a+1,i.Children.count(n)-1)),void(d.current=void 0)):void 0}),[a]);return(0,l.jsx)("div",{...c,className:(0,r.S)("fader-kpz3",o),children:i.Children.map(n,((e,t)=>(0,l.jsx)("div",{className:(0,r.S)("slide-kpz3",s,{"selected-kpz3":a===t}),onTouchStart:u,onTouchMove:v,children:e},t)))})};a.Z=o;o.Slide=e=>(0,l.jsx)(l.Fragment,{children:e.children})},7064:function(e,a,t){"use strict";var i=t(7779),r=t(5934),l=t(5893);a.Z=e=>{const{onClick:a,className:t,...o}=e;return(0,l.jsxs)("div",{className:(0,r.S)("scroller-r94f",t),...o,children:[(0,l.jsx)("div",{className:"mouse-r94f",children:(0,l.jsx)("div",{className:"scroll-r94f"})}),(0,l.jsx)(i.Z,{className:"icon-r94f"})]})}},8699:function(e,a,t){"use strict";t(3792);var i=t(7294),r=t(5934),l=t(5893);a.Z=e=>{const{className:a,pauseVideo:t=!1,videoClass:o,videoStyle:s,videoSources:n,...c}=e,d=(0,i.useRef)(null);return(0,i.useEffect)((()=>{var e,a;t?null===(e=d.current)||void 0===e||e.pause():null===(a=d.current)||void 0===a||a.play()}),[t]),(0,l.jsx)("div",{className:(0,r.S)("mobile-video-player-k6zm","visible-k6zm",a),...c,children:(0,l.jsx)("div",{className:"mobile-frame-k6zm",children:(0,l.jsx)("video",{className:(0,r.S)("video-k6zm",o),autoPlay:!0,loop:!0,muted:!0,playsInline:!0,ref:d,style:s,children:[n].flat().map(((e,a)=>{if(e.src&&e.mimeType)return(0,l.jsx)("source",{src:e.src,type:e.mimeType},a)}))})})})}},8988:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return q}});var i=t(4125),r=t(7294),l=t(4742),o=t(7059),s=t(3589),n=t(4285),c=t(5233),d=t(5934),u=t(5893);const v=e=>{const{className:a,children:t,...i}=e;let l=[];return r.Children.map(t,((e,a)=>{(0,r.isValidElement)(e)&&l.push(e)})),(0,u.jsx)("ul",{className:(0,d.S)("numbers-5xak",a),...i,children:l.map(((e,a)=>(0,u.jsxs)("li",{className:"item-5xak",children:[(0,u.jsx)("span",{className:"value-5xak",children:e.props.value}),(0,u.jsx)("span",{className:"description-5xak",children:e.props.description})]},a)))})};var p=v;v.Item=e=>null;var m=t(623),h=t(8699),g=t(2081);const b=e=>{const{className:a,children:t,title:i,noVideo:l=!1,backgroundImage:v,backgroundAlt:b,...x}=e,{0:y,1:k}=(0,r.useState)(0);let j=[];return r.Children.map(t,(e=>{(0,r.isValidElement)(e)&&j.push(e)})),(0,u.jsxs)("div",{className:(0,d.S)("carousel-t99q",a),...x,children:[(0,u.jsx)(c.Z,{className:"title-t99q",className1:"title-part-1-t99q",className2:"title-part-2-t99q",children:i}),(0,u.jsxs)("div",{className:"left-t99q",children:[v&&b&&(0,u.jsx)(o.G,{alt:b,image:v,className:"image-wrapper-t99q"}),(0,u.jsx)(n.Z,{selected:y,onSelect:k,className:"video-fader-t99q",children:j.map(((e,a)=>(0,u.jsx)(n.Z.Slide,{children:e.props.video.src&&(0,u.jsx)(h.Z,{videoClass:"mobile-video-player-t99q",pauseVideo:a!==y,videoSources:[{src:e.props.video.src,mimeType:e.props.video.mimeType}]})},a)))})]}),(0,u.jsxs)("div",{className:(0,d.S)("right-t99q",l?"noVideo-t99q":""),children:[(0,u.jsx)(n.Z,{selected:y,onSelect:k,slideClass:"slide-t99q",children:j.map(((e,a)=>{var t,i,r,l,s,c;return(0,u.jsxs)(n.Z.Slide,{children:[(0,u.jsx)("h2",{className:"sub-title-t99q",children:e.props.title}),(0,u.jsx)(m.Z,{className:"description-t99q",children:e.props.description}),(0,u.jsxs)("div",{className:"addons-t99q",children:[e.props.addons&&(null===(t=e.props.addons.image)||void 0===t?void 0:t.gatsbyImageData)&&e.props.addons.image.title&&(0,u.jsx)(o.G,{alt:e.props.addons.image.title,image:null===(i=e.props.addons.image)||void 0===i?void 0:i.gatsbyImageData}),(0,u.jsx)(m.Z,{children:null===(r=e.props.addons)||void 0===r||null===(l=r.description)||void 0===l?void 0:l.raw}),(0,u.jsx)(p,{children:null===(s=e.props.addons)||void 0===s||null===(c=s.numeri)||void 0===c?void 0:c.map(((e,a)=>(0,u.jsx)(p.Item,{value:null==e?void 0:e.title,description:null==e?void 0:e.descrizione},a)))})]}),e.props.ctaLink&&e.props.ctaName&&(0,u.jsx)(g.Z,{className:"cta-t99q",to:e.props.ctaLink,children:e.props.ctaName})]},a)}))}),(0,u.jsx)(s.Z,{length:j.length,selected:y,onSelect:k,className:"dots-t99q"})]})]})};var x=b;b.Slide=e=>null;var y=t(2641),k=t(7064),j=t(1755);var f=e=>{const{paddingHeight:a,marginHeight:t,borderHeight:i=0,backgroundImage:r,backgroundImageAlt:l,color:s="gray",top:n=!1,bottom:c=!1,children:v,className:p,...m}=e;let h="";switch(a){case 0:h="ph-0-typ6";break;case 1:h="ph-1-typ6";break;case 2:h="ph-2-typ6";break;case 3:h="ph-3-typ6";break;case 4:h="ph-4-typ6";break;case 5:h="ph-5-typ6";break;case 6:h="ph-6-typ6";break;case 7:h="ph-7-typ6";break;case 8:case 9:h="ph-9-typ6";break;case 10:h="ph-10-typ6"}let g="";switch(i){case 0:g="bh-0-typ6";break;case 1:g="bh-1-typ6";break;case 2:g="bh-2-typ6";break;case 3:g="bh-3-typ6";break;case 4:g="bh-4-typ6";break;case 5:g="bh-5-typ6";break;case 6:g="bh-6-typ6";break;case 7:g="bh-7-typ6";break;case 8:case 9:g="bh-9-typ6";break;case 10:g="bh-10-typ6"}let b="";switch(t){case 0:b="mh-0-typ6";break;case 1:b="mh-1-typ6";break;case 2:b="mh-2-typ6";break;case 3:b="mh-3-typ6";break;case 4:b="mh-4-typ6";break;case 5:b="mh-5-typ6";break;case 6:b="mh-6-typ6";break;case 7:b="mh-7-typ6";break;case 8:case 9:b="mh-9-typ6";break;case 10:b="mh-10-typ6"}return(0,u.jsx)("div",{className:(0,d.S)("spacer-typ6",n?"top-typ6":void 0,c?"bottom-typ6":void 0,`${s}-typ6`,g,b,p),...m,children:(0,u.jsx)("div",{className:(0,d.S)("white-space-typ6",`${s}-typ6`,h),children:r&&l&&(0,u.jsx)(o.G,{className:"image-typ6",image:r,alt:l})})})},N=(t(3792),t(5255)),C=t(5078);var S=e=>{const{viewBox:a,fill:t,stroke:i,...r}=e;return(0,u.jsx)("svg",{viewBox:a||"0 0 87 96",fill:t||"currentColor",stroke:i||"currentColor",...r,children:(0,u.jsx)("path",{d:"M2,47.47c0-10.66,0-21.33,0-32C2.07,3.2,12.11-3.06,22.66,3Q51.27,19.26,79.53,36.18a13.61,13.61,0,0,1,0,23.54Q51.26,76.6,22.68,93C12.11,99,2.07,92.75,2,80.47,2,69.47,2,58.47,2,47.47Zm5.73.31c0,10.66,0,21.33,0,32,0,8.55,5.46,11.84,12.66,7.65Q47.58,71.6,74.68,55.65c8-4.7,7.93-10.77-.11-15.5q-27.1-16-54.3-31.74c-7-4.06-12.47-.83-12.53,7.37C7.67,26.44,7.72,37.11,7.72,47.78Z"})})};var Z=e=>{const{className:a,title:t,description:i,backgroundImage:l,backgroundAlt:s,videoSources:n,children:c,...v}=e,{0:p,1:h}=(0,r.useState)(!1),g=(0,r.useRef)(null),[b,x]=(0,N.Y)({threshold:1}),y=(0,r.useContext)(C.Z);(0,r.useEffect)((()=>{p&&g.current&&(x||g.current.scrollIntoView({block:"start",behavior:"smooth"}))}),[p]);const k=()=>{g.current&&(p?(h(!1),g.current.pause()):(h(!0),g.current.play()),y.hide(1e3))};return(0,u.jsxs)("div",{className:(0,d.S)("full-video-player-m9ce",p?"playing-m9ce":""),...v,ref:b,children:[l&&s&&(0,u.jsx)(o.G,{alt:s,image:l,className:"image-m9ce"}),(0,u.jsxs)("div",{className:"overlay-m9ce",children:[(0,u.jsx)("button",{className:"play-button-m9ce",onClick:e=>k(),children:(0,u.jsx)(S,{className:"play-icon-m9ce"})}),(0,u.jsx)("h2",{className:"title-m9ce",children:t}),(0,u.jsx)(m.Z,{className:"description-m9ce",children:i})]}),(0,u.jsx)("video",{className:"video-m9ce",ref:g,onClick:()=>k(),children:[n].flat().map(((e,a)=>{if(e.src&&e.mimeType)return(0,u.jsx)("source",{src:e.src,type:e.mimeType},a)}))})]})},w=t(160),I=t(5226),T=t(8902);var q=e=>{var a,t,o,s,n,d,v,p,h,g,b,N,C,S,q,V,A,D,P,M,$,z,O,E,F,G,_,H,L,R,B,Q,X,W,J,Y,K,U,ee,ae,te;const ie=e.pageContext.data,re=(0,I.J)(),le=(0,r.useContext)(w.ZP);return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(i.GatsbySeo,{title:ie.title?ie.title:"",canonical:`https://adkaora.com${re.products.url}`,description:(0,T.Z)(null===(a=ie.paragraph)||void 0===a?void 0:a.raw),language:le.language,openGraph:{url:`https://adkaora.com${re.products.url}`,title:`${ie.title}`,description:`${(0,T.Z)(null===(t=ie.paragraph)||void 0===t?void 0:t.raw)}`,locale:le.language,images:[{url:`${null===(o=ie.header)||void 0===o?void 0:o.url}`,width:Number(null===(s=ie.header)||void 0===s?void 0:s.width),height:Number(null===(n=ie.header)||void 0===n?void 0:n.height),alt:`${null===(d=ie.header)||void 0===d?void 0:d.title}`}]}}),(0,u.jsx)(y.Z,{image:null===(v=ie.header)||void 0===v?void 0:v.gatsbyImageData,imageAlt:null===(p=ie.header)||void 0===p?void 0:p.title,mobileImage:null===(h=ie.headerMobile)||void 0===h?void 0:h.gatsbyImageData,children:(0,u.jsx)(c.Z,{flex:!0,className1:"hero-title-part-1-d2bh",className2:"hero-title-part-2-d2bh",children:ie.title})}),(0,u.jsx)(j.Z,{tabbed:!0,marginPost:!0,customTab:(0,u.jsx)(k.Z,{}),withFadeInEffect:!0,children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(m.Z,{style:{marginTop:"var(--gutter-5)",marginBottom:"var(--gutter-7)"},className:"font-h6 chars-h6-80",children:null===(g=ie.paragraph)||void 0===g?void 0:g.raw})})}),(0,u.jsx)(j.Z,{children:(0,u.jsx)(f,{borderHeight:1,color:"gray",backgroundImage:null===(b=ie.backgroundPart1)||void 0===b?void 0:b.gatsbyImageData,backgroundImageAlt:null===(N=ie.backgroundPart1)||void 0===N?void 0:N.title})}),(0,u.jsx)(j.Z,{id:"proximity-marketing",children:(0,u.jsx)(Z,{title:null===(C=ie.proximityMarketing)||void 0===C?void 0:C.title,description:null===(S=ie.proximityMarketing)||void 0===S||null===(q=S.description)||void 0===q?void 0:q.raw,backgroundImage:null===(V=ie.proximityMarketing)||void 0===V||null===(A=V.image)||void 0===A?void 0:A.gatsbyImageData,backgroundAlt:null===(D=ie.proximityMarketing)||void 0===D||null===(P=D.image)||void 0===P?void 0:P.title,videoSources:{src:null===(M=ie.proximityMarketing)||void 0===M||null===($=M.video)||void 0===$?void 0:$.url,mimeType:null===(z=ie.proximityMarketing)||void 0===z||null===(O=z.video)||void 0===O?void 0:O.mimeType}})}),(0,u.jsx)(j.Z,{children:(0,u.jsx)(f,{borderHeight:1,color:"gray",backgroundImage:null===(E=ie.backgroundPart2)||void 0===E?void 0:E.gatsbyImageData,backgroundImageAlt:null===(F=ie.backgroundPart2)||void 0===F?void 0:F.title})}),(0,u.jsx)(j.Z,{id:"creative-formats",children:(0,u.jsx)(x,{title:null===(G=ie.formatiCreativi)||void 0===G?void 0:G.title,backgroundImage:null===(_=ie.formatiCreativi)||void 0===_||null===(H=_.image)||void 0===H?void 0:H.gatsbyImageData,backgroundAlt:null===(L=ie.formatiCreativi)||void 0===L||null===(R=L.image)||void 0===R?void 0:R.title,children:null===(B=ie.formatiCreativi)||void 0===B||null===(Q=B.caroselloFormatiCreativi)||void 0===Q?void 0:Q.map(((e,a)=>{var t,i,r;return(0,u.jsx)(x.Slide,{title:null==e?void 0:e.title,description:null==e||null===(t=e.description)||void 0===t?void 0:t.raw,video:{src:null==e||null===(i=e.video)||void 0===i?void 0:i.url,mimeType:null==e||null===(r=e.video)||void 0===r?void 0:r.mimeType}},a)}))})}),(0,u.jsx)(j.Z,{children:(0,u.jsx)(f,{color:"gray",backgroundImage:null===(X=ie.backgroundPart3)||void 0===X?void 0:X.gatsbyImageData,backgroundImageAlt:null===(W=ie.backgroundPart3)||void 0===W?void 0:W.title})}),(0,u.jsx)(j.Z,{id:"value-network",children:(0,u.jsx)(x,{title:null===(J=ie.concessionariaVerticale)||void 0===J?void 0:J.title,backgroundImage:null===(Y=ie.concessionariaVerticale)||void 0===Y||null===(K=Y.image)||void 0===K?void 0:K.gatsbyImageData,backgroundAlt:null===(U=ie.concessionariaVerticale)||void 0===U||null===(ee=U.image)||void 0===ee?void 0:ee.title,noVideo:!0,children:null===(ae=ie.concessionariaVerticale)||void 0===ae||null===(te=ae.caroselloConcessionariaVerticale)||void 0===te?void 0:te.map(((e,a)=>{var t,i,r;return(0,u.jsx)(x.Slide,{title:null==e?void 0:e.title,description:null==e||null===(t=e.description)||void 0===t?void 0:t.raw,addons:null==e?void 0:e.addons,video:{src:null==e||null===(i=e.video)||void 0===i?void 0:i.url,mimeType:null==e||null===(r=e.video)||void 0===r?void 0:r.mimeType},ctaName:null==e?void 0:e.ctaName,ctaLink:null==e?void 0:e.ctaLink},a)}))})})]})}}}]);
//# sourceMappingURL=component---src-templates-products-template-tsx-927609d106cd4ca594f5.js.map