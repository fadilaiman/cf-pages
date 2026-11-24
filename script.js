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
