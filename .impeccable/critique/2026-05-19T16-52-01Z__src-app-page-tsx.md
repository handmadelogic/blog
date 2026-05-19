---
target: homepage
total_score: 23
p0_count: 0
p1_count: 2
p2_count: 3
timestamp: 2026-05-19T16-52-01Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Newsletter form has no loading, success, or error state |
| 2 | Match System / Real World | 4 | Language throughout is exactly right for the audience |
| 3 | User Control and Freedom | 2 | "Process", "About", "Patterns" nav links all go to href="#" |
| 4 | Consistency and Standards | 3 | Strong visual system; progress bar uses px not % |
| 5 | Error Prevention | 1 | Email input missing type="email"; no form validation designed |
| 6 | Recognition Rather Than Recall | 3 | Good discoverability; no category filtering on post list |
| 7 | Flexibility and Efficiency of Use | 2 | No search, no category filtering, no keyboard shortcuts |
| 8 | Aesthetic and Minimalist Design | 3 | Mostly purposeful; bottom 3-card row edges toward identical-grid |
| 9 | Error Recovery | 1 | No designed error states for any interactive element |
| 10 | Help and Documentation | 2 | About section exists; no search or contextual help |
| Total | | 23/40 | Acceptable — significant improvements needed |

## Anti-Patterns Verdict

Not AI-generated. Passes both category-reflex checks. Absolute bans clear. Bottom 3-card row approaches identical-grid but rotation + content variation saves it.

CLI detector: unavailable (bundled file not found). Browser visualization: not attempted.

## Overall Impression

Strong personality, cohesive visual system, copy that earns its place. Held back by functional gaps: dead nav links, unfinished newsletter form, progress bar bug.

## What's Working

1. Copy is specific and voice-driven throughout.
2. Animation system is purposeful and metaphorically coherent; reduced-motion support already wired.
3. Visual voice is genuinely distinctive — palette, font pairing, SVG illustration system are all unusual for the category.

## Priority Issues

**[P1] Dead navigation links**
Process, About, Patterns nav + "Read the full story" CTA + several post cards all href="#". Breaks trust after warm hero copy. Fix: build About page first, remove unbuilt nav items rather than leave dead links.

**[P1] Newsletter form incomplete**
Missing type="email", no label, no aria-label, no success/error/loading states. Only conversion point. Fix: add email type, label, aria-label, three states (idle/loading/success+error).

**[P2] Progress bars use pixel widths**
Workshop.tsx line 104: width="${item.progress}px" should be width="${item.progress}%". Visual contradicts the percentage labels.

**[P2] No active nav state**
No aria-current="page", no visual differentiation by route. Fix: use Next.js usePathname() for active state + aria attribute.

**[P2] Bottom 3-card row approaches identical-grid ban**
LatestPosts: three equal cards, same structure, subtle rotation. Fix: break uniformity with size variation or one text-only card.

## Persona Red Flags

Margot (first-time visitor): clicks About in nav → goes to #. Emotional momentum lost. Clicks "Read the full story" button → also #. Closes tab.

Returning reader: sees "78% done" label but bar shows 78px (looks near-empty on wide screens). Wants to filter by craft type; no mechanism exists. Fills newsletter form; no feedback on submit.

## Minor Observations

- Footer logo stroke and fill both #F0B652 — silhouette lost vs. header logo which uses #2A1825 stroke.
- Mobile menu has same dead links as desktop.
- data-handwrite annotation at md breakpoint may overflow at 768px.
- Submit/Subscribe buttons have no wired logic.
- rgba(246,240,220,0.7) on dark footer background may be borderline contrast for small text.
