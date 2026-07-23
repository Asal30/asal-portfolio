# Asal Samarasinghe Portfolio Instructions

## Project purpose

Build a premium personal portfolio website for Asal Samarasinghe.

The main audience is recruiters and hiring managers. Secondary audiences include professional connections, collaborators and potential freelance clients.

The website should demonstrate that Asal:

* Is a capable software engineer.
* Has practical leadership and team-coordination experience.
* Understands user experience and product thinking.
* Can combine technical, creative and entrepreneurial work.
* Pays attention to design and implementation quality.

## Creative direction

The experience should combine:

* Minimal design.
* Cinematic imagery.
* Editorial typography.
* Purposeful, impressive animation.
* Scroll-based storytelling.

The website should feel premium, polished and intentional.

Do not create a generic portfolio consisting only of a hero, skill cards, project cards and a contact section.

## Technology

Use:

* Next.js App Router.
* TypeScript.
* Tailwind CSS.
* Motion for React.
* GSAP and ScrollTrigger.
* `@gsap/react`.
* Lucide React icons.

Do not install additional packages unless they are genuinely necessary.

Do not install or implement Three.js unless explicitly instructed.

## Development rules

* Use reusable React components.
* Keep components focused and maintainable.
* Use strict TypeScript.
* Do not use `any` without a documented reason.
* Use semantic HTML.
* Ensure keyboard accessibility.
* Keep visible focus styles.
* Provide meaningful image alternative text.
* Respect `prefers-reduced-motion`.
* Use Next.js image optimization.
* Avoid unnecessary client components.
* Avoid layout shifts.
* Lazy-load noncritical media and effects.
* Keep important content readable without animation.
* Do not rewrite unrelated files.

## Responsive rules

Use a mobile-first implementation.

Design and test for approximately:

* 375px mobile.
* 768px tablet.
* 1024px laptop.
* 1440px desktop.

Do not simply shrink desktop layouts.

Convert complex pinned or horizontal desktop experiences into natural vertical layouts on mobile.

## Visual rules

* Use generous whitespace.
* Use strong editorial typography.
* Use a controlled color palette.
* Maintain clear visual hierarchy.
* Avoid excessive gradients.
* Avoid excessive glassmorphism.
* Avoid neon hacker-style visuals.
* Avoid generic skill progress bars.
* Avoid placing every piece of content inside rounded cards.
* Avoid particle backgrounds unless specifically requested.
* Avoid stock photography in the final website.

## Animation responsibilities

Use Motion for:

* Element entrances.
* Hover interactions.
* Button interactions.
* Menu transitions.
* Small layout transitions.
* Simple viewport reveals.

Use GSAP for:

* ScrollTrigger sequences.
* Pinned storytelling sections.
* Scroll-linked transformations.
* Complex timelines.
* Coordinated cinematic scenes.

Do not let Motion and GSAP animate the same property on the same element.

Prefer transforms and opacity over expensive layout animation.

Clean up GSAP contexts and ScrollTrigger instances correctly.

Provide reduced-motion alternatives.

Do not hijack normal scrolling.

## Content principles

Use specific evidence instead of exaggerated claims.

Avoid generic phrases such as:

* Passionate developer.
* Coding enthusiast.
* Technology lover.
* Rockstar developer.
* I turn coffee into code.

Demonstrate leadership through responsibilities and actions.

Demonstrate UX understanding through problems, decisions and improvements.

Do not invent achievements, statistics, technologies, employment details or project outcomes.

Mark missing information with `[CONTENT REQUIRED]`.

## Planned homepage sections

1. Navigation.
2. Cinematic hero.
3. Expanding identity statement.
4. Professional journey.
5. Leadership and intern-team coordination.
6. Selected project case studies.
7. UX and product philosophy.
8. Technical capabilities.
9. Beyond engineering:

   * Music and stage performance.
   * Morpho clothing brand.
10. Contact and closing scene.

## Workflow

Before changing code:

1. Inspect the existing files.
2. Explain what currently exists.
3. List the files that need to change.
4. Present a concise plan.
5. Implement only the requested scope.

After changing code:

1. Review the changes.
2. Run ESLint.
3. Run TypeScript validation when available.
4. Run the production build.
5. Fix errors caused by the changes.
6. Summarize the completed work.
7. Mention remaining manual checks.

Never build multiple major sections unless the prompt explicitly requests them.
