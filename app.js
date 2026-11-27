{
const S = window.SITE;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- text fill ---------- */
$("#first").textContent = S.first;
$("#last").textContent = S.last;
$("#roleLine").textContent = S.role;
$("#degreeLine").textContent = S.degree;
$("#minorLine").textContent = S.minors;
$("#degree2").textContent = S.degree;
$("#minor2").textContent = S.minors;
$("#nowLine").textContent = S.now;
$("#yr").textContent = new Date().getFullYear();
$("#projCount").textContent = `${S.projects.length} projects`;
const links = [["Email", S.email && "mailto:" + S.email], ["LinkedIn", S.linkedin], ["GitHub", S.github], ["Resume", S.resumePdf]].filter(l => l[1]);
$("#heroLinks").innerHTML = links.map(([t, h]) => `<a href="${esc(h)}" ${h.startsWith("mailto") ? "" : 'target="_blank" rel="noopener"'}>${esc(t)}</a>`).join("");
$("#introText").innerHTML = S.intro.map(p => `<p>${esc(p)}</p>`).join("");
$("#interests").innerHTML = S.interests.map(t => `<span>${esc(t)}</span>`).join("");
$("#roles").innerHTML = S.roles.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("");
$("#honors").innerHTML = S.honors.map(([a, b]) => `<li><b>${esc(a)}</b> ${esc(b)}</li>`).join("");
$("#courseRows").innerHTML = S.courses.map(c => `<tr class="${c.status === "next" ? "next" : ""}"><td class="mono">${esc(c.code)}</td><td>${esc(c.name)}</td><td>${esc(c.area)}</td><td>${c.status === "next" ? '<span class="pill">Up next</span>' : "Completed"}</td></tr>`).join("");
$("#leadGrid").innerHTML = S.leadership.map(l => `<article class="lead">
  <p class="lead-when">${esc(l.when)}</p><h3>${esc(l.title)}</h3><p class="lead-org">${esc(l.org)}</p><p>${esc(l.text)}</p>
  <div class="tg">${l.tags.map(t => `<i>${esc(t)}</i>`).join("")}</div></article>`).join("");
$("#skills").innerHTML = Object.entries(S.skills).map(([g, list]) =>
  `<div><p class="grp">${esc(g)}</p><div class="tags">${list.map(t => `<span>${esc(t)}</span>`).join("")}</div></div>`).join("");
const rb = $("#resumeBtn");
if (S.resumePdf) rb.href = S.resumePdf; else $("#resumeRow").hidden = true;

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
    <button class="tab" aria-expanded="false" aria-controls="fb${i}">${esc(p.code)}</button>
    <button class="spine" tabindex="-1" aria-hidden="true"><span>${esc(p.code)} / ${esc(p.short)}</span></button>
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

/* ---------- hobbies + island ---------- */
const TC = ["#35C8B4", "#A4CF4A", "#C2F2E4", "#EDF7BE"];
$("#board").innerHTML = S.hobbies.map((h, i) => `<button class="tile ${h.img ? "has-img" : ""}" style="--tc:${TC[i % TC.length]}" data-h="${i}" aria-haspopup="dialog">
  ${h.img ? `<img src="${esc(h.img)}" alt="" loading="lazy">` : ""}
  <span class="num">${String(i + 1).padStart(2, "0")}</span><span class="open-ic" aria-hidden="true">↗</span>
  <span class="cap">${esc(h.label)}</span>${h.note ? `<span class="sub">${esc(h.note)}</span>` : ""}</button>`).join("");
const island = $("#island");
$$(".tile").forEach(t => t.addEventListener("click", () => {
  const h = S.hobbies[+t.dataset.h];
  $("#isKicker").textContent = `Outside engineering · ${String(+t.dataset.h + 1).padStart(2, "0")}`;
  $("#isTitle").textContent = h.label;
  $("#isText").textContent = h.detail || h.note || "";
  $("#isArt").hidden = !/music/i.test(h.label);
  const L = $("#isLink");
  if (h.link && h.link.url) { L.hidden = false; L.href = h.link.url; L.textContent = h.link.label + " ↗"; } else L.hidden = true;
  island.style.setProperty("--tc", t.style.getPropertyValue("--tc"));
  if (island.showModal) island.showModal(); else island.setAttribute("open", "");
}));
const closeIsland = () => { island.classList.add("closing"); setTimeout(() => { island.classList.remove("closing"); island.close?.(); island.removeAttribute("open"); }, 220); };
$("#isClose").addEventListener("click", closeIsland);
island.addEventListener("click", e => { if (e.target === island) closeIsland(); });
island.addEventListener("cancel", e => { e.preventDefault(); closeIsland(); });

/* ---------- contact ---------- */
const mb = $("#mailBig"); mb.textContent = S.email; mb.href = "mailto:" + S.email;
const rows = [];
if (S.email) rows.push(`<li><button class="copy" id="copyMail">Copy email</button></li>`);
if (S.linkedin) rows.push(`<li><a href="${esc(S.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a></li>`);
if (S.github) rows.push(`<li><a href="${esc(S.github)}" target="_blank" rel="noopener">GitHub ↗</a></li>`);
if (S.resumePdf) rows.push(`<li><a href="${esc(S.resumePdf)}" target="_blank" rel="noopener">Resume ↗</a></li>`);
$("#contactList").innerHTML = rows.join("");
const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("show"), 2400); };
$("#copyMail")?.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(S.email); toast("Email copied"); } catch { toast(S.email); }
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
      `<span class="dim name">${esc(el.dataset.spec)}</span><span class="dim w">${Math.round(r.width)} × ${Math.round(r.height)}</span>`);
  });
}
function toggleSpec(on) {
  document.body.classList.toggle("specview", on);
  specBtn.setAttribute("aria-pressed", on);
  refreshSpec();
  if (on) toast("Spec view: dimensions in px");
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
/* Dots are computed once (prepare), then redrawn cheaply (render) so they can
   build in on load and react to the cursor. */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let dots = [], back = null, dpr = 2, step = 6, intro = reduceMotion ? 1 : 0;
const mouse = { x: -1e4, y: -1e4, active: false };
function prepare() {
  const W = cv.clientWidth, H = cv.clientHeight; if (!W) return;
  dpr = Math.max(2, Math.min((devicePixelRatio || 1) * 1.5, 3));
  cv.width = W * dpr; cv.height = H * dpr;
  step = Math.max(3, Math.round(W / 175 * dpr));
  const rowStep = Math.round(step * .866);
  const s = src || placeholder(W, H);
  const off = document.createElement("canvas"); off.width = cv.width; off.height = cv.height;
  const o = off.getContext("2d");
  const sw = s.naturalWidth || s.width, sh = s.naturalHeight || s.height;
  const sc = Math.max(cv.width / sw, cv.height / sh);
  o.drawImage(s, (cv.width - sw * sc) / 2, cv.height - sh * sc, sw * sc, sh * sc);
  let data;
  try { data = o.getImageData(0, 0, cv.width, cv.height).data; }
  catch { dots = null; ctx.filter = "grayscale(1) contrast(1.3)"; ctx.drawImage(off, 0, 0); return; }
  back = document.createElement("canvas"); back.width = cv.width; back.height = cv.height;
  const bx = back.getContext("2d"); bx.drawImage(off, 0, 0); bx.globalCompositeOperation = "source-in";
  bx.fillStyle = getComputedStyle(document.body).backgroundColor; bx.fillRect(0, 0, back.width, back.height);
  dots = [];
  for (let y = 0, row = 0; y < cv.height; y += rowStep, row++) {
    for (let x = (row % 2) * step / 2; x < cv.width; x += step) {
      const i = ((Math.floor(y) * cv.width) + Math.floor(x)) * 4;
      const al = data[i + 3] / 255; if (al < .1) continue;
      const lum = (data[i] * .299 + data[i + 1] * .587 + data[i + 2] * .114) / 255;
      const d = Math.min(1, Math.max(0, (1 - lum - .04) / .82));
      dots.push(x, y, step * .56 * Math.sqrt(d) * al + step * .05);
    }
  }
  render();
}
function render() {
  if (!dots) return;
  const Wc = cv.width, Hc = cv.height;
  ctx.clearRect(0, 0, Wc, Hc);
  ctx.globalAlpha = Math.min(1, intro * 1.5); ctx.drawImage(back, 0, 0); ctx.globalAlpha = 1;
  ctx.fillStyle = matchMedia("(prefers-color-scheme: dark)").matches ? "#cfd6d4" : "#3b4241";
  const R = 85 * dpr, mx = mouse.x * dpr, my = mouse.y * dpr, live = mouse.active;
  ctx.beginPath();
  for (let k = 0; k < dots.length; k += 3) {
    let x = dots[k], y = dots[k + 1], r = dots[k + 2];
    if (intro < 1) { // dots grow in, top to bottom
      const t = Math.min(1, Math.max(0, intro * 1.8 - (y / Hc) * .8));
      r *= 1 - Math.pow(1 - t, 3);
      if (r < .2) continue;
    }
    if (live) { // ripple: dots near the cursor drift outward
      const dx = x - mx, dy = y - my, dist2 = dx * dx + dy * dy;
      if (dist2 < R * R) {
        const dist = Math.sqrt(dist2) || 1, f = 1 - dist / R, e = f * f * (3 - 2 * f);
        x += dx / dist * e * step * 1.6; y += dy / dist * e * step * 1.6;
      }
    }
    ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, Math.PI * 2);
  }
  ctx.fill();
}
let raf = 0;
const queue = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; render(); }); };
function playIntro() {
  if (reduceMotion) { intro = 1; render(); return; }
  const t0 = performance.now();
  const tick = now => { intro = Math.min(1, (now - t0) / 1600); render(); if (intro < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
const heroEl = $(".hero");
if (!reduceMotion && matchMedia("(hover: hover)").matches) {
  heroEl.addEventListener("pointermove", e => {
    const b = cv.getBoundingClientRect();
    mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top; mouse.active = true; queue();
  });
  heroEl.addEventListener("pointerleave", () => { mouse.active = false; queue(); });
}
const img = new Image();
img.onload = () => { src = img; prepare(); };
img.onerror = () => { $("#photoNote").hidden = false; prepare(); };
img.src = S.photo;
let started = false;
const roH = new ResizeObserver(() => { prepare(); if (!started && dots) { started = true; playIntro(); } }); roH.observe(cv);

/* ---------- fit signature name to width ---------- */
const nameEl = $(".bigname");
function fitName() {
  nameEl.style.fontSize = "";
  const spans = $$("span", nameEl), avail = nameEl.clientWidth * .96;
  const widths = innerWidth <= 760 ? spans.map(s => s.getBoundingClientRect().width)
    : [spans[1].getBoundingClientRect().right - spans[0].getBoundingClientRect().left];
  const w = Math.max(...widths);
  if (w > avail) nameEl.style.fontSize = parseFloat(getComputedStyle(nameEl).fontSize) * avail / w + "px";
}
(document.fonts?.ready || Promise.resolve()).then(fitName);
addEventListener("resize", fitName);

/* ---------- name paints in ---------- */
(document.fonts?.ready || Promise.resolve()).then(() => nameEl.classList.add("painted"));

/* ---------- reveal on scroll ---------- */
const revealTargets = $$(".sec-head, .cabinet, .about-grid > *, .acad > *, .lead, .log li, .tile, .contact-band .inner > *, .skills-row > div");
revealTargets.forEach(el => el.classList.add("rv"));
$$(".lead, .tile, .skills-row > div").forEach((el, i) => el.style.transitionDelay = (i % 4) * 90 + "ms");
$$(".log li").forEach((el, i) => el.style.transitionDelay = Math.min(i, 6) * 50 + "ms");
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
revealTargets.forEach(el => io.observe(el));

/* ---------- skills marquee ---------- */
const words = [...S.interests, ...Object.values(S.skills).flat()];
const run = words.map(w => `<span>${esc(w)}</span><i aria-hidden="true">✦</i>`).join("");
$("#marquee").innerHTML = `<div class="mq-track">${run}${run}</div>`;

/* ---------- custom cursor ---------- */
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
  document.documentElement.classList.add("has-cursor");
  const dot = $(".cur-dot"), ring = $(".cur-ring"), label = $("span", ring);
  let tx = -100, ty = -100, rx = -100, ry = -100;
  addEventListener("pointermove", e => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx}px,${ty}px)`;
    document.documentElement.classList.remove("cur-out");
    const special = e.target.closest(".folder:not(.open), .tile");
    const t = special || e.target.closest("a, button, .chip");
    ring.classList.toggle("big", !!t);
    label.textContent = special ? (special.matches(".tile") ? "view" : "open") : "";
    ring.classList.toggle("labeled", !!label.textContent);
    dot.style.opacity = label.textContent ? 0 : "";
  });
  document.addEventListener("pointerleave", () => document.documentElement.classList.add("cur-out"));
  addEventListener("pointerdown", () => ring.classList.add("press"));
  addEventListener("pointerup", () => ring.classList.remove("press"));
  (function follow() {
    rx += (tx - rx) * .18; ry += (ty - ry) * .18;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(follow);
  })();
}
}
