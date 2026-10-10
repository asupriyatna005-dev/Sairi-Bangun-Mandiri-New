
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
    `https://wa.me/628219797436?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener"
  );
});
/* =========================================================
   PETA JANGKAUAN - INTERAKTIF
   ========================================================= */

document.querySelectorAll('.map-point').forEach(point => {

    point.addEventListener('click', function () {

        document.querySelectorAll('.map-point').forEach(item => {
            if (item !== this) {
                item.classList.remove('active');
            }
        });

        this.classList.toggle('active');

    });

});
document.querySelectorAll('.service-toggle').forEach(button=>{button.addEventListener('click',()=>{const desc=button.parentElement.querySelector('.service-desc');desc.classList.toggle('service-desc-open');button.textContent=desc.classList.contains('service-desc-open')?'←':'→'})});
