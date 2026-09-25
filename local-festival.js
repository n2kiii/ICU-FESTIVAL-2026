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
  building.parentNode.insertBefore(section, building);
}());
