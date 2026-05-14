---
name: Healthcare Excellence System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#42474e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#30628b'
  primary: '#30628b'
  on-primary: '#ffffff'
  primary-container: '#93c2f0'
  on-primary-container: '#1a5078'
  inverse-primary: '#9ccbfa'
  secondary: '#35628a'
  on-secondary: '#ffffff'
  secondary-container: '#a5d0fe'
  on-secondary-container: '#2c5981'
  tertiary: '#006d36'
  on-tertiary: '#ffffff'
  tertiary-container: '#41d77a'
  on-tertiary-container: '#00592a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#9ccbfa'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#114a72'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#a0caf8'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#194a71'
  tertiary-fixed: '#6dfe9c'
  tertiary-fixed-dim: '#4de082'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is built on the pillars of **trust, precision, and human compassion**. It is designed to serve a diverse patient demographic, ranging from young families to seniors, requiring a UI that feels both technologically advanced and deeply approachable. 

The aesthetic follows a **Modern Healthcare** approach, blending the cleanliness of Minimalism with the depth of subtle Glassmorphism. By utilizing light blue washes and high-key photography, the interface evokes a sterile yet warm environment. The goal is to reduce patient anxiety through clear information hierarchy, soft visual transitions, and a bright, optimistic atmosphere.

Key stylistic markers include:
- **Serene Clarity:** Expansive whitespace to allow content to breathe.
- **Human-Centric Imagery:** Professional photography featuring smiling medical staff and patient interactions, often treated with soft-edge masking.
- **Modern Softness:** A departure from the harsh lines of traditional medical portals in favor of generous radiuses and diffused depth.

## Colors

The palette is anchored by a calming **Sky Blue (Primary)**, which serves as the primary brand identifier and interactive trigger color. 

- **Primary Blue:** Used for key calls to action, active states, and iconography.
- **Deep Navy (Secondary):** Employed for high-contrast typography and navigational headers to ensure legibility and professional authority.
- **Healing Green (Tertiary):** Reserved for "Book Appointment" buttons and success states, symbolizing health and growth.
- **Neutrals:** A range of soft grays and clean whites prevent the UI from feeling "heavy."
- **Gradients:** Subtle, large-scale gradients are used to define sections or as overlays on imagery to ensure text readability without sacrificing the environmental feel of the photos.

## Typography

This design system uses a dual-font strategy to balance character with utility. 

**Plus Jakarta Sans** is used for headlines. Its soft, modern curves provide a friendly and contemporary feel that differentiates the brand from more clinical, utilitarian competitors. 

**Inter** is the workhorse for all body copy and UI labels. It was chosen for its exceptional legibility, particularly for technical medical information and accessibility requirements. 

For mobile devices, display and headline sizes are aggressively scaled down to ensure content remains above the fold and readable without excessive scrolling.

## Layout & Spacing

The system utilizes a **12-column fixed grid** for desktop, centering the content with a max-width of 1280px to maintain readability on ultrawide monitors. 

- **Rhythm:** Spacing follows an 8px base unit. Section gaps are intentionally large (120px) to reinforce the premium, "roomy" feel of the hospital brand.
- **Mobile Adaptivity:** On mobile, the grid collapses to a single column with 16px side margins. 
- **Reflow Rules:** Complex components like "Meet Our Experts" transition from a 4-column horizontal grid on desktop to a vertically stacked or side-scrolling carousel on mobile to preserve vertical space.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

- **Surface Levels:** The primary background is the cleanest white (#FFFFFF). Cards and containers sit on this background with a "Level 1" shadow—highly diffused, low-opacity (5-8%), and slightly tinted with the primary blue to maintain color harmony.
- **Glassmorphism:** Navigation bars and hero stat cards utilize a backdrop-blur effect (20px) with a semi-transparent white fill. This creates a sense of "layered transparency," suggesting an open and honest organization.
- **Interactions:** Upon hover, cards lift slightly (Level 2 shadow) to provide tactile feedback, while buttons maintain a flat but vibrant appearance to clearly denote actionability.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners that can feel "dangerous" or "aggressive" in a healthcare context.

- **Standard Cards:** Use a 1rem (16px) radius to feel substantial and modern.
- **Buttons:** Follow the same 16px radius for a unified look, though "Pill" shapes may be used for tags and status indicators to distinguish them from primary actions.
- **Containers:** Large hero sections or stats blocks may use the `rounded-xl` (1.5rem/24px) setting to create a friendly, "padded" container for important data.

## Components

- **Buttons:** Primary buttons use the Primary Blue or Tertiary Green with white text and bold weights. Secondary buttons use a "Ghost" style with a 1px border of the primary color.
- **Cards:** White backgrounds with subtle Level 1 shadows. Headers inside cards should use the Primary Blue for icons to tie the element back to the brand.
- **Input Fields:** Soft gray backgrounds (#F1F5F9) with no borders until focused. Upon focus, they gain a 2px Primary Blue border.
- **Doctor/Expert Profiles:** Profile photos are housed in containers with a bottom-cut mask or a soft rounded-top shape, as seen in the reference images, to create a distinctive editorial look.
- **Statistic Blocks:** Large, high-contrast numbers in Primary Blue, paired with glassmorphic backgrounds when overlaying images.
- **Booking Widget:** A high-visibility, floating or anchored component that uses the Tertiary Green to ensure it is the most prominent action on any page.