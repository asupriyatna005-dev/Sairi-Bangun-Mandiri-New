/* =========================================================
   PORTFOLIO CAROUSEL
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("portfolioTrack");
  const prev = document.querySelector(".portfolio-prev");
  const next = document.querySelector(".portfolio-next");

  if (track && prev && next) {
    const move = () => {
      const item = track.querySelector(".portfolio-item");
      if (!item) return;

      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const distance = item.getBoundingClientRect().width + gap;

      track.scrollBy({
        left: distance,
        behavior: "smooth"
      });
    };

    prev.addEventListener("click", () => {
      const item = track.querySelector(".portfolio-item");
      if (!item) return;

      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const distance = item.getBoundingClientRect().width + gap;

      if (track.scrollLeft <= 5) {
        track.scrollTo({
          left: track.scrollWidth,
          behavior: "smooth"
        });
      } else {
        track.scrollBy({
          left: -distance,
          behavior: "smooth"
        });
      }
    });

    next.addEventListener("click", move);
  }
});
```javascript
```javascript
/* =========================================================
   FULL GALLERY FILTER + LIGHTBOX + FOTO GESER
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {

  const filters = document.querySelectorAll(".gallery-filter");
  const cards = document.querySelectorAll(".gallery-card");

  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("galleryLightboxImage");
  const lightboxCount = document.getElementById("galleryLightboxCount");

  const closeButton = document.querySelector(".gallery-lightbox-close");
  const prevButton = document.querySelector(".gallery-lightbox-prev");
  const nextButton = document.querySelector(".gallery-lightbox-next");

  let currentImages = [];
  let currentIndex = 0;


  /* =========================
     FILTER
  ========================= */

  filters.forEach((button) => {

    button.addEventListener("click", () => {

      filters.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.dataset.filter;

      cards.forEach((card) => {

        card.style.display =
          filter === "all" || card.classList.contains(filter)
            ? ""
            : "none";

      });

    });

  });


  /* =========================
     BUKA LIGHTBOX
  ========================= */

  document.querySelectorAll(".gallery-photo").forEach((photo) => {

    photo.addEventListener("click", (event) => {

      /* Jangan buka lightbox saat tombol slider ditekan */

      if (
        event.target.closest(".project-slider-prev") ||
        event.target.closest(".project-slider-next")
      ) {
        return;
      }

      const images = photo.querySelectorAll("img");

      if (
        !images.length ||
        !lightbox ||
        !lightboxImage
      ) {
        return;
      }

      currentImages = Array.from(images);

      /*
        Cari foto yang sedang terlihat.
        Jadi kalau di card sedang foto 3 / 4,
        lightbox juga langsung membuka foto 3.
      */

      const visibleImage = Array.from(images).find(
        (img) => img.getBoundingClientRect().width > 0
      );

      currentIndex = visibleImage
        ? currentImages.indexOf(visibleImage)
        : 0;

      showLightboxImage();

      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";

    });

  });


  /* =========================
     TAMPILKAN FOTO
  ========================= */

  function showLightboxImage() {

    if (!currentImages.length) return;

    const image = currentImages[currentIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "";

    if (lightboxCount) {
      lightboxCount.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;
    }

  }


  /* =========================
     FOTO SEBELUMNYA
  ========================= */

  function previousImage() {

    if (!currentImages.length) return;

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = currentImages.length - 1;
    }

    showLightboxImage();

  }


  /* =========================
     FOTO BERIKUTNYA
  ========================= */

  function nextImage() {

    if (!currentImages.length) return;

    currentIndex++;

    if (currentIndex >= currentImages.length) {
      currentIndex = 0;
    }

    showLightboxImage();

  }


  /* =========================
     TOMBOL PANAH
  ========================= */

  if (prevButton) {
    prevButton.addEventListener("click", (event) => {

      event.stopPropagation();

      previousImage();

    });
  }


  if (nextButton) {
    nextButton.addEventListener("click", (event) => {

      event.stopPropagation();

      nextImage();

    });
  }


  /* =========================
     TUTUP
  ========================= */

  function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    currentImages = [];
    currentIndex = 0;

  }


  if (closeButton) {
    closeButton.addEventListener(
      "click",
      closeLightbox
    );
  }


  /* =========================
     KLIK AREA GELAP
  ========================= */

  if (lightbox) {

    lightbox.addEventListener("click", (event) => {

      if (event.target === lightbox) {
        closeLightbox();
      }

    });

  }


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", (event) => {

    if (
      !lightbox ||
      !lightbox.classList.contains("open")
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      previousImage();
    }

    if (event.key === "ArrowRight") {
      nextImage();
    }

  });

});
```

// =========================================
// MULTI FOTO PROJECT SLIDER
// =========================================

document.querySelectorAll('.project-photo-slider').forEach(slider => {

  const track = slider.querySelector('.project-photo-track');
  const photos = track.querySelectorAll('img');

  const prev = slider.querySelector('.project-slider-prev');
  const next = slider.querySelector('.project-slider-next');
  const counter = slider.querySelector('.project-photo-count');

  let current = 0;

  function updateSlider() {

    track.style.transform =
      `translateX(-${current * 100}%)`;

    counter.textContent =
      `${current + 1} / ${photos.length}`;
  }

  next.addEventListener('click', (event) => {

    event.stopPropagation();

    current++;

    if (current >= photos.length) {
      current = 0;
    }

    updateSlider();

  });

  prev.addEventListener('click', (event) => {

    event.stopPropagation();

    current--;

    if (current < 0) {
      current = photos.length - 1;
    }

    updateSlider();

  });

});
