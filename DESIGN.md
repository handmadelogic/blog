---
name: Handmade Logic
description: A personal crafts journal — honest, warm, and made with both hands.
colors:
  signal-pink: "#C9347E"
  signal-pink-deep: "#B21C67"
  golden-hour: "#F0B652"
  golden-hour-deep: "#D88018"
  worn-sage: "#7A9468"
  studio-plum: "#5C2D52"
  ink-plum: "#2A1825"
  fired-clay: "#B5563E"
  secondary-text: "#5A3D52"
  canvas-cream: "#F1ECDC"
  surface-cream: "#F6F0DC"
  card-cream: "#FFFAEB"
  section-cream: "#EDE9DE"
  divider-warm: "#D6CDB8"
  sage-wash: "#B5C5A5"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2.75rem, 7.5vw, 6.75rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  handwrite:
    fontFamily: "Caveat, cursive"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  pill: "9999px"
  card: "12px"
  surface: "20px"
  note: "18px"
  subtle: "10px"
spacing:
  section-h-tight: "60px"
  section-h-standard: "90px"
  section-v: "80px"
  card-pad: "16px"
  card-gap: "36px"
  content-max: "1260px"
components:
  button-primary:
    backgroundColor: "{colors.signal-pink}"
    textColor: "{colors.surface-cream}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.signal-pink-deep}"
    textColor: "{colors.surface-cream}"
  button-subscribe:
    backgroundColor: "{colors.studio-plum}"
    textColor: "{colors.surface-cream}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  badge-amber:
    backgroundColor: "{colors.golden-hour}"
    textColor: "{colors.ink-plum}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  card-post:
    backgroundColor: "{colors.card-cream}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
---

# Design System: Handmade Logic

## 1. Overview

**Creative North Star: "The Studio Notebook"**

Handmade Logic looks and feels like a beloved, well-used sketchbook: layered surfaces, colour tests at the edges, annotations in the margins, nothing too precious. The visual system carries the same honesty as the writing — imperfection is not a flaw to correct, it is the character to preserve. A slight rotation on a card, a handwritten note pointing at something, a watercolour wash that bleeds just past its container: these are features, not bugs.

The palette is warm and saturated but never slick. Signal Pink, Golden Hour, and Worn Sage sit on a cream ground that reads like unbleached paper rather than a web background. Every shadow is tinted toward Ink Plum, never cool grey. Each colour choice should make the page feel as if it was made physically — not rendered.

Typography is the workhorse. Lora carries the editorial weight; Nunito handles the UI without fuss; Caveat appears only where a real pen might: annotations, asides, and captions that belong to the maker's hand. Motion is purposeful and unhurried — animations exist to orient and delight, never to perform. The system is equally readable and pleasant without any motion at all.

**Key Characteristics:**
- Warm, imperfect, annotated — a working notebook, not a portfolio or brand deck
- Layered surfaces: dotted canvas background, watercolour washes, slight element rotations
- Three-tier typography: Lora for authority, Nunito for clarity, Caveat strictly for personality
- All shadows tinted with Ink Plum — never cool grey
- Cards rest at slight angles; they straighten and lift on hover (physical object metaphor)
- Handwriting annotations reveal via a clip-path sweep, as if written in real time

## 2. Colors: The Maker's Palette

A full palette strategy — four named accent roles plus a warm neutral family, each used deliberately. Signal Pink is the loudest voice; the others share the page without competing.

### Primary
- **Signal Pink** (`#C9347E`): The decisive accent. Primary buttons, active navigation states, emphasis `<em>` within Lora headings, interactive highlights. Used at full saturation for calls to action; as a faint wash (`rgba(201,52,126,0.04–0.08)`) for active-state backgrounds. Never used decoratively.
- **Signal Pink Deep** (`#B21C67`): Hover state for Signal Pink elements. Underline strokes on link hover. Focus-visible rings. Never used at rest.

### Secondary
- **Golden Hour** (`#F0B652`): Badge backgrounds, annotation callout text, ambient watercolour blobs, footer accent text on dark. The warmest, most approachable colour in the system.
- **Golden Hour Deep** (`#D88018`): Section icon strokes, sparkle fills, category label text on light backgrounds. The working version of Golden Hour — lower brightness, no less warm.

### Tertiary
- **Worn Sage** (`#7A9468`): Craft-category accents, workshop section background tint, handwrite annotation colour for secondary notes. Muted and supporting — never competes with Signal Pink.
- **Studio Plum** (`#5C2D52`): Subscribe button backgrounds, footer background, section wash. A cooler, darker cousin of Ink Plum; grounds elements that need weight without competing with Signal Pink.
- **Fired Clay** (`#B5563E`): Workshop section icons, macramé and woodwork category indicators. Earthy and grounding.

### Neutral
- **Ink Plum** (`#2A1825`): All primary body text, headings, SVG strokes. Not pure black — tinted toward raspberry at low chroma, keeping the page unified under warm light.
- **Secondary Text** (`#5A3D52`): Supporting body paragraphs, metadata, image captions. Softer than Ink Plum, same family.
- **Canvas Cream** (`#F1ECDC`): HTML root background, overlaid with a 1px Ink Plum dot pattern at 13% opacity. The literal ground of the page.
- **Surface Cream** (`#F6F0DC`): Section surfaces sitting on the canvas. Slightly lighter than Canvas Cream — enough to read as a distinct layer without contrast shock.
- **Card Cream** (`#FFFAEB`): Card and sticky-note backgrounds. The lightest neutral in the system — reserved for foreground surfaces only.
- **Section Cream** (`#EDE9DE`): Alternating section backgrounds. A touch darker than Surface Cream, used to mark section boundaries without a hard edge.
- **Divider Warm** (`#D6CDB8`): Dashed dividers, progress bar tracks, border treatments. Warm, not grey.
- **Sage Wash** (`#B5C5A5`): Workshop section background tint. Diluted Worn Sage — atmospheric, not structural.

### Named Rules
**The Warm Shadow Rule.** All shadows use `rgba(42,24,37,...)` — Ink Plum, not grey. A grey shadow on this palette reads as cold and disconnected. Prohibited.

**The No Pure Neutral Rule.** No `#000`, no `#fff`, no `rgba(0,0,0,...)`. Every neutral is tinted toward the raspberry/plum hue family at low chroma. A pure grey or pure black anywhere in the interface is a sign something escaped the system.

**The Signal Pink Reserve Rule.** Signal Pink is used on 10–20% of any given screen surface. Its presence signals action and emphasis; overuse neutralises it. When you want warmth without urgency, reach for Golden Hour. When you want weight, reach for Studio Plum.

## 3. Typography

**Display / Headline font:** Lora (Georgia, serif fallback)
**Body / UI font:** Nunito (system-ui, sans-serif fallback)
**Annotation font:** Caveat (cursive fallback) — decorative use only

**Character:** Lora carries editorial gravity without formality — a serif that reads as personal rather than institutional. Nunito provides clean, legible UI text with rounded terminals that complement the warm palette. Caveat appears exactly where a human pen would: annotations, asides, workshop notes, handwritten captions. It is never used for primary navigation or body copy.

### Hierarchy
- **Display** (Lora bold, `clamp(2.75rem, 7.5vw, 6.75rem)`, lh 0.96, tracking -0.02em): Homepage hero h1 only. Tight leading collapses lines into a visual block. Used once per page at most.
- **Headline** (Lora bold, `clamp(2rem, 4vw, 3.5rem)`, lh 1.1, tracking -0.02em): Section headings across all pages. Carries emphasis via italic `<em>` elements coloured Signal Pink or Worn Sage.
- **Title** (Lora semibold, `clamp(1.4rem, 2.5vw, 1.75rem)`, lh 1.2, tracking -0.02em): Card headings (featured post, section sub-headings). Lora at a working scale.
- **Body** (Nunito regular, 17–22px, lh 1.6–1.75): All prose and supporting text. 17px for UI copy; 20–22px italic Lora for intro paragraphs that open sections. Max line length: 65ch for standard body, 52ch for intro paragraphs.
- **Label** (Nunito bold, 11–13px, tracking 0.96–1.56px, uppercase): Category badges, section eyebrow labels, progress percentages, stat chips. Always uppercase, always tracked out.
- **Handwrite** (Caveat semibold/bold, 18–26px): Annotations in the margins — sticky notes, callouts, captions. Never used for navigation, form labels, error messages, or any interactive element.

### Named Rules
**The Caveat Fence Rule.** Caveat is the voice of the maker's hand. It appears in annotations, captions, and asides — never as primary text for any interactive element. If an interaction relies on Caveat to communicate, that text belongs in Lora or Nunito.

**The Italic Em Rule.** Within Lora headings, key words are wrapped in `<em>` and coloured (Signal Pink or Worn Sage). This is the heading emphasis system — not bold, not underline, not size increase. Do not apply `<em>` in Nunito body copy; in that register it reverts to prose emphasis and loses its structural role.

## 4. Elevation

Handmade Logic uses **shadow-based tonal elevation** — not flat, not blurred, not glassmorphic. Shadows are warm (Ink Plum tinted) and work in pairs: a larger ambient shadow plus a tighter contact shadow, giving surfaces physical weight rather than digital float.

Depth is also expressed through **rotation**: cards sit at slight angles (1–3°) as if set down by hand. Hover lifts the card upright and translates it 6px upward, adding a heavier shadow. The rotation-plus-lift combination creates a physical object metaphor rather than a UI panel metaphor.

### Shadow Vocabulary
- **Card ambient** (`rgba(42,24,37,0.1) 0 10px 30px, rgba(42,24,37,0.05) 0 2px 6px`): Post cards and content cards at rest. Two-layer: large blur carries ambient depth, tight layer grounds the edge contact.
- **Surface float** (`rgba(42,24,37,0.08) 0 14px 36px`): Larger containers (workshop checklist, section cards). Single-layer, wider spread — used when the container already sits on a coloured section.
- **Note pin** (`rgba(42,24,37,0.1) 0 4px 14px`): Sticky notes and washi-tape pinned elements. Compact shadow for physically-attached small objects.
- **Photo dramatic** (`rgba(42,24,37,0.22) 0 22px 52px, rgba(42,24,37,0.1) 0 4px 14px`): Polaroid photo frame only. Heavy ambient shadow creates the impression of a photograph lifted off a surface.
- **Button hover glow** (`rgba(92,45,82,0.45) 0 12px 28px -4px`): Appears on primary/subscribe button hover. Uses Studio Plum — reads as a warm coloured aura, not a grey drop shadow.

### Named Rules
**The Flat-at-Rest Rule.** Shadows respond to state, not decoration. A surface at rest carries only enough shadow to separate it from the layer below. Hover and lift states add depth. Decorative heavy shadows at rest are prohibited.

**The Warm Tint Rule.** No shadow uses neutral grey (`rgba(0,0,0,...)`). All shadows carry Ink Plum (`rgba(42,24,37,...)`). A grey shadow is a sign something escaped the system.

## 5. Components

Components feel **playful but grounded** — personality lives in their resting state (slight rotations, warm colours, handmade proportions) and interaction feels physical: lifting, glowing, writing in. Nothing moves urgently; everything moves with intention.

### Buttons
- **Shape:** Full-radius pill (9999px). Buttons are never squared; the pill shape is the visual commitment.
- **Primary:** Signal Pink (`#C9347E`) background, Surface Cream (`#F6F0DC`) text. Padding 16px vertical, 28px horizontal. Nunito bold, 15px. On hover: `translateY(-3px) scale(1.04)`, Studio Plum glow (`rgba(92,45,82,0.45) 0 12px 28px -4px`), 0.22s ease-out. On active: `translateY(1px) scale(0.97)`, 0.1s. Focus-visible: 3px Signal Pink Deep outline, 3px offset.
- **Subscribe / Secondary:** Studio Plum (`#5C2D52`) background, Surface Cream text. Same pill, same hover lift. Carries a small inline SVG icon (heart motif) to the left of the label.
- **Easing:** `cubic-bezier(.2,.7,.3,1)` throughout. No bounce, no elastic overshoot.

### Badges / Chips
- **Section eyebrows:** Golden Hour pill + Nunito bold 13px label + small inline SVG icon. Padding 8px vertical, 18px horizontal. Used as the opening beat for every major section.
- **Category pills (on image):** Surface Cream background, category-colour text (11px Nunito bold, tracked 0.44px). Always `top-3 left-3` inside the image gradient area.

### Cards
- **Corner style:** Gently curved (12px). Never sharp or architectural.
- **Background:** Card Cream (`#FFFAEB`). Never pure white.
- **Shadow:** Card ambient (two-layer) at rest; deepens on hover.
- **Resting rotation:** ±1–3° via `transform: matrix(...)`. Cards look placed, not aligned.
- **Hover state:** Lifts 6px, straightens to 0°, shadow deepens. 0.32s ease-out. `z-index: 5` prevents clipping behind siblings.
- **Image area:** Full-width inside card, 12px radius. Gradient placeholder at 135° angle until real images land.
- **Padding:** 16px (`p-4`) all sides.

### Inputs / Fields
- **Style:** No border stroke at rest. The pill-shaped container defines the field boundary (full-radius wrapper, `rgba(246,240,220,0.08)` background on dark surfaces).
- **Error state:** Pill wrapper gains `box-shadow: 0 0 0 2px #C9347E`. Error message below in Caveat, Golden Hour colour on dark surfaces.
- **Submit button:** Signal Pink pill embedded inside the same pill wrapper — visually attached, not floating.
- **Focus:** Individual input suppresses default outline; container ring provides the visual boundary.

### Navigation
- **Style:** Transparent, full-width, `py-5 md:py-6`. Content max-width 1440px centred.
- **Logo:** Eight-petal amber SVG flower + "Handmade Logic" (Lora bold, 22px, Ink Plum) + "a journal of makes ✿" (Caveat, 15px, Signal Pink Deep).
- **Links:** Nunito semibold, 15px, Ink Plum at rest. Hover: Signal Pink Deep colour + raspberry underline sweeps in left-to-right (`scaleX(0→1)`, 0.3s ease-out). Active: `<span aria-current="page">` in Signal Pink with static underline bar; not a link.
- **Mobile:** 48×48px hamburger touch target (`p-3`). Dropdown in Surface Cream, `z-50`, full-width, vertical links at 18px.
- **Divider:** Dashed line (8px dash, 6px gap, Divider Warm) full-width at nav bottom.

### Handwrite Annotations (signature component)
Caveat-font captions that appear to be written in real time via `clip-path` reveal:

- **Rest state:** `clip-path: inset(0 100% -12% 0)` — completely clipped
- **Written state:** `clip-path: inset(0 0% -12% 0)` — fully revealed
- **Transition:** 1.3s `cubic-bezier(.45,.1,.35,1)`; "fast" variant at 0.9s; "slow" at 1.9s
- **Position:** Always `absolute`, rotated 2–6° via `matrix()`, protruding beyond parent bounding box. `z-index: 10`.
- **Colours:** Worn Sage, Golden Hour Deep, or Signal Pink. Never Ink Plum.
- **Accessibility:** Always `aria-hidden="true"`. Decorative voice only — the same information must exist in readable form elsewhere.
- **Reduced motion:** `clip-path: none !important` — immediately visible, no clipping.

## 6. Do's and Don'ts

### Do:
- **Do** use Ink Plum shadows (`rgba(42,24,37,...)`) for every drop shadow. Grey shadows anywhere signal something escaped the system.
- **Do** rotate cards and placed elements by 1–3° at rest. The system reads as hand-placed, not grid-locked.
- **Do** restrict Caveat to annotations, captions, and aside text. It is the maker's handwriting, not the UI voice.
- **Do** reserve Signal Pink for primary actions and heading emphasis. Reach for Golden Hour for warmth without urgency; Studio Plum for weight without competition.
- **Do** open every major section with the badge pattern: Golden Hour pill + Nunito bold label + small SVG icon.
- **Do** apply `<em>` inside Lora headings in Signal Pink or Worn Sage. This is the heading emphasis system.
- **Do** mark every Caveat annotation `aria-hidden="true"`. Decorative handwriting is not content.
- **Do** treat `prefers-reduced-motion` as first-class: `clip-path` reveals, `stroke-dashoffset` draws, and `translateY` reveals must all resolve immediately so content is fully readable without motion.
- **Do** tint every neutral toward the Ink Plum/raspberry family at low chroma. There are no pure greys in this system.

### Don't:
- **Don't** build a minimal tech aesthetic: no dark mode, no monospace body type, no developer-cool visual language. The palette is warm; the setting is a studio, not a terminal.
- **Don't** build a slick, corporate lifestyle surface: no polished wellness gradients, no DTC craft-brand photography style, no aspirational flatlay beige-and-white minimalism. The site must feel genuinely made, not marketed.
- **Don't** use maximalist competing elements. Layered texture and depth are deliberate, but every decorative element earns its place. If two things compete for attention, one should not be there.
- **Don't** use Pinterest softness, Etsy flatlay beige-and-white minimalism, or stock-photo warmth. These are named anti-references.
- **Don't** use `border-left` greater than 1px as a coloured accent stripe on cards, callouts, or list items. Use a background tint, a leading icon, or a full border.
- **Don't** use gradient text (`background-clip: text`). Single solid colour; weight and size carry emphasis.
- **Don't** use glassmorphism (blur + translucent cards) decoratively. The aesthetic is paper and wood, not glass.
- **Don't** build identical card grids — same-width, same-height, same structure repeated without variation. The card system uses varied column widths, rotation angles, and image heights deliberately.
- **Don't** animate with bounce or elastic easing (any `cubic-bezier` that overshoots 1.0). Ease-out curves only; `cubic-bezier(.2,.7,.3,1)` is the standard.
- **Don't** use em dashes in UI copy. Commas, colons, semicolons, periods, or parentheses.
- **Don't** use Caveat for interactive or functional text (nav links, button labels, form labels, error messages, ARIA labels). It exists only in the margin.
