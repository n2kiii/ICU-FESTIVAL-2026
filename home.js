(function () {
  'use strict';

  var moon = document.querySelector('.hero__moon');
  var fallback = document.querySelector('.hero__moon-fallback');
  if (!moon || !fallback) return;

  function showFallback() {
    moon.hidden = true;
    fallback.hidden = false;
  }

  function hideFallback() {
    moon.hidden = false;
    fallback.hidden = true;
  }

  moon.addEventListener('load', hideFallback, { once: true });
  moon.addEventListener('error', showFallback, { once: true });
  if (moon.complete) {
    moon.naturalWidth ? hideFallback() : showFallback();
  }
}());
