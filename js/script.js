const imageContainer = document.querySelector('#image-container');
const loader = document.querySelector('#loader');

// Unsplash Api

const count = 3;
const apiKey = 'T0OXqxnma5zd854LpwvBWxJ3rWbHSbRg2hbY0Lm_leM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = [];

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


async function getPhotosFromUnsplash() {
    try {
        const response = await fetch(apiUrl);
        const photosArray = await response.json();

        displayPhotos();
    } catch (error) {

    }
}

getPhotosFromUnsplash();