/**
 * Rausku Landing Page - Main JavaScript
 * Theme: Mecha Fish AI Assistant — Sharp and Calm
 * 
 * Handles navigation, scroll animations, and interactive effects.
 */

(function() {
  'use strict';

  // ========================================
  // NAVIGATION
  // ========================================
  
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar scroll effect
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Mobile menu toggle
  function toggleMobileMenu() {
    const isOpen = navbarMenu.classList.toggle('is-open');
    navbarToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  // Close mobile menu
  function closeMobileMenu() {
    navbarMenu.classList.remove('is-open');
    navbarToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Event listeners for navigation
  if (navbarToggle) {
    navbarToggle.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbarMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // ========================================
  // SCROLL ANIMATIONS
  // ========================================

  // Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal, .feature-card, .stat-item, .section-header');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add stagger effect to parent
        if (entry.target.classList.contains('features-grid')) {
          entry.target.classList.add('stagger-children', 'visible');
        }
        
        // Unobserve after animation
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe elements
  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Also observe the grid containers for stagger effects
  const gridContainers = document.querySelectorAll('.features-grid, .about-stats');
  gridContainers.forEach(grid => {
    revealObserver.observe(grid);
  });

  // ========================================
  // SMOOTH SCROLL
  // ========================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // PARALLAX EFFECTS
  // ========================================

  const heroVisual = document.querySelector('.hero-visual');
  const fishParticles = document.querySelectorAll('.mecha-fish-particle');

  function handleParallax() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Hero visual parallax
    if (heroVisual && scrollY < windowHeight) {
      heroVisual.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    // Fish particles parallax
    fishParticles.forEach((fish, index) => {
      if (scrollY < windowHeight * 1.5) {
        const speed = 0.05 + (index * 0.02);
        fish.style.transform = `translateY(${scrollY * speed}px)`;
      }
    });
  }

  // ========================================
  // BUTTON RIPPLE EFFECT
  // ========================================

  function createRipple(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  document.querySelectorAll('.btn, .feature-card').forEach(button => {
    button.classList.add('ripple-container');
    button.addEventListener('click', createRipple);
  });

  // ========================================
  // NAVBAR BACKDROP BLUR ON SCROLL
  // ========================================

  let ticking = false;

  function updateOnScroll() {
    handleNavbarScroll();
    handleParallax();
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  });

  // ========================================
  // HERO ENTRANCE ANIMATION
  // ========================================

  function triggerHeroEntrance() {
    document.querySelector('.hero').classList.add('hero-entrance');
  }

  // Trigger entrance animation on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', triggerHeroEntrance);
  } else {
    triggerHeroEntrance();
  }

  // ========================================
  // STAT COUNTER ANIMATION
  // ========================================

  const statValues = document.querySelectorAll('.stat-value');
  
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statValues.forEach(stat => statObserver.observe(stat));

  function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const hasPercent = text.includes('%');
    const hasSlash = text.includes('/');
    
    // Extract numeric value
    const numericMatch = text.match(/[\d.]+/);
    if (!numericMatch) return;
    
    const target = parseFloat(numericMatch[0]);
    const suffix = hasPlus ? '+' : hasPercent ? '%' : hasSlash ? '' : '';
    const prefix = text.match(/^[^\d]*/)[0];
    
    let current = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      
      current = target * easeProgress;
      
      // Format based on original
      let displayValue;
      if (target % 1 !== 0) {
        displayValue = current.toFixed(1);
      } else {
        displayValue = Math.floor(current).toLocaleString();
      }
      
      element.textContent = `${prefix}${displayValue}${suffix}`;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = text; // Ensure final value is exact
      }
    }
    
    requestAnimationFrame(updateCounter);
  }

  // ========================================
  // FISH INTERACTIVITY
  // ========================================

  const interactiveFish = document.querySelectorAll('.mecha-fish-particle');
  
  interactiveFish.forEach(fish => {
    fish.classList.add('interactive-fish');
    
    fish.addEventListener('mouseenter', () => {
      fish.style.animationPlayState = 'paused';
    });
    
    fish.addEventListener('mouseleave', () => {
      fish.style.animationPlayState = 'running';
    });
  });

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================

  // Focus trap for mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !navbarMenu.classList.contains('is-open')) return;
    
    const focusableElements = navbarMenu.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  });

  // ========================================
  // REDUCED MOTION CHECK
  // ========================================

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduced-motion');
  }

  // ========================================
  // CONSOLE EASTER EGG
  // ========================================

  console.log('%c🐟 Rausku', 'font-size: 24px; font-weight: bold; color: #0EA5E9;');
  console.log('%cYour AI Assistant, Evolved', 'font-size: 14px; color: #94A3B8;');
  console.log('%cSwimming in the deep...', 'font-size: 12px; color: #22D3EE; font-style: italic;');

})();
