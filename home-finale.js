const finale = document.querySelector(".festival-finale");

if (finale) {
  const marquee = finale.querySelector(".festival-finale__marquee");
  const track = finale.querySelector(".festival-finale__track");
  const duplicate = track.cloneNode(true);

  duplicate.classList.add("festival-finale__track--duplicate");
  duplicate.setAttribute("aria-hidden", "true");
  duplicate.querySelectorAll("img").forEach((image) => {
    image.alt = "";
  });
  marquee.append(duplicate);
}