# Rausku Landing Page - Responsive Testing Notes

## Overview
This document provides testing guidelines for verifying responsive behavior across all breakpoints.

**Theme:** Mecha Fish AI Assistant — Sharp and Calm  
**Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

---

## Breakpoint Testing Checklist

### 🔹 Mobile (< 640px) - Default/Base Styles

**Typography:**
- [ ] Display text: 2.5rem (40px)
- [ ] H1: 2rem (32px)
- [ ] H2: 1.625rem (26px)
- [ ] Body: 1rem (16px) - readable on small screens

**Navigation:**
- [ ] Hamburger menu visible (3-line icon)
- [ ] Menu items hidden behind hamburger
- [ ] Clicking hamburger opens full-screen overlay
- [ ] Touch target size: min 44px for all nav items
- [ ] Smooth slide-in animation from right
- [ ] Close button (X) appears when open
- [ ] Swipe right gesture closes menu
- [ ] Background scroll locked when menu open

**Hero Section:**
- [ ] Single column layout
- [ ] Visual stacked above text
- [ ] CTA buttons stacked vertically
- [ ] Full viewport height (100dvh for mobile)
- [ ] Padding: 6rem top (account for fixed nav), comfortable sides

**Features Section:**
- [ ] Single column card stack
- [ ] Cards full width with consistent gap
- [ ] Touch-friendly card height (min 100px)
- [ ] Icons visible and appropriately sized (3rem)

**About Section:**
- [ ] Visual appears above text (order: -1)
- [ ] Centered text alignment
- [ ] Stats stacked vertically
- [ ] Image max-width: 320px, centered

**Footer:**
- [ ] All elements stacked vertically
- [ ] Centered alignment
- [ ] Touch-friendly social links (44px)
- [ ] Links wrap naturally on very small screens

---

### 🔹 sm (640px) - Mobile Landscape

**Layout Changes:**
- [ ] Container: max-width 640px
- [ ] Increased side padding (24px)

**Features:**
- [ ] 2-column grid
- [ ] Third card spans full width below
- [ ] Gap: 20px between cards

**Footer:**
- [ ] Brand on left, links center, social right
- [ ] Flexbox row layout

**Typography:**
- [ ] Display: 3rem (48px)
- [ ] H1: 2.25rem (36px)

---

### 🔹 md (768px) - Tablet

**Major Changes:**
- [ ] Container: max-width 768px
- [ ] Navigation switches to desktop horizontal menu
- [ ] Hamburger hidden
- [ ] Nav links horizontal with gap

**Hero:**
- [ ] Display: 3.5rem
- [ ] CTA buttons side by side
- [ ] Subtitle max-width: 560px
- [ ] Visual: 260px

**Features:**
- [ ] 3-column grid
- [ ] Cards have hover effect (lift + glow)
- [ ] Increased padding inside cards
- [ ] Icon size: 3.5rem

**About:**
- [ ] Two-column layout (50/50)
- [ ] Visual on left, content on right
- [ ] Text left-aligned
- [ ] Stats horizontal row

**Typography Scale:**
- [ ] Display: 3.5rem
- [ ] H1: 2.75rem
- [ ] H2: 2rem
- [ ] H3: 1.375rem

---

### 🔹 lg (1024px) - Desktop

**Container:**
- [ ] max-width: 1024px

**Navigation:**
- [ ] Taller navbar (4.5rem)
- [ ] Larger brand text (1.375rem)
- [ ] Increased nav link spacing

**Hero:**
- [ ] Display: 4rem (full size)
- [ ] Visual: 320px
- [ ] Generous vertical padding

**Features:**
- [ ] Gap: 32px
- [ ] Cards: 40px padding
- [ ] Icons: 4rem

**About:**
- [ ] Wider gap between columns (48px)
- [ ] Stats: larger value text (2.5rem)

---

### 🔹 xl (1280px) - Large Desktop

**Container:**
- [ ] max-width: 1200px

**Hero:**
- [ ] Visual: 380px
- [ ] Subtitle max-width: 720px
- [ ] Extra padding for breathing room

**Features:**
- [ ] Gap: 40px
- [ ] Card padding: 48px

**About:**
- [ ] Visual column slightly wider (1.1 vs 0.9)
- [ ] Gap: 80px between columns

---

### 🔹 2xl (1536px) - Ultra-wide

**Container:**
- [ ] max-width: 1400px
- [ ] Content stays centered

**Hero:**
- [ ] Visual: 420px (max size)

**About:**
- [ ] Gap: 96px

**Effects:**
- [ ] Enhanced hover animations (6px lift)

---

## Device-Specific Testing

### 📱 iPhone SE (375 × 667)
- [ ] All content fits without horizontal scroll
- [ ] Text readable at default zoom
- [ ] Touch targets easily tappable

### 📱 iPhone 14 Pro (393 × 852)
- [ ] Dynamic Island doesn't obscure content
- [ ] Safe area insets respected

### 📱 iPad Mini (768 × 1024)
- [ ] Navigation shows desktop menu
- [ ] Two-column layouts render correctly

### 📱 iPad Pro 11" (834 × 1194)
- [ ] Full 3-column feature grid
- [ ] Comfortable reading width

### 💻 MacBook Air (1280 × 832)
- [ ] Full desktop experience
- [ ] All animations enabled

### 🖥️ Desktop (1920 × 1080)
- [ ] Content centered with max-width constraint
- [ ] No excessive stretching

---

## Interaction Testing

### Touch Interactions (Mobile/Tablet)
- [ ] Tap hamburger to open menu
- [ ] Tap X or outside to close menu
- [ ] Swipe right to close menu
- [ ] Tap nav links scrolls to section
- [ ] Touch targets minimum 44×44px
- [ ] No horizontal scrolling

### Mouse Interactions (Desktop)
- [ ] Hover states on buttons
- [ ] Hover lift on feature cards
- [ ] Smooth scroll on nav click
- [ ] Focus visible for keyboard navigation

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter activates buttons/links
- [ ] Escape closes mobile menu
- [ ] Focus trap in open mobile menu
- [ ] Skip to main content link

---

## Accessibility Testing

### Visual
- [ ] Color contrast WCAG AA compliant (4.5:1)
- [ ] Focus indicators visible (cyan glow)
- [ ] Text readable at 200% zoom

### Motion
- [ ] `prefers-reduced-motion` respected
- [ ] Animations disabled when preferred
- [ ] No auto-playing video

### Screen Readers
- [ ] ARIA labels on hamburger button
- [ ] Menu state announced (open/closed)
- [ ] Landmark regions defined
- [ ] Alt text on images

---

## Performance Testing

### Mobile Networks (3G/4G)
- [ ] CSS loads quickly (< 100KB total)
- [ ] No layout shift during load
- [ ] Images lazy-loaded

### Rendering
- [ ] 60fps animations
- [ ] No jank during scroll
- [ ] Smooth breakpoint transitions

---

## Browser Testing Matrix

| Browser | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Chrome | ✅ | ✅ | ✅ |
| Safari | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Edge | N/A | N/A | ✅ |
| Samsung Internet | ✅ | N/A | N/A |

---

## Quick Test Commands

### Chrome DevTools Device Toolbar
```
iPhone SE: 375 × 667 @ 2x
iPad Mini: 768 × 1024 @ 2x
Desktop HD: 1920 × 1080 @ 1x
```

### Responsive Mode Shortcuts
- `Ctrl/Cmd + Shift + M` - Toggle device toolbar
- `Ctrl/Cmd + Shift + C` - Inspect element

### Common Issues to Watch
1. **Horizontal scroll** - Usually caused by fixed widths
2. **Text overflow** - Check long words/URLs
3. **Touch targets** - Verify minimum 44px
4. **Z-index issues** - Modal/menu behind content
5. **Viewport units** - Test with/without toolbar

---

## Sign-off Checklist

- [ ] All breakpoints tested
- [ ] All major devices tested
- [ ] Accessibility audit passed
- [ ] Performance budget met
- [ ] Cross-browser verified
- [ ] Design approved at each breakpoint

---

## Notes

**Known Limitations:**
- Internet Explorer 11 not supported
- Minimum supported: Safari 14+, Chrome 90+, Firefox 88+

**Future Enhancements:**
- Container queries for component-level responsiveness
- View transitions API for page navigation
- More sophisticated touch gestures
