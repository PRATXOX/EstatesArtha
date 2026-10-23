const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let last = null, cur = null;
const BUD = ['Under ₹1 Cr', '₹1 Cr – ₹2 Cr', '₹2 Cr – ₹3.5 Cr', '₹3.5 Cr+'];
const inBud = (c, b) => b === '0' ? c < 1 : b === '1' ? c >= 1 && c <= 2 : b === '2' ? c > 2 && c <= 3.5 : c > 3.5;

/* ----- image sliders (hero, cards, details) with Logo as First Slide ----- */
let detStop = null, cardStops = [];
function mkSlider(root, p, ms, onch) {
  // Prepend logo as the first slide if available
  const logoItem = p.logo ? [p.logo] : [];
  const rawImgs = p.imgs || [];
  const S = [...logoItem, ...rawImgs];
  if (!S.length) return () => {};

  root.insertAdjacentHTML('afterbegin', 
    `<div class="sl-bg">${p.name}</div>` + 
    S.map((s, i) => {
      const isLogo = p.logo && i === 0;
      const customStyle = isLogo ? 'object-fit: contain !important; background: #FAF7F2; padding: 28px;' : '';
      return `<img class="sl-i${i === 0 ? ' on' : ''}" src="${s}" alt="${p.name} – view ${i + 1}" style="${customStyle}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} onerror="this.style.display='none'">`;
    }).join('')
  );

  root.insertAdjacentHTML('beforeend', 
    `<button class="sl-b sl-p" aria-label="Previous image">‹</button>` +
    `<button class="sl-b sl-n" aria-label="Next image">›</button>` +
    `<div class="sl-d">${S.map((_, i) => `<button aria-label="Show image ${i + 1}" class="${i === 0 ? 'on' : ''}"></button>`).join('')}</div>`
  );

  const I = root.querySelectorAll('.sl-i'), D = root.querySelectorAll('.sl-d button');
  let c = 0, t;

  const go = n => {
    c = (n + S.length) % S.length;
    I.forEach((e, i) => e.classList.toggle('on', i === c));
    D.forEach((e, i) => e.classList.toggle('on', i === c));
    onch && onch(c);
  };

  const stop = () => clearInterval(t);
  const start = () => {
    stop();
    if (!matchMedia('(prefers-reduced-motion:reduce)').matches) {
      t = setInterval(() => { if (!document.hidden) go(c + 1); }, ms);
    }
  };

  const step = (e, d) => { e.stopPropagation(); go(c + d); start(); };
  root.querySelector('.sl-p').onclick = e => step(e, -1);
  root.querySelector('.sl-n').onclick = e => step(e, 1);
  D.forEach((x, i) => x.onclick = e => { e.stopPropagation(); go(i); start(); });

  let x0 = null;
  root.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { go(c + (dx < 0 ? 1 : -1)); start(); }
    x0 = null;
  });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  start();
  return stop;
}

function initCards(){ 
  cardStops.forEach(f => f()); cardStops = [];
  $$('[data-slider]').forEach((el, i) => {
    const p = P.find(x => x.id == el.dataset.slider);
    cardStops.push(mkSlider(el, p, [3000, 3800, 4500][i % 3]));
  });
}

// Hero Slider initialized with Godrej DMIC (id: 6, index 5)
const heroProj = P.find(x => x.id === 6) || P[0];
mkSlider($('#hs'), heroProj, 3500, i => { 
  const caps = heroProj.caps || [];
  $('#hcap').textContent = caps[i] || heroProj.name; 
});
$('#hcap').textContent = (heroProj.caps && heroProj.caps[0]) || heroProj.name;

/* ----- filters ----- */
const uniq = k => [...new Set(P.map(p => p[k]))];
const opt = (a, all) => `<option value="">${all}</option>` + a.map(x => `<option>${x}</option>`).join('');
$('#fLoc').innerHTML = opt(uniq('area'), 'All locations');
$('#fDev').innerHTML = opt(uniq('dev'), 'All developers');
$('#fBud').innerHTML = '<option value="">Any budget</option>' + BUD.map((b, i) => `<option value="${i}">${b}</option>`).join('');
$('#fUnit').innerHTML = opt(['1 BHK', '2 BHK', '3 BHK', 'Luxury Villas', 'Commercial'], 'All unit types');
$('#lb').innerHTML = BUD.map(b => `<option>${b}</option>`).join('');
$('#lj').innerHTML = P.map(p => `<option value="${p.id}">${p.name}</option>`).join('');

function filtered(){
  const l = $('#fLoc').value, d = $('#fDev').value, b = $('#fBud').value, u = $('#fUnit').value;
  return P.filter(p => (!l || p.area === l) && (!d || p.dev === d) && (!u || p.units.includes(u)) && (b === '' || inBud(p.cr, b)));
}

function render(){
  const L = filtered();
  $('#count').textContent = `${L.length} project${L.length === 1 ? '' : 's'} found`;
  $('#grid').innerHTML = L.length ? L.map(p => `
  <article class="card overflow-hidden flex flex-col">
    <div class="sl aspect-[3/2] cursor-pointer" data-act="det" data-id="${p.id}" data-slider="${p.id}"><div class="badges">${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}</div></div>
    <div class="p-4 flex flex-col flex-1">
      <h3 class="fd text-xl font-bold">${p.title || p.name}</h3>
      <p class="mu text-sm">${p.loc} · ${p.dev}</p>
      <p class="text-sm mt-2">${p.units.join(', ')} <span class="mu">(${p.size})</span></p>
      <p class="gold fd text-2xl font-bold mt-2">Starting @ ${p.price}</p>
      ${p.pre ? `<p class="text-sm" style="color:#1F7A4D">Pre-launch offer @ ${p.pre} · EOI ${p.eoi}</p>` : ''}
      <div class="mt-auto pt-4 grid grid-cols-2 gap-2">
        <button class="btn2 !px-2 text-sm" data-act="det" data-id="${p.id}">View Details</button>
        <button class="btn !px-2 text-sm" data-act="lead" data-id="${p.id}" data-src="Card: Enquire Now">Enquire Now</button>
      </div>
    </div>
  </article>`).join('') : `<div class="card p-8 text-center col-span-full"><p class="mb-3">No project matches these filters.</p><button class="btn2" data-act="reset">Clear filters</button></div>`;
  initCards();
}

['#fLoc', '#fDev', '#fBud', '#fUnit'].forEach(s => $(s).addEventListener('change', render));
$('#sf').addEventListener('submit', e => { e.preventDefault(); render(); $('#projects').scrollIntoView({ behavior: 'smooth' }); });
function resetAll(){ ['#fLoc', '#fDev', '#fBud', '#fUnit'].forEach(s => $(s).value = ''); render(); }
$('#reset').onclick = resetAll;

/* ----- mobile menu ----- */
$('#burger').onclick = () => $('#menu').classList.toggle('hidden');
$('#menu').onclick = () => $('#menu').classList.add('hidden');

/* ----- modals ----- */
function openM(m){ m.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeAll(){ detStop && detStop(); detStop = null; $$('.modal').forEach(m => m.classList.remove('open')); document.body.style.overflow = ''; }
$$('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m || e.target.hasAttribute('data-close')) closeAll(); }));
addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

const MODES = {
  visit: ['Book your pre-launch site visit', 'Pick your details and our expert will confirm a free site visit with cab pickup.', 'Book Site Visit'],
  brochure: ['Get the brochure instantly', 'Submit your details and the brochure PDF downloads instantly on the next screen.', 'Get Instant Brochure'],
  enquire: ['Enquire now', 'Share your details and our expert will call you within 15 minutes.', 'Submit Enquiry']
};

function openLead(id, src, mode){
  closeAll(); cur = src || 'Website'; mode = mode || 'enquire';
  $('#lf').classList.remove('hidden'); $('#thanks').classList.add('hidden');
  if (id) $('#lj').value = id;
  const m = MODES[mode] || MODES.enquire;
  $('#lt').textContent = m[0]; $('#ls').textContent = m[1]; $('#lsub').textContent = m[2];
  openM($('#mLead')); setTimeout(() => $('#ln').focus(), 50);
}

function openDet(id){
  detStop && detStop();
  const p = P.find(x => x.id == id);
  $('#det').innerHTML = `
  <div class="sl aspect-[16/9]" id="dsl"><div class="badges" style="right:3.5rem">${p.badges.map(b => `<span class="badge">${b}</span>`).join('')}</div></div>
  <div class="p-5 space-y-5">
    <div><h2 class="fd text-3xl font-bold">${p.title || p.name}</h2><p class="mu">${p.loc} · ${p.dev}</p>
      <p class="gold fd text-2xl font-bold mt-1">Starting @ ${p.price}</p>${p.pre ? `<p style="color:#1F7A4D">Pre-launch offer @ ${p.pre} · EOI ${p.eoi}</p>` : ''}</div>
    <div><h3 class="fd text-lg font-bold mb-2">Floor plans &amp; configurations</h3>
      <div class="grid gap-2">${p.units.map(u => `<div class="flex justify-between items-center rounded-lg p-3 text-sm" style="background:#FAF7F2;border:1px solid var(--ln)"><b>${u}</b><span class="mu">${p.size}</span></div>`).join('')}</div>
      <button class="btn2 w-full mt-2 text-sm" data-act="lead" data-id="${p.id}" data-mode="brochure" data-src="Details: Floor plan PDF">Get floor plans &amp; price sheet</button></div>
    <div><h3 class="fd text-lg font-bold mb-2">Amenities</h3><div class="flex flex-wrap gap-2">${p.am.map(a => `<span class="chip !cursor-default !py-1 !text-xs">${a}</span>`).join('')}</div></div>
    <div><h3 class="fd text-lg font-bold mb-2">Location advantages</h3><ul class="space-y-1 text-sm">${p.adv.map(a => `<li><span class="gold">✓</span> ${a}</li>`).join('')}</ul></div>
    <div><h3 class="fd text-lg font-bold mb-2">Virtual tour</h3>${playBox(p.tour, 'Watch walkthrough')}</div>
    <div class="grid grid-cols-2 gap-2"><button class="btn" data-act="lead" data-id="${p.id}" data-mode="visit" data-src="Details: Schedule Site Visit">Book site visit</button><button class="btn2" data-act="lead" data-id="${p.id}" data-mode="brochure" data-src="Details: Download Brochure">Download brochure</button></div>
  </div>`;
  openM($('#mDet')); $('#mDet .sheet').scrollTop = 0; detStop = mkSlider($('#dsl'), p, 3500);
}

function playBox(url, label){
  return `<div class="relative aspect-video rounded-lg overflow-hidden" data-play="${url || ''}"><div class="absolute inset-0" style="background:linear-gradient(135deg,#E9E1CF,#F3EFE6)"></div><button class="absolute inset-0 flex flex-col items-center justify-center gap-2" data-act="play" aria-label="${label}"><span class="w-14 h-14 rounded-full flex items-center justify-center text-xl" style="background:var(--gold);color:#1a1305">▶</span><span class="text-sm">${label}</span></button></div>`;
}

function play(btn){
  const box = btn.closest('[data-play]'), u = box.dataset.play;
  if (u) box.innerHTML = `<iframe class="w-full h-full" src="${u}${u.includes('?') ? '&' : '?'}autoplay=1" allow="autoplay;fullscreen" allowfullscreen style="border:0"></iframe>`;
  else btn.querySelector('span:last-child').textContent = 'Add tour:"YouTube embed URL" to this project in js/projects.js';
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'lead') openLead(b.dataset.id, b.dataset.src, b.dataset.mode);
  if (a === 'det') openDet(b.dataset.id);
  if (a === 'play') play(b);
  if (a === 'reset') resetAll();
});

/* ----- phone + validation ----- */
function fmtPhone(el){ let d = el.value.replace(/\D/g, ''); if (d.length > 10 && /^(91|0)/.test(d)) d = d.replace(/^(91|0)/, ''); d = d.slice(0, 10); el.value = d.length > 5 ? d.slice(0, 5) + ' ' + d.slice(5) : d; }
$('#lp').addEventListener('input', e => fmtPhone(e.target));
const okName = v => v.trim().length >= 2, okPhone = v => /^[6-9]\d{9}$/.test(v.replace(/\s/g, '')), okMail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/* ----- lead storage & sync ----- */
function getLeads(){ try { return JSON.parse(localStorage.getItem('leads') || '[]'); } catch (e) { return []; } }
function saveLead(d){
  d.timestamp = new Date().toISOString(); d.dateTime = new Date().toLocaleString('en-IN'); d.page = location.href; d.utm = location.search.slice(1);
  const a = getLeads(); a.push(d); try { localStorage.setItem('leads', JSON.stringify(a)); } catch (e) {}
  if (CFG.WEBHOOK) fetch(CFG.WEBHOOK, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(d) }).catch(() => {});
  try { window.fbq && fbq('track', 'Lead', { content_name: d.project }); } catch (e) {}
  last = d;
}

window.exportLeads = function(){
  const a = getLeads(); if (!a.length) return console.log('No leads yet');
  const k = Object.keys(a[0]); const csv = [k.join(',')].concat(a.map(r => k.map(x => JSON.stringify(r[x] ?? '')).join(','))).join('\n');
  dl(new Blob([csv], { type: 'text/csv' }), 'leads.csv');
};
function dl(blob, name){ const u = URL.createObjectURL(blob), a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 2000); }

/* ----- brochure PDF ----- */
function pdf(lines){
  const e = s => s.replace(/[^\x20-\x7e]/g, '').replace(/[\\()]/g, '\\$&');
  let c = 'BT /F1 12 Tf 50 790 Td 17 TL\n'; lines.forEach(l => c += '(' + e(l) + ') Tj T*\n'); c += 'ET';
  const o = ['<</Type/Catalog/Pages 2 0 R>>', '<</Type/Pages/Kids[3 0 R]/Count 1>>', '<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>', '<</Length ' + c.length + '>>stream\n' + c + '\nendstream', '<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>'];
  let s = '%PDF-1.4\n', off = []; o.forEach((b, i) => { off.push(s.length); s += (i + 1) + ' 0 obj\n' + b + '\nendobj\n'; });
  const x = s.length; s += 'xref\n0 6\n0000000000 65535 f \n' + off.map(n => String(n).padStart(10, '0') + ' 00000 n \n').join('') + 'trailer<</Size 6/Root 1 0 R>>\nstartxref\n' + x + '\n%%EOF';
  return new Blob([s], { type: 'application/pdf' });
}
const rs = t => t.replace('₹', 'Rs. ');
function brochure(p){
  if (p.brochure) { window.open(p.brochure, '_blank'); return; }
  const L = ['ESTATES ARTHA - PROJECT BROCHURE', '', p.title || p.name, p.loc + ' | ' + p.dev, 'Starting @ ' + rs(p.price)].concat(p.pre ? ['Pre-launch offer @ ' + rs(p.pre) + ' | EOI ' + rs(p.eoi)] : [], ['', 'Configurations: ' + p.units.join(', ') + ' (' + p.size + ')', '', 'Highlights:'], p.hl.map(x => ' - ' + x), ['', 'Amenities: ' + p.am.join(', '), '', 'Location:'], p.adv.map(x => ' - ' + x), ['', 'Call +91 99999 99999 to book a free site visit.', 'Prices are indicative, subject to change. RERA details on request.']);
  dl(pdf(L), p.name.replace(/\s+/g, '-') + '-brochure.pdf');
}

/* ----- thank-you ----- */
const wa = m => `https://wa.me/${CFG.WA}?text=${encodeURIComponent(m)}`;
function showThanks(d){
  const p = P.find(x => x.id == d.projectId);
  $('#lf').classList.add('hidden'); $('#thanks').classList.remove('hidden');
  $('#tn').textContent = d.name.split(' ')[0]; $('#tp').textContent = p.name;
  $('#dl').textContent = `Download ${p.name} Brochure`; $('#dl').onclick = () => brochure(p);
  $('#twa').href = wa(`Hi, I'm ${d.name}. I'm interested in ${p.name} (budget ${d.budget}). Please share the details.`);
  if (d.source && /brochure/i.test(d.source)) brochure(p);
}

$('#lf').addEventListener('submit', e => {
  e.preventDefault();
  const v = { n: $('#ln').value, p: $('#lp').value, e: $('#le').value };
  const m = { n: okName(v.n) ? '' : 'Enter your full name.', p: okPhone(v.p) ? '' : 'Enter a valid 10-digit mobile number.', e: okMail(v.e) ? '' : 'Enter a valid email address.' };
  $$('[data-e]').forEach(x => x.textContent = m[x.dataset.e]);
  if (m.n || m.p || m.e) return;
  const p = P.find(x => x.id == $('#lj').value);
  const d = { name: v.n.trim(), phone: '+91' + v.p.replace(/\s/g, ''), email: v.e.trim(), project: p.name, projectId: p.id, budget: $('#lb').value, source: cur };
  saveLead(d); showThanks(d); e.target.reset();
});

/* ----- sticky contact buttons ----- */
$('#fwa').href = $('#bwa').href = wa('Hi, I saw your ad and want details on the Godrej DMIC pre-launch.');
$('#fcall').href = $('#bcall').href = 'tel:' + CFG.PHONE;

render();