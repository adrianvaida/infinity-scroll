const imageContainer = document.querySelector('#image-container');

const loader = document.querySelector('#loader');

// Unsplash Api

const count = 30;
const apiKey = 'T0OXqxnma5zd854LpwvBWxJ3rWbHSbRg2hbY0Lm_leM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = [];

function setAtributes(elemnt, atributes) {
    for (const key in atributes) {
        elemnt.setAttribute(key, atributes[key]);
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('A');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');

        setAtributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        const img = document.createElement('IMG');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAtributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


async function getPhotosFromUnsplash() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();

        displayPhotos();
    } catch (error) {

    }
}

getPhotosFromUnsplash();