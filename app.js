{
const S = window.SITE;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- text fill ---------- */
$("#first").textContent = S.first;
$("#last").textContent = S.last;
$("#roleLine").textContent = S.role.toUpperCase();
$("#tagline").textContent = S.tagline;
$("#nowLine").textContent = S.now;
$("#schoolLine").textContent = S.school;
$("#yr").textContent = new Date().getFullYear();
$("#aboutText").innerHTML = S.about.map(p => `<p>${esc(p)}</p>`).join("");
$("#skills").innerHTML = Object.entries(S.skills).map(([g, list]) =>
  `<p class="grp">${esc(g)}</p><div class="tags">${list.map(t => `<span>${esc(t)}</span>`).join("")}</div>`).join("");
$("#awards").innerHTML = S.awards.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("");
const rb = $("#resumeBtn");
if (S.resumePdf) rb.href = S.resumePdf; else rb.hidden = true;

/* ---------- blueprint figures ---------- */
const FIG = {
  mast: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M200 40v190M200 230l-70 50M200 230l70 50M200 230v50"/><path d="M190 40h20M188 70h24M186 120h28M184 175h32" opacity=".5"/>
    <circle cx="200" cy="30" r="12"/><path d="M200 8v-6M222 30h6M172 30h6M214 14l4-4M186 14l-4-4" opacity=".6"/>
    <rect x="186" y="214" width="28" height="22" rx="4"/><path d="M214 225h18l8-10"/><circle cx="240" cy="215" r="4"/>
    <path d="M300 30v250" stroke-dasharray="4 5" opacity=".6"/><path d="M294 30h12M294 280h12" opacity=".6"/></g>
    <text x="310" y="160" font-size="14" font-family="Space Mono" font-weight="700" fill="currentColor">6.1 m</text>
    <text x="120" y="222" font-size="11" font-family="Space Mono" fill="currentColor">worm gear</text>`,
  wire: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="70" cy="150" r="42"/><circle cx="70" cy="150" r="8"/><path d="M70 108c40 0 50 10 80 10"/>
    <circle cx="160" cy="112" r="10"/><circle cx="160" cy="132" r="10"/><path d="M150 122h40"/>
    <rect x="190" y="104" width="44" height="36" rx="6"/><path d="M234 122h22l14-20h40l18 30-40 28h-40l-14-38"/>
    <path d="M270 102v-40h58v70M310 102l18-40M256 122v60l54 18 18-40" opacity=".55" stroke-dasharray="5 4"/></g>
    <text x="40" y="215" font-size="11" font-family="Space Mono" fill="currentColor">spool</text>
    <text x="140" y="160" font-size="11" font-family="Space Mono" fill="currentColor">capstan</text>
    <text x="270" y="225" font-size="11" font-family="Space Mono" fill="currentColor">bent wireframe</text>`,
  legs: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="200" cy="150" rx="40" ry="78"/><ellipse cx="200" cy="62" rx="20" ry="14"/><path d="M192 50l-14-24M208 50l14-24"/>
    <path d="M162 110l-40-20-30 14M238 110l40-20 30 14M160 150h-50l-24 26M240 150h50l24 26M164 190l-40 30-10 40M236 190l40 30 10 40"/>
    <circle cx="122" cy="90" r="3"/><circle cx="278" cy="90" r="3"/><circle cx="110" cy="150" r="3"/><circle cx="290" cy="150" r="3"/><circle cx="124" cy="220" r="3"/><circle cx="276" cy="220" r="3"/></g>
    <path d="M92 104l-6 10M314 104l6 10" stroke="currentColor" stroke-width="2" opacity=".4"/>
    <text x="20" y="285" font-size="11" font-family="Space Mono" fill="currentColor">alternating tripod gait</text>`,
  spoon: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="300" cy="90" rx="46" ry="32" transform="rotate(-25 300 90)"/><path d="M262 112c-30 20-60 50-90 70"/>
    <path d="M178 170c-20 8-70 40-98 64a18 18 0 0 0 26 24c28-26 64-56 84-70z"/>
    <path d="M110 222l10 12M124 210l10 12M138 198l10 12" opacity=".6"/>
    <ellipse cx="290" cy="240" rx="80" ry="24"/><path d="M220 232c0-24 140-24 140 0" opacity=".6"/></g>
    <text x="40" y="290" font-size="11" font-family="Space Mono" fill="currentColor">weighted grip, angled bowl</text>
    <text x="250" y="290" font-size="11" font-family="Space Mono" fill="currentColor">raised lip plate</text>`,
  phone: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="70" y="40" width="110" height="220" rx="18"/><path d="M110 54h30"/><circle cx="125" cy="236" r="8"/>
    <path d="M92 150v0M102 130v40M112 112v76M122 138v24M132 100v100M142 126v48M152 140v20M162 132v36"/>
    <path d="M220 70h130a14 14 0 0 1 14 14v46a14 14 0 0 1-14 14h-90l-24 18v-18h-16a14 14 0 0 1-14-14v-46a14 14 0 0 1 14-14z"/>
    <path d="M230 184h120a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12h-120a12 12 0 0 1-12-12v-34a12 12 0 0 1 12-12z" opacity=".55"/></g>
    <text x="232" y="104" font-size="12" font-family="Space Mono" fill="currentColor">"I'm calling to</text>
    <text x="232" y="122" font-size="12" font-family="Space Mono" fill="currentColor">dispute a denial"</text>
    <text x="232" y="218" font-size="12" font-family="Space Mono" fill="currentColor">claim: reopened ✓</text>`,
  sound: `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <circle cx="200" cy="150" r="96"/><ellipse cx="200" cy="150" rx="40" ry="96"/><path d="M104 150h192M118 100h164M118 200h164" opacity=".5"/>
    <path d="M150 120c10-8 30-10 38 6s-10 22 4 34" stroke-width="3"/>
    <path d="M312 110a60 60 0 0 1 0 80M332 92a86 86 0 0 1 0 116M352 74a112 112 0 0 1 0 152" opacity=".7"/>
    <path d="M88 110a60 60 0 0 0 0 80M68 92a86 86 0 0 0 0 116" opacity=".4"/></g>
    <text x="150" y="285" font-size="11" font-family="Space Mono" fill="currentColor">listen to the planet</text>`,
  grid: `<g fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="50" y="40" width="300" height="220" rx="8"/><path d="M110 40v220M170 40v220M230 40v220M290 40v220M50 70h300M50 120h300M50 170h300M50 220h300" opacity=".45"/></g>
    <g fill="currentColor" opacity=".85"><rect x="114" y="74" width="52" height="42" rx="6"/><rect x="234" y="74" width="52" height="42" rx="6"/><rect x="174" y="124" width="52" height="42" rx="6"/><rect x="294" y="124" width="52" height="42" rx="6"/><rect x="54" y="124" width="52" height="42" rx="6" opacity=".5"/><rect x="114" y="174" width="52" height="42" rx="6" opacity=".5"/></g>
    <g font-family="Space Mono" font-size="11" fill="currentColor"><text x="70" y="60">M</text><text x="130" y="60">T</text><text x="190" y="60">W</text><text x="250" y="60">T</text><text x="310" y="60">F</text><text x="20" y="100">10a</text><text x="20" y="150">12p</text><text x="20" y="200">2p</text></g>`
};

/* ---------- file cabinet ---------- */
const COLORS = [["#EDF7BE","#0E3A35"],["#C2F2E4","#0E3A35"],["#35C8B4","#06302b"],["#A4CF4A","#0E3A35"],["#0E3A35","#EDF7BE"],["#F4F7E6","#0E3A35"],["#1F8F80","#EDF7BE"]];
const cab = $("#cabinet");
cab.innerHTML = S.projects.map((p, i) => {
  const [c, t] = COLORS[i % COLORS.length];
  return `<article class="folder" style="--c:${c};--t:${t};z-index:${20 - i}" data-i="${i}">
    <button class="tab" aria-expanded="false" aria-controls="fb${i}">CODE_${esc(p.code)} //</button>
    <button class="spine" tabindex="-1" aria-hidden="true"><span>CODE_${esc(p.code)} // ${esc(p.short)}</span></button>
    <div class="f-body" id="fb${i}">
      <div>
        <h3 class="f-title">${esc(p.title)}</h3>
        <p class="f-team">${esc(p.team)}</p>
        <table class="spec"><tr><th>ROLE</th><td>${esc(p.role)}</td></tr><tr><th>WHEN</th><td>${esc(p.when)}</td></tr><tr><th>TOOLS</th><td>${p.tools.map(esc).join(" · ")}</td></tr></table>
        <ul class="f-points">${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        ${p.link ? `<a class="f-link" href="${esc(p.link)}" target="_blank" rel="noopener">see more ↗</a>` : ""}
      </div>
      <figure class="f-fig" style="margin:0">
        <div class="f-stat"><b>${esc(p.stat[0])}</b><small>${esc(p.stat[1])}</small></div>
        <svg viewBox="0 0 400 300" role="img" aria-label="Sketch of ${esc(p.title)}">${FIG[p.fig] || ""}</svg>
        <figcaption><span>FIG. ${esc(p.code)}</span><span>${esc(p.short)}</span></figcaption>
      </figure>
    </div>
  </article>`;
}).join("");
const folders = $$(".folder", cab);
let openIdx = -1;
function openFolder(i, focus) {
  const close = window.innerWidth <= 760 && i === openIdx && !focus;
  folders.forEach((f, j) => {
    const on = j === i && !close;
    f.classList.toggle("open", on);
    $(".tab", f).setAttribute("aria-expanded", on);
  });
  openIdx = close ? -1 : i;
  if (focus) $(".tab", folders[i]).focus({ preventScroll: true });
  requestAnimationFrame(refreshSpec);
}
folders.forEach((f, i) => {
  $(".tab", f).addEventListener("click", () => openFolder(i));
  $(".spine", f).addEventListener("click", () => openFolder(i));
});
cab.addEventListener("keydown", e => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  e.preventDefault();
  const n = folders.length, i = (openIdx + (e.key === "ArrowRight" ? 1 : -1) + n) % n;
  openFolder(i, true);
});
openFolder(0);

/* ---------- experience log ---------- */
$("#logList").innerHTML = S.experience.map(x => `<li data-tags="${x.tags.join(" ")}">
  <span class="when">${esc(x.when)}</span>
  <div><h3>${esc(x.title)}</h3><span class="org">${esc(x.org)}</span><p>${esc(x.note)}</p></div>
  <span class="tg">${x.tags.map(t => `<i>${esc(t)}</i>`).join("")}</span></li>`).join("");
function filterGroup(btnSel, attr, items, match) {
  $$(btnSel).forEach(b => b.addEventListener("click", () => {
    $$(btnSel).forEach(x => x.classList.toggle("on", x === b));
    const f = b.dataset[attr];
    items().forEach(li => { li.hidden = !(f === "all" || match(li, f)); });
    requestAnimationFrame(refreshSpec);
  }));
}
filterGroup("[data-f]", "f", () => $$("#logList li"), (li, f) => li.dataset.tags.split(" ").includes(f));

/* ---------- courses ---------- */
$("#courseGrid").innerHTML = S.courses.map(c => `<div class="ccard ${c.status === "next" ? "next" : ""}" data-tag="${esc(c.tag)}">
  <div class="code">${esc(c.code)}</div><div class="cname">${esc(c.name)}</div></div>`).join("");
filterGroup("[data-c]", "c", () => $$("#courseGrid .ccard"), (el, f) => el.dataset.tag === f);

/* ---------- hobbies board ---------- */
const ICON = {
  squirrel: `<path d="M60 70c16 0 26-14 22-30S62 16 50 22c10 4 12 14 6 22" fill="none" stroke="#0E3A35" stroke-width="4"/><ellipse cx="38" cy="62" rx="16" ry="14" fill="#0E3A35"/><circle cx="26" cy="44" r="10" fill="#0E3A35"/><path d="M22 35l3-9 5 8z" fill="#0E3A35"/>`,
  chute: `<path d="M12 42a38 30 0 0 1 76 0z" fill="#35C8B4"/><path d="M12 42l38 34 38-34M31 42l19 34 19-34" fill="none" stroke="#0E3A35" stroke-width="2.5"/><circle cx="50" cy="82" r="6" fill="#0E3A35"/>`,
  deck: `<rect x="10" y="30" width="80" height="44" rx="8" fill="#0E3A35"/><circle cx="32" cy="52" r="14" fill="#A4CF4A"/><circle cx="68" cy="52" r="14" fill="#A4CF4A"/><circle cx="32" cy="52" r="3" fill="#0E3A35"/><circle cx="68" cy="52" r="3" fill="#0E3A35"/>`,
  keys: `<rect x="8" y="30" width="84" height="40" rx="4" fill="#fff" stroke="#0E3A35" stroke-width="3"/><path d="M20 30v40M32 30v40M44 30v40M56 30v40M68 30v40M80 30v40" stroke="#0E3A35" stroke-width="2"/><path d="M15 30h8v24h-8zM39 30h8v24h-8zM51 30h8v24h-8zM75 30h8v24h-8z" fill="#0E3A35"/>`,
  ball: `<circle cx="50" cy="50" r="34" fill="#A4CF4A" stroke="#0E3A35" stroke-width="3"/><path d="M16 50h68M50 16v68M26 26c14 14 14 34 0 48M74 26c-14 14-14 34 0 48" fill="none" stroke="#0E3A35" stroke-width="2.5"/>`,
  pen: `<path d="M20 80l8-26 40-40 18 18-40 40z" fill="#35C8B4" stroke="#0E3A35" stroke-width="3"/><path d="M20 80l8-26 18 18z" fill="#EDF7BE" stroke="#0E3A35" stroke-width="3"/>`,
  cup: `<path d="M22 30h50l-6 52H28z" fill="#A4CF4A" stroke="#0E3A35" stroke-width="3"/><path d="M28 44h38" stroke="#0E3A35" stroke-width="2"/><path d="M52 30l8-20" stroke="#0E3A35" stroke-width="4"/>`
};
const SPOTS = [[3, 5], [27, 50], [27, 3], [51, 48], [51, 5], [75, 50], [75, 4], [3, 50]];
const board = $("#board");
board.innerHTML = S.hobbies.map((h, i) => {
  const [x, y] = SPOTS[i % SPOTS.length], r = ((i * 37) % 13) - 6;
  return `<div class="pol" style="left:${x}%;top:${y}%;transform:rotate(${r}deg)" tabindex="0">
    <div class="ph">${h.img ? `<img src="${esc(h.img)}" alt="${esc(h.label)}">` : `<svg viewBox="0 0 100 100" aria-hidden="true">${ICON[h.icon] || ""}</svg>`}</div>
    <div class="cap">${esc(h.label)}</div>${h.note ? `<div class="sub">${esc(h.note)}</div>` : ""}</div>`;
}).join("");
let z = 10;
$$(".pol", board).forEach(p => {
  p.addEventListener("pointerdown", e => {
    if (window.innerWidth <= 760) return;
    const b = board.getBoundingClientRect(), r = p.getBoundingClientRect();
    const dx = e.clientX - r.left, dy = e.clientY - r.top;
    p.style.zIndex = ++z; p.setPointerCapture(e.pointerId);
    const move = ev => {
      const x = Math.max(0, Math.min(ev.clientX - b.left - dx, b.width - r.width));
      const y = Math.max(0, Math.min(ev.clientY - b.top - dy, b.height - r.height));
      p.style.left = x + "px"; p.style.top = y + "px";
    };
    const up = () => { p.removeEventListener("pointermove", move); p.removeEventListener("pointerup", up); };
    p.addEventListener("pointermove", move); p.addEventListener("pointerup", up);
  });
});

/* ---------- contact ---------- */
const rows = [];
if (S.email) rows.push(`<li><b>EMAIL</b><a href="mailto:${esc(S.email)}">${esc(S.email)}</a><button class="copy" id="copyMail">copy</button></li>`);
if (S.linkedin) rows.push(`<li><b>LINKEDIN</b><a href="${esc(S.linkedin)}" target="_blank" rel="noopener">${esc(S.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</a></li>`);
if (S.github) rows.push(`<li><b>GITHUB</b><a href="${esc(S.github)}" target="_blank" rel="noopener">${esc(S.github.replace(/^https?:\/\//, ""))}</a></li>`);
if (S.resumePdf) rows.push(`<li><b>RESUME</b><a href="${esc(S.resumePdf)}" target="_blank" rel="noopener">download PDF ↗</a></li>`);
$("#contactList").innerHTML = rows.join("");
const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("show"), 2600); };
$("#copyMail")?.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(S.email); toast("Email copied ✓"); } catch { toast(S.email); }
});
const env = $(".envelope");
new IntersectionObserver(es => es.forEach(e => e.isIntersecting && env.classList.add("opened")), { threshold: .5 }).observe(env);

/* ---------- squirrel easter egg ---------- */
const sq = $("#squirrel"), sqCount = $("#squirrelCount");
let spotted = 0;
try { spotted = +localStorage.getItem("squirrels") || 0; } catch {}
const showCount = () => { if (spotted) { sqCount.hidden = false; sqCount.textContent = `squirrels spotted: ${spotted}`; } };
showCount();
const LINES = ["You found one! I photograph these around campus.", "Sometimes I photograph them by drone. Seriously.", "Another one. You'd make a good field researcher.", "Okay, you're officially a squirrel spotter."];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
sq.hidden = false;
function peek() {
  sq.style.left = (8 + Math.random() * 80) + "vw";
  sq.classList.add("peek");
  setTimeout(() => sq.classList.remove("peek"), 4200);
  setTimeout(peek, 22000 + Math.random() * 16000);
}
if (!reduce) setTimeout(peek, 9000);
sq.addEventListener("click", () => {
  spotted++; try { localStorage.setItem("squirrels", spotted); } catch {}
  toast(LINES[Math.min(spotted - 1, LINES.length - 1)]); showCount(); sq.classList.remove("peek");
});

/* ---------- spec view ---------- */
const specBtn = $("#specBtn");
function refreshSpec() {
  $$(".dim").forEach(d => d.remove());
  if (!document.body.classList.contains("specview")) return;
  $$("[data-spec]").forEach(el => {
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    el.insertAdjacentHTML("beforeend",
      `<span class="dim name">${esc(el.dataset.spec)}</span><span class="dim w">W ${Math.round(r.width)}</span>`);
  });
}
function toggleSpec(on) {
  document.body.classList.toggle("specview", on);
  specBtn.setAttribute("aria-pressed", on);
  refreshSpec();
  if (on) toast("Spec view on. Everything's measured in px.");
}
specBtn.addEventListener("click", () => toggleSpec(!document.body.classList.contains("specview")));
addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "s" && !e.metaKey && !e.ctrlKey && !/input|textarea/i.test(e.target.tagName)) toggleSpec(!document.body.classList.contains("specview"));
});
const ro = new ResizeObserver(() => refreshSpec()); ro.observe(document.body);
cab.addEventListener("transitionend", e => { if (e.propertyName.startsWith("flex")) refreshSpec(); });

/* ---------- halftone portrait ---------- */
const cv = $("#halftone"), ctx = cv.getContext("2d");
let src = null;
function placeholder(w, h) {
  const o = document.createElement("canvas"); o.width = w; o.height = h;
  const g = o.getContext("2d");
  const grad = (x, y, r, a, b) => { const k = g.createRadialGradient(x - r * .3, y - r * .4, r * .1, x, y, r); k.addColorStop(0, a); k.addColorStop(1, b); return k; };
  g.fillStyle = grad(w * .5, h * .34, w * .34, "#bbb", "#222"); // hair
  g.beginPath(); g.ellipse(w * .5, h * .36, w * .3, h * .3, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = grad(w * .5, h * .95, w * .5, "#c8c8c8", "#444"); // shoulders
  g.beginPath(); g.ellipse(w * .5, h * 1.02, w * .5, h * .3, 0, Math.PI, 0); g.fill();
  g.fillStyle = grad(w * .5, h * .66, w * .1, "#e0e0e0", "#777"); g.fillRect(w * .42, h * .55, w * .16, h * .2); // neck
  g.fillStyle = grad(w * .5, h * .4, w * .22, "#f2f2f2", "#8a8a8a"); // face
  g.beginPath(); g.ellipse(w * .5, h * .42, w * .19, h * .2, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#333"; g.beginPath(); g.ellipse(w * .5, h * .24, w * .25, h * .1, 0, Math.PI, 0); g.fill();
  return o;
}
function drawHalftone() {
  const W = cv.clientWidth, H = cv.clientHeight; if (!W) return;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  cv.width = W * dpr; cv.height = H * dpr;
  const step = Math.max(5, Math.round(W / 70)) * dpr;
  const s = src || placeholder(W, H);
  const off = document.createElement("canvas"); off.width = cv.width; off.height = cv.height;
  const o = off.getContext("2d");
  const sw = s.naturalWidth || s.width, sh = s.naturalHeight || s.height;
  const sc = Math.max(cv.width / sw, cv.height / sh);
  o.drawImage(s, (cv.width - sw * sc) / 2, cv.height - sh * sc, sw * sc, sh * sc);
  let data;
  try { data = o.getImageData(0, 0, cv.width, cv.height).data; }
  catch { ctx.clearRect(0, 0, cv.width, cv.height); ctx.filter = "grayscale(1) contrast(1.3)"; ctx.drawImage(off, 0, 0); return; }
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = matchMedia("(prefers-color-scheme: dark)").matches ? "#cfd6d4" : "#3b4241";
  for (let y = 0, row = 0; y < cv.height; y += step * .866, row++) {
    for (let x = (row % 2) * step / 2; x < cv.width; x += step) {
      const i = ((Math.floor(y) * cv.width) + Math.floor(x)) * 4;
      const a = data[i + 3] / 255; if (a < .1) continue;
      const lum = (data[i] * .299 + data[i + 1] * .587 + data[i + 2] * .114) / 255;
      const r = (1 - lum) * step * .62 * a + step * .06;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  }
}
const img = new Image();
img.onload = () => { src = img; drawHalftone(); };
img.onerror = () => { $("#photoNote").hidden = false; drawHalftone(); };
img.src = S.photo;
const roH = new ResizeObserver(() => drawHalftone()); roH.observe(cv);
}
