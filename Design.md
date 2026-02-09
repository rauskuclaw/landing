# Rausku Landing Page Design System

> **Theme:** Mecha Fish AI Assistant — Sharp and Calm
> **Vibe:** Modern tech with organic fluidity, approachable intelligence

---

## 1. Color Scheme

### Primary Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#0EA5E9` | Ocean cyan — primary actions, links, accents |
| `--color-primary-dark` | `#0284C7` | Deep ocean — hover states |
| `--color-primary-light` | `#38BDF8` | Shallow water — highlights, glows |

### Secondary Palette (Mecha Metallics)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-metal-dark` | `#1E293B` | Gunmetal — dark surfaces |
| `--color-metal` | `#334155` | Steel — secondary surfaces |
| `--color-metal-light` | `#475569` | Brushed aluminum — borders, dividers |
| `--color-chrome` | `#94A3B8` | Chrome accents — icons, subtle highlights |

### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bio-glow` | `#22D3EE` | Bioluminescent cyan — glow effects, focus states |
| `--color-coral` | `#F97316` | Warm coral — CTAs, important highlights |
| `--scale-deep` | `#0F172A` | Deep ocean background |
| `--color-foam` | `#F8FAFC` | Sea foam — light text on dark |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#10B981` | Emerald — positive states |
| `--color-warning` | `#F59E0B` | Amber — caution |
| `--color-error` | `#EF4444` | Coral red — errors |
| `--color-info` | `#3B82F6` | Ocean blue — information |

### Gradient Patterns

```css
--gradient-hero: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0EA5E9 100%);
--gradient-card: linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%);
--gradient-glow: radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
--gradient-fish: linear-gradient(90deg, #0EA5E9 0%, #22D3EE 50%, #38BDF8 100%);
```

---

## 2. Typography

### Font Stack

```css
--font-display: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Level | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| Display | 4rem (64px) | 1.1 | 800 | Hero headline |
| H1 | 3rem (48px) | 1.2 | 700 | Page titles |
| H2 | 2.25rem (36px) | 1.25 | 700 | Section headers |
| H3 | 1.5rem (24px) | 1.3 | 600 | Card titles |
| H4 | 1.25rem (20px) | 1.4 | 600 | Subsection headers |
| Body Large | 1.125rem (18px) | 1.6 | 400 | Lead paragraphs |
| Body | 1rem (16px) | 1.6 | 400 | Regular text |
| Small | 0.875rem (14px) | 1.5 | 400 | Captions, metadata |
| Tiny | 0.75rem (12px) | 1.5 | 500 | Tags, badges |

### Typography Patterns

- **Headlines:** Tight letter-spacing (-0.02em), bold weight
- **Body:** Comfortable line-height (1.6), relaxed reading
- **Code/Technical:** Mono font, cyan color (`--color-bio-glow`)
- **Accent Text:** Gradient text using `--gradient-fish`

---

## 3. Section Layout

### Overall Structure

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (fixed, glassmorphism)                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗  │
│  ║                    HERO SECTION                       ║  │
│  ║     [Animated Mecha Fish Visual]                      ║  │
│  ║     "Your AI Assistant, Evolved"                      ║  │
│  ║     [Get Started] [Learn More]                        ║  │
│  ╚═══════════════════════════════════════════════════════╝  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              FEATURES SECTION                         │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │  │
│  │  │ Feature  │  │ Feature  │  │ Feature  │            │  │
│  │  │    1     │  │    2     │  │    3     │            │  │
│  │  └──────────┘  └──────────┘  └──────────┘            │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              ABOUT SECTION                            │  │
│  │     [Visual]          [Text Content]                  │  │
│  │     Mecha Fish        Origin story, capabilities      │  │
│  │     Illustration      Personality                     │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              CONTACT / FOOTER                         │  │
│  │     [Contact Form]    [Links]    [Social]             │  │
│  │     Ready to dive in?                                 │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Hero Section

**Layout:** Full viewport height (100vh), centered content
**Background:** Deep ocean gradient with subtle animated particles
**Content Stack:**
1. Logo/Mark (animated mecha fish icon)
2. Headline: "Your AI Assistant, Evolved"
3. Subheadline: "Sharp intelligence meets fluid adaptability"
4. CTA Group: Primary + Secondary buttons
5. Scroll indicator (animated)

**Visual Treatment:**
- Floating mecha fish illustration (SVG/CSS animated)
- Bioluminescent glow effects
- Subtle water caustics background animation

### Features Section

**Layout:** 3-column grid (desktop), stacked (mobile)
**Cards:** Glassmorphism style with subtle border glow

| Feature | Icon | Title | Description |
|---------|------|-------|-------------|
| 1 | 🧠 / brain | Adaptive Intelligence | Learns your patterns and adapts to your workflow |
| 2 | ⚡ / zap | Instant Responses | Lightning-fast answers powered by advanced AI |
| 3 | 🔒 / shield | Privacy First | Your data stays yours. Always secure, always private |

**Card Design:**
- Background: `--gradient-card`
- Border: 1px solid `--color-metal-light` with opacity
- Hover: Lift effect + enhanced glow
- Icon: Cyan gradient fill

### About Section

**Layout:** Two-column (60/40 split on desktop)
- Left: Large mecha fish illustration or animated visual
- Right: Story content with staggered text blocks

**Content Structure:**
1. Section label (tiny text): "ABOUT RAUSKU"
2. Heading: "Born from the Deep"
3. Paragraphs:
   - Origin story (mysterious, tech meets organic)
   - Capabilities overview
   - Philosophy/personality
4. Stats row: "10k+ Conversations | 99.9% Uptime | 24/7 Ready"

### Contact/Footer Section

**Layout:** Darker background, two-tier structure

**Upper Tier:**
- CTA: "Ready to dive in?"
- Email signup or contact form
- Social links (GitHub, Twitter/X, Discord)

**Footer Tier:**
- Logo + tagline
- Quick links (Privacy, Terms, GitHub)
- Copyright + "Made with 💙 in the deep"

---

## 4. Responsive Breakpoints

| Breakpoint | Width | Target | Key Changes |
|------------|-------|--------|-------------|
| `sm` | 640px | Mobile landscape | Stack layouts, reduce padding |
| `md` | 768px | Tablet | 2-column grids, medium spacing |
| `lg` | 1024px | Desktop | Full layouts, max content width |
| `xl` | 1280px | Large desktop | Generous spacing, large visuals |
| `2xl` | 1536px | Ultra-wide | Centered content, max-width containers |

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1200px;
--container-max: 1400px;
```

### Responsive Patterns

**Mobile (< 768px):**
- Single column layouts
- Reduced vertical spacing (50% of desktop)
- Hamburger navigation
- Stacked feature cards
- Hero headline: 2.5rem

**Tablet (768px - 1024px):**
- 2-column feature grid
- Side-by-side About section
- Persistent navigation

**Desktop (> 1024px):**
- 3-column feature grid
- Full animations enabled
- Maximum content widths
- Enhanced visual effects

---

## 5. Design Tokens

### Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;   /* 4px - Tags, badges */
--radius-md: 0.5rem;    /* 8px - Buttons, inputs */
--radius-lg: 0.75rem;   /* 12px - Cards */
--radius-xl: 1rem;      /* 16px - Large cards */
--radius-2xl: 1.5rem;   /* 24px - Feature cards */
--radius-full: 9999px;  /* Pills, avatars */
```

### Shadows

```css
/* Subtle Depth */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);

/* Glow Effects (Mecha/Bio-luminescent) */
--shadow-glow-sm: 0 0 10px rgba(34, 211, 238, 0.3);
--shadow-glow-md: 0 0 20px rgba(34, 211, 238, 0.4);
--shadow-glow-lg: 0 0 40px rgba(34, 211, 238, 0.5);
--shadow-glow-primary: 0 0 30px rgba(14, 165, 233, 0.4);

/* Card Shadows */
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.1);
--shadow-card-hover: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(34, 211, 238, 0.15);
```

### Borders

```css
--border-width-none: 0;
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 4px;

--border-color-default: rgba(148, 163, 184, 0.2);
--border-color-hover: rgba(148, 163, 184, 0.4);
--border-color-focus: #22D3EE;
--border-color-active: #0EA5E9;
```

### Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Property specific */
--transition-transform: transform var(--transition-normal);
--transition-colors: color var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast);
--transition-shadow: box-shadow var(--transition-normal);
--transition-all: all var(--transition-normal);
```

### Z-Index Scale

```css
--z-dropdown: 100;
--z-sticky: 200;
--z-navbar: 300;
--z-drawer: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
--z-toast: 800;
```

### Animation Timing

```css
--duration-instant: 0ms;
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;

--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

---

## 6. Component Patterns

### Buttons

**Primary Button:**
```css
background: linear-gradient(135deg, #0EA5E9, #22D3EE);
color: #0F172A;
border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6);
font-weight: 600;
box-shadow: var(--shadow-glow-sm);
transition: var(--transition-all);
/* Hover: brighter, more glow, slight lift */
```

**Secondary Button:**
```css
background: transparent;
color: var(--color-foam);
border: 1px solid var(--border-color-default);
border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6);
/* Hover: border brightens, subtle background fill */
```

**Ghost Button:**
```css
background: transparent;
color: var(--color-primary-light);
/* Hover: subtle cyan background tint */
```

### Cards

**Feature Card:**
```css
background: var(--gradient-card);
border: 1px solid var(--border-color-default);
border-radius: var(--radius-2xl);
padding: var(--space-8);
box-shadow: var(--shadow-card);
transition: var(--transition-all);
/* Hover: shadow-card-hover, translateY(-4px) */
```

### Inputs

```css
background: rgba(30, 41, 59, 0.5);
border: 1px solid var(--border-color-default);
border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4);
color: var(--color-foam);
/* Focus: border-color-focus, shadow-glow-sm */
/* Placeholder: color-chrome */
```

### Navigation

**Navbar:**
```css
position: fixed;
top: 0;
width: 100%;
background: rgba(15, 23, 42, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--border-color-default);
z-index: var(--z-navbar);
padding: var(--space-4) 0;
```

---

## 7. Visual Effects

### Glassmorphism

```css
.glass {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(148, 163, 184, 0.15);
}
```

### Glow Effects

```css
/* Bio-luminescent pulse animation */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
  50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6); }
}

/* Floating animation for mecha fish */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}
```

### Background Patterns

- Subtle grid overlay (tech feel)
- Water caustics animation (organic feel)
- Floating particle system (depth)
- Gradient orbs (visual interest)

---

## 8. Accessibility

### Color Contrast

- All text meets WCAG AA standards (4.5:1 for normal, 3:1 for large)
- Interactive elements have visible focus states (cyan glow)
- Dark mode by default (easier on eyes, fits underwater theme)

### Motion

- Respect `prefers-reduced-motion`
- Core animations use CSS transforms (GPU accelerated)
- No flashing or rapid movement

### Typography

- Minimum 16px body text
- Line height 1.5+ for readability
- Sufficient letter-spacing in UI elements

---

## Design Philosophy Summary

**Sharp and Calm:**
- **Sharp:** Clean lines, precise geometry, modern tech aesthetic
- **Calm:** Deep blues, smooth animations, breathing room

**Mecha Fish DNA:**
- Mechanical precision in layout and typography
- Organic fluidity in colors and motion
- Bioluminescent accents suggest intelligence and life

**First Impression:**
Visitors should feel they've discovered something advanced yet approachable — an AI that feels alive, capable, and ready to help.
