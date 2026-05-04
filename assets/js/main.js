/* Sat (Europe/Sarajevo) */
function tick() {
  const fmt = new Intl.DateTimeFormat('bs-BA', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Sarajevo' });
  const t = fmt.format(new Date());
  const a = document.getElementById('clock-time'); if (a) a.textContent = t;
  const b = document.getElementById('hero-clock'); if (b) b.textContent = t;
}
tick();
setInterval(tick, 30 * 1000);

/* Footer godina */
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

/* Theme toggle s perzistencijom */
const root = document.documentElement;
const stored = localStorage.getItem('sk-theme');
if (stored) root.setAttribute('data-theme', stored);
const sun = document.getElementById('icon-sun');
const moon = document.getElementById('icon-moon');
function paintTheme() {
  const dark = root.getAttribute('data-theme') === 'dark';
  if (sun) sun.style.display = dark ? 'block' : 'none';
  if (moon) moon.style.display = dark ? 'none' : 'block';
}
paintTheme();
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('sk-theme', next);
  paintTheme();
});

/* Mobile menu */
const mb = document.getElementById('menu-btn');
const mm = document.getElementById('mobile-menu');
if (mb && mm) {
  mb.addEventListener('click', () => {
    const open = mm.classList.toggle('open');
    mb.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mm.classList.remove('open');
    mb.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}

/* Menu tabs */
const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.setAttribute('aria-selected', 'false'));
  panels.forEach(p => { p.classList.remove('active'); p.hidden = true; });
  t.setAttribute('aria-selected', 'true');
  const panel = document.getElementById(t.getAttribute('aria-controls'));
  panel.classList.add('active');
  panel.hidden = false;
}));

const tabsContainer = document.querySelector('.menu-tabs');
if (tabsContainer) {
  tabsContainer.addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    const arr = Array.from(tabs);
    let i = arr.indexOf(document.activeElement);
    if (e.key === 'ArrowRight') i = (i + 1) % arr.length;
    if (e.key === 'ArrowLeft') i = (i - 1 + arr.length) % arr.length;
    if (e.key === 'Home') i = 0;
    if (e.key === 'End') i = arr.length - 1;
    arr[i].focus();
    arr[i].click();
  });
}

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));
