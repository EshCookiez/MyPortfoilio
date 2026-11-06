# JV Bayona · Portfolio

My portfolio site: [my-portfoilio-bay.vercel.app](https://my-portfoilio-bay.vercel.app). Built with React and Vite, deployed on Vercel.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173. `npm run build` makes the production build in `dist/`, and `npm run lint` checks the code.

## Editing the content

Everything the site says is in [`src/data/profile.js`](src/data/profile.js): the intro, the featured projects (each with a short `blurb` for the grid), experience, education, certificates, skills and earlier projects. The components in `src/components/` only lay it out.

- **Project pictures** are in `public/work/`: website screenshots at 1408 × 880 (16:10), and for the mobile apps three buyer-app screens (`mobile-*.webp`, status bars cropped, agents' photos blurred).
- **Portrait and resume** are `public/files/portrait-suit.webp` (a cut-out on a transparent background, 1000 × 1000) and `public/files/resume.pdf`.
- **Theme:** dark or light, following the visitor's system until they press the toggle; their choice is remembered in the browser. The colors are the tokens at the top of `src/index.css`; the rules behind them are in [`DESIGN.md`](DESIGN.md).

## Sections

One page in four parts: hero, work, about, contact. Navy and paper, with gold moving bands.

| Section | File |
|---|---|
| Axe-throw intro (plays once per tab) | `src/components/IntroLoader.jsx` |
| Header: name, nav, sun/moon theme switch (with the theme flip) | `src/components/Header.jsx` |
| Hero: greeting, moving gold band, cut-out portrait, parallax as Work slides over it | `src/components/Hero.jsx` |
| Work: four projects in a grid, side projects in one line | `src/components/Work.jsx` |
| About: experience and skills | `src/components/About.jsx` |
| Contact: links, form (EmailJS) and the footer | `src/components/Contact.jsx` |
| Slide-in on scroll | `src/components/follow.js`, styles in `src/index.css` |

The contact form sends through EmailJS with the service and template set in `Contact.jsx`; the EmailJS dashboard decides which inbox receives it. Fonts are Outfit, IBM Plex Sans and Cinzel from Google Fonts.
