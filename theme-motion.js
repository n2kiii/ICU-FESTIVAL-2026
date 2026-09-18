(function () {
  'use strict';

  var copy = document.querySelector('.theme-copy');
  if (!copy || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var paragraphs = Array.from(copy.querySelectorAll('p'));
  var ticking = false;

  function update() {
    var viewportCenter = window.innerHeight / 2;
    paragraphs.forEach(function (paragraph, index) {
      var bounds = paragraph.getBoundingClientRect();
      var centerDistance = bounds.top + bounds.height / 2 - viewportCenter;
      var distance = centerDistance * -0.04;
      var limitedDistance = Math.max(-14, Math.min(14, distance));
      var visibility = Math.max(0, 1 - Math.abs(centerDistance) / (window.innerHeight * 0.8));
      var isEmphasis = index === 0 || index === 4 || index === paragraphs.length - 1;
      var scale = 1 + visibility * (isEmphasis ? 0.035 : 0.008);
      paragraph.style.setProperty('--scroll-shift-y', limitedDistance.toFixed(2) + 'px');
      paragraph.style.setProperty('--scroll-shift-x', '0px');
      paragraph.style.setProperty('--scroll-scale', scale.toFixed(3));
    });
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
}());
