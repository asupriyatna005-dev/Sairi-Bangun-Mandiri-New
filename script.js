
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text = `Halo Sairi Bangun Mandiri,

Saya ingin konsultasi mengenai pekerjaan:

Nama: ${name}
No. WhatsApp: ${phone}
Layanan: ${service}
Pesan: ${message || "-"}

Mohon informasi lebih lanjut. Terima kasih.`;

  window.open(
    `https://wa.me/6285716499600?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener"
  );
});
<script>

const galleryImages =
document.querySelectorAll('.gallery-item img');

const lightbox =
document.getElementById('lightbox');

const lightboxImg =
document.getElementById('lightbox-img');

const closeBtn =
document.querySelector('.lightbox-close');

galleryImages.forEach(img=>{

  img.addEventListener('click',()=>{

    lightbox.style.display='flex';
    lightboxImg.src=img.src;

  });

});

closeBtn.addEventListener('click',()=>{

  lightbox.style.display='none';

});

lightbox.addEventListener('click',(e)=>{

  if(e.target===lightbox){
     lightbox.style.display='none';
  }

});

</script>
