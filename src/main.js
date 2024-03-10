import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotos } from "./js/pixabay-api.js";
import {gallery, createMarkup} from "./js/render-functions.js"

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader')
const loadMoreBtn = document.querySelector('.load-more');

function textError() {
    iziToast.error({
    title: 'Error!',
    message: 'Sorry, there are no images matching your search query. Please try again!',
});
}

const lightbox = new SimpleLightbox('.gallery a',{
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 200,
  captionPosition: 'bottom',
});

function showImages(query) {
    if (query) {
        form.reset();
        gallery.innerHTML = '';
        
        loader.classList.remove('visually-hidden');
        setTimeout(() => {
            loader.classList.add('visually-hidden');
        }, 1000);

        setTimeout(() => {
            getPhotos(query)
            .then((data) => {
                if (data.hits.length === 0) {
                    textError();
                } else {
                    createMarkup(data.hits);
                    lightbox.refresh();
                }
            }) 
            .catch((error) => textError(error))
            .finally()
        }, 1000); 
    } else {
        textError();
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value;
    showImages(query);
})