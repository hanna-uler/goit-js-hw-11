import{S as c,a,i as n}from"./assets/vendor-BBPOLzfb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();function u(i){const r=document.querySelector(".gallery");r.innerHTML="";const l=i.map(e=>`<li class="gallery-item"><a class="gallery-link" href="${e.largeImageURL}"><img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/></a><ul class="img-info-list">
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
          </ul></li>`).join("");r.insertAdjacentHTML("beforeend",l);const o={captionDelay:250,captionsData:"alt"};new c(".gallery a",o).refresh()}function m(i){a.defaults.baseURL="https://pixabay.com",a.get("/api/",{params:{key:"31908643-2178b12526c513c1beb381d6b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits.length===0?n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3}):(document.querySelector(".loader").classList.add("visually-hidden"),u(r.data.hits))).catch(r=>console.log(r))}const d=document.querySelector(".form"),f=document.querySelector(".loader"),g=document.querySelector(".gallery");d.addEventListener("submit",h);function h(i){if(i.preventDefault(),i.currentTarget.searchText.value==="")return n.error({theme:"dark",message:"Please, fill out the search field.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});{f.classList.remove("visually-hidden"),g.innerHTML="";const r=i.currentTarget.searchText.value.trim("");m(r),i.currentTarget.searchText.value=""}}
//# sourceMappingURL=index.js.map
