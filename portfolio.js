/* =========================================================
   PORTFOLIO.JS - SAIRI BANGUN MANDIRI
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* =======================================================
     1. PORTFOLIO CAROUSEL - SECTION BERANDA
     ======================================================= */

  const portfolioTrack = document.getElementById("portfolioTrack");
  const portfolioPrev = document.querySelector(".portfolio-prev");
  const portfolioNext = document.querySelector(".portfolio-next");

  if (portfolioTrack && portfolioPrev && portfolioNext) {

    function getPortfolioDistance() {

      const item =
        portfolioTrack.querySelector(".portfolio-item");

      if (!item) return 0;

      const gap =
        parseFloat(
          getComputedStyle(portfolioTrack).gap
        ) || 0;

      return item.getBoundingClientRect().width + gap;
    }


    portfolioNext.addEventListener("click", function () {

      const distance = getPortfolioDistance();

      if (!distance) return;

      if (
        portfolioTrack.scrollLeft +
        portfolioTrack.clientWidth >=
        portfolioTrack.scrollWidth - 10
      ) {

        portfolioTrack.scrollTo({
          left: 0,
          behavior: "smooth"
        });

      } else {

        portfolioTrack.scrollBy({
          left: distance,
          behavior: "smooth"
        });

      }

    });


    portfolioPrev.addEventListener("click", function () {

      const distance = getPortfolioDistance();

      if (!distance) return;

      if (portfolioTrack.scrollLeft <= 10) {

        portfolioTrack.scrollTo({
          left: portfolioTrack.scrollWidth,
          behavior: "smooth"
        });

      } else {

        portfolioTrack.scrollBy({
          left: -distance,
          behavior: "smooth"
        });

      }

    });

  }



  /* =======================================================
     2. GALLERY FILTER
     ======================================================= */

  const filters =
    document.querySelectorAll(".gallery-filter");

  const cards =
    document.querySelectorAll(".gallery-card");


  filters.forEach(function (button) {

    button.addEventListener("click", function () {

      filters.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const filter =
        button.getAttribute("data-filter");


      cards.forEach(function (card) {

        if (
          filter === "all" ||
          card.classList.contains(filter)
        ) {

          card.style.display = "";

        } else {

          card.style.display = "none";

        }

      });

    });

  });



  /* =======================================================
     3. PROJECT PHOTO SLIDER
     ======================================================= */

  const projectSliders =
    document.querySelectorAll(".project-photo-slider");


  projectSliders.forEach(function (slider) {

    const track =
      slider.querySelector(".project-photo-track");

    const photos =
      slider.querySelectorAll(".project-photo-track img");

    const prev =
      slider.querySelector(".project-slider-prev");

    const next =
      slider.querySelector(".project-slider-next");

    const counter =
      slider.querySelector(".project-photo-count");


    if (
      !track ||
      !photos.length ||
      !prev ||
      !next
    ) {
      return;
    }


    let current = 0;


    function updateProjectSlider() {

      track.style.transform =
        "translateX(-" + (current * 100) + "%)";


      if (counter) {

        counter.textContent =
          (current + 1) + " / " + photos.length;

      }

    }


    next.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      current++;

      if (current >= photos.length) {
        current = 0;
      }

      updateProjectSlider();

    });


    prev.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      current--;

      if (current < 0) {
        current = photos.length - 1;
      }

      updateProjectSlider();

    });


    updateProjectSlider();

  });



  /* =======================================================
     4. LIGHTBOX
     ======================================================= */

  const lightbox =
    document.getElementById("galleryLightbox");

  const lightboxImage =
    document.getElementById("galleryLightboxImage");

  const lightboxCount =
    document.getElementById("galleryLightboxCount");

  const lightboxClose =
    document.querySelector(".gallery-lightbox-close");

  const lightboxPrev =
    document.querySelector(".gallery-lightbox-prev");

  const lightboxNext =
    document.querySelector(".gallery-lightbox-next");


  let lightboxImages = [];
  let lightboxIndex = 0;


  /* -------------------------------------------------------
     TAMPILKAN FOTO LIGHTBOX
     ------------------------------------------------------- */

  function showLightboxImage() {

    if (
      !lightboxImages.length ||
      !lightboxImage
    ) {
      return;
    }


    const image =
      lightboxImages[lightboxIndex];


    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "";


    if (lightboxCount) {

      lightboxCount.textContent =
        (lightboxIndex + 1) +
        " / " +
        lightboxImages.length;

    }

  }



  /* -------------------------------------------------------
     FOTO BERIKUTNYA
     ------------------------------------------------------- */

  function nextLightboxImage() {

    if (!lightboxImages.length) return;

    lightboxIndex++;

    if (
      lightboxIndex >=
      lightboxImages.length
    ) {

      lightboxIndex = 0;

    }

    showLightboxImage();

  }



  /* -------------------------------------------------------
     FOTO SEBELUMNYA
     ------------------------------------------------------- */

  function previousLightboxImage() {

    if (!lightboxImages.length) return;

    lightboxIndex--;

    if (lightboxIndex < 0) {

      lightboxIndex =
        lightboxImages.length - 1;

    }

    showLightboxImage();

  }



  /* -------------------------------------------------------
     BUKA LIGHTBOX
     ------------------------------------------------------- */

  document
    .querySelectorAll(".gallery-photo")
    .forEach(function (photo) {

      photo.addEventListener("click", function (event) {


        /* Jangan buka lightbox ketika tombol slider diklik */

        if (
          event.target.closest(
            ".project-slider-prev"
          ) ||
          event.target.closest(
            ".project-slider-next"
          )
        ) {

          return;

        }


        const images =
          photo.querySelectorAll("img");


        if (
          !images.length ||
          !lightbox ||
          !lightboxImage
        ) {

          return;

        }


        lightboxImages =
          Array.from(images);


        /*
          Cari foto yang sedang tampil.
          Kalau card sedang berada di foto 3,
          lightbox juga membuka foto 3.
        */

        let visibleIndex = 0;


        lightboxImages.forEach(
          function (image, index) {

            const rect =
              image.getBoundingClientRect();

            if (rect.width > 0) {
              visibleIndex = index;
            }

          }
        );


        lightboxIndex =
          visibleIndex;


        showLightboxImage();


        lightbox.classList.add("open");

        lightbox.setAttribute(
          "aria-hidden",
          "false"
        );

        document.body.style.overflow =
          "hidden";

      });

    });



  /* =======================================================
     5. TOMBOL LIGHTBOX
     ======================================================= */

  if (lightboxPrev) {

    lightboxPrev.addEventListener(
      "click",
      function (event) {

        event.preventDefault();
        event.stopPropagation();

        previousLightboxImage();

      }
    );

  }


  if (lightboxNext) {

    lightboxNext.addEventListener(
      "click",
      function (event) {

        event.preventDefault();
        event.stopPropagation();

        nextLightboxImage();

      }
    );

  }



  /* =======================================================
     6. TUTUP LIGHTBOX
     ======================================================= */

  function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove("open");


    lightbox.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.style.overflow = "";


    if (lightboxImage) {
      lightboxImage.src = "";
    }


    lightboxImages = [];
    lightboxIndex = 0;

  }



  if (lightboxClose) {

    lightboxClose.addEventListener(
      "click",
      function (event) {

        event.preventDefault();
        event.stopPropagation();

        closeLightbox();

      }
    );

  }



  /* =======================================================
     7. KLIK AREA GELAP UNTUK MENUTUP
     ======================================================= */

  if (lightbox) {

    lightbox.addEventListener(
      "click",
      function (event) {

        if (
          event.target === lightbox
        ) {

          closeLightbox();

        }

      }
    );

  }



  /* =======================================================
     8. KEYBOARD
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

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

        event.preventDefault();

        previousLightboxImage();

      }


      if (event.key === "ArrowRight") {

        event.preventDefault();

        nextLightboxImage();

      }

    }
  );


});
