---
name: Aerospace Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#cadaff'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#e0e8ff'
  surface-container-highest: '#d7e2ff'
  on-surface: '#001b40'
  on-surface-variant: '#424754'
  inverse-surface: '#0f2f5f'
  inverse-on-surface: '#ecf0ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#0059c7'
  primary: '#0051b6'
  on-primary: '#ffffff'
  primary-container: '#1769e0'
  on-primary-container: '#f0f2ff'
  inverse-primary: '#afc6ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#4e5761'
  on-tertiary: '#ffffff'
  tertiary-container: '#666f79'
  on-tertiary-container: '#eaf3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#afc6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004398'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dae3ef'
  tertiary-fixed-dim: '#bec7d3'
  on-tertiary-fixed: '#141c25'
  on-tertiary-fixed-variant: '#3f4851'
  background: '#f9f9ff'
  on-background: '#001b40'
  surface-variant: '#d7e2ff'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: '600'
    lineHeight: 4.25rem
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: 3.25rem
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.625rem
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.125rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.625rem
    letterSpacing: -0.015em
  body-xl:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 5rem
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
---

## Brand & Style

This design system embodies high-precision international robotics and advanced engineering education. Its identity balances Cupertino-grade industrial minimalism with high-end aerospace laboratory aesthetics. The visual language conveys intellectual rigor, deterministic mechanics, and executive polish.

The emotional atmosphere is clean, quiet, and hyper-focused. Interfaces evoke the clarity of flight instrumentation, precision optical benches, and surgical cleanrooms. Monochromatic discipline in pure blues and whites removes cognitive friction, allowing structural hierarchy, micro-geometry, and immaculate typography to communicate authority without visual noise.

## Colors

The palette is strictly restricted to precision blues and architectural whites. There are no black pixels (`#000000`) and no extraneous color accents (no red, green, amber, gold, or purple). 

### Surface & Background Tokens
- **Canvas Base:** `#FFFFFF` — Pure optical white for pristine presentation, product cards, and structured layouts.
- **Surface Tint Subtle:** `#F4F8FF` — Alternating technical section blocks, container backgrounds, and code/spec surfaces.
- **Surface Accent Ice:** `#EAF3FF` — Highlight pill containers, badge backgrounds, and frosted glass layer tints.
- **Surface Inverted Dark:** `#0B2D5C` — Deep navy field for cinematic hero sections, technical telemetry panels, and high-impact structural blocks.

### Text & Graphic Tokens
- **Text Primary (on light):** `#0B2D5C` — Deep navy provides authoritative contrast while maintaining organic chromatic harmony.
- **Text Secondary (on light):** `rgba(11, 45, 92, 0.70)` — Technical metrics, sub-labels, and metadata.
- **Text Muted (on light):** `rgba(11, 45, 92, 0.45)` — De-emphasized timestamps, breadcrumbs, and structural dividers.
- **Text Primary (on dark):** `#FFFFFF` — High-contrast white for headings and hero copy over deep navy.
- **Text Secondary (on dark):** `rgba(234, 243, 255, 0.75)` — Supporting copy over navy, tinted lightly with ice blue.

### Interactive & State Tokens
- **Action Primary:** `#1769E0` — Royal Blue for primary call-to-action buttons, key data markers, and emphasized text.
- **Action Hover / Highlight:** `#3B82F6` — Bright Blue for focused states, interactive micro-glows, radio highlights, and active navigation indicators.
- **Border Subtle (on light):** `rgba(23, 105, 224, 0.12)` — Micro-thin outlines ensuring crisp structural definition without visual weight.
- **Border Subtle (on dark):** `rgba(234, 243, 255, 0.15)` — Translucent precision borders across dark navy modules.

## Typography

The typographic system adheres to Swiss international rationalism: structured, highly legible, and rigorously optical.

- **Weight Discipline:** Restrict styling to weights 400 (Regular), 500 (Medium), 600 (Semi-bold), and 700 (Bold). Avoid extra-thin or ultra-black weights to retain industrial clarity.
- **Letter Spacing:** Headlines scale down into tighter negative tracking (`-0.025em` to `-0.035em`) to evoke machined precision. Technical labels, categories, and telemetry counters utilize expanded letter spacing (`+0.05em` to `+0.08em`) with uppercase transformations.
- **Vertical Metric Alignment:** Baseline alignment follows a disciplined 4px/8px modular rhythm. Paragraph measures must never exceed 68 characters per line to guarantee optimal academic readability.

## Layout & Spacing

The structural layout utilizes an explicit 12-column grid anchored by generous negative space.

- **Desktop (>= 1280px):** 12 columns, max-width 1360px centered, 32px (`2rem`) gutters, and minimum 80px (`5rem`) outer margins. Section vertical spacing ranges between `space-3xl` and `space-4xl` to allow educational narratives room to breathe.
- **Tablet (768px - 1279px):** 8 columns, 24px (`1.5rem`) gutters, 40px (`2.5rem`) outer margins.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 20px (`1.25rem`) outer margins.

Engineering spec blocks, laboratory curriculums, and interactive telemetry charts align strictly to grid edges with micro-border seams rather than arbitrary floating card layouts.

## Elevation & Depth

Visual depth avoids heavy drop shadows, relying instead on ambient light layers, physical surface stacking, and translucent aerospace glass.

### Elevation Tiers
1. **Level 0 (Base Canvas):** Solid `#FFFFFF` or `#0B2D5C`. Completely flat with zero displacement.
2. **Level 1 (Structured Cards / Data Modules):** `#FFFFFF` layered over `#F4F8FF` or vice versa. Elevated via a 1px micro-border in `rgba(23, 105, 224, 0.12)` complemented by an ultra-diffused atmospheric shadow: `0 2px 8px rgba(11, 45, 92, 0.04), 0 12px 32px rgba(23, 105, 224, 0.05)`.
3. **Level 2 (Floating Navbars & Overlays):** Frosted glassmorphism. Background: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(20px) saturate(180%)`. Border: `1px solid rgba(23, 105, 224, 0.16)`. Shadow: `0 8px 30px rgba(11, 45, 92, 0.08)`.
4. **Level 2 Dark (Inverted Command Panels):** Background: `rgba(11, 45, 92, 0.88)` with `backdrop-filter: blur(24px)`. Border: `1px solid rgba(234, 243, 255, 0.18)`. Shadow: `0 12px 40px rgba(11, 45, 92, 0.25)`.
5. **Interactive Blue Glow (Action Surfaces):** Hover states on primary elements cast a tailored chromatic aura: `0 0 24px rgba(59, 130, 246, 0.35)`.

## Shapes

The geometric framework uses continuous rounded surfaces (Squircle / Apple curvature feel) rooted at Level 2:

- **Base Radius (`0.5rem` / 8px):** Form inputs, tooltips, sub-cards, technical pill tags, and compact buttons.
- **Medium Radius (`1rem` / 16px):** Laboratory module cards, content panels, code inspection panels, and media containers.
- **Large Radius (`1.5rem` / 24px):** Primary hero feature containers and parent showcase blocks.
- **Full Pill (`9999px`):** Status indicators, technical telemetry pills, and floating action indicators.

## Components

### Buttons
- **Primary:** Filled `#1769E0` with text in `#FFFFFF`. Height: 48px, horizontal padding: 24px, radius: 8px. Hover state shifts to `#3B82F6` accompanied by an ambient glow (`box-shadow: 0 4px 16px rgba(23, 105, 224, 0.28)`).
- **Secondary / Ghost:** Transparent background with a 1px border in `rgba(23, 105, 224, 0.24)`. Text in `#0B2D5C`. Hover state shifts surface to `#EAF3FF` and border color to `#1769E0`.
- **Inverted Dark (for Navy Sections):** Background `#FFFFFF` with `#0B2D5C` text. Hover shifts to `#EAF3FF` with interactive glow `0 0 20px rgba(255, 255, 255, 0.3)`.

### Technical Badges & Chips
- **Research Status Pill:** Background `#EAF3FF`, text `#1769E0`, 1px solid `rgba(23, 105, 224, 0.20)`. Radius: `9999px`. Font: `label-caps` (`0.6875rem`, weight 700). Includes a 6px circular indicator in `#3B82F6`.

### Cards & Modules
- **Precision Lab Card:** Canvas in `#FFFFFF` surrounded by a hairline 1px border in `rgba(23, 105, 224, 0.12)`. Internal padding: `space-xl` (32px). Top-accent option: a 2px top stroke in `#1769E0` for active curriculums.
- **Telemetry Card (Dark):** Surface in `#0B2D5C` with fine border in `rgba(234, 243, 255, 0.15)`. Text in `#FFFFFF` with secondary labels in `rgba(234, 243, 255, 0.75)`.

### Form Inputs
- **Field Base:** Surface `#FFFFFF`, border 1px solid `rgba(23, 105, 224, 0.20)`, text `#0B2D5C`, placeholder `rgba(11, 45, 92, 0.40)`. Height: 48px, radius: 8px.
- **Focus State:** Border shifts cleanly to `#1769E0` with an outer glow: `box-shadow: 0 0 0 3px rgba(23, 105, 224, 0.15)`.

### Checkboxes & Radios
- **Control Box:** 20px square with a 1.5px border in `rgba(23, 105, 224, 0.35)` on `#FFFFFF`. On active/checked: Background `#1769E0`, border `#1769E0`, checkmark icon in pure `#FFFFFF`.

### Interactive Lists
- **Spec / Curriculum Row:** Alternating border dividers using `1px solid rgba(23, 105, 224, 0.08)`. Hover transitions the row to background `#F4F8FF` with an accent bar indicator in `#3B82F6` on the left border.