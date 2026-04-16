/* ==========================================================================
   ANIMATIONS.JS — Rumit Walia Portfolio
   Parallax, scroll-triggered effects, accordion logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initParallax();
  initEventsTabs();
});

/* ── Accordion ─────────────────────────────────────────────────────────── */

function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion__item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const body = item.querySelector('.accordion__body');

    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items in the same accordion
      const accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion__item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            const otherBody = otherItem.querySelector('.accordion__body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });
      }

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Open first item by default if specified
  const defaultOpen = document.querySelector('.accordion__item[data-default-open]');
  if (defaultOpen) {
    defaultOpen.classList.add('open');
    const body = defaultOpen.querySelector('.accordion__body');
    if (body) body.style.maxHeight = body.scrollHeight + 'px';
  }
}

/* ── Parallax Effect ───────────────────────────────────────────────────── */

function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (!parallaxElements.length) return;

  // Skip parallax on reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const offset = (scrollY - elementTop) * speed;

      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

/* ── Events Year Tabs ──────────────────────────────────────────────────── */

function initEventsTabs() {
  const yearBtns = document.querySelectorAll('.events-year-nav__btn');
  
  yearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const year = btn.dataset.year;
      
      // Update active button
      yearBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show corresponding accordion item
      const accordionItems = document.querySelectorAll('.accordion__item');
      accordionItems.forEach(item => {
        if (item.dataset.year === year) {
          item.classList.add('open');
          const body = item.querySelector('.accordion__body');
          if (body) body.style.maxHeight = body.scrollHeight + 'px';

        } else {
          item.classList.remove('open');
          const body = item.querySelector('.accordion__body');
          if (body) body.style.maxHeight = null;
        }
      });
    });
  });
}

/* ── Image Lazy Loading Enhancement ────────────────────────────────────── */

function initLazyImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  if (!images.length) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '100px'
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy images
document.addEventListener('DOMContentLoaded', initLazyImages);
