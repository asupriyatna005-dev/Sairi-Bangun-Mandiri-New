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

/* =========================================================
   FULL GALLERY FILTER + LIGHTBOX
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".gallery-filter");
  const cards = document.querySelectorAll(".gallery-card");
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("galleryLightboxImage");
  const close = document.querySelector(".gallery-lightbox-close");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
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

  document.querySelectorAll(".gallery-photo").forEach((photo) => {
    photo.addEventListener("click", () => {
      const image = photo.querySelector("img");
      if (!image || !lightbox || !lightboxImage) return;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (close) close.addEventListener("click", closeLightbox);

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
});
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
