# AGENTS.md

Rules for AI coding agents working on the **About Me** website (Kevin Keynaro).

This is a personal, fun project, **not a portfolio**. It shows who Kevin is and what he likes, and nothing sensitive.

---

## 1. Source of Truth

Read these files before building or changing anything. If a rule here conflicts with them, the files win.

| File | What it defines |
|---|---|
| `DESIGN.md` | Colors, fonts, type scale, spacing, borders, ornaments, components, motion, accessibility |
| `CONTENT.md` | All text and data shown on the site |
| `SECTIONS.md` | Page order, each section's layout, backgrounds, and behavior |

---

## 2. Stack

- **React only.** Do not add Vue or any other framework.
- **Tailwind CSS** for styling, with the design tokens from `DESIGN.md` set up in the Tailwind theme (colors, font families, radius).
- **21st.dev components**, restyled to match `DESIGN.md`.
- **Google Fonts:** Fleur De Leah, Playfair Display, Inter (with `display=swap`).
- Keep dependencies minimal. Ask before adding a new package.

---

## 3. Content Rules

- Use the text in `CONTENT.md` **exactly as written**.
- **Never invent** facts, descriptions, quotes, book summaries, or personal details.
- Anything marked `TODO` in `CONTENT.md` is not written yet. **Do not display the word "TODO" or any placeholder text on the page.** Follow the fallback rules in `SECTIONS.md` (for example, hide a missing note and show only the title with a small ornament).
- Keep content in one place (for example a `content` data file) separate from the components, so text can be edited without touching the layout.
- Ideology and Nationality are shown as **labels only**, exactly as in `CONTENT.md`.

---

## 4. Privacy Rules

- Show only the fun, personal side. No government details, address, school, phone, email, or any identifying information.
- No contact forms, social links, analytics trackers, or third-party embeds unless Kevin asks.
- Do not add real photos or personal images. If an image slot has no image yet, use the refined placeholder described in `SECTIONS.md`.

---

## 5. Design Rules (summary)

The full rules are in `DESIGN.md`. The most important ones:

- Palette: Ivory `#FAF7F0`, Charcoal `#2B2B2E`, Antique Gold `#B08D57`, Royal Navy `#1B2A4A`. Use only the tokens defined in `DESIGN.md`.
- Gold is a small accent (thin borders, ornaments, hover states). **Never use gold for body text or large filled areas.**
- Fleur De Leah is for large decorative text only (hero name, footer sign-off). Playfair Display for headings, Inter for body.
- Thin 1px borders, 2px radius, no heavy shadows, no gradients.
- Subtle motion only. The 3D book carousel in the Reading section is the one exception, and it must fall back gracefully under `prefers-reduced-motion`.
- When using a 21st.dev component: remove its default theme, shadows, bright colors, and fonts, and restyle it to this system. Do not leave any default dark theme in place.

---

## 6. Code Conventions

- Functional React components with hooks. Keep components small and focused, one per file.
- Suggested structure: `src/components/sections/` (one file per page section), `src/components/ui/` (shared pieces such as cards and dividers), `src/content/` (data from `CONTENT.md`).
- Use semantic HTML: one `h1` (the hero name), `h2` per section, and landmarks for nav, main, and footer.
- Use the anchor ids from `SECTIONS.md`: `#hero`, `#about`, `#identity`, `#reading`, `#movies`, `#sports`.
- Mobile-first, responsive at every breakpoint in `DESIGN.md`.
- Accessibility is required: visible gold focus outlines, 44px touch targets, meaningful `alt` text, `aria-hidden` on decorative ornaments, and contrast as defined in `DESIGN.md`.

---

## 7. Workflow

1. Work **one section at a time**, in the order listed in `SECTIONS.md`. Start with the theme setup (Tailwind tokens and fonts), then the navbar, then each section.
2. Before writing code for a section, briefly confirm your understanding of it. If anything in the docs is unclear or conflicts, **ask instead of guessing**.
3. Keep changes small and focused so each one can be reviewed and committed on its own.
4. After each change, check it at mobile and desktop widths, and check keyboard focus.
5. **After every completed change, give a ready-to-run git commit command** with a clear message, for example:

   ```
   git commit -m "feat(hero): add hero section with Fleur De Leah name and gold divider"
   ```

   Use conventional prefixes (`feat`, `fix`, `style`, `refactor`, `docs`, `chore`) and keep the message short and specific.

---

## 8. Definition of Done

A section is done when:
- It matches `DESIGN.md` and the layout in `SECTIONS.md`.
- It uses only content from `CONTENT.md`, with no placeholder text visible.
- It works on mobile and desktop, with keyboard navigation and reduced-motion handled.
- No console errors or warnings, and no unused code or dependencies.
- A ready-to-run commit message has been provided.