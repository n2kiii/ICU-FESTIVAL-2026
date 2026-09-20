(function () {
  'use strict';

  if (window.__pageLoaderInitialized) return;
  window.__pageLoaderInitialized = true;

  var stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'loading.css';
  document.head.append(stylesheet);

  var loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.setAttribute('aria-label', 'ページを読み込み中');
  loader.innerHTML = '<div class="page-loader__inner"><span class="page-loader__moon" aria-hidden="true"></span><p class="page-loader__label">BLUE ROSE</p><p class="page-loader__copy">loading...</p></div>';
  document.body.prepend(loader);

  function hide() {
    window.requestAnimationFrame(function () {
      loader.classList.add('is-hidden');
    });
  }

  var roseRainStarted = false;
  function showRoseRain() {
    if (roseRainStarted) return;
    roseRainStarted = true;
    if (window.location.pathname.endsWith('/index.html') === false && window.location.pathname.endsWith('/') === false) {
      hide();
      return;
    }
    var rain = document.createElement('div');
    rain.className = 'rose-rain';
    rain.innerHTML = '<img class="rose-rain__image" src="assets/blue-rose-rain.png" alt="">';
    document.body.append(rain);
    rain.addEventListener('animationend', function () {
      rain.remove();
      hide();
    }, { once: true });
  }

  window.setTimeout(showRoseRain, 4900);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setTimeout(showRoseRain, 0);
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a');
    if (!link || event.defaultPrevented || link.target === '_blank' || link.hasAttribute('download')) return;

    var href = link.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('javascript:') === 0) return;
    if (link.origin !== window.location.origin) return;

    loader.classList.remove('is-hidden');
  });
}());
