
export async function getPhotos(query) {

    const URL = 'https://pixabay.com/api/';
    const KEY = '42790430-4cd5f161d32f048d75e866bf2';
    const LINK = `${URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(LINK).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}