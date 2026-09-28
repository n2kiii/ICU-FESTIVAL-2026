(function () {
  'use strict';

  var branches = document.querySelector('.groups-branches');
  var building = document.querySelector('#main-building');
  if (!branches || !building || document.querySelector('#local-festival')) return;

  var projects = [
    ['尾花屋', '新小金井駅の商店街にある古本屋です。専門書・アート・サブカル・絵本など、ちょっと変わった本を幅広く揃えています。本棚整理や古本の買取相談もお気軽にどうぞ。'],
    ['ふらり', '武蔵野市吉祥寺北町にて国産小麦のパンと焼き菓子を販売しています。\nICU祭ではパンとスコーンを販売させていただきます。'],
    ['三鷹若手農家', '三鷹市内で採れた果物を使って作ったわたあめです。\n果樹農家の食べてほしいが詰まったわたあめをぜひ味わってください。'],
    ['cafe sacai', '高架下にあるカフェ。パンケーキや季節毎に変わるメニューもあります。\n昨年末に武蔵境南口にサラミナカフェサカイがオープン。皆様のご来店お待ちしております。'],
    ['TINY PONTA COFFEE', '世界中から選りすぐった高品質のコーヒーをお楽しみいただけます。'],
    ['珈琲や', '「焼きたて、挽きたて、淹れたて」のコーヒーを準備しています。お好みのコーヒーが見つかるはず。焙煎の体験や見学もできますのでお気軽にどうぞ！お待ちしています'],
    ['ウソップチキン', 'アンニョンハセヨ！韓国チキン専門店ウソップチキンです！本場のチキンにチーズがビヨーンのチーズハットグを是非お試しください♪'],
    ['タバジビエ', 'タバジビエは、狩猟肉を専門に扱うキッチンカーです。自分たちで鹿の捕獲→解体→加工・調理→販売をおこなっており、「山の神様からいただいた尊い命を、余すところなくいただく。」という山梨県丹波山村の狩猟の教えを忠実に守り、獲った獲物を適切に処理をし、安全安心なジビエ料理として提供しています。'],
    ['麻辣car 緋花-HIBANA-', '痺れる辛さと旨味がクセになる！話題の本格麻辣湯を是非ご賞味ください！'],
    ['cHii caFe', 'ご注文後に丁寧に焼き上げたもちもち生地が人気です。\n王道のチョコバナナから季節限定など種類豊富にご用意しております。ぜひ焼きたてのもちもち感をお楽しみください☆'],
    ['キッチン・すまいる', '都内ホテルで修行した店主が厳選米粉を使用して揚げた唐揚の他ふりふりポテト、肉巻きおにぎり等販売中'],
    ['バインミーチャオ', '本場のバインミーをお届けします。ご来店お待ちしております。'],
    ['マイペースカフェ', '障害や特性のある若者が運営する「マイペースカフェ」が2度目の出店！カフェの形をしたソーシャルアクションです。温かくて面白いDE＆Iの体験をICU祭で！']
  ];

  var iconPaths = {
    '尾花屋': 'assets/尾花屋.png',
    'ふらり': 'assets/ふらり.jpg',
    '三鷹若手農家': 'assets/三鷹若手農家.jpg',
    'cafe sacai': 'assets/cafe sacai.jpg',
    'TINY PONTA COFFEE': 'assets/tiny ponta coffee.jpg',
    '珈琲や': 'assets/珈琲や.png',
    'ウソップチキン': 'assets/ウソップチキン.jpg',
    'タバジビエ': 'assets/タバジビエ.jpg',
    '麻辣car 緋花-HIBANA-': 'assets/麻辣car.png',
    'cHii caFe': 'assets/cHii caFe.jpg',
    'キッチン・すまいる': 'assets/キッチンすまいる.png',
    'バインミーチャオ': 'assets/バインミー.png',
    'マイペースカフェ': 'assets/マイペースカフェ.jpg'
  };

  var branch = document.createElement('a');
  branch.className = 'group-branch';
  branch.href = '#local-festival';
  branch.innerHTML = '<span class="eyebrow">AREA 03</span><h2>ごようたし横丁</h2><p>地域のお店や団体が集まる企画</p><span>VIEW PROJECTS →</span>';
  branches.append(branch);

  var section = document.createElement('section');
  section.className = 'group-category local-festival-category';
  section.id = 'local-festival';
  section.innerHTML = '<div class="section-heading"><div><p class="eyebrow">AREA 03 / LOCAL FESTIVAL</p><h2>ごようたし横丁</h2></div><p>地域のお店や団体が集まる企画</p></div><div class="local-festival-grid">' + projects.map(function (project) {
    return '<article class="local-festival-card"><img src="' + (iconPaths[project[0]] || 'assets/icon-nothing.png') + '" onerror="this.src=\'assets/icon-nothing.png\'" alt="' + project[0] + 'の写真"><div class="local-festival-card__body"><h3>' + project[0] + '</h3><p>' + project[1].replace(/\n/g, '<br>') + '</p></div></article>';
  }).join('') + '</div>';
  building.parentNode.insertBefore(section, building.nextSibling);

  var otherProjects = [
    {
      name: 'ICU祭実行委員会公式企画 ICU Park',
      pr: '木工遊びやソリ滑り、お絵描き広場、テントなど小さなお子様が楽しめる企画が盛りだくさん！！豊かな自然の中で思う存分楽しめます✨',
      location: 'ばか山',
      details: '雨天時：本館254'
    },
    {
      name: 'ICU祭実行委員会公式企画 SUBARU企画',
      pr: 'SUBARUとコラボしたモノづくり企画！クルマの仕組みを楽しく学ぼう！さらに今年は、スバル東京レーシング協力のもと、子ども向けにレーシングカーの試乗体験も開催！',
      location: '旧本館前',
      details: '雨天時：本館252\n＊事前予約制（当日枠あり）',
      reservation: true
    },
    {
      name: 'ICU祭実行委員会公式企画 スタンプラリー',
      pr: '🎉スタンプラリー企画🎉\n\nキャンパスを巡るスタンプラリーに挑戦してみませんか？✨\n\n学内にあるランダムな5か所を巡って、スタンプをゲット！\n\n最後は今年のテーマにちなんだスタンプを押してゴールです🏁\n\n見事クリアした方には、豪華な景品をプレゼント！🎁\n\nさらに、今年のICU祭限定のスペシャルな景品もあるかも…？👀✨\n\n友達や家族と一緒に参加するのはもちろん、おひとりでの挑戦も大歓迎！\n\nスタンプを集めながらキャンパスを歩けば、ICU祭の新たな魅力やお気に入りの場所が見つかるはずです🍃\n\nICU祭をもっと楽しめるスタンプラリー企画に、ぜひお気軽にご参加ください！🌟',
      location: 'ICUキャンパス'
    },
    {
      name: 'ICU祭実行委員会公式企画 アニマルランド',
      pr: '🐰🐣 三鷹の森に動物たちが大集合！！！🐔🐹\n\n１０月１２日に、三鷹の森に動物たちが大集合！！！\n\n自然豊かなICUで動物との触れ合い体験が実現します！！\n\n１０月１１日は、バルーンアートの販売、また、ボールプール、ぬりえ、折り紙を体験いただけるブースをご用意しております！！',
      location: 'ばか山',
      details: '10/11 バルーンアートなど\n10/12 10:30~15:00　動物触れ合い体験 (各回15分)\n\n＊事前フォームで時間制の受付を承っております。投稿のQRコードからお申し込みください。\n＊金額は、予約formからご確認ください',
      reservationUrl: 'https://forms.gle/h3SBgiSkvuToCbBD7',
      reservationLabel: 'ICUアニマルランド予約form'
    },
    {
      name: 'ICU祭実行委員会公式企画 自然キャンパスツアー',
      pr: 'ICUキャンパスならではの植物や生き物を楽しみ、心も体もリフレッシュしましょう！！ ICUの自然観察指導員や、環境研究を行っているICU生の案内のもと、豊かなICUの自然を探検してみませんか？🏞️',
      location: 'ICUキャンパス',
      details: '10/11・12\n11:00-11:40\n14:00-14:40\n\n集合場所：チャペル前のロータリー\n※雨天時：本館302',
      reservation: true
    },
    {
      name: 'ICU祭実行委員会公式企画 チャペルコンサート',
      pr: 'チャペルに響く音楽を通して、キリスト教に触れてみませんか？\n\n5つの音楽団体による演奏を、ICUのチャペルでお楽しみいただけます。音楽とともに、キリスト教を身近に感じられるひとときをお過ごしください。',
      location: 'チャペル',
      details: '10/12 12:30開場 13:00-15:00\n出演者：Worship Night、二胡楽坊アラムナイ、ICU Glee Club、ICU Bell Peppers、CMS管弦楽団'
    },
    {
      name: 'ICU祭実行委員会公式企画 パネルディスカッション',
      pr: '「奇跡に、説明書はあるのか。」\n\n宗教哲学、法学、物理学のICUの教授方が、「不可能の超え方」について議論します！！',
      location: 'T-171',
      details: '10/11 13:45-14:45\n登壇者：焼山満里子 教授、松田浩道 教授、山崎歴舟 教授\n＊事前予約・当日ウォークインどちらも可',
      reservation: true
    },
    {
      name: 'ICU祭実行委員会公式企画 名誉教授の会による講義',
      pr: '「建国250周年？――ICU卒業生が見たアメリカ史のお祝いあれこれ」\n"Celebrating 250 Years of Christian America? -- Wake Up, ICU Students!"\n\n神学・宗教学の名物教授が帰ってきます。\n\n人文科で教えていた森本あんり先生が\n\nアメリカ・キリスト教の奇妙な現実を解剖。\n\n建国250年とかに惑わされていると、とんでもないことになるよ!\n\n(ICU生だけに贈るお宝特典映像あり)',
      location: 'T-171',
      details: '10/11 12:00~13:30\n登壇者：森本あんり 教授\n＊講演終了後、本館224にて総会を開催\n＊事前予約・当日ウォークインどちらも可',
      reservation: true
    },
    {
      name: 'ICU祭実行委員会公式企画 卒業生講演',
      pr: '「リベラルアーツって結局何だった？\nーリ卒業生に聞く、ICUの学びの現在地ー」\n\n今年の学園祭では、本学卒業生であり、 現在はスターバックス コーヒー ジャパンのCEOとして活躍する森井 久恵氏をお迎えします。 綺麗事なしの「人生の選択の軌跡」を等身大で語る1時間。 大学生はもちろん、未来の選択肢を広げたい中高生や受験生も大歓迎です。',
      location: 'T-171',
      details: '10/11 15:00~16:00\n登壇者：森井 久恵 氏\n＊事前予約・当日ウォークインどちらも可',
      reservation: true
    },
    {
      name: 'ICU祭実行委員会公式企画 公開講義',
      pr: 'ICUの授業ってどんな感じ？\n\n今年は、情報科学・音楽・言語学という3つの異なる分野を専門とする教授が登壇し、AIをめぐるさまざまな問いについてパネルディスカッションを行います！\n\n「学生がAIを使うことに賛成？反対？」「AI時代に言語を学ぶ意味は？」など、身近なテーマをきっかけに、それぞれの専門分野からAIについて考えます。\n\n参加者の皆さんにも質問やリアルタイムのフィードバックを通して議論に参加していただきながら、学問を横断して考える面白さや、ICUならではのリベラルアーツの学びを体感できる企画です。',
      location: 'T-171',
      details: '10/12 15:00~16:00\n登壇者：小野 創 教授（言語学 / 社会・人文科学分野）、佐藤 望 教授（音楽 / 人文科学分野）、田中 宏季 教授（情報科学 / 自然科学分野）\n＊事前予約・当日ウォークインどちらも可',
      reservation: true
    }
  ];

  var otherBranch = document.createElement('a');
  otherBranch.className = 'group-branch';
  otherBranch.href = '#other-projects';
  otherBranch.innerHTML = '<span class="eyebrow">AREA 04</span><h2>その他の企画</h2><p>キャンパス各所で開催される公式企画</p><span>VIEW PROJECTS →</span>';
  branches.append(otherBranch);

  var otherSection = document.createElement('section');
  otherSection.className = 'group-category other-projects-category';
  otherSection.id = 'other-projects';
  otherSection.innerHTML = '<div class="section-heading"><div><p class="eyebrow">AREA 04 / OTHER PROJECTS</p><h2>その他の企画</h2></div><p>キャンパス各所で開催される公式企画</p></div><div class="other-project-grid">' + otherProjects.map(function (project, index) {
    var details = project.details ? '<p class="other-project-card__details">' + project.details.replace(/\n/g, '<br>') + '</p>' : '';
    var locationNote = project.location === 'T-171' ? '<p class="other-project-card__location-note">本館横のトロイヤー記念アーツ・サイエンス館です</p>' : '';
    var reservationUrl = project.reservationUrl || (project.reservation ? 'https://forms.gle/AurTBsvvgSSg9LvSA' : '');
    var reservationLabel = project.reservationLabel || '事前予約はこちら';
    var reservationButton = reservationUrl ? '<a class="other-project-card__reservation" href="' + reservationUrl + '" target="_blank" rel="noopener noreferrer">' + reservationLabel + ' <span aria-hidden="true">♡</span></a>' : '';
    return '<article class="other-project-card other-project-card--tone-' + (index % 4 + 1) + '"><div class="other-project-card__location-block"><span class="other-project-card__location-tag">' + project.location + '</span>' + locationNote + '</div><h3>' + project.name + '</h3><p class="other-project-card__pr">' + project.pr.replace(/\n/g, '<br>') + '</p>' + details + reservationButton + '</article>';
  }).join('') + '</div>';
  section.parentNode.insertBefore(otherSection, section.nextSibling);
}());
