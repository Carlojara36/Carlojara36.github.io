# Design System: Tristan Jara - Developer Portfolio (Meridian)

A cool, precision-instrument interface (Density 4, Variance 6, Motion 5) with confident asymmetric layouts and fluid, physics-weighted motion. The atmosphere is a data terminal meets an engineering notebook: near-black cool-graphite reading surfaces, misted glass, crisp mono data ticks, and a single electric-cobalt accent. The persona (IT graduate, data management, AI-assisted development, a digital clinic system running daily) reads the room before any section does. Vanilla CSS tokens; no framework; static `index.html` + `styles.css` + `script.js`, zero build step, zero dependencies. Fonts are self-hosted variable woff2 (never a CDN `<link>`). `prefers-color-scheme: dark` ships both modes with hierarchy parity.

---

## 1. Visual Theme & Atmosphere

- **Density:** Daily App Balanced (4). Macro section rhythm, generous panel padding, but no decorative emptiness.
- **Variance:** Offset Asymmetric (6). A console-split hero, a manifesto statement, a time-rail ledger, a schematic project pane, a credential sheet, a capability matrix with a dark console footer, and a terminal band. No layout family repeats on the page; no 3-equal-card row anywhere.
- **Motion:** Fluid CSS (5). One-shot staged entrances, a hairline draw-on under section heads, physics-weighted presses. Perpetual loops are one and only one: a semantic availability pulse. The page is read, not watched.
- **Mood:** Clinical, cold, machined. Edges are sharp (`4-6px` radii), numerals and labels are mono, hairline rules and a faint dot-grid carry the data-sheet feel, and the single cobalt accent is deliberate punctuation. No pills, no pill cards, no soft rounded-everything.

## 2. Color Palette & Roles

**Light mode (default):**
- **Mist Canvas** (`#EEF1F4`) - primary page background. Cool neutral, never pure white.
- **Moon Raised** (`#FAFBFD`) - elevated surfaces: sheet face, pane body, matrix fill, ghost interactions.
- **Ink Graphite** (`#121A26`) - primary text and strongest UI ink (blue-tinted off-black, never `#000000`).
- **Slate Smoke** (`#536070`) - secondary text: lede, descriptions, duties, sheet status.
- **Graphite Dim** (`#5E6B7A`) - tertiary metadata: dates, labels, credit, captions (WCAG AA 4.8:1 on canvas).
- **Meridian Cobalt** (`#2A5BD7`) - THE single accent (saturation ~68%). Reserved for: the name-line, eyebrow ticks, section rules, matrix/ledger markers, status dot, arrows, focus rings. One accent, locked across the whole page.
- **Cobalt Core** (`#1F49B8`) - accent press/darker pairing for emphasis.
- **Terminal Plate** (`#141D2B`) - inverted deep panels: primary button? No - primary buttons are cobalt-filled; the plate is the terminal band, pane visual, console footer, monogram disc contexts, skip link.
- **Plate Bone** (`#E9EDF2`) - text on Terminal Plate. **Plate Mist** (`#9FB0C2`) - secondary text on plate.
- **Hairline Slate** (`rgba(18,26,38,0.10)`) / **Hairline Steel** (`rgba(18,26,38,0.20)`) - structural 1px lines, tinted to the ink hue, not gray.
- **Glass Sheet** (`rgba(238,241,244,0.78)`) - floating dock and mobile overlay fill.
- **Ambient Shadow** (`rgba(18,26,38,0.16)`) / **Lift Shadow** (`rgba(18,26,38,0.25)`) - shadows tinted to the ink hue; no pure-black drop shadows on light surfaces.

**Dark mode (swapped only under `@media (prefers-color-scheme: dark)`):**
- **Midnight Ink** (`#0A0F16`) - background. **Night Raised** (`#101823`) - elevated surfaces. **Night Tint** (`rgba(231,236,241,0.045)`) - wash.
- **Bonelift** (`#E7ECF1`) - primary text. **Fog Steel** (`#A3AFBE`) - secondary. **Fog Dim** (`#7C8793`) - tertiary (AA 5.3:1).
- **Ice Cobalt** (`#6D99E8`) - accent (saturation ~73%). **Ice Core** (`#87ACF0`) - accent strong. **Ink on Ice** (`#0C1524`) - label color on accent-fill.
- **Fern Plate** -> **Terminal Plate** (`#141E2B`) - deep panels; `#18222F` raised plate step. Hairlines `rgba(231,236,241,0.12/0.22)`. Glass `rgba(10,15,22,0.80)`. Shadows black-tinted (0.45/0.60) - dark-mode shadows run dark.

Rules: exactly one accent per mode; exclusive cool neutrals, never mixed; no purple, no neon, no pure black/white. All tints harmonize to the graphite hue.

## 3. Typography Rules

- **Display / UI:** Space Grotesk (self-hosted variable woff2, 300-700, `font-display: swap`). Tall technical grotesk; hierarchy via weight and tight tracking, not raw scale alone.
- **Body:** Space Grotesk 400, `1.0625rem`, `line-height: 1.7`, `max-width: 62-65ch`; `balance` for headings, `pretty` for paragraphs.
- **Mono:** JetBrains Mono (self-hosted variable woff2, 100-800) + `font-variant-numeric: tabular-nums`, reserved for: dates, eyebrows, stat readouts, matrix labels, captions, terminal lines, CTA labels. Mono is mandatory for all numerals.
- **Scale:** H1 `clamp(2.9rem,6.2vw,5.25rem)` 700 `-0.04em` `1.02`; H2 `clamp(1.9rem,3.3vw,2.7rem)` 600 `-0.03em`; H3 `clamp(1.3rem,2.2vw,1.6rem)` 600 `-0.02em`.
- **Banned:** Inter (and any other default/premium generic - the Inter name never appears in font stacks), generic `system-ui` for premium contexts, serif fonts project-wide by default (a serif may appear only with explicit editorial justification and must not be Fraunces/Instrument_Serif/Times/Georgia/Garamond). No CDN font links in production - self-hosted only.

## 4. Component Stylings

- **Mounting frames (major containers):** outer shell = hairline-steel border, `--bg-tint` wash, `border-radius: 6px`; inner = raised surface with its own radius (`4px`) - a "chassis and inset plate" machined step. Radii lock: containers 6px, nested interiors 4px, full circles reserved for the monogram disc, arrow discs, and the semantic status dot. No pill radius on any interactive or container.
- **Buttons:** Sharp `4px` radius. Primary: Meridian Cobalt fill, Ink-on-Ice/white label, inner arrow disc flipped to the label color (button-in-button). Ghost: transparent, hairline-steel border, ink label, cobalt arrow disc. Labels are JetBrains Mono uppercase `0.8rem` tracking `0.14em`, max 3 words, single line at desktop. Interaction: `:active { transform: scale(0.98) }` (160ms ease-out press), arrow disc translates `(2px,-2px) scale(1.05)` on hover over 0.45s drawer bezier. No glows, no custom cursors.
- **Floating dock nav (fixed):** centered via `left/right:0; margin-inline:auto` with NO transform and NO `backdrop-filter` on the dock itself so the mobile overlay's `position: fixed` child escapes to the viewport (a filtered/transformed ancestor would trap it). Glass via translucent fill + hairline; `~56px` tall, single row desktop. Logo = `TJ` wordmark with a 15px framed cobalt-core mark. Hamburger = 44px target, two 1.5px lines morph into an X on the drawer bezier.
- **Fullscreen mobile overlay:** `.nav-links` becomes `position: fixed; inset: 0`, heavy glass (`blur(22px)`), enters/exits `scale(1.04 -> 1)` with `transform-origin: top right` and opacity over 0.5s `--ease-out`; links cascade up `translateY(24px) -> 0`. Asymmetric: staggered enter, no-stagger exit. Escape closes and refocuses the burger.
- **Hero sheet:** portrait in a mounting frame with `shadow` lift; face `aspect-ratio: 4/5` cover; status strip below with the single semantic pulse dot + sentence-case mono availability line.
- **Ledger rows (experience):** hairline-top only (never double-bordered), left meta column (org, location, mono years - year shifts to cobalt on hover) over a right role/duties column; duties marked with cobalt 5px ticks, not dashes or dots.
- **Readouts (about):** 3-col data strip, hairline-steel 2px top rule per cell, JetBrains Mono tabular numerals `clamp(2.2-3.3rem)` with mono micro-labels. Static values from resume data (500+ / ~40% / 3+); no fake count-ups.
- **Project pane:** full frame, schematic split - plate visual (dot-grid + monogram `DV` + mono caption) over raised body (title, description, sharp 4px chips, CTA, mono `Status: live`). Real product screenshot preferred; typographic plate is the acceptable interim (TODO in markup).
- **Credential sheet (education):** frame with mono left key column (Degree/School/Capstone/Honors labels) over value column - data-sheet pattern.
- **Capability mosaic (skills):** each skill is an individualized tiled bullet - a hairline-framed `4px` tile carrying a cobalt 5px tick, the skill name, and an accurate mono category tag (`Language / Database / Front-end / API / Framework / Specialty / QA / Data / Tool / Practice` - React and Svelte are Frameworks, not languages). Tiles run in a 12-column offset mosaic (`--w` spans 3/4/5, bands wrap to perfect rows, no 3-across clone), with a mono band label per group and a dark console footer strip below ("Currently running / DentVault / SQLite / Tauri / Svelte") as the visual-variation cell. Hover lifts the tick and turns the tile hairline accent-strong.
- **Contact terminal:** full-bleed deep plate band with dot-grid; massive Space Grotesk 700 email `clamp(1.4-3.5rem)` with a paced arc arrow disc (cobalt fill). Sentence-case mono `// reach me directly` prompt line, mono meta row.
- **Inputs/Loaders/Empty/Error:** none async; encode for future screens - labels above, error below, accent focus ring, skeletal loaders matching layout, never circular spinners, composed empty states.
- **Focus:** accent 2px outline + 3px offset, never removed.

## 5. Layout Principles

- 12-column CSS Grid only; no flexbox percentage math, no `calc()` width hacks.
- Container max `1200px` centered, gutters `clamp(1.25rem,4vw,2.5rem)`. Section padding `clamp(5.5rem,9vw,8.5rem)` with optical bottom relief.
- Hero: asymmetric console split `7fr / 5fr`, portrait sheet on the right `justify-self: end`, `min-height: 100dvh` (never `h-screen`), top padding capped at `clamp(4rem,9vh,5.5rem)` <= 6rem. Max 3 text elements (status line, name headline at 2 lines with a masked line-by-line reveal, one 13-word subtext, two CTAs - one intent each). The name reveals as two aligned masks (`overflow:hidden` line wrappers, inner slide `translateY(112% -> 0)` on the drawer-adjacent bezier, staggers `--d: 400ms / 560ms`) - no blur, no letter-spacing pop. A mono status line with the single availability pulse and an important mono figure caption (`Tristan Jara / Baguio City`) replace any hero sheet text strip. No eyebrow in the hero; a single cobalt registration tick marks the portrait chassis top-left corner; the chassis carries the dot-grid. A restrained cursor tilt (`+/- 2.5deg`) rotates the portrait sheet on `rotateX/Y` under `pointer:fine` + no-preference-reduced-motion only, lerped through `requestAnimationFrame` and reset on leave - transform-only, never during entrance.
- 7 distinct section families, zero repetition; the centered hero is banned and not used - the console split is the signature. No 3-equal-card row anywhere.
- No overlapping or absolute-positioned content; every element owns its spatial zone. Hairlimes + dot-grid patterns on plates only.
- Hairs mobil: `scroll-padding-top: 7rem` under the fixed dock.
- **Mobile (< 960px):** everything single column, centered; ledger meta pivots to an inline row, pane stacks (visual first), matrix becomes one column with a top hairline divider, readouts stack; overlay collapses to stacked full-height glass. Touch targets >= 44px. Typography through `clamp()`. Zero horizontal scroll (`overflow-x: hidden` guard + tested).

## 6. Motion & Interaction

- **Easing tokens:** `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` (reveals/entrances), drawer `cubic-bezier(0.32, 0.72, 0, 1)` (morphs/arrows), press `160ms ease-out`. The only `ease-in-out` tone on the page is the single semantic availability pulse (documented exception).
- **Staged hero entrance:** status + sheet arrive at 220/100ms; the name then unveils line-by-line through aligned clipping masks (400/560ms, 1s slide), followed by subtext and CTAs at 700/820ms. Each rise resolves through `translateY(30px)` + `blur(6px)` (one-shot, always resolves to rest).
- **Scroll reveal:** IntersectionObserver adds a one-shot class; one shared reveal spec `opacity 0 / translateY(var(--reveal-y, 34px)) / blur(6px)` over 0.8s `--ease-out`; `--reveal-y: 22px` soft variant for section heads and the credential sheet; siblings cascade 80ms apart using `--i`; the same transition list carries `background-color/color/border-color` (0.4s) so an OS theme flip crossfades. Section heads draw on an accent hairline (`scaleX(0 -> 1)` 0.8s, delayed) - transform-only.
- **Spring language:** no spring library; the drawer bezier acts as the physics substitute for all interactive easing.
- **Perpetual micro-interactions:** exactly one - the availability status pulse (real semantic state) on the hero sheet; killed under reduced motion. Everything else one-shot; informational content stays still.
- **Hardware discipline:** animate only `transform`/`opacity`. Grain/noise rides a fixed, `pointer-events: none` body pseudo-element (z 40, opacity 0.035); `backdrop-filter` only on the fixed mobile overlay, never on scrolling content; z-index is a documented scale (40 grain / 700 menu / 800 nav / 900 skip); `will-change` is never used.
- **Accessibility:** full `prefers-reduced-motion` collapse (instant, static, no loops) and `prefers-reduced-transparency` fallback (dock and overlay surfaces solidify to `--bg-raised` with blur removed); accent focus ring visible on keyboard navigation; skip-link; semantic single-H1/alt/aria-label discipline.

## 7. Anti-Patterns (Banned)

- Emojis anywhere in code, markup, or copy.
- Inter and serif fonts by default; specifically Fraunces and Instrument_Serif, always; CDN `<link>` font loading (self-host only).
- Pure black and pure white usage; neon/outer glow shadows; oversaturated accents (saturation < 80%, checked); gradient text on large headers; custom mouse cursors.
- Overlapping or absolutely-stacked content; centered heroes (variance > 4); the 3-equal-card feature row; pill-radius UI (all-interactive pills); flexbox percentage math; `h-screen` for full-height sections; horizontal scroll on mobile.
- Em-dashes (`—`) and en-dashes (`–`) anywhere visible - hyphen only for ranges and separators.
- More than one eyebrow label per three sections; section-number eyebrows (`01 / INDEX`) and fake index numbers (`POS 01`); middle-dot (`·`) floods; decorative colored status dots (the single availability pulse is the only dot); locale/weather/time strips; scroll cues ("Scroll", chevrons, mouse icons); version labels in the hero or footer.
- Pills, tags, or photo-credit captions overlaid on images; fake product previews built from divs; fake-precise numbers and count-ups on reading content.
- Filler verbs ("Elevate", "Seamless", "Unleash", "Next-Gen"); generic placeholder names; fake round stats; hand-rolled decorative SVG illustration (single-element arrow chevrons in `stroke-width: 1.5` are the only allowed primitive).
<!-- DESIGN.md - single source of truth for Meridian generation -->