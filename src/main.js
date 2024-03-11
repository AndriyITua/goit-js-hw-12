import { keywords, loading, page, perPage, searchImg, seeMoreFunction, errorMessage, errorSeeMore } from './js/pixabay-api';
import { gallery, lightbox, markUp, scroll } from "./js/render-functions";

const formSearch = document.querySelector('.form-search');
const showMoreBtn = document.querySelector('.btn-more');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    gallery.innerHTML = '';
    showMoreBtn.classList.add('visually-hidden');
    
    if (keywords.value) {
        loading.classList.remove('visually-hidden');

        searchImg()
            .then(data => {
                if (data.totalHits > 0) {
                    if (data.totalHits > (page * perPage)) {
                        showMoreBtn.classList.remove('visually-hidden');
                    }; 
                    return data.hits;
                };
            })
            .then((images) => {
                markUp(images);
                lightbox.refresh();
                scroll();
            })
            .catch(() => {
                errorMessage();
            })
            .finally(() => {
                formSearch.reset();
            });
    };
});

showMoreBtn.addEventListener('click', (event) => {
    event.preventDefault();

    seeMoreFunction()
        .then((data) => {
            if (data.totalHits < (page * perPage)) {
                showMoreBtn.classList.add('visually-hidden'); 
                loading.classList.add('visually-hidden'); 
                errorSeeMore();
            }
            return data.hits;
        })
        .then((images) => {
            markUp(images);
            lightbox.refresh();
            scroll();
        })
        .catch(() => {
            showMoreBtn.classList.add('visually-hidden');
            loading.classList.add('visually-hidden');
        });
});