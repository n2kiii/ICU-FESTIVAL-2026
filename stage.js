(function () {
  'use strict';

  var main = document.querySelector('main.page-shell');
  if (!main) return;

  main.innerHTML = '<section class="stage-page"><div class="stage-page__heading"><p class="eyebrow">STAGE PROGRAM</p><h1>STAGE</h1><p>天候を選ぶと当日のステージスケジュールを確認できます。</p></div><div class="stage-weather" role="group" aria-label="天候を選択"><button class="stage-weather__button is-active" type="button" data-weather="sunny">晴れ</button><button class="stage-weather__button" type="button" data-weather="rainy">雨</button></div><div class="stage-schedule"><img class="stage-schedule__image" alt="ステージスケジュール"></div></section>';

  var scheduleImage = main.querySelector('.stage-schedule__image');
  var weatherButtons = main.querySelectorAll('.stage-weather__button');

  function setScheduleImage(weather) {
    scheduleImage.src = weather === 'sunny' ? 'assets/stage-schedule-sunny.jpg' : 'assets/stage-schedule-rainy.jpg';
  }

  weatherButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      weatherButtons.forEach(function (item) {
        var active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      setScheduleImage(button.dataset.weather);
    });
  });

  setScheduleImage('sunny');
}());
