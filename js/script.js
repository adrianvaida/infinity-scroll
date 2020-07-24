const imageContainer = document.querySelector('#image-container');

const loader = document.querySelector('#loader');

// Unsplash Api
// let initialLoad = true;
let count = 5;
const apiKey = 'T0OXqxnma5zd854LpwvBWxJ3rWbHSbRg2hbY0Lm_leM';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let ready = false;
let imageLoaded = 0;
let totalImages = 0;
let photosArray = [];

function imageLoding(){
    imageLoaded++;
    
    if(imageLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        // initialLoad = false;
        count = 30;
    } 
}

function setAtributes(elemnt, atributes) {
    for (const key in atributes) {
        elemnt.setAttribute(key, atributes[key]);
    }
}

function displayPhotos() {
    imageLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        const item = document.createElement('A');

        setAtributes(item, {
            href: photo.links.html,
            target: '_blank'
        });

        const img = document.createElement('IMG');

        setAtributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        img.addEventListener('load', imageLoding);

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

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotosFromUnsplash();
    }
});

getPhotosFromUnsplash();