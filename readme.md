# King's College Nav Bar — Build Log

First‑person recap of how I built the responsive navigation bar. I drove the architecture, logic, and testing. AI was a helper for boilerplate and reminder, as well as some questions about attributes.

---

## My Workflow Timeline
- **Scoping (20 min):** Listed requirements and split the nav into modules.
- **HTML skeleton (25 min):** Wrote desktop + mobile markup by hand; asked AI to sanity‑check nesting for dropdown lists.
- **CSS (60 min):** Crafted layout, spacing, colors, and transitions; used AI to recall a couple of less-used CSS properties and media query nuances.
- **JavaScript (55 min):** Authored module APIs and logic; let AI draft small boilerplate handlers that I then pruned and aligned to my event flow.
- **Testing & polish (40 min):** Manual checks at 3 breakpoints; tuned animations and click-outside behavior.

---

## Prompts I Gave AI (representative)
- “Remind me of a clean pattern for toggling dropdowns on mobile without interfering with desktop hover.”
- “What’s the simplest way to debounce a resize handler in vanilla JS?”
- “Show me a concise CSS snippet for a slide-in panel using translateX with smooth easing.”
- “List common accessibility considerations for nav dropdowns; keep it short.”
- “Can you draft a minimal event listener setup for closing a menu when clicking outside?”

I used the answers as references, rewrote or trimmed them, and integrated them into my structure.

---

## Plan & Architecture (my decisions)
- Break into focused modules: hamburger toggle, active state, dropdowns, mobile primary menu, utilities (plus an overlay stub for future features).
- Drive all state via CSS classes; no inline styles.
- Single breakpoint at 768px for desktop/mobile split; secondary tweaks at 480px.
- Initialize everything on `DOMContentLoaded` from a single entry point.

---

## HTML Notes
- Desktop: logo + horizontal menu with dropdown ULs + contact button + hidden hamburger.
- Mobile: hamburger shown; sliding panel (`.mobile-primary-menu`) with expandable items and a contact button at the bottom.
- Added dropdown arrows and simple tooltips via `data-tooltip` on desktop links.
- I wrote the structure; AI only helped double-check list nesting consistency.

---

## CSS Decisions
- Base: reset, Lato stack, #333 text, black buttons, light mobile background (#f5f1ed), accent #4a7c7e for mobile links.
- Navbar: sticky, subtle shadow, flex layout, generous spacing on desktop.
- Dropdowns: opacity/visibility + translateY for smooth reveal; hover-driven on desktop.
- Mobile: slide-in panel using `transform: translateX(100%)` → `0`; arrows rotate 180° on open; touch-friendly padding.
- Breakpoints: hide desktop menu/button at ≤768px, tighten spacing and font sizes at ≤480px.
- AI assist: quick reference for easing values and confirm best-practice slide-in pattern; I kept the final CSS concise.

---

## JavaScript Modules (my logic, AI for minor boilerplate)
- **hamburger.js:** Toggle/open/close menu, close on outside click, auto-close on resize to desktop.
- **activeState.js:** Track active nav item, clear/set active, close mobile menu after selection.
- **dropdown.js:** Desktop prevents default on parent clicks; mobile toggles dropdowns; submenu clicks set parent active and close menu.
- **mobilePrimaryMenu.js:** Handles expandable mobile items; only one open at a time; closes others before opening a new one.
- **mobileMenuOverlay.js:** Placeholder overlay handler (open/close), ready for future features (e.g., search); not currently wired in UI.
- **utils.js:** `isMobileView()` and `debounce()` helper. AI provided a debounce snippet; I adjusted delay and signature.

Entry point: `navbar.js` initializes modules on `DOMContentLoaded`. I set the order; AI did not decide architecture.

---

## Testing Checklist (manual)
- Desktop (>768px): hover dropdowns, underline active state, hamburger hidden.
- Tablet/mobile (≤768px): hamburger toggles slide-in panel; dropdown arrows rotate; tap submenu closes menu; outside click closes.
- Small mobile (≤480px): font/padding remain touch-friendly; no overflow.
- Resize behavior: moving from mobile → desktop closes mobile menu automatically.
- Console: clean (no errors/warnings during interactions).

---

## What I Did vs. What AI Did
- **I did:** requirements, architecture, module APIs, event flow, CSS palette/layout, HTML structure, testing, and refactoring.
- **AI did (on request):** drafted small boilerplate snippets (debounce, outside-click handler), reminded me of CSS transform/easing patterns, and helped sanity-check dropdown nesting. I rewrote/trimmed everything to fit my style.

---

## Quick How-Tos
- Add a nav item: duplicate an LI in desktop and mobile lists; existing JS/CSS already covers it.
- Add submenu items: append to the relevant dropdown ULs (desktop and mobile); no JS change needed.
- Change colors: adjust the hex values in `css/styles.css` (text, accent, background, button).

---

## Lessons (personal)
- CSS class-driven state stays simpler than inline styles.
- A single breakpoint (768px) keeps logic predictable; 480px is enough for micro-adjustments.
- Outside-click handling and resize-close are essential for mobile nav UX.
- Modular JS with small, named methods makes later tweaks painless.

---

## Next Possible Enhancements
- Wire up the overlay module for search or quick actions.
- Add focus management for keyboard navigation on dropdowns.
- Include basic aria attributes on menus for better accessibility.

---

I used AI strictly as a convenience tool for snippets and reminders; the architecture, decisions, and integration were mine.
