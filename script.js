const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

const tabs = document.getElementById('tabs');
if (tabs) {
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    tabs.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    const f = b.dataset.f;
    document.querySelectorAll('#cards .card').forEach((c) => {
      c.classList.toggle('hide', f !== 'all' && !c.dataset.c.split(' ').includes(f));
    });
  });
}

// split the hero name into letters for the staggered intro + hover wave
document.querySelectorAll('.name > span').forEach((s, k) => {
  const base = k ? 8 : 0;
  s.setAttribute('aria-label', s.textContent);
  s.innerHTML = [...s.textContent].map((c, i) =>
    '<span class="ch" aria-hidden="true" style="--i:' + (i + base) + '">' + (c === ' ' ? '&nbsp;' : c) + '</span>').join('');
});

// scroll-reveal for cards and CTA
const items = document.querySelectorAll('.card, .cta, .prose p, .wrap h2');
items.forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--d', (i % 6) * 80 + 'ms'); });
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12 });
  items.forEach((el) => io.observe(el));
} else items.forEach((el) => el.classList.add('in'));
