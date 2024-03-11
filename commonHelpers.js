import{S as f,i as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function m(o){const n=`https://pixabay.com/api/?key=42790430-4cd5f161d32f048d75e866bf2&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const u=document.querySelector(".gallery");function p(o){const s=o.map(t=>`<a href="${t.largeImageURL}" class="photo-card">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
        <div class="info">
            <p class="info-item">
            <b>Likes<br>${t.likes}</b>
            </p>
            <p class="info-item">
            <b>Views<br>${t.views}</b>
            </p>
            <p class="info-item">
            <b>Comments<br>${t.comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads<br>${t.downloads}</b>
            </p>
        </div>
        </a>`).join("");u.insertAdjacentHTML("beforeend",s)}const c=document.querySelector(".search-form"),l=document.querySelector(".loader");function a(){d.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"})}const h=new f(".gallery a",{captionsData:"alt",captionType:"alt",captionDelay:200,captionPosition:"bottom"});function y(o){o.preventDefault();const s=o.target.elements.searchQuery.value;s?(u.innerHTML="",l.classList.remove("visually-hidden"),setTimeout(()=>{m(s).then(t=>{t.hits.length===0?(c.reset(),a()):(c.reset(),p(t.hits),h.refresh())}).catch(t=>a()).finally(l.classList.add("visually-hidden"))},1e3)):a()}c.addEventListener("submit",o=>y(o));
//# sourceMappingURL=commonHelpers.js.map
