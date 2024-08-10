function imageSlider(parent) {
  let currentImage = 0;
  const slider = {
    parent: parent,
    images: parent.querySelector(".images"),
    thumbnails: parent.querySelector(".thumbnails"),
    backBtn: parent.querySelector(".back-btn"),
    nextBtn: parent.querySelector(".next-btn"),
  };

  const imageNodes = slider.images.querySelectorAll(".slider-image");
  imageNodes[currentImage].classList.add("active");

  slider.thumbnails.innerHTML = Array.from(imageNodes)
    .map((img) => `<img src="${img.src}" />`)
    .join("");

  const thumbnailNodes = slider.thumbnails.querySelectorAll("img");
  thumbnailNodes[currentImage].classList.add("active");

  function setActiveImage(index) {
    imageNodes[currentImage].classList.remove("active");
    thumbnailNodes[currentImage].classList.remove("active");
    currentImage = index;
    imageNodes[currentImage].classList.add("active");
    thumbnailNodes[currentImage].classList.add("active");
  }

  thumbnailNodes.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => setActiveImage(index));
  });

  slider.backBtn.addEventListener("click", () => {
    setActiveImage((currentImage - 1 + imageNodes.length) % imageNodes.length);
  });

  slider.nextBtn.addEventListener("click", () => {
    setActiveImage((currentImage + 1) % imageNodes.length);
  });

  setInterval(() => {
    setActiveImage((currentImage + 1) % imageNodes.length);
  }, 3000);
}

imageSlider(document.querySelector(".image-slider"));
