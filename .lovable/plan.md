
## Make the "Demo" Link Stand Out in the Navbar

The goal is to transform the "Demo" nav link from a plain text link into an eye-catching, animated element that invites users to try the product.

### Approach

Convert the "Demo" link into a small pill/badge-style button with:

1. **Styled as a pill** -- Give it a background with the CTA color (the warm beige/gold), rounded-full, padding, and white text so it visually pops compared to the other plain text links.

2. **Subtle pulse animation** -- Add a soft, continuous pulse glow effect using framer-motion's `animate` prop (scale oscillation + box-shadow glow). This draws the eye without being annoying.

3. **A small sparkle indicator** -- Prepend a small sparkle icon or a pulsing dot (like the one in the Hero badge) to signal interactivity.

### Technical Details

**File: `src/components/Navbar.tsx`**

- Import `motion` from `framer-motion`
- Replace the plain `<a>` for Demo with a `motion.a` element
- Style it as a pill: `bg-primary text-primary-foreground rounded-full px-4 py-1.5`
- Add a continuous subtle animation:
  - `animate={{ scale: [1, 1.05, 1] }}` with `transition={{ repeat: Infinity, duration: 2 }}`
- Add a small pulsing dot or sparkle emoji before the text ("Try it" or keep "Demo")
- Optionally add a soft `box-shadow` glow that pulses with the scale

The result: "Demo" becomes a small highlighted pill with a gentle breathing animation that naturally draws attention, consistent with the premium aesthetic of the site.
