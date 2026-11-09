# Portfolio Revamp Roadmap

This roadmap keeps the redesign focused while using the portfolio as a practical
React and frontend curriculum. We complete one phase at a time. New ideas that
do not support the active phase go into the backlog instead of changing scope.

## Product goal

Build a distinctive, accessible personal portfolio that presents Roshan as a
software engineer with strong professional experience while teaching enough
React, JavaScript, CSS, and frontend architecture to rebuild the site
independently.

## Direction we have agreed on

- A single-page, technical-editorial "engineering workspace" experience.
- Professional and personal—not a fake terminal or generic portfolio template.
- Primary content order: Hero, Experience, Build Log, Toolkit, About, Contact.
- Experience comes before personal projects because it is currently the
  strongest evidence of engineering work.
- The portfolio itself is the first Build Log entry. Future projects are added
  only when they are real and worth explaining.
- Warm off-white canvas, near-black text, cobalt blue primary accent, and small
  safety-orange status accents.
- Modern sans-serif typography for content and restrained monospace typography
  for labels, metadata, and section numbers.
- Thin rules, a visible grid, numbered sections, and generous but intentional
  spacing create the technical character.

## How we will work

For every phase:

1. Explain the relevant React, JavaScript, or CSS concepts before coding.
2. Make the smallest coherent change that completes the phase.
3. Add comments where the reasoning or behavior is not intuitive. Comments
   should explain *why*, not restate obvious syntax.
4. Preserve working behavior unless a change is explicitly part of the phase.
5. Verify a production build with `CI=true npm run build`.
6. Inspect desktop and mobile layouts and check keyboard accessibility.
7. Review what changed and what was learned before starting the next phase.

## Phase 0 — Repository and React foundation

Status: complete

### Work

- Stop tracking `node_modules`, generated builds, and operating-system files.
- Add a documented `.gitignore`.
- Introduce `App` as the root component and keep `index.js` focused on booting
  React.
- Remove the empty Projects section from the rendered page.

### Concepts

- Source files versus generated files
- Dependency manifests and reproducible installs
- React roots, JSX, component composition, fragments, and semantic `<main>`

### Done when

- Generated files remain ignored after installation and building.
- The production build succeeds in CI mode.
- The visible site retains its existing content.

## Phase 1 — Visual system and layout foundation

Status: complete

### Work

- Replace scattered global defaults with a small set of CSS custom properties
  for color, typography, spacing, borders, widths, and motion.
- Add a predictable CSS reset and global box-sizing rules.
- Create reusable `.page-container`, `.section`, and section-label patterns.
- Establish a 12-column desktop grid that collapses cleanly on smaller screens.
- Replace the current mixture of Times New Roman, Roboto, and Open Sans with one
  deliberate type system.
- Preserve the current section content while establishing the new canvas.

### Concepts

- CSS cascade, inheritance, and specificity
- CSS custom properties as design tokens
- Fluid sizing with `clamp()`
- Grid versus Flexbox
- Responsive, content-driven breakpoints

### Done when

- Colors, type, and spacing come from named tokens rather than repeated values.
- Content is readable at 360px, 768px, and 1440px widths.
- Adding a new section does not require inventing new layout rules.

## Phase 2 — Navigation shell

Status: complete

### Work

- Build a semantic sticky header with a small `RG` or Roshan Gokul wordmark.
- Link to Experience, Build Log, Toolkit, About, and Contact.
- Keep GitHub and LinkedIn available as secondary actions.
- Add a compact mobile navigation pattern without introducing a menu until the
  links genuinely require one.
- Add clear hover and keyboard-focus states.

### Concepts

- Semantic `<header>` and `<nav>` elements
- Anchor navigation and stable section IDs
- Fixed versus sticky positioning
- Accessible focus indicators and hit targets

### Done when

- Every link works with mouse and keyboard.
- The header does not obscure anchored section headings.
- The navigation works without JavaScript.

## Phase 3 — Hero and engineer profile

Status: next

### Work

- Replace the current About introduction with a focused hero statement.
- Add a concise supporting paragraph and primary call to action.
- Present the existing photo inside an engineer-profile panel.
- Include small metadata such as current role, location, and current learning.
- Make the layout two-column on wide screens and single-column on mobile.
- Keep animation optional and respect reduced-motion preferences.

### Concepts

- Component responsibilities
- Props for reusable labels and actions
- Responsive images and `object-fit`
- CSS Grid placement
- Accessible animation and `prefers-reduced-motion`

### Done when

- A visitor can understand who Roshan is and what he does within a few seconds.
- The primary action leads to Experience or the Build Log.
- The section remains understandable with animation disabled.

## Phase 4 — Data-driven experience section

Status: planned

### Work

- Move experience entries from repeated JSX into a JavaScript data array.
- Create a reusable `ExperienceItem` component.
- Render entries with `Array.map()` and stable keys.
- Correct the current list semantics and content hierarchy.
- Initially restyle the existing timeline; replace the timeline dependency only
  if a custom implementation provides a clear learning or design benefit.
- Optionally add expandable details after the static version is complete.

### Concepts

- Arrays and objects in JavaScript
- Mapping data to components
- Props, children, and one-way data flow
- React keys and reconciliation
- State-driven disclosure controls

### Done when

- Adding an experience requires adding one data object, not copying JSX.
- Entries are scan-friendly and semantically valid.
- Optional details are usable with keyboard and assistive technology.

## Phase 5 — Build Log

Status: planned

### Work

- Add one honest entry documenting the portfolio redesign.
- Show its goal, current focus, technical decisions, and source link.
- Create a reusable `BuildCard` that can support future projects without empty
  placeholders.
- Add status vocabulary such as Active, Shipped, or Exploring.
- Leave room for one future systems-oriented project without inventing content.

### Concepts

- Reusable components and prop design
- Conditional rendering
- Separating content data from presentation
- Designing components for known requirements rather than hypothetical scale

### Done when

- The section feels intentional with exactly one entry.
- No copy implies that unfinished or nonexistent projects are complete.
- A second project can be added without redesigning the section.

## Phase 6 — Toolkit

Status: planned

### Work

- Replace the current inline skill sentences with grouped categories: Languages,
  Backend, Infrastructure, and Observability.
- Store categories in data and render them through a reusable component.
- Use typography and layout rather than progress bars or unsupported skill
  percentages.

### Concepts

- Nested data structures
- Nested list rendering
- Choosing semantic HTML for grouped information
- Responsive auto-fit grids

### Done when

- Skills are easy to scan and honestly categorized.
- The section works with long or short category lists.

## Phase 7 — About, contact, and footer

Status: planned

### Work

- Write a short personal About section that complements rather than repeats the
  hero and résumé.
- Add an accessible Contact section with direct email, LinkedIn, and GitHub
  actions.
- Add a compact footer with source and build information.
- Update the document title, description, icons, and social metadata.

### Concepts

- Content hierarchy and semantic sectioning
- Accessible link text
- Metadata, Open Graph tags, and basic discoverability
- Public content versus private configuration

### Done when

- Every navigation destination contains real content.
- Contact methods are clear and functional.
- Browser and shared-link metadata describe Roshan rather than Create React App.

## Phase 8 — Purposeful interaction

Status: planned

### Work

- Add active-section navigation only if it improves orientation.
- Add restrained reveal or hover interactions to Build Log and Experience.
- Use React state for meaningful interaction, not decorative complexity.
- Add a small custom hook when shared browser behavior warrants one.
- Respect reduced-motion and touch input.

### Concepts

- State and event handling
- `useEffect`, cleanup, and browser APIs
- Custom hooks
- Progressive enhancement
- Avoiding unnecessary re-renders

### Done when

- Interactions communicate state or reveal useful information.
- The complete site remains usable without animation.
- No interaction exists solely to demonstrate a React feature.

## Phase 9 — Quality, testing, and deployment

Status: planned

### Work

- Add focused tests for navigation and interactive components.
- Audit keyboard navigation, headings, landmarks, alternative text, contrast,
  and reduced motion.
- Check performance and optimize the large profile image.
- Remove unused dependencies and stale Create React App boilerplate.
- Verify Vercel settings and deploy the completed version.

### Concepts

- React Testing Library and user-centered tests
- Accessibility verification
- Asset optimization and performance budgets
- CI builds and deployment environments

### Done when

- `CI=true npm run build` succeeds without warnings.
- Core interactions have tests.
- Desktop and mobile smoke tests pass.
- The production Vercel deployment matches the verified local build.

## Deferred backlog

These ideas are intentionally outside the active roadmap unless we explicitly
promote them into a future phase:

- Dark-mode toggle
- Multiple routes or a blog
- CMS or database integration
- Complex 3D or canvas effects
- Large animation libraries
- Migrating from Create React App to Vite
- Migrating JavaScript to TypeScript
- Building a separate personal project solely to fill space

## Current checkpoint

The next active task is **Phase 3 — Hero and engineer profile**. We should not
begin the hero implementation until its concepts, content, and proposed layout
have been reviewed together.
