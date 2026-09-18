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
