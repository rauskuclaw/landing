/**
 * Rausku Navigation Component
 * Mobile hamburger menu with touch-friendly interactions
 * 
 * Features:
 * - Mobile-first hamburger toggle
 * - Smooth slide-in animation
 * - Touch gesture support
 * - Accessibility (ARIA) support
 * - Keyboard navigation
 * - Focus trap in mobile menu
 */

(function() {
  'use strict';

  // Navigation state
  const state = {
    isOpen: false,
    isMobile: false,
    breakpoint: 768 // md breakpoint
  };

  // DOM Elements
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const focusableElements = menu?.querySelectorAll(
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  );

  // Check if mobile view
  function checkMobile() {
    state.isMobile = window.innerWidth < state.breakpoint;
    
    if (!state.isMobile && state.isOpen) {
      closeMenu();
    }
  }

  // Open mobile menu
  function openMenu() {
    if (!state.isMobile) return;
    
    state.isOpen = true;
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    
    // Focus first nav link
    if (focusableElements?.length) {
      focusableElements[0].focus();
    }
    
    // Announce to screen readers
    announce('Navigation menu opened');
  }

  // Close mobile menu
  function closeMenu() {
    state.isOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
    
    // Return focus to toggle button
    toggle?.focus();
    
    // Announce to screen readers
    announce('Navigation menu closed');
  }

  // Toggle menu
  function toggleMenu() {
    if (state.isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Handle keyboard navigation
  function handleKeydown(e) {
    if (!state.isOpen) return;

    const focusable = Array.from(focusableElements || []);
    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    // Close on Escape
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }

    // Trap focus within menu
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    }
  }

  // Handle touch gestures (swipe to close)
  let touchStartX = 0;
  let touchStartY = 0;

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchEnd(e) {
    if (!state.isOpen) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Swipe right to close (if swiping from left edge or general swipe right)
    // Require horizontal swipe > 50px and vertical swipe < 100px
    if (deltaX > 50 && Math.abs(deltaY) < 100) {
      closeMenu();
    }
  }

  // Screen reader announcements
  function announce(message) {
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }

  // Handle nav link clicks (close menu on mobile)
  function handleNavLinkClick(e) {
    const href = e.currentTarget.getAttribute('href');
    
    // Close menu if clicking a same-page anchor
    if (href?.startsWith('#')) {
      closeMenu();
      
      // Smooth scroll to target
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  // Initialize
  function init() {
    if (!toggle || !menu) {
      console.warn('Navigation elements not found');
      return;
    }

    // Set initial ARIA attributes
    toggle.setAttribute('aria-controls', 'navbar-menu');
    toggle.setAttribute('aria-expanded', 'false');
    menu.id = 'navbar-menu';

    // Event listeners
    toggle.addEventListener('click', toggleMenu);
    document.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', debounce(checkMobile, 150));
    
    // Touch events for swipe
    menu.addEventListener('touchstart', handleTouchStart, { passive: true });
    menu.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Nav link clicks
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Close on click outside (mobile only)
    document.addEventListener('click', (e) => {
      if (state.isOpen && 
          !menu.contains(e.target) && 
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Initial check
    checkMobile();
  }

  // Utility: Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for external control
  window.RauskuNav = {
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu,
    isOpen: () => state.isOpen
  };

})();
