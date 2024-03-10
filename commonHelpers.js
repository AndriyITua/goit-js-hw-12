import{S as f,i as d}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function m(o){const n=`https://pixabay.com/api/?key=42790430-4cd5f161d32f048d75e866bf2&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const l=document.querySelector(".gallery");function p(o){const t=o.map(s=>`<a href="${s.largeImageURL}" class="photo-card">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy"/>
        <div class="info">
            <p class="info-item">
            <b>Likes<br>${s.likes}</b>
            </p>
            <p class="info-item">
            <b>Views<br>${s.views}</b>
            </p>
            <p class="info-item">
            <b>Comments<br>${s.comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads<br>${s.downloads}</b>
            </p>
        </div>
        </a>`).join("");l.insertAdjacentHTML("beforeend",t)}const u=document.querySelector(".search-form"),c=document.querySelector(".loader");document.querySelector(".load-more");function a(){d.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"})}const h=new f(".gallery a",{captionsData:"alt",captionType:"alt",captionDelay:200,captionPosition:"bottom"});function y(o){o?(u.reset(),l.innerHTML="",c.classList.remove("visually-hidden"),setTimeout(()=>{c.classList.add("visually-hidden")},1e3),setTimeout(()=>{m(o).then(t=>{t.hits.length===0?a():(p(t.hits),h.refresh())}).catch(t=>a()).finally()},1e3)):a()}u.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.searchQuery.value;y(t)});
//# sourceMappingURL=commonHelpers.js.map
