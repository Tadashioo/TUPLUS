// Carrusel 3D aislado: cinco conceptos orbitan como un mostrador giratorio.
document.querySelectorAll('.tpl-carousel').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('.tpl-slide')];
  const stage = carousel.querySelector('.tpl-stage');
  const dots = carousel.querySelector('.tpl-dots');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 1;
  let timer = null;
  let resumeTimer = null;
  const controls = slides.map((slide, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tpl-dot';
    button.setAttribute('aria-label', `Ver ${slide.dataset.title}`);
    button.addEventListener('click', () => { show(index); restart(); });
    dots.append(button);
    return button;
  });
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      let offset = (i - current + slides.length) % slides.length;
      if (offset > slides.length / 2) offset -= slides.length;
      slide.style.setProperty('--offset', offset);
      slide.style.setProperty('--scale', offset === 0 ? 1 : Math.abs(offset) === 1 ? .84 : .7);
      slide.style.setProperty('--opacity', offset === 0 ? 1 : Math.abs(offset) === 1 ? .72 : .42);
      slide.style.setProperty('--layer', 3 - Math.abs(offset));
      slide.dataset.active = String(offset === 0);
      slide.setAttribute('aria-hidden', String(offset !== 0));
      controls[i].setAttribute('aria-current', String(i === current));
    });
    carousel.querySelector('.tpl-category').textContent = slides[current].dataset.category;
    carousel.querySelector('.tpl-name').textContent = slides[current].dataset.title;
    carousel.querySelector('.tpl-count').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  function stop() {
    clearInterval(timer);
    timer = null;
    clearTimeout(resumeTimer);
  }
  function start() {
    if (reducedMotion.matches || document.hidden || timer) return;
    timer = setInterval(() => show(current + 1), 3400);
  }
  function restart() {
    stop();
    start();
  }
  carousel.querySelectorAll('[data-tpl-step]').forEach(button => {
    button.addEventListener('click', () => { show(current + Number(button.dataset.tplStep)); restart(); });
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
      restart();
    }
  });
  let startPoint = null;
  stage.addEventListener('pointerdown', event => { startPoint = {x: event.clientX, y: event.clientY}; stop(); });
  stage.addEventListener('pointerup', event => {
    if (!startPoint) return;
    const dx = event.clientX - startPoint.x;
    const dy = event.clientY - startPoint.y;
    if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
    startPoint = null;
    restart();
  });
  stage.addEventListener('pointercancel', () => { startPoint = null; restart(); });
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', () => { resumeTimer = setTimeout(start, 300); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  reducedMotion.addEventListener?.('change', () => reducedMotion.matches ? stop() : start());
  show(current);
  start();
});

// El colibrí completa un giro mientras la persona recorre la portada.
(() => {
  const bird = document.getElementById('hero-hummingbird');
  if (!bird) return;
  let pending = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => {
    bird.style.setProperty('--scroll-turn', reducedMotion.matches ? '0deg' : Math.min(360, Math.max(0, window.scrollY / 520 * 360)) + 'deg');
    pending = false;
  };
  reducedMotion.addEventListener?.('change', update);
  window.addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }, {passive:true});
  update();
})();
