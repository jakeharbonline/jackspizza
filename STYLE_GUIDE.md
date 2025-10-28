# Jack's Pizza Style Guide
## Detroit Style. Retro Vibes. 🍕

Welcome to the Jack's Pizza style guide! This is your go-to reference for keeping our brand looking fresh, retro, and deliciously consistent across the whole site.

---

## 🎨 Brand Personality

**Old school cool meets modern Detroit pizza culture.**

We're all about that nostalgic 80s/90s pizza joint vibe—think bold colors, chunky text, and fun energy—but with a clean, contemporary web experience. We're friendly, confident, and unapologetically fun without being cheesy (well, except for the pizza).

**Voice & Tone:**
- Casual and approachable
- Playful but not childish
- Confident without being cocky
- Warm and welcoming like your favorite neighborhood spot

---

## 🎨 Color Palette

### Primary Colors

```css
/* Jack's Green - Our signature color */
--jacks-green: #2EAE7D;

/* Supporting Cast */
--cream: #FFF8E7;
--deep-black: #1A1A1A;
--pure-white: #FFFFFF;
```

### Secondary/Accent Colors

```css
/* For highlights, CTAs, and playful touches */
--retro-orange: #FF6B35;
--retro-red: #E63946;
--retro-yellow: #FFD23F;
--warm-beige: #F4E8D0;
```

### Usage Guidelines

- **Jack's Green**: Primary brand color—use for headers, CTAs, key UI elements, hovers
- **Cream/Warm Beige**: Backgrounds, cards, soft sections
- **Deep Black**: Body text, borders, outlines
- **Retro Orange/Red/Yellow**: Accents, badges, highlights, call-to-action buttons

**Pro tip:** Don't be afraid to mix green with warm tones—it's retro and delicious.

---

## ✍️ Typography

### Display Fonts (Headings & Big Statements)

**Primary Display: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)**
- Bold, condensed, uppercase
- Perfect for hero text and major headings
- Use for: H1, hero sections, menu category titles
- Sizes: 48px - 120px

**Secondary Display: [Righteous](https://fonts.google.com/specimen/Righteous)**
- Chunky, rounded, retro curves
- Great for sub-headings and emphasis
- Use for: H2, section titles, feature callouts
- Sizes: 32px - 64px

### Body & UI Fonts

**Body Text: [Inter](https://fonts.google.com/specimen/Inter)**
- Clean, modern, highly readable
- Use for: Body copy, descriptions, captions
- Weights: 400 (regular), 600 (semi-bold)
- Sizes: 16px - 20px

**UI/Buttons: [Work Sans](https://fonts.google.com/specimen/Work+Sans)**
- Friendly, geometric, excellent for UI
- Use for: Buttons, labels, navigation, forms
- Weights: 500 (medium), 700 (bold)
- Sizes: 14px - 18px

### Typography Scale

```css
/* Mobile-first with responsive scaling */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */
--text-8xl: 6rem;      /* 96px */
```

### Text Styling Tricks

- **Text Shadows for Depth**: Use subtle offset shadows on big headings
  ```css
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  ```
- **Uppercase + Letter Spacing**: For retro punch
  ```css
  text-transform: uppercase;
  letter-spacing: 0.05em;
  ```
- **Text Outlines**: Use sparingly for hero moments
  ```css
  -webkit-text-stroke: 2px #1A1A1A;
  text-stroke: 2px #1A1A1A;
  ```

---

## 🧱 Layout & Spacing

### Grid System

- **Max Content Width**: 1400px (desktop)
- **Container Padding**: 5vw on mobile, 10vw on desktop
- **Section Spacing**: 80px - 120px vertical between major sections
- **Component Spacing**: 40px - 60px between related elements

### Spacing Scale

```css
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
```

### Breakpoints

```css
/* Mobile-first approach */
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

---

## 🎭 Component Styles

### Buttons

**Primary Button (CTA)**
```tsx
<button className="bg-jacks-green text-white uppercase font-bold px-8 py-4 rounded-full
  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
  hover:translate-x-[-4px] hover:translate-y-[-4px]
  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
  transition-all duration-300 ease-out
  border-2 border-black">
  Order Now
</button>
```

**Secondary Button**
```tsx
<button className="bg-cream text-deep-black uppercase font-bold px-8 py-4 rounded-full
  shadow-[3px_3px_0px_0px_#2EAE7D]
  hover:shadow-[6px_6px_0px_0px_#2EAE7D]
  hover:translate-x-[-3px] hover:translate-y-[-3px]
  transition-all duration-300 ease-out
  border-2 border-jacks-green">
  Learn More
</button>
```

**Key Features:**
- Offset drop shadows (Pizza Pilgrims inspired!)
- Bouncy hover animations with translate + shadow growth
- Bold borders for that retro punch
- Rounded corners (but not too rounded—keep it retro)

### Cards

```tsx
<div className="bg-white border-3 border-black rounded-lg p-8
  shadow-[6px_6px_0px_0px_#2EAE7D]
  hover:shadow-[8px_8px_0px_0px_#2EAE7D]
  hover:translate-x-[-2px] hover:translate-y-[-2px]
  transition-all duration-300 ease-out">
  {/* Card content */}
</div>
```

### Badges & Tags

```tsx
<span className="inline-block bg-retro-yellow text-deep-black
  px-4 py-1 rounded-full text-sm font-bold uppercase
  border-2 border-black rotate-[-2deg]">
  Detroit Style
</span>
```

### Dividers

Use playful dividers instead of boring lines:
- Dotted patterns
- Pizza slice icons
- Wavy lines
- Dashed borders with thick stroke

---

## ✨ Animations & Interactions

### Animation Principles

1. **Playful but not annoying**: Quick, bouncy, satisfying
2. **Duration**: 300-600ms for most interactions
3. **Easing**: `ease-out` for entrances, `ease-in-out` for hovers
4. **Purposeful**: Every animation should enhance UX, not distract

### Common Animations

**Fade In (page load)**
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Bounce In (for fun elements)**
```css
@keyframes bounce-in {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

**Hover Lift (cards, buttons)**
```css
.hover-lift {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.hover-lift:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 1);
}
```

**Rotation (badges, stickers)**
```css
.rotate-slight {
  transform: rotate(-2deg);
  transition: transform 0.3s ease-out;
}

.rotate-slight:hover {
  transform: rotate(2deg) scale(1.1);
}
```

---

## 🖼️ Imagery & Assets

### Photography Style

- **Warm, natural lighting**: Think golden hour glow
- **Close-ups with depth**: Show that melty cheese and crispy crust
- **Overhead shots**: Flat-lays of pizzas, ingredients
- **Lifestyle moments**: People enjoying pizza (but keep it real, not stock-photo-y)
- **Detroit focus**: Emphasize the square shape, caramelized edges, thick crust

### Image Treatment

- **Rounded corners**: 8px - 16px border-radius
- **Bold borders**: 3px - 4px black borders on featured images
- **Offset shadows**: Match button/card style for consistency
- **Filters**: Slightly boost saturation and warmth (5-10%)

### Icons & Illustrations

- **Style**: Bold, simple line art with 2-3px strokes
- **Color**: Primarily black outlines with Jack's green fills
- **Examples**: Pizza slice, delivery truck, chef hat, checkmark badges
- **No cartoon characters** (except the logo mascot!)

---

## 🏗️ Code Conventions

### Component Structure

```tsx
// ✅ Good: Clear, organized, typed
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText = "Order Now",
  ctaLink = "/order"
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center z-10">
        <h1 className="font-bebas text-8xl text-jacks-green uppercase mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-inter text-xl text-deep-black mb-8">
            {subtitle}
          </p>
        )}
        <a
          href={ctaLink}
          className="inline-block bg-jacks-green text-white uppercase font-bold px-8 py-4 rounded-full"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
```

### Tailwind Utility Guidelines

- **Order**: Layout → Spacing → Typography → Colors → Effects
- **Responsive**: Mobile-first, use `md:` and `lg:` prefixes
- **Custom classes**: For complex/repeated patterns, use `@apply` in CSS
- **Avoid inline styles**: Stick to Tailwind utilities

### File Naming

- **Components**: PascalCase (`HeroSection.tsx`, `MenuCard.tsx`)
- **Utilities**: camelCase (`formatPrice.ts`, `validateEmail.ts`)
- **Pages**: kebab-case (`order-online.tsx`, `about-us.tsx`)

---

## 🎯 Design Patterns

### Hero Sections

- Full-screen or 80vh minimum
- Bold headline with Bebas Neue (96px - 120px)
- Centered or left-aligned depending on content
- CTA button prominently placed
- Background: video, image with overlay, or solid cream/green

### Menu Displays

- Grid layout: 2 cols mobile, 3-4 cols desktop
- Cards with offset shadows
- Pizza name in Righteous (32px)
- Description in Inter (16px)
- Price in bold Work Sans (20px)
- "Add to Cart" button on hover or always visible

### Forms

- Rounded inputs (12px border-radius)
- 2px border with Jack's green on focus
- Labels above inputs (not placeholders)
- Large touch targets (48px min height)
- Clear error states with retro-red

---

## 🚀 Performance & Accessibility

### Performance

- **Images**: WebP format, lazy loading, max 1MB per image
- **Fonts**: Preload display fonts, use `font-display: swap`
- **Animations**: Use `transform` and `opacity` only (GPU-accelerated)
- **Code splitting**: Lazy load non-critical components

### Accessibility

- **Color Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Focus States**: Always visible, 2px outline with Jack's green
- **Alt Text**: Descriptive for all images (e.g., "Detroit-style pepperoni pizza with caramelized cheese edges")
- **Keyboard Navigation**: All interactive elements accessible via Tab
- **ARIA Labels**: Use on custom components and icon buttons

---

## 📦 Component Library

### Pre-built Components

Create reusable components for:
- `<Button>` (primary, secondary, ghost variants)
- `<Card>` (with optional image, badge, CTA)
- `<Badge>` (tags, labels, new items)
- `<MenuCard>` (pizza display with name, price, description)
- `<Section>` (consistent spacing wrapper)
- `<Heading>` (h1-h6 with proper hierarchy)
- `<Input>` and `<Textarea>` (form fields)
- `<Modal>` (cart, login, confirmations)

---

## 🍕 Brand Assets

### Logo Usage

- **Primary Logo**: Full color (green circle with pizza character)
- **Minimum Size**: 80px width (maintain legibility)
- **Clear Space**: Minimum 20px padding around logo
- **Backgrounds**: Works on white, cream, light backgrounds
- **Inverse**: White version for dark backgrounds

### Do's
✅ Maintain original proportions
✅ Use on light backgrounds primarily
✅ Keep minimum size requirements
✅ Center or left-align in navigation

### Don'ts
❌ Don't stretch or distort
❌ Don't change colors
❌ Don't add effects (shadows, glows, outlines)
❌ Don't place on busy backgrounds

---

## 🎉 Final Tips

- **Be bold**: This is a retro pizza brand—embrace the chunky text, bright colors, and playful shadows
- **Stay consistent**: Use the same button styles, shadows, and spacing throughout
- **Test on mobile**: Most customers will order on their phones
- **Have fun**: If it doesn't feel a little playful, it's not Jack's Pizza

**Questions?** Refer back to this guide or check out Pizza Pilgrims for offset shadow inspo!

---

Made with 💚 and pepperoni by the Jack's Pizza team.
