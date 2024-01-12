import{k as L,r as E,c as S,u as A,e as P,f as y,j as t,R as D,m as B,l as p,S as O,A as R,P as I,n as _}from"./index-3ea17768.js";function q(f){let{swiper:e,extendParams:j,on:o,emit:x}=f;j({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const r=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function h(a){let s;return a&&typeof a=="string"&&e.isElement&&(s=e.el.querySelector(a),s)?s:(a&&(typeof a=="string"&&(s=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&s.length>1&&e.el.querySelectorAll(a).length===1&&(s=e.el.querySelector(a))),a&&!s?a:s)}function d(a,s){const i=e.params.navigation;a=r(a),a.forEach(n=>{n&&(n.classList[s?"add":"remove"](...i.disabledClass.split(" ")),n.tagName==="BUTTON"&&(n.disabled=s),e.params.watchOverflow&&e.enabled&&n.classList[e.isLocked?"add":"remove"](i.lockClass))})}function m(){const{nextEl:a,prevEl:s}=e.navigation;if(e.params.loop){d(s,!1),d(a,!1);return}d(s,e.isBeginning&&!e.params.rewind),d(a,e.isEnd&&!e.params.rewind)}function b(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),x("navigationPrev"))}function c(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),x("navigationNext"))}function g(){const a=e.params.navigation;if(e.params.navigation=L(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let s=h(a.nextEl),i=h(a.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:i}),s=r(s),i=r(i);const n=(l,v)=>{l&&l.addEventListener("click",v==="next"?c:b),!e.enabled&&l&&l.classList.add(...a.lockClass.split(" "))};s.forEach(l=>n(l,"next")),i.forEach(l=>n(l,"prev"))}function u(){let{nextEl:a,prevEl:s}=e.navigation;a=r(a),s=r(s);const i=(n,l)=>{n.removeEventListener("click",l==="next"?c:b),n.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(n=>i(n,"next")),s.forEach(n=>i(n,"prev"))}o("init",()=>{e.params.navigation.enabled===!1?N():(g(),m())}),o("toEdge fromEdge lock unlock",()=>{m()}),o("destroy",()=>{u()}),o("enable disable",()=>{let{nextEl:a,prevEl:s}=e.navigation;if(a=r(a),s=r(s),e.enabled){m();return}[...a,...s].filter(i=>!!i).forEach(i=>i.classList.add(e.params.navigation.lockClass))}),o("click",(a,s)=>{let{nextEl:i,prevEl:n}=e.navigation;i=r(i),n=r(n);const l=s.target;if(e.params.navigation.hideOnClick&&!n.includes(l)&&!i.includes(l)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===l||e.pagination.el.contains(l)))return;let v;i.length?v=i[0].classList.contains(e.params.navigation.hiddenClass):n.length&&(v=n[0].classList.contains(e.params.navigation.hiddenClass)),x(v===!0?"navigationShow":"navigationHide"),[...i,...n].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const C=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),g(),m()},N=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:C,disable:N,update:m,init:g,destroy:u})}const k="/assets/me-2701bc0b.webp";const T=()=>{const f=E.useRef(null),e=E.useRef(null),{ref:j}=S("About me"),{language:o}=A(),x=E.useRef(null),{scrollYProgress:r}=P({target:x,offset:["0 1","1.33 1"]}),h=y(r,[0,1],[.8,1]),d=y(r,[0,1],[.6,1]),m=(c,g,u)=>{f.current&&e.current&&(f.current.style.setProperty("--progress",String(1-u)),e.current.textContent=`${Math.ceil(g/1e3)}s`)},b=o==="HIN"?p.paragraphs_DE:p.paragraphs_EN;return t.jsx(D.Fragment,{children:t.jsxs("section",{className:"about-me relative mt-16 ",id:"about-me",ref:j,children:[t.jsx("div",{className:"title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start",children:t.jsxs(B.div,{ref:x,style:{scale:h,opacity:d,textAlign:"left"},children:[t.jsxs("p",{className:"text-[--black] mb-6",children:[t.jsx("span",{className:"text-orange",children:"<"}),o==="HIN"?p.title:p.title_EN,t.jsx("span",{className:"text-orange",children:"/>"})]}),t.jsx("h2",{className:"text-[--black] text-center max-lg:text-left break-words",children:o==="HIN"?p.description:p.description_EN})]})}),t.jsxs("div",{className:"flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48",children:[t.jsx("article",{className:"pl-60 max-lg:p-0",children:t.jsx("img",{src:k,alt:k})}),t.jsxs(O,{spaceBetween:100,centeredSlides:!0,autoplay:{delay:1e4,disableOnInteraction:!1},pagination:{clickable:!0},modules:[R,I,q],onAutoplayTimeLeft:m,className:"w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2",children:[b.map((c,g)=>t.jsxs(_,{className:"bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab",children:[t.jsxs("div",{className:"flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ",children:[t.jsx("div",{children:t.jsx("img",{src:c.icon,alt:c.icon,className:"w-24"})}),t.jsx("div",{children:t.jsx("h2",{children:c.title})})]}),t.jsxs("div",{className:"flex flex-row gap-10 max-lg:flex-col",children:[t.jsxs("div",{className:"flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0",children:[t.jsxs("p",{className:"text-white",children:[t.jsx("span",{className:"text-orange",children:"<"}),"h3",t.jsx("span",{className:"text-orange",children:"/>"})]}),t.jsxs("div",{className:"flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue",children:[t.jsx("div",{}),t.jsx("div",{className:"w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"}),t.jsx("div",{})]}),t.jsxs("p",{className:"text-white",children:[t.jsx("span",{className:"text-orange",children:"<"}),"h3",t.jsx("span",{className:"text-orange",children:"/>"})]})]}),t.jsx("div",{children:t.jsx("p",{className:"text-white text-4xl",children:c.description})})]})]},g)),t.jsxs("div",{className:"autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl ",slot:"container-end",children:[t.jsx("svg",{viewBox:"0 0 48 48",ref:f,children:t.jsx("circle",{cx:"24",cy:"24",r:"20"})}),t.jsx("span",{ref:e})]})]})]})]})})};export{T as default};
