(function () {
  'use strict';

  if (!window.__pageLoaderInitialized) {
    var loadingScript = document.createElement('script');
    loadingScript.src = 'loading.js';
    document.head.appendChild(loadingScript);
  }

  if (window.location.pathname.endsWith('/donation.html')) {
    var donationStyle = document.createElement('link');
    donationStyle.rel = 'stylesheet';
    donationStyle.href = 'donation.css';
    document.head.appendChild(donationStyle);
    var donationLayoutStyle = document.createElement('link');
    donationLayoutStyle.rel = 'stylesheet';
    donationLayoutStyle.href = 'donation-layout.css';
    document.head.appendChild(donationLayoutStyle);
  }

  var footer = document.querySelector('.site-footer');
  document.querySelectorAll('.site-nav a[href="donation.html"]').forEach(function (link) {
    link.textContent = 'SUPPORT';
  });
  if (!footer || footer.querySelector('.social-links')) return;

  var style = document.createElement('style');
  style.textContent = '.page-shell,.theme-page{background:linear-gradient(135deg,#f6e2ec 0%,#e9f4f7 34%,#c5eaf4 72%,#a9dcea 100%)}.social-links{display:flex;gap:12px;max-width:1180px;margin:28px auto 0}.social-link{display:grid;width:44px;height:44px;place-items:center;border:1px solid rgba(255,255,255,.42);color:var(--paper);text-decoration:none;transition:transform .2s ease,background .2s ease}.social-link:hover{background:var(--rose);transform:translateY(-3px)}.social-link svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2}.social-link--tiktok svg{fill:currentColor;stroke:none}.social-link--instagram{border-radius:12px}.social-link--tiktok{border-radius:50%}';
  document.head.appendChild(style);

  var links = document.createElement('div');
  links.className = 'social-links';
  links.setAttribute('aria-label', '公式SNS');
  links.innerHTML = '<a class="social-link social-link--instagram" href="https://www.instagram.com/icu_fes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg></a><a class="social-link social-link--tiktok" href="https://www.tiktok.com/@isolated_crazy_utopia?is_from_webapp=1&amp;sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.2a4.7 4.7 0 1 1-3.5-4.55v2.8a2 2 0 1 0 .8 1.75V3h2.7c.35 2 1.5 3.3 3.5 3.65v2.7A6.6 6.6 0 0 1 14 8.1V3z"></path></svg></a>';
  footer.insertBefore(links, footer.querySelector('.footer-bottom'));
}());
