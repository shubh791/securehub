# SecureHub Project Instructions

## Project scope

SecureHub is a static, premium edtech landing page. It is intentionally built with plain HTML, CSS, and vanilla JavaScript.

## Technology rules

- Use only HTML, CSS, and vanilla JavaScript.
- Do not add React, Vue, Angular, Tailwind, Bootstrap, jQuery, GSAP, a package manager, a build step, or any other framework/dependency.
- Keep page markup in `index.html`, shared structural markup/behavior in `js/header-footer.js`, and styling in `css/`.
- Reuse existing CSS custom properties and shared classes before adding one-off styles.
- Use local assets from `assets/` or `images/`; do not replace supplied images without explicit approval.

## Design and gpt-taste guidance

The installed `gpt-taste` skill may inform visual quality, hierarchy, composition, and anti-generic design review. For this repository, its instructions requiring React, Tailwind, GSAP, external placeholder images, mock randomization, or code-output tags do not apply.

Follow `DESIGN.md` for the project visual system. Prefer purposeful, responsive design over visual novelty. Keep headings readable, CTA contrast accessible, layouts calm, and imagery relevant to learning outcomes.

## Implementation standards

- Preserve semantic HTML and accessible labels, alt text, focus states, and keyboard-friendly controls.
- Keep desktop, tablet, and mobile layouts responsive. Test at approximately 1440px, 1024px, 768px, 480px, and 360px widths after UI changes.
- Prevent horizontal overflow at every viewport width.
- Use `clamp()` and CSS Grid/Flexbox where they improve resilience; avoid fixed positioning and hard-coded widths unless necessary.
- Keep the hero headline to two or three lines at desktop widths and preserve a clear text-safe area when imagery is used as a background.
- Do not use emojis in production UI, source comments, or new copy.
- Do not make unrelated rewrites, remove existing user changes, or introduce unused assets.

## Verification

Before handing off a UI change:

1. Check HTML/CSS/JS syntax and CSS brace balance.
2. Confirm changed image paths resolve.
3. Check responsive breakpoints relevant to the edited component.
4. Run `git diff --check`.
