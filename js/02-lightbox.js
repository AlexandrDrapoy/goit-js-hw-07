import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImg = document.querySelector(".gallery");

const galleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
  })
  .join("");

galleryImg.insertAdjacentHTML("beforeend", galleryMurkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
