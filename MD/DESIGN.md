# DESIGN.md

Design system for the **About Me** website (Kevin Keynaro).
This is a personal, fun project, **not a portfolio**. Every design decision should feel calm, refined, and quietly royal.

**Stack:** React only · Tailwind CSS · 21st.dev components (restyled to this system) · Google Fonts

---

## 1. Design Principles

1. **Minimal first.** Whitespace is the main decoration. If an element does not earn its place, remove it.
2. **Royal, not loud.** The royalist feel comes from fine details (thin gold lines, ornaments, serif type), never from heavy gradients, big shadows, or large gold areas.
3. **Quiet motion.** Animations are slow, soft, and subtle.
4. **Readable always.** Decorative choices never override legibility.
5. **Personal, not private.** The site shows the fun side of me only. No government, address, school, or contact details.

---

## 2. Color Palette

| Token | Name | Hex | Role |
|---|---|---|---|
| `ivory` | Ivory White | `#FAF7F0` | Main page background |
| `charcoal` | Charcoal Black | `#2B2B2E` | Primary text on ivory |
| `gold` | Antique Gold | `#B08D57` | Accents, borders, ornaments, hover states |
| `navy` | Royal Navy | `#1B2A4A` | Headings, dark section bands, spines/cards |

### Supporting tints (use sparingly)

| Token | Hex | Role |
|---|---|---|
| `ivory-deep` | `#F2EDE0` | Card surfaces on ivory, subtle section contrast |
| `charcoal-soft` | `#5A5A60` | Secondary text, captions, metadata |
| `gold-light` | `#D9C49A` | Gold on navy for small details, soft hover glow |
| `navy-deep` | `#121C33` | Footer, deepest dark areas |

### Usage ratio

- **~70%** Ivory (and ivory-deep)
- **~20%** Navy and Charcoal
- **<10%** Gold

### Pairing rules

| Text | On | Allowed? |
|---|---|---|
| Charcoal | Ivory / Ivory-deep | Yes, all sizes (body default) |
| Navy | Ivory | Yes, all sizes (headings) |
| Ivory | Navy / Navy-deep | Yes, all sizes |
| Gold-light | Navy | Yes, all sizes |
| Gold | Navy | Large text or ornaments only |
| Gold | Ivory | **Large text, borders, and ornaments only. Never for body text** (low contrast) |

---

## 3. Typography

All fonts load from Google Fonts with `display=swap`.

| Role | Font | Weights | Used for |
|---|---|---|---|
| Decorative | **Fleur De Leah** | 400 (only weight) | Name in the hero, one tagline, footer sign-off |
| Main | **Playfair Display** | 400, 500, 600, 700 (+ italic) | Section titles, card headings, big numerals, book-spine titles |
| Body | **Inter** | 300, 400, 500, 600 | Paragraphs, labels, captions, nav, buttons |

### Rules

- **Fleur De Leah is a script font.** Use it large only (never below ~32px), never for paragraphs, and never in all caps. Limit to 2 or 3 places on the whole site.
- **Playfair Display** carries the hierarchy. Use italic for soft emphasis (a subtitle or a quote), not bold.
- **Inter** stays light and airy. Default weight 400, with 300 allowed for large intro text.
- Small labels (nav, tags, category tabs): Inter 500, uppercase, letter-spacing `0.12em`, 12 to 13px.

### Type scale (desktop, then mobile)

| Style | Font | Size | Line height |
|---|---|---|---|
| Hero name | Fleur De Leah | 96px, then 56px | 1.0 |
| Section title (H2) | Playfair Display 600 | 40px, then 30px | 1.2 |
| Card title (H3) | Playfair Display 500 | 24px, then 20px | 1.3 |
| Big numeral | Playfair Display 400 | 64px, then 44px | 1.0 |
| Lead text | Inter 300 | 20px, then 18px | 1.7 |
| Body | Inter 400 | 16px | 1.75 |
| Caption | Inter 400 | 14px | 1.6 |
| Label | Inter 500 uppercase | 12px | 1.4 |

---

## 4. Layout and Spacing

- **Base unit:** 8px. All spacing is a multiple of 8.
- **Max content width:** 1120px, centered. Reading text max 65ch.
- **Section padding:** 128px top and bottom on desktop, 80px on mobile.
- **Grid:** 12 columns on desktop, 4 on mobile. Gutter 24px.
- **Breakpoints:** mobile-first (`sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280).
- **Section rhythm:** sections alternate between ivory and navy bands. Never place two navy bands back to back.
- **Alignment:** hero and section titles are centered. Body content is left-aligned.

---

## 5. Surfaces, Borders, and Shape

- **Borders:** 1px solid. Gold on ivory (`gold` at ~60% opacity), or `gold-light` at ~40% on navy.
- **Corner radius:** `2px` by default (sharp and formal). Avoid large rounded corners and pill shapes, except for small tags (`999px`).
- **Shadows:** none by default. On hover, a very soft shadow is allowed: `0 8px 24px rgba(27, 42, 74, 0.08)`.
- **Frames:** photos and key cards use a thin gold border with a **slight offset duplicate** behind them (a portrait-frame feel).
- **No gradients** except an optional very subtle ivory-to-ivory-deep fade.

---

## 6. Ornaments and Dividers

- **Section divider:** a 1px gold line (max 120px wide, centered) with a small diamond or fleur-de-lis in the middle.
- **Title accent:** a short 1px gold line under section titles (48 to 64px wide).
- **Icons:** thin line icons only (1.5px stroke), in gold or navy. No filled or multicolor icons.
- **One ornament per section at most.** Restraint keeps it elegant.

---

## 7. Components (restyle 21st.dev picks to match)

| Component | Style |
|---|---|
| **Navbar** | Slim, centered, ivory with a 1px gold bottom border. Links in uppercase Inter label style. Active link has a gold underline. |
| **Cards** | `ivory-deep` background, 1px gold border, 2px radius, generous padding (32px). Hover: border brightens to full gold, soft shadow, 4px lift. |
| **Tabs / filters** | Text-only uppercase labels with a sliding gold underline. No filled pill buttons. |
| **Buttons** (if any) | Outline style: navy text, 1px gold border, fills navy on hover with ivory text. |
| **Tags** | Small, uppercase Inter, 1px gold border, transparent background. |
| **Book carousel** | 21st.dev "3D Book Carousel Reading Mode" (by aloksivastava1025, MIT license), used for the Reading section. Restyle it fully to this system: ivory or navy section background, no default dark theme. **Covers** are typographic (navy or charcoal background, Playfair title in ivory or gold-light, thin gold border and rules, optional small ornament). **Spines** use the same navy or charcoal with a vertical Playfair title and thin gold lines at top and bottom. **Reading spread** uses an ivory page, a Playfair title, Inter body text in charcoal, and a gold hairline in the center fold. Category tabs ("Comics and Light Novels" / "Novels") use the Tabs style above. |
| **Footer** | `navy-deep` background, a gold divider, one Fleur De Leah sign-off line in `gold-light`. |

When adapting a 21st.dev component: remove default shadows, remove bright or saturated colors, swap fonts to this system, and replace its radius and borders with the rules above.

---

## 8. Motion

- **Default transition:** `400ms` with `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Scroll reveal:** fade in plus move up 16px, `600ms`, staggered `80ms` between siblings, triggered once.
- **Links:** gold underline slides in from the left on hover.
- **Allowed:** fades, small lifts, underline slides, soft border color changes.
- **Not allowed:** bouncing, spinning, parallax-heavy effects, auto-playing carousels, and anything flashy.
- **One exception, the book carousel:** the Reading section may use the scroll-driven 3D motion (spines turning into covers, the book rising and opening). It is the centerpiece, so it is the only place where stronger motion is allowed. Keep it smooth and slow, and use the default easing above.
- **Book carousel fallbacks:** with `prefers-reduced-motion`, show the books as a static row of covers with simple fades and open the reading spread without the rise and swing. Test on mobile and touch devices, and if the 3D effect is janky there, fall back to a simple horizontal list of covers.
- **Respect `prefers-reduced-motion`:** disable all movement and keep only simple fades or none.

---

## 9. Accessibility

- Minimum contrast 4.5:1 for body text, 3:1 for large text and UI borders (see pairing rules in section 2).
- Visible focus state on every interactive element: 2px gold outline with a 2px offset.
- Touch targets at least 44x44px.
- Meaningful `alt` text on any image. Decorative ornaments use `aria-hidden`.
- Semantic HTML structure: one `h1` (the name), `h2` per section, landmarks for nav, main, and footer.

---

## 10. Do and Don't

**Do**
- Use lots of whitespace and thin lines.
- Keep gold as a small accent.
- Let Playfair Display do the heavy lifting for hierarchy.
- Keep every section visually consistent in spacing and alignment.

**Don't**
- Use gold for body text or large filled areas.
- Use Fleur De Leah for anything long or small.
- Add heavy shadows, gradients, or bright colors.
- Mix in extra fonts or extra accent colors.
- Show any sensitive or identifying personal information.

---

## 11. Design Tokens (reference names)

Use these names in the Tailwind theme so components stay consistent.

- **Colors:** `ivory`, `ivory-deep`, `charcoal`, `charcoal-soft`, `gold`, `gold-light`, `navy`, `navy-deep`
- **Font families:** `font-decorative` (Fleur De Leah), `font-display` (Playfair Display), `font-body` (Inter)
- **Radius:** `rounded-sm` = 2px
- **Spacing:** multiples of 8px
- **Transition:** `duration-400` with the easing in section 8