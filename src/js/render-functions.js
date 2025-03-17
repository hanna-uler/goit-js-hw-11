import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// let picsArray = [];

export default function renderGallery (picsArray) {
    const galleryEl = document.querySelector(".gallery");
    const galleryMarkup = picsArray
        .map(image => `<li class="gallery-item"><a class="gallery-link" href="${image.largeImageURL}"><img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/></a></li>`)
        .join("");
    
 galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);   
}