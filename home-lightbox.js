const timetableImage = document.querySelector(".bus-timetable img");

const supportCardTitle = document.querySelector(".section--paper .link-card:nth-child(5) h3");
const thanksCardTitle = document.querySelector(".section--paper .link-card:nth-child(6) h3");
if (supportCardTitle) supportCardTitle.textContent = "ご支援のお願い";
if (thanksCardTitle) thanksCardTitle.textContent = "SPECIAL THANKS";

const sponsorGrid = document.querySelector(".sponsor-grid");
if (sponsorGrid) {
  sponsorGrid.innerHTML = `<a href="https://subsites.icu.ac.jp/yuasa_museum/taizanso_web/" aria-label="泰山荘特別公開" target="_blank" rel="noopener noreferrer"><img src="assets/sponsor-taizanso.png" alt="泰山荘特別公開"></a><a href="https://subsites.icu.ac.jp/yuasa_museum/" aria-label="ICU湯浅八郎記念館" target="_blank" rel="noopener noreferrer"><img src="assets/sponsor-hachiro.png" alt="ICU湯浅八郎記念館"></a><a href="https://musasisakai-ds.co.jp/" aria-label="武蔵境自動車教習所" target="_blank" rel="noopener noreferrer"><img src="assets/sponsor-musashisakai.jpg" alt="武蔵境自動車教習所"></a><a href="https://menkyolive.net/" aria-label="免許合宿ライブ" target="_blank" rel="noopener noreferrer"><img src="assets/sponsor-menkyo-live.png" alt="免許合宿ライブ"></a>`;
}

if (timetableImage) {
  const lightbox = document.createElement("dialog");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-label", "バス時刻表の拡大表示");
  lightbox.innerHTML = `<button class="image-lightbox__close" type="button" aria-label="拡大表示を閉じる">×</button><img src="${timetableImage.src}" alt="${timetableImage.alt}">`;
  document.body.append(lightbox);

  timetableImage.classList.add("is-zoomable");
  timetableImage.setAttribute("tabindex", "0");
  timetableImage.setAttribute("role", "button");
  timetableImage.setAttribute("aria-label", "バス時刻表を拡大表示");

  const openLightbox = () => lightbox.showModal();
  const closeLightbox = () => lightbox.close();
  timetableImage.addEventListener("click", openLightbox);
  timetableImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox();
    }
  });
  lightbox.querySelector(".image-lightbox__close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}