/* ==========================================================================
   MAIN.JS — Rumit Walia Portfolio
   Navigation, scroll effects, active states, counter animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
  initRevealAnimations();
  initHeaderScroll();
  setActiveNavLink();
});

/* ── Navigation ────────────────────────────────────────────────────────── */

function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  const backdrop = document.querySelector('.nav-backdrop');
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav__link');

  if (!toggle || !mobileNav) return;

  function openMenu() {
    toggle.classList.add('open');
    mobileNav.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('open');
    mobileNav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { if (backdrop) backdrop.style.display = 'none'; }, 400);
  }

  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? closeMenu() : openMenu();
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ── Header Scroll Effect ──────────────────────────────────────────────── */

function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* ── Active Nav Link ───────────────────────────────────────────────────── */

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── Scroll Reveal Animations ──────────────────────────────────────────── */

function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay based on sibling position
        const siblings = entry.target.parentElement.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        const siblingIndex = Array.from(siblings).indexOf(entry.target);
        const delay = siblingIndex * 100;
        
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── Scroll Effects (Counter, etc.) ────────────────────────────────────── */

function initScrollEffects() {
  // Counter animation
  const counters = document.querySelectorAll('[data-counter]');
  
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }
}

function animateCounter(element) {
  const target = parseFloat(element.dataset.counter);
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();
  const startValue = 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = startValue + (target - startValue) * eased;

    if (target >= 1000) {
      element.textContent = Math.floor(current / 1000 * 10) / 10 + 'K' + suffix;
    } else if (target >= 100) {
      element.textContent = Math.floor(current) + suffix;
    } else {
      element.textContent = Math.floor(current) + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Set final value
      element.textContent = element.dataset.display || (target >= 1000 
        ? (target / 1000) + 'K' + suffix 
        : target + suffix);
    }
  }

  requestAnimationFrame(update);
}

/* ── Smooth Scroll for Anchor Links ────────────────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
