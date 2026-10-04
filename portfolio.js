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
