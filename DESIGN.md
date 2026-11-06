# Design rules

A one-page portfolio in navy and paper, with gold for the moving bands and accents. It is short on purpose: four parts, read top to bottom in a minute.

## Audience and what they do

| Who | What they need, in order |
|---|---|
| Recruiters and hiring managers | Name, role, whether I'm available, then proof: what I built and with what. They scan for 30 seconds. |
| Tech leads | The projects: what each is, what I built, the stack, links to live sites and code. |
| People who want to work with me | A way to reach me: form, email, LinkedIn, resume. |

So the page is **hero → work → about → contact**, and nothing sits between a reader and that information.

## The four parts

| Part | Background | What it holds |
|---|---|---|
| Header + hero | `--page` | Name, plain-word nav (Work, About, Contact, Resume), a sun or moon icon that switches the theme. "Hi, I'm JV.", the tagline, location and status, a gold band running "WEB · MOBILE · DESKTOP" and the cut-out portrait standing in front of it. |
| Work | `--surface-a` | Four projects in a 2×2 grid: picture, number, title, dates and role, a two-line blurb, four stack items, links. School and hackathon projects in one "Also built" line. |
| About | `--page` | Experience (jobs, degree, certificates) and skills, side by side. |
| Gold band | gold | "OPEN TO NEW ROLES", moving. |
| Contact | `--surface-b` | "Let's build something.", email, LinkedIn, GitHub, resume, the form; the footer sits at the bottom of this part. |

No two neighbours share a background.

## Type

| Role | Font | Sizes (px) | Use |
|---|---|---|---|
| Headings | Outfit 600–800 | 68 contact / 56 hero / 48 sections / 28 projects / 18 rows | Every heading and the moving bands (800). |
| Body | IBM Plex Sans 400–600 | 16 / 18–19 lead / 14 small | Everything people read. Line height 1.6. |
| Name | Cinzel 700 | 20 header / 18 footer | The name only. |
| Labels | Outfit 600, 13px, uppercase, 0.16em | | "WORK", "ABOUT", "EXPERIENCE", "SKILLS" in `--accent`. |

## Color

| Token | Dark | Light | Use |
|---|---|---|---|
| `--page` | `#0B1F3A` | `#F5F8FC` | Header, hero, about |
| `--surface-a` | `#12315C` | `#E8EFF7` | Work |
| `--surface-b` | `#173F73` | `#D6E3F1` | Contact |
| `--text` / `--heading` | `#F8FAFC` | `#0B1626` | Text and headings |
| `--text-2` | `#C9D6E5` | `#4D6079` | Secondary text |
| `--accent` | `#F2C14E` | `#2A62A3` | Labels, numbers, years, link hover, focus ring |
| `--underline` | `#F2C14E` | `#E0A92B` | Link underlines (decorative) |
| `--line` | `#2A5A94` | `#93AAC4` | Rules between rows (decorative) |
| `--band-gold` / `--band-ink` | `#F2C14E` / `#0B1F3A` | same | The moving bands, the send button, selection |

All text passes WCAG AA (4.5:1) on its background in both themes, measured on the built page. Gold is never used for text on the light theme, where it would fail; there the accent is blue.

## Layout and space

- Container 1120px, 24px gutters (20px on phones). Sections 96px top and bottom (64px on phones).
- Grids fold to one column: work under 760px, about and contact under 860px.
- Pictures sit in one 16:10 slot each. Screenshots have a 1px `--line` border; the mobile apps slot shows three phone screens on `--page`.
- Square corners everywhere except the phone screens, which keep a phone's rounded corners.

## Pictures

- `public/files/portrait-suit.webp`: the cut-out portrait, fully solid inside its outline. The hero band runs behind the chest, below the collar, so it never shows through the gap under the chin.
- `public/work/*.jpg`: website screenshots at 1408 × 880.
- `public/work/mobile-*.webp`: buyer-app screens with the phone's status and nav bars cropped off and agents' photos blurred. Use demo data, never real clients.

## Motion

- The hero band slides in 28s, the "Open to new roles" band in 34s. Both stop with `prefers-reduced-motion`.
- When a section scrolls into view, its content slides in from the left, one piece after another, 0.08s apart, transform and opacity only.
- **Hero to Work (parallax):** the hero is pinned (`position: sticky`) while Work slides up over it. As Work covers it, the portrait rises at half the scroll speed, the gold band at 0.3, the words at 0.1 while fading out (on phones the words rise at 0.6 and lead the portrait). Every layer rises slower than Work, so Work always hides the photo's cut bottom edge, and the band never climbs above the collar. `Hero.jsx` sets `--p` and `--lift` once per frame; only `translate` and `opacity` change. Every section after the hero has a solid background and sits above it.
- **Screens boot:** each project in Work reveals on its own as it scrolls in. Its screenshot unrolls from the top (`clip-path`, 0.9s), and the three phone screens rise and settle one after another, 0.14s apart.
- **Theme flip:** the Dark mode / Light mode switch reveals the new theme through a circle growing from the button (View Transitions, 0.65s). Browsers without View Transitions just switch.
- The axe-throw intro plays once per tab; it is skipped with `prefers-reduced-motion`.

## States

| Element | Rest | Hover | Focus | Other |
|---|---|---|---|---|
| Link | Text color, 2px underline | `--accent` | 2px `--accent` outline, 3px offset | |
| Nav item | `--text-2`, no underline | Text color, underline | Outline | Section in view: text color, 2px gold underline, `aria-current` |
| Theme switch | Sun icon in dark mode, moon in light mode (where a click takes you), 44px square, labelled for screen readers | Text color, the icon turns slightly | Outline | The new theme spreads in a circle from it |
| Send button | Gold, navy text | Lighter gold | Outline | Sending: disabled, "Sending…" |
| Field | 2px `--field-line` border | | Outline | Left wrong: dashed border plus the browser's message |
| Form | | | | Sent: thank-you note, form cleared. Failed: dashed note with a mailto link. Announced with `role="status"`. |

Every control is a real `<a>`, `<button>` or labelled field, at least 40px tall. A skip link comes first.

## Voice

Plain words. Every number and claim is real and comes from my work or my certificates. No emoji.
