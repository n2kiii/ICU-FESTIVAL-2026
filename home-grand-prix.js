(() => {
  'use strict';

  const electionNotice = document.querySelector('.election-notice');
  if (!electionNotice || document.querySelector('.grand-prix-notice')) return;

  const booth = document.createElement('article');
  booth.className = 'grand-prix-notice';
  booth.innerHTML = `
    <div class="grand-prix-notice__heading">
      <p class="eyebrow">ICU FESTIVAL AWARDS</p>
      <h2>ICUグランプリ</h2>
      <p class="grand-prix-notice__lead">ICUグランプリを開催！<br>あなたの1票が各部門のグランプリを決めます！<br>推しテントに清き1票を✨</p>
    </div>
    <p class="grand-prix-notice__copy">投票結果をもとに、3つの部門ごとにICUグランプリを決定します。見事グランプリに輝いたテントは…<br>10月12日のグランドフィナーレのステージにて表彰式を実施します！<br>豪華景品も贈呈！✨✨<br>テントを楽しむだけではなく、投票にも参加してICU祭を一緒に盛り上げていきましょう！<br>たくさんのご参加、お待ちしています✊</p>
    <div class="grand-prix-categories" aria-label="ICUグランプリの部門">
      <div class="grand-prix-category"><strong>また行きたい賞</strong><span>総合的に一番楽しめた！面白かった😆</span></div>
      <div class="grand-prix-category"><strong>ホスピタリティ賞</strong><span>接客や居心地が良かった！😻</span></div>
      <div class="grand-prix-category"><strong>ベストアイデア賞</strong><span>発想・企画内容が優れていた！💡</span></div>
    </div>
    <div class="grand-prix-actions">
      <a class="grand-prix-button grand-prix-button--vote" href="https://docs.google.com/forms/d/1iyfgMVHbsRnvhJVymC1wQ1a-qnotRBetC0Xyf960fk0/edit?hl=ja" target="_blank" rel="noopener noreferrer">投票フォームはこちら <span aria-hidden="true">✦</span></a>
      <a class="grand-prix-button grand-prix-button--tents" href="groups.html#outdoor-tents">屋外テント企画を見る <span aria-hidden="true">→</span></a>
    </div>
    <div class="grand-prix-curtain-stage" aria-hidden="true">
      <div class="grand-prix-curtain grand-prix-curtain--left"></div>
      <div class="grand-prix-curtain grand-prix-curtain--right"></div>
      <div class="grand-prix-curtain-valance"><span>ICU GRAND PRIX</span></div>
      <span class="grand-prix-curtain-tassel grand-prix-curtain-tassel--left"></span>
      <span class="grand-prix-curtain-tassel grand-prix-curtain-tassel--right"></span>
    </div>`;

  electionNotice.parentNode.insertBefore(booth, electionNotice);

  const curtainObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      booth.classList.toggle('is-curtains-open', entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px' });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    booth.classList.add('is-curtains-open');
  } else {
    curtainObserver.observe(booth);
  }
})();
