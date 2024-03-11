import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const keywords = document.querySelector('.keywords');
const loading = document.querySelector('.loading');

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '42790430-4cd5f161d32f048d75e866bf2';
const perPage = 15;
let page = 1;
    
async function searchImg() {
    page = 1;

    const QUERY = encodeURIComponent(keywords.value);
    const URL = `${API_URL}?key=${API_KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    localStorage.setItem("KEY_FOR_SEARCH", QUERY);

    const response = await axios.get(URL);
    
    const totalHits = response.data.totalHits;
    localStorage.setItem('TOTAL_HITS', totalHits);

    loading.classList.add('visually-hidden'); 

    return response.data;
};

async function seeMoreFunction() {
    loading.classList.remove('visually-hidden');
    const totalHits = localStorage.getItem('TOTAL_HITS');
        
    if (page < (totalHits / perPage)) {
        page++;
        
        const query = localStorage.getItem('KEY_FOR_SEARCH');
        const URL = `${API_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    
        const more = await axios.get(URL);
        loading.classList.add('visually-hidden'); 

        return more.data;
    };
};
        
const errorMessage = () =>
    iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        messageSize: '16',
        backgroundColor: '#EF4040',
        close: true,
        layout: 2,
        timeout: 3000
    });

const errorSeeMore = () =>
    iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        messageColor: '#fff',
        messageSize: '16',
        backgroundColor: '#FFA000',
        close: true,
        layout: 2,
        timeout: 3000
    });

export { keywords, loading, page, perPage, searchImg, seeMoreFunction, errorMessage, errorSeeMore };