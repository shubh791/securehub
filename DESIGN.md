# SecureHub Design System

## Brand intent

SecureHub is a career-focused technology education platform. The design should feel credible, optimistic, practical, and premium—not corporate-heavy or overly decorative. It should help learners quickly understand outcomes, programs, and the path to speaking with an advisor.

## Visual direction

- Use generous white space, strong editorial hierarchy, and photography with a clear copy-safe area.
- Keep the interface predominantly light. Dark navy is reserved for image overlays, high-contrast moments, and the footer only when it improves readability.
- Avoid repeating a single blue background across every section. Rotate quiet light surfaces to create distinct chapters.
- Use color for hierarchy and meaning, not decoration.

## Color roles

| Role | Value | Use |
| --- | --- | --- |
| Primary blue | `#1677FF` | Primary actions, active states, focus states |
| Blue hover | `#0C63D4` | Hover/pressed primary actions |
| Ink | `#16283D` | Headlines and high-emphasis text |
| Body text | `#35475A` | Default readable text |
| Muted text | `#718096` | Supporting copy |
| Border | `#E0E8F0` | Dividers and card boundaries |
| Canvas | `#FFFFFF` | Main content surfaces |
| Cool gray | `#F6F8FB` | FAQ and quiet neutral areas |
| Mint | `#F2FAF7` | Benefits and learner-success areas |
| Powder blue | `#F3F7FC` | Certification/trust areas |
| Warm white | `#FFFDF9` | Advisor and enquiry areas |

## Typography

- Use `Manrope` for body copy, labels, buttons, and navigation.
- Use `Sora` for headlines, metrics, and high-emphasis program names.
- Favor a concise headline that wraps to two or three lines on desktop. Do not create narrow, six-line heading blocks.
- Body copy should be direct and outcome-led. Avoid jargon, exaggerated claims, and generic filler.

## Components

- Buttons: one clearly dominant primary action and one quieter secondary action. Maintain strong foreground/background contrast.
- Cards: white surfaces, subtle borders, restrained shadows, and a clear hover state. Avoid heavy glass effects outside the hero.
- Section labels: compact, meaningful labels only; never use numbered labels such as “Section 01.”
- Icons: use the existing inline SVG visual language. Do not add emojis to production UI.
- Photography: use high-quality, relevant learning or technology scenes. Keep text readable with a controlled overlay; avoid visual competition between copy and faces.

## Hero rules

- Copy sits on the left with a protected, readable area.
- The learner image is visually anchored on the right.
- Use the supplied/generated hero asset at `assets/images/hero/securehub-edtech-hero-light.png` unless the user requests a different asset.
- Keep the CTA pair concise and place proof points below the core message.

## Responsive rules

- Desktop: content is wide, with a clear left-copy/right-image hero balance.
- Tablet: reduce type scale and use two-column grids where content remains legible.
- Mobile: stack grids to one column, make actions full-width when needed, and keep touch targets at least 44px high.
- Never rely on horizontal scrolling for core content. Ensure images crop safely and do not obscure copy.

## Quality bar

Before shipping, check visual hierarchy, contrast, spacing rhythm, broken image paths, and all relevant breakpoints. The result should look intentionally designed at every screen size, without adding a framework or build tooling.
