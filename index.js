import{S as c,a,i as n}from"./assets/vendor-BBPOLzfb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=l(r);fetch(r.href,e)}})();function u(i){const t=document.querySelector(".gallery");t.innerHTML="";const l=i.map(e=>`<li class="gallery-item"><a class="gallery-link" href="${e.largeImageURL}"><img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${e.likes}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${e.views}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${e.comments}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${e.downloads}</p>
            </li>
          </ul></li>`).join("");t.insertAdjacentHTML("beforeend",l);const o={captionDelay:250,captionsData:"alt"};new c(".gallery a",o).refresh()}function m(i){a.defaults.baseURL="https://pixabay.com",a.get("/api/",{params:{key:"31908643-2178b12526c513c1beb381d6b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(t),console.log(t.data),console.log(t.data.hits),t.data.hits.length===0?n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3}):u(t.data.hits))).catch(t=>console.log(t))}const f=document.querySelector(".form");f.addEventListener("submit",d);function d(i){if(i.preventDefault(),i.currentTarget.searchText.value==="")return n.error({theme:"dark",message:"Please, fill out this field.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});{const t=i.currentTarget.searchText.value.trim("");m(t),i.currentTarget.searchText.value=""}}
//# sourceMappingURL=index.js.map
