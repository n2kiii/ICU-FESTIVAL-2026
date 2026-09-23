(function () {
  'use strict';

  var main = document.querySelector('main.page-shell');
  if (!main) return;

  var stagePrograms = [
    { id: 'koukasa', group: '劇団黄河砂', title: 'グレイト・フューチャー', pr: '就活に失敗した吉田は親戚のツテで小さなIT企業へ入社する。変な会社の変な人たちが醸し出すおかしみをとことん詰め込んでいます。一緒に未来を笑い飛ばしましょう' },
    { id: 'icu-lambs', group: 'ICU LAMBS', title: 'ICU LAMBS', icon: 'assets/tent51.JPG', pr: 'こんにちは、ICU LAMBSです！今年のICU祭では先日出場した浅草サンバカーニバルで行った演目を含むサンバのパフォーマンスをします！ぜひ見にきてください！' },
    { id: 'grand-finale', group: 'ICU祭実行委員会 GF企画', title: 'ICU祭グランドフィナーレ', pr: 'ICU祭を締めくくるグランドフィナーレ！今年はICU生、ICU卒のスペシャルゲストと共にステージを作り上げ、素敵なランタンをあげて締めくくります！' },
    { id: 'unbrand', group: 'UNBRAND', title: 'UNBRAND', pr: '声だけで魅せるUNBRANDの“オンリーワン”なアカペラライブ。息ピッタリのチームワークと重なるハーモニーで、あなたの心を揺さぶる最高の時間をお届けします！' },
    { id: 'capellas', group: 'ソングリーダー部　Capellas', title: 'Capellas 2026 ICU祭公演', icon: 'assets/icon-capellas.JPEG', pr: 'こんにちは！ICUソングリーダー部Capellasです💫フレッシュでチアフルなパフォーマンスをどうぞ見に来てください！Go Capellas!' },
    { id: 'pucapass', group: 'Pucapass', title: 'Pucapass', icon: 'assets/icon-pucapass.png', pr: '私たちはK-POPコピーダンスサークルPucapassです！雨上がりの虹のように、色鮮やかで爽やかなパフォーマンスをお届けします！ぜひお楽しみください！！' },
    { id: 'wadaiko', group: '国際基督教大学和太鼓部', title: '笑顔満祭', icon: 'assets/icon-wadaiko.png', pr: '太鼓の音に乗せて、みんなで笑顔になれるひとときを――。心をひとつにした演奏で、皆さんに笑顔と元気をお届けします！「笑顔満祭」、ぜひ会場でお楽しみください！' },
    { id: 'melody-union', group: 'Melody Union✖️Jazz Funk Keystation', title: 'MUJFK祭ライブ', icon: 'assets/icon-melody union.png', pr: '部員の投票で選ばれた精鋭バンド達が、アツい演奏でICU祭を盛り上げます！ファミマ奥の多目的ホールにぜひお越しください！' },
    { id: 'i-cupid', group: 'I-Cupid', title: 'あいきゅぴふぇす！', icon: 'assets/icon-i-cupid.jpg', pr: '私たちI-Cupidです！日本アイドルのカバーダンスをしています！魅力のつまったステージで笑顔をお届けします♡ぜひ会いにきてください！お楽しみに♡♡' },
    { id: 'smooth-steppers', group: 'Smooth Steppers', title: 'Axis', icon: 'assets/icon-smooth steppers.png', pr: 'ICU唯一のストリートダンスサークル、Smooth Steppersです！私たちらしさを「Axis」に込めて、本気のダンスをお届けします！' },
    { id: 'shamisen', group: '三味線くらぶ (長唄研究会)', title: '三味線LIVE', icon: 'assets/icon-shamisen.png', pr: '今年で創設51年を迎えました。三味線クラブです！10月11日13:30より、新D館多目的ホールにて長唄の演奏をお届けします。ぜひお立ち寄りください♪' },
    { id: 'opening', group: 'ICU祭実行委員会　OP企画', title: 'ICU祭オープニングステージ', pr: 'ICU祭の幕開けを飾るオープニングステージ！ICU生による豪華な演奏で会場を華やかに彩ります✨ さらに、三鷹の森からスペシャルゲストが遊びに来てくれるかも…？ぜひお楽しみに！' },
    { id: 'db2', group: 'DB2', title: 'ボリウッドダンス', pr: 'インドでボリウッドダンスを習ったメンバーが主体のダンスグループです。インドのダンスをお楽しみください。' },
    { id: 'icu-musical', group: 'ICU歌劇団', title: '『夜明けを夢見て』コンサート', pr: 'ICU歌劇団による新作ミュージカル『夜明けを夢見て』本公演に先駆けて、制作発表会を兼ねたコンサートを行います♪ 完全オリジナル楽曲を初披露！乞うご期待！！' },
    { id: 'icu-angels', group: 'チアリーディング部Angels', title: 'AngelsからCheer for you!', icon: 'assets/icon-icu-angels.jpg', pr: '皮様にたくさんのエールと感動をお届けできるよう日々練習に取り組んできました！！ICU祭だからこそできるpopで楽しい演技や、12月の大会で実際に行う演技を披露します✨チアリーディングを見たことがない方、Angelsに興味がある方、ぜひお越しください💖アホ山ステージで待ってます📣' },
    { id: 'aikido', group: '心身統一合気道部', title: '心身統一合気道部 演武会', icon: 'assets/icon-aikido.jpg', pr: 'ICU心身統一合気道部です！今年も、現役部員たちが行う技のデモンストレーションである演武会を開催します。合気道や武道に少しでも興味がある方、ぜひご覚ください！' },
    { id: 'clumsy', group: 'The Clumsy Chorus', title: 'The Clumsy Chorus Gospel Live', icon: 'assets/icon-clumsy.jpeg', pr: '私たちThe Clumsy Chorusは、バンドとコーラスからなるゴスペルサークルです。私たちが作り上げる雰囲気を、ぜひ全身で感じてみてください！' },
    { id: 'nihonbuyo', group: 'ICU 日本舞踊研究会', title: 'ICU祭舞踊公演', pr: '着物や扇、長唄の音色とともに、美しく華やかな踊りをお届けします。日本舞踊を知らない方も楽しめる舞台です。日本の伝統芸能の魅力を、ぜひ間近で感じてください！' }
  ];

  main.innerHTML = '<section class="stage-page"><div class="stage-page__heading"><p class="eyebrow">STAGE PROGRAM</p><h1>STAGE</h1><p>天候を選ぶと当日のステージスケジュールを確認できます。</p></div><div class="stage-weather" role="group" aria-label="天候を選択"><button class="stage-weather__button is-active" type="button" data-weather="sunny">晴れ</button><button class="stage-weather__button" type="button" data-weather="rainy">雨</button></div><div class="stage-schedule"><img class="stage-schedule__image" alt="ステージスケジュール"></div><div class="stage-program-grid">' + stagePrograms.map(function (program) {
    return '<article class="stage-program-card"><img class="stage-program-card__icon" src="' + (program.icon || 'assets/icon-nothing.png') + '" onerror="this.src=\'assets/icon-nothing.png\'" alt="' + program.group + 'のアイコン"><h3>' + program.group + '</h3><p class="stage-program-card__title">' + program.title + '</p><p>' + program.pr + '</p></article>';
  }).join('') + '</div></section>';

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
