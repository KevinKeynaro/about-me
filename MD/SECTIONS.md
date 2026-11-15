# SECTIONS.md

Page structure and layout for the **About Me** website (single scrolling page).

- **Design rules:** see `DESIGN.md` (colors, fonts, spacing, ornaments, motion).
- **Text and data:** see `CONTENT.md`. Use it exactly, never invent content.
- **Stack:** React only, Tailwind, 21st.dev components restyled to the design system.

---

## 1. Page Overview

| # | Section | Background | Purpose |
|---|---|---|---|
| 0 | Navbar | Ivory | Navigate between sections |
| 1 | Hero | Ivory | Introduce the name |
| 2 | About | Ivory | A short personal intro |
| 3 | Identity (Nationality and Ideology) | Ivory-deep | Two crest-style cards |
| 4 | Reading | Ivory | 3D book carousel (centerpiece) |
| 5 | Movies | Navy | Two favorite movies |
| 6 | Sports | Ivory | Jiu Jitsu and swimming |
| 7 | Footer | Navy-deep | Sign-off |

Rules for the whole page:
- Section padding, grid, and type scale come from `DESIGN.md`.
- Never place two navy bands back to back.
- Use at most one ornament per section.
- Anchor ids: `#hero`, `#about`, `#identity`, `#reading`, `#movies`, `#sports`.

---

## 2. Navbar

- **Layout:** slim, centered links on ivory, 1px gold bottom border. The name is not repeated here.
- **Links:** About, Identity, Reading, Movies, Sports (uppercase Inter label style).
- **Behavior:** active link follows scroll position with a sliding gold underline. Smooth scroll to anchors.
- **Mobile:** collapses into a simple menu button that opens a full-width ivory panel with the same links. No heavy animation.
- **21st.dev search:** Navigation Menus.

---

## 3. Hero (`#hero`)

- **Content:** name from `CONTENT.md`.
- **Layout:** full viewport height, everything centered.
  1. Small Inter label above the name: "Indonesia" (uppercase, letter-spaced, `charcoal-soft`).
  2. **Kevin Keynaro** in Fleur De Leah, very large, navy.
  3. Divider: thin gold line with a small diamond or fleur-de-lis in the middle.
  4. A subtle "scroll" hint: a small gold chevron or thin line at the bottom.
- **Motion:** the name fades in softly, then the divider draws outward from the center.
- **Mobile:** same stack, name scaled to the mobile size in `DESIGN.md`.
- **21st.dev search:** Heroes, Animated Heroes, Texts (text reveal). Pick a minimal one and strip colors, shadows, and extra effects.

---

## 4. About (`#about`)

- **Content:** About paragraph from `CONTENT.md` (TODO, written by Kevin).
- **Layout:** two columns on desktop.
  - Left: H2 "About" in Playfair with a short gold line under it, then the paragraph in Inter lead style.
  - Right: a framed image with a thin gold border and an offset duplicate border behind it (portrait-frame feel).
- **Image:** optional. Kevin decides what goes here (a photo, an illustration, or an avatar). If there is no image yet, show a refined placeholder: ivory-deep with a gold border and a subtle ornament.
- **Mobile:** single column, image first, then text.
- **21st.dev search:** Images, Profiles, Cards.

---

## 5. Identity (`#identity`)

- **Content:** Nationality: **Indonesia**. Ideology: **Social Democracy**. Labels only, no extra descriptions.
- **Layout:** H2 "Identity" centered, then two equal crest-style cards side by side.
- **Card anatomy** (top to bottom, centered):
  1. Thin gold line icon (1.5px stroke): a simple archipelago or map-pin mark for Nationality, a balance scale for Ideology.
  2. Small uppercase Inter label: "Nationality" / "Ideology".
  3. Value in Playfair Display, large: "Indonesia" / "Social Democracy".
- **Style:** ivory background, 1px gold border, 2px radius, generous padding. Hover: border brightens and the card lifts 4px.
- **Mobile:** cards stack vertically.
- **21st.dev search:** Cards, Grids and Bento.

---

## 6. Reading (`#reading`)

The centerpiece of the page.

- **Content:** six books from `CONTENT.md`, in two categories.
- **Component:** 21st.dev "3D Book Carousel Reading Mode" (by aloksivastava1025). Full styling rules are in `DESIGN.md` under the Book carousel component.
- **Layout:**
  1. H2 "Reading" centered, with the short gold line under it.
  2. Category tabs below the title: "Comics and Light Novels" and "Novels" (text-only tabs, sliding gold underline).
  3. The carousel fills the rest of the section on an ivory background.
- **Covers:** typographic, in navy or charcoal with gold details (see `DESIGN.md`).
- **Reading spread:** shows each book's title and Kevin's personal note from `CONTENT.md`. If a note is still TODO, show only the title and a small gold ornament. Never show placeholder text.
- **Motion:** scroll-driven 3D is allowed here only. Fall back to a static row of covers with fades under `prefers-reduced-motion`, or to a horizontal list if it is janky on mobile.
- **Mobile:** test carefully. Covers should be tappable, and the tabs should stay visible.

---

## 7. Movies (`#movies`)

- **Content:** two movies from `CONTENT.md` (titles only).
- **Layout:** navy band. H2 "Movies" centered in ivory, with a gold line under it. Two wide cards side by side.
- **Card anatomy:** navy-deep fill, `gold-light` 1px frame (a film-frame feel, with small notches or corner marks), the title in Playfair Display (ivory), and a small gold "Favorite" label above it.
- **No poster images.** Use typographic cards only.
- **Mobile:** cards stack vertically.
- **21st.dev search:** Cards, Galleries.

---

## 8. Sports (`#sports`)

- **Content:** Japanese Jiu Jitsu (White Belt) and Swimming (Once a week).
- **Layout:** H2 "Sports" centered, then two cards side by side (same card style as Identity, so the page stays consistent).
- **Jiu Jitsu card:** a thin horizontal band across the card to suggest a white belt (ivory with a fine gold stitch line). Sport name in Playfair, "White Belt" as the large label.
- **Swimming card:** a subtle gold wave line as the ornament. Below the sport name, a row of seven small dots (Mon to Sun) with one dot filled in gold to show "once a week". Label: "Once a week".
- **Mobile:** cards stack vertically.
- **21st.dev search:** Cards, Stats and KPIs, Progress.

---

## 9. Footer

- **Content:** sign-off line from `CONTENT.md` (TODO, written by Kevin).
- **Layout:** navy-deep background, a thin gold divider with a small ornament, the sign-off line in Fleur De Leah (`gold-light`), and nothing else. No social links, no contact info.
- **21st.dev search:** Footers. Choose the simplest one and remove everything except the sign-off.

---

## 10. Global Behavior

- **Scroll reveal:** each section's heading and content fade up on first view (see `DESIGN.md` motion rules).
- **Page title and meta:** "Kevin Keynaro" as the title. One `h1` only (the hero name).
- **Responsive order:** all sections stack in the same order on mobile.
- **Privacy:** no government details, address, school, phone, or email anywhere on the site.