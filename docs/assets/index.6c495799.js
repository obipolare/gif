import{r as e,o as t,c as r,a as o,w as l,v as s,b as a,t as n,F as i,d as c,e as u,u as d,f as g,g as m,h as p,i as f}from"./vendor.aa2afbfb.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const h={class:"relative px-4"},v={props:{categories:Array},setup(n){const{categories:i}=n,c=e(""),u=()=>{i.unshift(c.value),console.log(i),c.value=""};return(e,n)=>(t(),r("form",{onSubmit:[n[1]||(n[1]=a((()=>{}),["prevent"])),u]},[o("div",h,[l(o("input",{type:"text",class:"flex-1 block w-full px-4 py-2 mx-auto text-base placeholder-gray-400 border-2 border-gray-300 rounded-lg shadow-sm appearance-none dark:border-transparent sm:w-2/5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-900",name:"name",placeholder:"Your Gif","onUpdate:modelValue":n[0]||(n[0]=e=>c.value=e)},null,512),[[s,c.value]])])],32))}},y={class:"mx-auto"},k=["src","alt"],b={props:{gif:Object},setup(e){const{gif:o}=e;return(e,l)=>(t(),r("figure",y,[(t(),r("img",{src:o.url,alt:o.title,key:o.id},null,8,k))]))}},x=t=>{const r=e([]);return(async e=>{const t=`https://g.tenor.com/v1/search?key=INBYS428FGU4&limit=9&q=${encodeURI(e)}`,r=await fetch(t),{results:o}=await r.json();return o.map((e=>({title:e.title,url:e.media[0].gif.url,id:e.id})))})(t).then((e=>r.value=e)),{gifs:r}},w={class:"grid grid-cols-1 gap-2 m-2  sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:mx-24 sm:my-8"},S={props:{gifName:String},setup(e){const{gifName:l}=e,{gifs:s}=x(l);return(e,a)=>(t(),r(i,null,[o("h2",{class:"w-11/12 py-4 mx-auto text-2xl capitalize"},n(l)),o("section",w,[(t(!0),r(i,null,c(d(s),(e=>(t(),u(b,{key:e.title,gif:e},null,8,["gif"])))),128))])],64))}};const N={class:"\r\n      m-6\r\n      text-3xl text-center\r\n      dark:text-[#cdd9e5]\r\n      flex\r\n      items-center\r\n      justify-between\r\n    "},I=o("div",null,null,-1),M=o("h1",null,[p(" App De Gifs By "),o("a",{class:"\r\n          transition\r\n          duration-200\r\n          hover:text-[#3c40c6]\r\n          dark:hover:text-[#fcd34d]\r\n        ",target:"_blank",href:"https://t.me/obipolare"},"Obipolare")],-1),O={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},j={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"};f({setup(l){const s=e=>localStorage.setItem("state",JSON.stringify(e)),a=e=>localStorage.setItem("theme",e),n=e=>document.documentElement.classList.remove(e),d=e=>document.documentElement.classList.toggle(e),p=e(["Scooby Doo"]);g((()=>{if(console.log(JSON.parse(localStorage.getItem("state"))),JSON.parse(localStorage.getItem("state")))return n("dark"),d("light"),a("light"),void s(!0);a("dark"),s(!1)}));const f=JSON.parse(localStorage.getItem("state")),h=e(f),y=()=>{h.value=!h.value,console.log(h.value),h.value?(n("dark"),s(!0),a("light"),d("light")):(n("light"),s(!1),a("dark"),d("dark"))};return(e,l)=>(t(),r(i,null,[o("header",N,[I,M,o("div",null,[(t(),r("svg",{class:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:y},[h.value?(t(),r("path",O)):(t(),r("path",j))]))])]),o("main",null,[m(v,{categories:p.value},null,8,["categories"]),(t(!0),r(i,null,c(p.value,(e=>(t(),u(S,{key:e,gifName:e},null,8,["gifName"])))),128))])],64))}}).mount("#app");
