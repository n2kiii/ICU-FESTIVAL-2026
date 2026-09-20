const supportTitle = document.querySelector("main.page-shell:has(.donation-letter) > .section-heading h1");

if (supportTitle && window.matchMedia("(max-width: 760px)").matches) {
  supportTitle.innerHTML = "ICU祭を、<br>これからも一緒に";
}
