const projects = {
  "301": { name: "Paper Miracles ICU", area: "本館企画", location: "3階 / 301", description: "紙を使った展示・体験企画です。", floor: "3" },
  "302": { name: "本企：自然科学", area: "本館企画", location: "3階 / 302", description: "自然科学をテーマにした企画です。", floor: "3" },
  "303": { name: "Japan ICU Foundation", area: "本館企画", location: "3階 / 303", description: "ICUに関する展示企画です。", floor: "3" },
  "306": { name: "劇部有志 即興九分", area: "本館企画", location: "1階 / 306", description: "演劇を楽しめる参加型企画です。", floor: "1" },
  "308": { name: "お笑い研究会", area: "本館企画", location: "2階 / 308", description: "笑いをテーマにした企画です。", floor: "2" },
  "310": { name: "SDGs推進室", area: "本館企画", location: "4階 / 310", description: "SDGsをテーマにした体験型の企画です。", floor: "4" },
  "311": { name: "森オルガン受講生", area: "本館企画", location: "4階 / 410", description: "本館4階で開催される音楽・展示企画です。", floor: "4" },
  "315": { name: "ICUかるたサークル", area: "本館企画", location: "2階 / 315", description: "ICUらしいモチーフを楽しめる参加型企画です。", floor: "2" },
  "316": { name: "国際基督教大学書道部", area: "本館企画", location: "2階 / 316", description: "書道作品の展示企画です。", floor: "2" },
  "318": { name: "MMS", area: "本館企画", location: "4階 / 318", description: "音楽に触れられる企画です。", floor: "4" },
  "320": { name: "ハンドメイドサークル", area: "本館企画", location: "3階 / 320", description: "手づくり作品を楽しめる展示・販売企画です。", floor: "3" },
  "321": { name: "ICU Rince", area: "本館企画", location: "3階 / 321", description: "ダンスパフォーマンスを楽しめる企画です。", floor: "3" },
  "322": { name: "ICUアーチェリー部", area: "本館企画", location: "3階 / 322", description: "アーチェリー部の活動紹介企画です。", floor: "3" },
  "324": { name: "バレエサークルカンカン", area: "本館企画", location: "3階 / 324", description: "バレエの魅力を紹介する企画です。", floor: "3" },
  "325": { name: "ICU Rince", area: "本館企画", location: "3階 / 325", description: "ダンスパフォーマンスを楽しめる企画です。", floor: "3" },
  stamp: { name: "スタンプラリー", area: "本館企画", location: "本館内各所", description: "キャンパスをめぐりながら楽しめる回遊型企画です。", floor: "all" }
};

const floorData = {
  "1": [
    { label: "306", project: "306", top: "48%", left: "67%" },
    { label: "企画", project: "stamp", top: "67%", left: "82%" }
  ],
  "2": [
    { label: "308", project: "308", top: "52%", left: "73%" },
    { label: "315", project: "315", top: "31%", left: "25%" },
    { label: "316", project: "316", top: "52%", left: "52%" },
    { label: "企画", project: "stamp", top: "68%", left: "82%" }
  ],
  "3": [
    { label: "301", project: "301", top: "64%", left: "57%" },
    { label: "302", project: "302", top: "64%", left: "65%" },
    { label: "320", project: "320", top: "64%", left: "37%" },
    { label: "324", project: "324", top: "34%", left: "63%" },
    { label: "企画", project: "stamp", top: "70%", left: "84%" }
  ],
  "4": [
    { label: "310", project: "310", top: "42%", left: "78%" },
    { label: "311", project: "311", top: "39%", left: "39%" },
    { label: "318", project: "318", top: "59%", left: "54%" },
    { label: "企画", project: "stamp", top: "73%", left: "83%" }
  ]
};

const detail = document.querySelector("#project-detail");
const map = document.querySelector(".campus-map");
const floorTabs = document.querySelectorAll(".floor-tab");
const mapLayout = document.querySelector(".map-layout");
const mapSection = document.querySelector(".map-section");

if (mapSection) {
  const mapDescription = mapSection.querySelector(".section-heading > p");
  const mapLabel = mapSection.querySelector(".section-heading .eyebrow");
  if (mapDescription) mapDescription.textContent = "本館内の階を選び、番号をクリックすると企画の詳細が表示されます。";
  if (mapLabel) mapLabel.textContent = "MAIN BUILDING MAP";
}

function showProject(projectId) {
  const project = projects[projectId];
  if (!project || !detail) return;

  detail.innerHTML = `<span class="eyebrow">${project.area}</span><h3>${project.name}</h3><p class="project-detail__location">${project.location}</p><p>${project.description}</p>`;
  detail.classList.add("is-open");
  mapLayout.classList.add("has-detail");
}

function showRoom(roomNumber, floor) {
  const project = projects[roomNumber];
  if (project) {
    showProject(roomNumber);
    return;
  }

  detail.innerHTML = `<span class="eyebrow">MAIN BUILDING / ${floor}F</span><h3>教室 ${roomNumber}</h3><p class="project-detail__location">本館${floor}階 / ${roomNumber}</p><p>この部屋の企画情報は準備中です。</p>`;
  detail.classList.add("is-open");
  mapLayout.classList.add("has-detail");
}

function wireRoomClicks(floor) {
  map.querySelectorAll(".floor-room, .floor-wing rect, .floor-special rect, .floor-core rect").forEach((room) => {
    const label = room.matches(".floor-room") ? room.querySelector("text")?.textContent.trim() : room.nextElementSibling?.textContent.trim();
    if (!label || !/^\d{3}$/.test(label)) return;
    room.classList.add("is-clickable-room");
    room.setAttribute("tabindex", "0");
    room.setAttribute("role", "button");
    room.addEventListener("click", () => showRoom(label, floor));
    room.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") showRoom(label, floor);
    });
  });
}

function floorOneMarkup() {
  return `<svg class="floor-plan floor-plan--first" viewBox="0 0 1450 650" role="img" aria-label="本館1階の平面図"><rect class="floor-background" x="10" y="10" width="1430" height="630"></rect><path class="floor-wall" d="M135 210H630V585H135ZM745 210H1240V585H745ZM630 210H745V585H630"></path><g class="floor-special"><rect x="40" y="24" width="70" height="40"></rect><text x="75" y="50">162</text><rect x="20" y="125" width="100" height="55"></rect><text x="70" y="158">授乳室</text><rect x="120" y="125" width="22" height="55"></rect><text x="131" y="158" transform="rotate(-90 131 158)">190</text><rect x="20" y="205" width="100" height="52"></rect><path d="M20 222H120M20 240H120M45 205V257M75 205V257"></path></g><g class="floor-core"><rect x="685" y="20" width="58" height="150"></rect><text x="720" y="105" transform="rotate(-90 720 105)">ALL Gender WC</text><rect x="670" y="170" width="75" height="40"></rect><text x="708" y="195">EV</text><rect x="670" y="210" width="75" height="42"></rect><text x="708" y="235">総案3</text><text x="688" y="300" class="floor-title">1階</text><rect x="670" y="330" width="75" height="72"></rect><text x="708" y="373">126</text></g><g class="floor-wing"><rect x="135" y="210" width="62" height="160"></rect><rect x="197" y="210" width="130" height="160" class="room-yellow"></rect><text x="262" y="292">本企 こども企画 AI</text><rect x="327" y="210" width="130" height="160" class="room-gray"></rect><text x="392" y="300">175</text><rect x="457" y="210" width="173" height="160" class="room-blue"></rect><text x="543" y="275">本館 教授持ち込み企画</text><text x="543" y="355">176</text><rect x="745" y="210" width="210" height="160" class="room-peach"></rect><text x="850" y="292">301 ICU グリークラブ</text><rect x="955" y="210" width="105" height="160" class="room-blue"></rect><text x="1007" y="275">三鷹市役所こども</text><rect x="1060" y="210" width="105" height="160" class="room-blue"></rect><text x="1112" y="275">OP控え室</text><rect x="1165" y="210" width="75" height="160" class="room-gray"></rect><text x="1202" y="355">121</text><rect x="1240" y="20" width="170" height="75" class="room-white"></rect><text x="1325" y="62">WC</text><rect x="1275" y="95" width="135" height="115" class="room-white"></rect><text x="1342" y="160">WC</text><rect x="1240" y="210" width="170" height="160" class="room-blue"></rect><text x="1325" y="292">企調</text><text x="1325" y="355">108</text></g><g class="floor-wing"><rect x="135" y="400" width="75" height="45" class="room-pink"></rect><text x="172" y="428">157</text><rect x="210" y="400" width="75" height="45" class="room-gray"></rect><text x="247" y="428">156</text><rect x="285" y="400" width="75" height="45" class="room-pink"></rect><text x="322" y="428">155</text><rect x="360" y="400" width="75" height="45"></rect><text x="397" y="428">154</text><rect x="435" y="400" width="75" height="45" class="room-pink"></rect><text x="472" y="428">153</text><rect x="510" y="400" width="120" height="45" class="room-pink"></rect><text x="570" y="428">152 / 151</text><rect x="135" y="445" width="75" height="140" class="room-blue"></rect><text x="172" y="515">本企：こどもカラオケ</text><rect x="210" y="445" width="75" height="140" class="room-gray"></rect><rect x="285" y="445" width="75" height="140" class="room-blue"></rect><text x="322" y="515">本企：占い</text><rect x="360" y="445" width="75" height="140"></rect><rect x="435" y="445" width="75" height="140" class="room-blue"></rect><text x="472" y="510">本企：こども心理学</text><rect x="510" y="445" width="120" height="140" class="room-yellow"></rect><text x="570" y="515">本企：ワークショップ企画</text><rect x="745" y="400" width="100" height="45"></rect><text x="795" y="428">101</text><rect x="845" y="400" width="100" height="45"></rect><text x="895" y="428">102</text><rect x="945" y="400" width="60" height="45" class="room-blue"></rect><text x="975" y="428">103</text><rect x="1005" y="400" width="60" height="45"></rect><text x="1035" y="428">104</text><rect x="1065" y="400" width="80" height="45" class="room-blue"></rect><text x="1105" y="428">105</text><rect x="1145" y="400" width="75" height="45" class="room-blue"></rect><text x="1182" y="428">106</text><rect x="1220" y="400" width="190" height="45" class="room-blue"></rect><text x="1315" y="428">107</text><rect x="745" y="445" width="100" height="140" class="room-green"></rect><text x="795" y="515">306 箏曲部生田流九分会</text><rect x="845" y="445" width="100" height="140" class="room-green"></rect><text x="895" y="515">本企：こども企画</text><rect x="945" y="445" width="60" height="140" class="room-blue"></rect><text x="975" y="515">企調</text><rect x="1005" y="445" width="60" height="140"></rect><text x="1035" y="515">A B<br/>製作室</text><rect x="1065" y="445" width="80" height="140" class="room-blue"></rect><text x="1105" y="515">企調</text><rect x="1145" y="445" width="75" height="140"></rect><text x="1182" y="500">A B<br/>Wind-brass控室</text><rect x="1220" y="445" width="190" height="140" class="room-blue"></rect><text x="1315" y="515">企調</text></g><text class="floor-note" x="25" y="625">本館1階 平面図 / 企画場所をクリック</text></svg>`;
}

function floorPlanMarkup(floor) {
  if (floor === "1") return floorOneMarkup();
  const roomSets = {
    "2": ["258", "256", "255", "254", "253", "252", "251", "201", "202", "203", "204", "205", "206", "207", "208", "259", "260", "273", "274", "275", "276"],
    "3": ["357", "356", "355", "354", "353", "352", "351", "301", "302", "303", "304", "305", "306", "307", "308", "358", "373", "374", "375"],
    "4": ["426", "401", "404", "403", "410", "318"]
  };
  const rooms = roomSets[floor];
  const roomNames = { "201": "本企 アカデミック講演", "202": "ICU Wind-Brass", "203": "企画", "204": "企画", "205": "企画", "206": "企画", "207": "企画", "208": "企画", "301": "Paper Miracles ICU", "302": "本企：自然科学", "303": "Japan ICU Foundation", "304": "企画", "305": "Japan ICU Foundation", "306": "ICU企画", "307": "企画", "308": "お笑い研究会", "310": "SDGs推進室", "311": "森オルガン受講生", "315": "ICUかるたサークル", "316": "国際基督教大学書道部", "318": "MMS", "320": "ハンドメイドサークル", "321": "ICU Rince", "322": "ICUアーチェリー部", "324": "バレエサークルカンカン", "325": "ICU Rince" };
  const roomMarkup = (room, x, y, width, height, index) => `<g class="floor-room floor-room--pastel-${index % 4}"><rect x="${x}" y="${y}" width="${width}" height="${height}"></rect><text x="${x + width / 2}" y="${y + height / 2 - 4}">${room}</text>${roomNames[room] ? `<text class="floor-room-name" x="${x + width / 2}" y="${y + height / 2 + 22}">${roomNames[room]}</text>` : ""}</g>`;
  const topRooms = rooms.slice(0, 7).map((room, index) => roomMarkup(room, 70 + index * 105, 110, 100, 86, index)).join("");
  const bottomRooms = rooms.slice(7, 14).map((room, index) => roomMarkup(room, 570 + index * 55, 390, 52, 104, index + 7)).join("");
  const westRooms = rooms.slice(14).map((room, index) => roomMarkup(room, 70 + index * 105, 390, 100, 104, index + 14)).join("");
  return `<svg class="floor-plan" viewBox="0 0 1000 600" role="img" aria-label="本館${floor}階の平面図"><rect class="floor-background" x="18" y="18" width="964" height="564" rx="4"></rect><path class="floor-wall" d="M55 80H945V520H55ZM455 80V520M55 300H945"></path><path class="floor-corridor" d="M455 80H545V520H455ZM55 270H945V330H55Z"></path><text class="floor-title" x="500" y="300">${floor}階</text><text class="floor-core" x="500" y="125">ALL Gender WC</text><text class="floor-core" x="500" y="485">EV / WC</text>${topRooms}${bottomRooms}${westRooms}<text class="floor-note" x="80" y="555">本館内フロアマップ</text></svg>`;
}

function renderFloor(floor) {
  map.setAttribute("aria-label", `本館${floor}階の企画地図`);
  map.innerHTML = floorPlanMarkup(floor);
  detail.classList.remove("is-open");
  mapLayout.classList.remove("has-detail");
  wireRoomClicks(floor);
}

floorTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const floor = tab.dataset.floor;
    floorTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderFloor(floor);
  });
});

renderFloor("1");

const outdoorCategoryData = [
  { id: "apparel", number: "01", name: "アパレル・物販", description: "衣類やグッズ、作品などを販売する企画", projects: [
    { tent: "TENT 1", group: "ICUサービス", title: "ICU公式アパレル販売", icon: "assets/559_icon.png", pr: "ICU公式アパレルがICU祭に登場。スウェットトレーナーやシャツなど、普段使いしやすい定番アイテムを取りそろえています。" },
    { tent: "TENT 43", group: "ELABEL", title: "フェアトレードギャラリー", icon: "assets/icon-nothing.png", pr: "フェアトレードを知っていますか？サークルで制作しているトートバッグやハンカチ、アクセサリー、雑貨など、様々なフェアトレード商品を販売します！美味しくて素敵な商品を通して、フェアトレードについて考えてみませんか？" },
    { tent: "TENT 64", group: "D27 写真部 Lucida", title: "Photo Market Lucida", icon: "assets/icon-nothing.png", pr: "写真部Lucidaの写真を使ったグッズなどを販売しています！あなたのお気に入りの一枚を見つけてください！" },
    { tent: "TENT 70", group: "んたぱぽ", title: "ポポップアップ 'popopop!!'", icon: "assets/icon-nothing.png", pr: "んたぱぽのPOP-UP STOREを開催します。" },
    { tent: "TENT 79", group: "100円ステッカー", title: "100円ステッカー", icon: "assets/542.jpg", pr: "オリジナルデザインをしたステッカーを販売しています。ぜひ遊びに来てください。" }
  ] },
  { id: "sweets", number: "02", name: "スイーツ", description: "甘いものを楽しめる企画", projects: [
    { tent: "TENT 25", group: "ICU YEARBOOK委員会", title: "ICU祭特別号「スモア」", icon: "assets/tent25.png", pr: "1980年から続く伝統あるイヤーブック委員会。そんなイヤーブックの部員がお届けする甘くてとろけるマシュマロチョコサンド、スモアはいかがでしょうか？" },
    { tent: "TENT 32", group: "ARC", title: "SWEET SHOT!", icon: "assets/tent32.png", pr: "Sweet shot churros in 6 flavours, a flavour of your choice presented in a cup with an arrow shot on one!" },
    { tent: "TENT 35", group: "29 3G", title: "元祖 Age! Age! Pan Man!", icon: "assets/tent35.JPEG", pr: "昨年度グランプリ準優勝！懐かしさと美味しさを兼ね備えた「揚げパン」を、今年も販売します！味も色々あるので、お腹が空いた方もぜひ気軽にお立ち寄りください！" },
    { tent: "TENT 38", group: "30 3B", title: "DeserChu", icon: "assets/tent38.jpeg", pr: "Desert✖️Dessert✖️Churros で砂漠の中のオアシスをコンセプトに屋台を展開しています！手軽にパパッと食べて、エネルギーチャージしちゃいましょう！！お待ちしております！！" },
    { tent: "TENT 40", group: "30 4D", title: "4D's Best Waffles", icon: "assets/tent40.png", pr: "外はさくさく中はふわふわのおいしいワッフルです！何度も試作を重ねてベストなトッピングを考えました。片手で食べやすいラッピングなのでぜひ気軽に立ち寄ってください！" },
    { tent: "TENT 52", group: "30 3E", title: "3E団子_ｲｲ焼き･ｲｲ味･ｲｲ笑顔", pr: "Arts & Science団子（みたらし）、Critical Thinking団子（焼き）、Bilingual団子（黒蜜きな粉）の3種類を販売します。団子を食べてICUを味わおう！" },
    { tent: "TENT 55", group: "30 2B", title: "95ヶ条のチュロス", icon: "assets/tent55.png", pr: "生地5種類×トッピング19種類で95通りのアレンジ可能！マルティン・ルターにあやかって95ヶ条のチュロスが爆誕です！" },
    { tent: "TENT 56", group: "30 4E", title: "逆転サヨナラ満塁クロッフル", pr: "３球目ーー\n\n　開いた。\n\n　外、カリッ。\n\n　中、ふわっ。\n\n打球は高々と上がった、伸びる、伸びる、まだ伸びる、入ったァァァ！！\n\n逆転サヨナラ満塁クロッフル！！\n\nたった今、ワッフルの歴史が塗り替えられました。バターの香りが球場全体を包んでおります。ベンチが飛び出してくる、紙ナプキンが宙を舞う、大歓声！" },
    { tent: "TENT 61", group: "硬式テニス部", title: "熱々パンケーキをサービスエース！", icon: "assets/tent61.jpg", pr: "硬式テニス部の作る、熱々プチパンケーキ！3種類の味からお気に入りを選んで、ICU祭で甘いひとときを楽しもう！" },
    { tent: "TENT 63", group: "30 3A", title: "PLA (Popcorn for Liberal Arts)", icon: "assets/tent63.jpeg", pr: "ポップコーンでテンションUP！塩・カレー・キャラメルの3種類！S・Mサイズから選べるよ♪少量食べたい人も、たっぷり食べたい人も大歓迎！好きな味を見つけてね！" },
    { tent: "TENT 67", group: "RAC of ICU", title: "マンゴーデザート", icon: "assets/tent67.jpg", pr: "RAC of ICUです！私たちはインドのRACの方々から紹介していただいたマンゴーデザートであるAamrasを販売します！美味しいので是非食べてみてください！" },
    { tent: "TENT 72", group: "30 2D", title: "弾け！2Dプレゼンツ 魅惑のポップコーン POP!!", icon: "assets/tent72.jpg", pr: "30の2Dが、豪華なポップコーンを販売します！コンソメ、バターシュガー、シナモン、ガーリック、唐辛子、カレー、チョコ、はちみつを使って素敵な味を作るから遊びにきてね！" },
    { tent: "TENT 80", group: "みかん愛好会", title: "厳選みかんスイーツ", pr: "日本のみかんの消費量増加を理念に、東大やICUを中心とした学生が全国の生産者や自治体と連携し、みかんを味わいながらブランディングやプロモーションを行っています。" },
    { tent: "TENT 83", group: "G40、Plant-based", title: "やさしいおやつ", icon: "assets/tent83.jpg", pr: "お腹も心も満たされるやさしいおかしをお届けします。" },
    { tent: "TENT 84", group: "ICU Math", title: "Integral Churros", icon: "assets/tent84.png", pr: "チュロスの無限の可能性を追求するICU Mathの出店企画！おいしいチュロスと数学冊子で、甘くてちょっと知的なひとときをお届けします。" },
    { tent: "TENT 85", group: "スモアーズ", title: "好みの味が選べる！スモア", icon: "assets/tent85.png", pr: "ミルク・ブラック・ホワイトの3種類から好きなチョコレートを選べる！ふわふわのマシュマロと一緒にこんがり焼き、クラッカーでサンド！" },
    { tent: "TENT 73", group: "ICU cats", title: "オリジナル猫グッズとスコーン", icon: "assets/tent73.png", pr: "ICUキャンパス内に住んでいる猫ちゃんたちをイラスト化したオリジナルグッズと、昨年も販売したスコーンを今年も販売します。" },
    { tent: "TENT 2", group: "30 3Q", title: "Q(キュ)ートなメイドたち", icon: "assets/tent2.PNG", pr: "メイドに扮した3Qの皆さんが、おいしいチュロスを販売します！" },
    { tent: "TENT 9", group: "30 2E", title: "かき氷", icon: "assets/tent9.png", pr: "いちごやみぞれのシロップ、白玉をのせた抹茶味など色々なかき氷を販売予定です。ひと休みのお供にいかがですか？ぜひ食べに来てください！" },
    { tent: "TENT 11", group: "303D", title: "フル単ポンチ", icon: "assets/tent11.jpeg", pr: "ELA3Dの「フル単ポンチ」で、秋の暑さを吹き飛ばそう！色とりどりのフルーツたっぷり、ひんやり甘い一杯で、単位も気分も“フル”に！" },
    { tent: "TENT 14", group: "2C", title: "2CのおいCクロッフル", pr: "個性豊かなメンバーが集まる2C！性格も趣味も全く違う自由人達が協力して、おいCクロッフルを作りました。とってもおいCので、ぜひ食べにきてください^_^" },
    { tent: "TENT 17", group: "TEDXICU", title: "TEDxICU CHURROS", icon: "assets/tent17.PNG", pr: "TEDxICUは今年もチュロスをお届けします！しかし！今年は例年とはひと味違うチュロスが登場！？どんなチュロスかは当日のお楽しみ！ICU祭で皆さんをお待ちしています！" },
    { tent: "TENT 18", group: "雪面滑走競技部", title: "焼きマシュマロ", pr: "BBQでしか食べない程度の焼きマシュマロのポテンシャルを最大まで引き出したスキー部がつくる焼きマシュマロです。" },
    { tent: "TENT 19", group: "30 3P", title: "すりーぴーらすく", pr: "美味しい美味しいチョコ味・ガーリックバター味・シュガーバター味の3味のラスクを3P(すりーぴー)のメンバーがお届けします!!ドリンクもございますのでぜひ！" },
    { tent: "TENT 21", group: "30 4F", title: "立派なICU生になりたい焼き！", icon: "assets/tent21.jpg", pr: "ICUの文字が刻まれた、ここだけの特別なたいやき！🐟✨ 食べればあなたも立派なICU生になれるかも！？" }
  ] },
  { id: "food", number: "03", name: "フード", description: "食事や軽食を楽しめる企画", projects: [
    { tent: "TENT 10", group: "IRIS", title: "Spread Peas & Love Hummus", pr: "フムスを食べたことがありますか？ひよこ豆ペーストのフムスとトルティーヤチップスを売っている、難民移民支援サークルIRISです！利益は支援活動に使用されます✨" },
    { tent: "TENT 13", group: "野田村にICU旋風を吹き起こす会", title: "野田村のうんめえ海鮮塩焼きそば", pr: "【昨年も大好評】岩手県野田村の特産ホタテと野田塩を使ったうんめえ塩焼きそばと山葡萄サイダー！海鮮だしききまくり＆丸ごとホタテで旨すぎぶっ飛ぶぞ！！！！" },
    { tent: "TENT 15", group: "女子サッカー部　ICU OFFSIDS", title: "女サカの春巻き！", icon: "assets/tent15.jpeg", pr: "女子サッカー部 ICU OFFSIDS の毎年恒例「春巻きスティック」を販売いたします！様々な味をご用意しておりますのでぜひお越しください！お待ちしております！" },
    { tent: "TENT 20", group: "30 3N", title: "今日、餃子にしない？", icon: "assets/tent20.PNG", pr: "今日、餃子にしない？🥟\n〜この焦げ目、まじでメロい。〜\nひとくち目から、パリッ、ジュワッ。\n\nアツアツの餃子を頬張れば、気分までアガる。\n文化祭は、餃子で決まり！！" },
    { tent: "TENT 22", group: "30 3C", title: "ナチョすぎて滅！", pr: "ナチョすぎて滅！のナチョスを食べてホットでスパイシーなICU祭を、産むんだ。ﾓﾙﾝ♪" },
    { tent: "TENT 24", group: "サイクリング部", title: "サイクリング部", icon: "assets/tent24.jpeg", pr: "私たちICUサイクリング部（通称チャリ部）では、ジャガイモを使って作った、チャリ部伝統のもちもちで美味しいじゃがもちを販売しています。ぜひお越しください！" },
    { tent: "TENT 28", group: "30 3I", title: "NEW ERA", icon: "assets/tent28.jpeg", pr: "コスパ最強&激うまな鶏皮串！心を込めて一本一本秘伝のタレを絡めてみんなに届けます！！お値段以上NEW ERAをぜひ食べにきてね！！！30 3I NEW ERA" },
    { tent: "TENT 29", group: "Papoose", title: "Papooseのケバブ", pr: "テニスサークルメンバーが目の前で焼き上げるケバブのお肉と野菜を詰め込んだ、絶品ケバブを販売します！\n食欲をそそる香りとボリューム満点のケバブは、文化祭の食べ歩きにもぴったり！\n\n一口食べれば、あなたもケバブの虜に！？\n友達と一緒に、ぜひ私たちのブースへお越しください！\n皆さんのお越しをお待ちしています！" },
    { tent: "TENT 30", group: "IBL", title: "IBLのたこ焼き", icon: "assets/tent30.jpg", pr: "とっても美味しいたこ焼き売ります！なんと味は4種類から選べます！" },
    { tent: "TENT 31", group: "27SL南アチーム", title: "南アフリカ・ルイボスティーカフェ", icon: "assets/tent31.jpg", pr: "南アフリカのセダルバーグ山脈。この地ではまろやかで香り豊かなルイボスティーが親しまれてきました。果実や蜂蜜の味とおやつを添えて、優雅な午後を過ごしませんか？" },
    { tent: "TENT 33", group: "30 3F", title: "Funky Fry Factory", icon: "assets/tent33.png", pr: "アツアツのフライドポテトとカリカリの揚げパスタが作り出す、至極のハーモニー！3種の味付けで楽しめる、小腹満たしにぴったりな一品です。ぜひ一度、Funky Fry Factoryへ足を運んでみてください！" },
    { tent: "TENT 34", group: "第三女子寮", title: "背徳ソトック食っとく？", icon: "assets/tent34.jpeg", pr: "ソトック食っとく？\nコクのある甘辛ソースに納得のいく背徳感。\nとっくになくなるやみつきの美味しさ。\n今年の三女は一味違うよ！\nお得に買うなら早めにおいで！\n3WDのソトックソトック。" },
    { tent: "TENT 36", group: "祭OBG", title: "ICUコロッケ", pr: "ICU祭実行委員会OBGが作るアツアツICUコロッケ！ぜひ食べにきてやま〜" },
    { tent: "TENT 37", group: "バスケットボール部", title: "セラフィムの焼売串", pr: "バスケットボール部員が焼売を販売します！国産の豚肉を使用したおいしい焼売です！ぜひいらしてください！" },
    { tent: "TENT 39", group: "3G", title: "Gっとくるポテト", icon: "assets/tent39.jpeg", pr: "うちら3Gが出すフライドポテトはめっちゃうまいねん。いろんな味あってえらぶんも楽しいから一回食べてみて欲しい。Gっとくるポテト食べたら笑顔なるからたべてみてなー" },
    { tent: "TENT 41", group: "27　5プロ生　比較文化超学域", title: "だしまきのおみせ", icon: "assets/tent41.jpg", pr: "比較文化研究の５プロ生からみなさまへ\n\nこだわり抜いた塩と焼き加減\n\n鰹出汁で作るふわとろだし巻き\n\nあたたかいお出汁と一緒にいかがですか\n\n雨の日でも天気のいい日も美味しく食べられます！" },
    { tent: "TENT 42", group: "30 3K", title: "3Kの焼き\"トリ\"コ", pr: "出来立ての焼き鳥で皆さんも3Kのトリコに、、！？" },
    { tent: "TENT 44", group: "S01 Footloose", title: "LOOSE NACHOS", pr: "テニスサークルFootlooseによるバッグナチョス！！食べたら飛ぶで！！！" },
    { tent: "TENT 45", group: "バドミントン部", title: "富士宮やきそば", icon: "assets/tent45.jpeg", pr: "Icuバドミントン部です！\n富士宮やきそばを作ります！\n絶品なのでぜひ食べにきてください！" },
    { tent: "TENT 47", group: "樅寮二階", title: "Grand Maison Momimomi", pr: "あのグランメゾンモミが帰ってきた！" },
    { tent: "TENT 48", group: "バレーボール部", title: "バレーボール部による至高の餃子", icon: "assets/tent48.png", pr: "ICUバレーボール部による最高に美味しい餃子を提供いたしますので、ぜひいらしてください！！" },
    { tent: "TENT 49", group: "Spanish Speaking Society", title: "今朝採れケサディーヤ", icon: "assets/tent49.png", pr: "スペイン語圏の食文化を楽しめる、ケサディーヤとサングリアを販売します！本場の味を気軽に味わいながら、異文化に触れてみませんか？" },
    { tent: "TENT 50", group: "UNBRAND", title: "UNBRANDのフランクフルト", pr: "毎年大好評！アカペラサークルunbrandの、あつあつ焼きたてフランクフルト！\n片手にフランク、両耳にハーモニー。歌声と香ばしさで、あなたの思い出を彩ります。" },
    { tent: "TENT 51", group: "ICU LAMBS", title: "BRAZILソーセージで乾杯！", pr: "サンバサークルのICUラムズです！\nブラジルソーセージとブラジルで人気の炭酸飲料ガラナを販売します！" },
    { tent: "TENT 53", group: "ICU カルチョ", title: "ぼくたちのふらんくふると。", icon: "assets/tent53.png", pr: "カルチョメンバー考案のオリジナルソース全4種類をご用意。\n定番の味から意外な組み合わせまで、\n自分だけのお気に入りの1本をぜひ見つけに来てください。" },
    { tent: "TENT 54", group: "カナダハウス", title: "Los Tacos Hermanos", icon: "assets/tent54.jpg", pr: "今年もまたやって来た、カナダハウスのタコス！食べた人は皆「うまい！」と言う、愛情、友情、様々な情が込められた、ICU唯一の男子寮がお届けする本気のタコスを召し上がれ！" },
    { tent: "TENT 59", group: "30 4C", title: "スナックぱす太", icon: "assets/tent59.jpg", pr: "パスタスナック（ソルト味・トマト味・黒胡椒味）を販売します！看板スナックママに会えるかも💓" },
    { tent: "TENT 60", group: "競技ダンス部", title: "豚汁しか勝たん", icon: "assets/tent60.png", pr: "具材たっぷり、心も体もぽかぽかになる豚汁を販売します！ICU祭でしか味わえない一杯を、ぜひお楽しみください！" },
    { tent: "TENT 68", group: "G89, ICU VIRAL WIZARD", title: "ベトナム伝統グルメ祭！", icon: "assets/tent68.jpeg", pr: "ベトナムの定番グルメ、バインミーとベトナムコーヒーを販売します！本場の味を楽しみながら、ベトナムの食文化を気軽に体験してみませんか？" },
    { tent: "TENT 69", group: "国際基督教大学競馬研究会", title: "競馬まぜそば", icon: "assets/tent69.png", pr: "今年設立された、ICU公認の競馬研究会がまぜそばを提供します！普段は競馬を研究してる私たちがタレから研究したまぜそばを是非ご賞味ください！" },
    { tent: "TENT 71", group: "フライングディスク部WIND", title: "フリスビー型お好み焼き！", pr: "フリスビー型の美味しいお好み焼きです" },
    { tent: "TENT 74", group: "30 2A", title: "30 2Aの目玉焼き焼きそば！", icon: "assets/tent74.png", pr: "キムチ・紅生姜・天かすの盛り放題付き焼きそばを販売します！プラス100円で大盛りや目玉焼きの追加も可能です！！食欲そそる、自慢の味をぜひ食べに来てください！" },
    { tent: "TENT 76", group: "ORCA", title: "ラフテーまん", icon: "assets/tent76.jpg", pr: "めんそーれ！例年ICU祭1位獲得のダイビング部ORCAは、今年も本格的な沖縄の味をお届けします！泡盛や黒糖で味付けした沖縄の角煮まんをお楽しみください！" },
    { tent: "TENT 78", group: "男子サッカー部", title: "ICUFC焼きそば", icon: "assets/tent78.jpg", pr: "ICUFC’s most delicious yakisoba!!! 本校サッカー部一同が心底からの愛を込めて作り上げた出来立ての焼きそばを提供！" }
  ] },
  { id: "drink", number: "04", name: "ドリンク", description: "飲みものを楽しめる企画", projects: [
    { tent: "TENT 5", group: "珈琲同好会", title: "珈琲同好会", pr: "TINY PONTA COFFEEさんから仕入れた4種類の珈琲をみなさんにお届けします！浅煎りから深煎りまで、味わいの異なるコーヒーはもちろん、少し贅沢な一杯として、まるでワインを思わせる華やかな香りを楽しめるコーヒーもご用意しました！ぜひお菓子と一緒に珈琲を楽しんでいってください☕️" },
    { tent: "TENT 6", group: "30 3H", title: "マジック・レモネード", icon: "assets/tent6.png", pr: "ようこそICUへ！私たちは青い「マジック・レモネード」を販売します。レモネードに魔法の液体を入れると何かが起こるかも？ぜひ303Hのブースへお越しください！" },
    { tent: "TENT 8", group: "30 3O", title: "3O", icon: "assets/tent8.jpeg", pr: "10月の残暑に嬉しいスイーツドリンクを販売します！" },
    { tent: "TENT 12", group: "第四女子寮", title: "四女茶屋", icon: "assets/tent12.jpg", pr: "こんにちは、第四女子寮です！今年で設立62年を迎える華の4女が、こだわりの豆乳ラテを販売します☕️ほっと一息つきに、ぜひ遊びに来てください！" },
    { tent: "TENT 16", group: "女子ラクロス部", title: "Tropicalax", pr: "🌺ハイビスカスが彩る、南国トロピカルソーダ！🌴\nカラフルな4色のトロピカルソーダが登場✨\nマンゴーなどのフルーツとハイビスカスを添えた、見た目も味も最高の一杯をどうぞ！" },
    { tent: "TENT 23", group: "30 3M", title: "3M LASSI HOUSE", pr: "実は紀元前1000年ごろに生まれ、今も愛され続けるラッシー。3M Lassi houseで、甘くまろやかな異国の味わいを楽しみながら、ほっと一息つきませんか？" },
    { tent: "TENT 26", group: "ICU Honey Project", title: "ハニプロのはちみつ販売", pr: "ICUで採れたおいしいはちみつを販売しています！はちみつと廃棄予定のみかんを活用した爽やか＆できたてスカッシュもぜひ召し上がってください！🐝" },
    { tent: "TENT 27", group: "30 3J", title: "Hawaiian Sky in the Tea", pr: "ハワイの空の移ろいを、3種類のフルーツの香りとともに表現しました！\nこの一口で、遠い友達を思い出すかも...？！" },
    { tent: "TENT 31", group: "27SL南アチーム", title: "南アフリカ・ルイボスティーカフェ", icon: "assets/tent31.jpg", pr: "南アフリカのセダルバーグ山脈。この地ではまろやかで香り豊かなルイボスティーが親しまれてきました。果実や蜂蜜の味とおやつを添えて、優雅な午後を過ごしませんか？" },
    { tent: "TENT 46", group: "硬式野球部", title: "硬式野球部のタピオカ", pr: "硬式野球部です！\n抹茶や黒糖烏龍、マンゴーピーチティーなどのフレーバーを揃えたタピオカを販売しています。\nぜひお立ち寄りください！" },
    { tent: "TENT 62", group: "ICUクラシックバレエサークル レカン", title: "ビビディ・バビディ・ブルーソーダ", pr: "私たちレカンが冬公演にて上演する「シンデレラ」をイメージした、きれいなブルーのゼリーソーダを販売します♪" },
    { tent: "TENT 66", group: "ぱくちー", title: "魔女屋", pr: "美味しいハーブティーと占いが体験できます！ぜひお越しください♡" },
    { tent: "TENT 75", group: "チャイのみちゃい", title: "チャイ屋さん", pr: "ようこそ、ゆいことかれんのチャイ屋さんへ！今年の春にインドを旅した私たちが、本場のチャイをお届けします！チャイを片手にディープな旅の話をしましょう！" },
    { tent: "TENT 77", group: "30 1A", title: "アメリカン・ドリンク", icon: "assets/tent77.jpg", pr: "We are 301A and we have decided to make drinks inspired by American Diners. We will provide Lemonade, Fruit Sodas, and Soda Floats. Feel free to drop by!" }
  ] },
  { id: "other", number: "05", name: "その他", description: "上記以外の屋外テント企画", projects: [
    { tent: "TENT 57", group: "ねこをかくひと", title: "こねこ、さしあげます。", icon: "assets/tent57.jpg", pr: "どういうわけだか、いつも横目でにこやかで自由気ままな猫を、その場で小さなカードに手描きしてさしあげます。猫アレルギーの方でも、安心して”飼える”猫です。" },
    { tent: "TENT 66", group: "ぱくちー", title: "魔女屋", pr: "美味しいハーブティーと占いが体験できます！ぜひお越しください♡" },
    { tent: "TENT 73", group: "ICU cats", title: "オリジナル猫グッズとスコーン", icon: "assets/tent73.png", pr: "ICUキャンパス内に住んでいる猫ちゃんたちをイラスト化したオリジナルグッズと、昨年も販売したスコーンを今年も販売します。" },
    { tent: "TENT 81", group: "Sal Vitae", title: "占い・似顔絵", pr: "毎年恒例、今年が最後！怪しい占い師と似顔絵師が帰ってくる！常連さんも一見さんもお待ちしてます。これが運命です。" }
  ] }
];

const outdoorSection = document.querySelector("#outdoor-tents");
if (outdoorSection) {
  const normalizeTentLabel = (tent) => {
    const raw = String(tent ?? "").trim();
    if (!raw) return "TENT 0";
    if (/^TENT\s*\d+$/i.test(raw)) return raw.replace(/^TENT\s*/i, "TENT ");
    if (/^\d+$/.test(raw)) return `TENT ${raw}`;
    return raw.startsWith("TENT") ? raw : `TENT ${raw}`;
  };

  outdoorSection.innerHTML = `<div class="section-heading"><div><p class="eyebrow">OUTDOOR TENTS</p><h2>屋外テント企画</h2></div><p>カテゴリを選ぶと、その企画一覧を確認できます。</p></div><div class="outdoor-category-grid">${outdoorCategoryData.map((category) => `<a class="outdoor-category" href="#outdoor-${category.id}"><span class="outdoor-category__number">${category.number}</span><h3>${category.name}</h3><p>${category.description}</p><span class="outdoor-category__link">VIEW PROJECTS →</span></a>`).join("")}</div>${outdoorCategoryData.map((category) => `<section class="outdoor-list" id="outdoor-${category.id}"><div class="outdoor-list__heading"><span class="eyebrow">${category.number} / ${category.name}</span><h3>${category.name}の企画</h3></div><div class="outdoor-project-list">${category.projects ? category.projects.slice().sort((firstProject, secondProject) => Number.parseInt(firstProject.tent.replace(/\D/g, ""), 10) - Number.parseInt(secondProject.tent.replace(/\D/g, ""), 10)).map((project) => `<article class="outdoor-project-card"><div class="outdoor-project-card__top"><span class="tent-number">${normalizeTentLabel(project.tent)}</span><img class="outdoor-project-card__icon" src="${project.icon || "assets/icon-nothing.png"}" alt="${project.group}のアイコン"></div><h4>${project.group}</h4><p class="outdoor-project-card__title">${project.title || "企画名"}</p><p>${project.pr}</p></article>`).join("") : `<article class="outdoor-project-placeholder"><span>PROJECTS</span><h4>企画情報を準備中</h4><p>このカテゴリの企画内容を受け取り次第、ここに一覧で掲載します。</p></article>`}</div></section>`).join("")}`;
}
