import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href ="${original}" >
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        /></a>
</div>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryMurkup);

gallery.addEventListener("click", onClickShowOriginalImg);

function onClickShowOriginalImg(evt) {
  evt.preventDefault();
  if (evt.target.className !== "gallery__image") {
    return;
  }
  const markupOriginImg = `<img src='${evt.target.dataset.source}' width="800" height="600">
`;
  const instance = basicLightbox.create(markupOriginImg, {
    onShow: () => document.addEventListener("keydown", onCloseModal),
    onClose: () => document.removeEventListener("keydown", onCloseModal),
  });

  instance.show();

  function onCloseModal(e) {
    if (e.code === "Escape") {
      console.log("esc");
      instance.close();
    }
  }
}
