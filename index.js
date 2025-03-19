import{a,i as n,S as m}from"./assets/vendor-BBPOLzfb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(i){return a.defaults.baseURL="https://pixabay.com",a.get("/api/",{params:{key:"31908643-2178b12526c513c1beb381d6b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery");function d(i){const s=i.map(t=>`<li class="gallery-item"><a class="gallery-link" href="${t.largeImageURL}"><img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/></a><ul class="img-info-list">
            <li class="img-info-item">
              <h3 class="img-info-item-header">Likes</h3>
              <p class="img-info-item-value">${t.likes}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Views</h3>
              <p class="img-info-item-value">${t.views}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Comments</h3>
              <p class="img-info-item-value">${t.comments}</p>
            </li>
            <li class="img-info-item">
              <h3 class="img-info-item-header">Downloads</h3>
              <p class="img-info-item-value">${t.downloads}</p>
            </li>
          </ul></li>`).join("");u.insertAdjacentHTML("beforeend",s)}function g(){u.innerHTML=""}const h=document.querySelector(".form"),c=document.querySelector(".loader");document.querySelector(".gallery");h.addEventListener("submit",p);function p(i){i.preventDefault();const s=i.currentTarget.searchText.value.trim("");if(s==="")return n.error({theme:"dark",message:"Please, fill out the search field.",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});g(),c.classList.remove("visually-hidden"),f(s).then(t=>{const l=t.data.hits;if(l.length===0)return n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3});d(l),b.refresh()}).catch(t=>console.log(t)).finally(()=>{c.classList.add("visually-hidden")}),i.currentTarget.searchText.value=""}const y={captionDelay:250,captionsData:"alt"};let b=new m(".gallery a",y);
//# sourceMappingURL=index.js.map
