import{a as h,i as y,S as $}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const m=document.querySelector(".keywords"),i=document.querySelector(".loading"),f="https://pixabay.com/api/",g="42790430-4cd5f161d32f048d75e866bf2",c=15;let a=1;async function w(){a=1;const o=encodeURIComponent(m.value),e=`${f}?key=${g}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${c}`;localStorage.setItem("KEY_FOR_SEARCH",o);const t=await h.get(e),l=t.data.totalHits;return localStorage.setItem("TOTAL_HITS",l),i.classList.add("visually-hidden"),t.data}async function b(){i.classList.remove("visually-hidden");const o=localStorage.getItem("TOTAL_HITS");if(a<o/c){a++;const e=localStorage.getItem("KEY_FOR_SEARCH"),t=`${f}?key=${g}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=${c}`,l=await h.get(t);return i.classList.add("visually-hidden"),l.data}}const C=()=>y.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",backgroundColor:"#EF4040",close:!0,layout:2,timeout:3e3}),H=()=>y.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16",backgroundColor:"#FFA000",close:!0,layout:2,timeout:3e3}),p=document.querySelector(".gallery");function v(o){const e=o.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${t.previewURL}" 
                    alt="${t.tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>likes</h2>
                    <p>${t.likes}</p>
                </div>
                <div class="column">
                    <h2>views</h2>
                    <p>${t.views}</p>
                </div>
                 <div class="column">
                    <h2>comments</h2>
                    <p>${t.comments}</p>
                </div>
                <div class="column">
                    <h2>downloads</h2>
                    <p>${t.downloads}</p>
                </div>
            </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",e)}const L=new $(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function S(){const t=2*document.querySelector(".gallery-item").getBoundingClientRect().height;setTimeout(()=>{window.scrollBy({top:t,left:0,behavior:"smooth"})},1e3)}const u=document.querySelector(".form-search"),n=document.querySelector(".btn-more");u.addEventListener("submit",o=>{o.preventDefault(),p.innerHTML="",n.classList.add("visually-hidden"),m.value&&(i.classList.remove("visually-hidden"),w().then(e=>{if(e.totalHits>0)return e.totalHits>a*c&&n.classList.remove("visually-hidden"),e.hits}).then(e=>{v(e),L.refresh(),S()}).catch(()=>{C()}).finally(()=>{u.reset()}))});n.addEventListener("click",o=>{o.preventDefault(),b().then(e=>(e.totalHits<a*c&&(n.classList.add("visually-hidden"),i.classList.add("visually-hidden"),H()),e.hits)).then(e=>{v(e),L.refresh(),S()}).catch(()=>{n.classList.add("visually-hidden"),i.classList.add("visually-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
