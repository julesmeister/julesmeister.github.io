<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" style="filter: brightness(0) invert(1);" />
</p>
<h1 align="center">Personal portfolio</h1>

> This is a fork of [Hamish Williams' portfolio](https://github.com/HamishMW/portfolio). The original design and implementation was created by Hamish Williams. I've customized it for my personal use while maintaining the original design aesthetic.

[![Site preview](/public/site-preview.png)](https://julesmeister.pages.dev)

A customized version of Hamish Williams' design portfolio. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://julesmeister.pages.dev) or check out a live version of the [components storybook](https://storybook.hamishw.com).

## Project Structure

```
app/
├── components/              # Reusable UI components
│   ├── button/             # Button component with variants
│   ├── carousel/           # Image carousel
│   ├── code/               # Code snippet display
│   ├── decoder-text/       # Animated text decoder effect
│   ├── divider/            # Section divider
│   ├── footer/             # Site footer
│   ├── heading/            # Typography headings
│   ├── icon/               # Icon system
│   ├── image/              # Optimized image component
│   ├── input/              # Form inputs and text areas
│   ├── link/               # Navigation links
│   ├── list/               # List components
│   ├── loader/             # Loading indicators
│   ├── Modal/              # Modal dialog
│   ├── model/              # 3D model viewer with device frames
│   ├── monogram/           # Logo/monogram component
│   ├── progress/           # Progress indicators
│   ├── project-template/   # Shared project page template
│   ├── section/            # Page section wrapper
│   ├── segmented-control/  # Segmented control (view switcher)
│   ├── subheading/         # Section subheadings
│   ├── table/              # Data tables
│   ├── text/               # Text components
│   ├── theme-provider/     # Theme context and utilities
│   ├── transition/         # Page transition animations
│   └── visually-hidden/    # Screen reader accessibility
│
├── routes/                 # Remix route components
│   ├── home/              # Home page
│   │   ├── home.jsx              # Main page component
│   │   ├── intro.jsx             # Hero section
│   │   ├── profile.jsx           # About/profile section
│   │   ├── project-summary.jsx   # Scroll view project cards
│   │   ├── project-grid.jsx      # Grid view project cards
│   │   ├── projects-data.js      # Centralized project data
│   │   ├── section-nav.jsx       # Navigation between sections
│   │   ├── tickets-skills.jsx    # Skills/tech stack display
│   │   └── *.module.css          # Component styles
│   │
│   ├── articles/          # Blog/articles section
│   │   └── _index/
│   │
│   ├── contact/           # Contact form
│   │
│   ├── uses/              # Tech stack/tools page
│   │
│   └── projects.*/        # Individual project pages
│       ├── projects.airlineCrewScheduling/
│       ├── projects.blueprintjs_flutter/
│       ├── projects.cTrader/
│       ├── projects.lotel/
│       ├── projects.orbitandchill/
│       ├── projects.sweldo/
│       └── projects.testmanship/
│
├── hooks/                 # Custom React hooks
│   ├── use-home-page.js          # Home page scroll/view logic
│   ├── use-project-page.js       # Project page logic
│   ├── use-magnifier.js          # Image magnifier functionality
│   ├── useScrollToHash.js        # Hash navigation
│   ├── useInViewport.js          # Viewport intersection
│   ├── useParallax.js            # Parallax effects
│   ├── useFormInput.js           # Form input handling
│   ├── useWindowSize.js          # Responsive utilities
│   └── ...
│
├── utils/                 # Utility functions
│   ├── intersection-observers.js  # Reusable observer factories
│   ├── ref-management.js         # Dynamic ref utilities
│   ├── navigation.js             # Navigation handlers
│   ├── home-observers.js         # Home-specific observer logic
│   ├── project-helpers.js        # Project page utilities
│   ├── three.js                  # Three.js utilities
│   ├── image.js                  # Image processing
│   ├── image-imports.js          # Dynamic image imports
│   ├── meta.js                   # SEO meta tags
│   ├── mdx.js                    # MDX processing
│   └── ...
│
├── contexts/              # React contexts
│   └── view-context.jsx          # View mode switching (grid/scroll)
│
├── assets/                # Static assets
│   ├── blueprintjs_flutter/      # Blueprint Flutter project assets
│   ├── orbitandchill/            # Orbit and Chill project assets
│   └── fonts/                    # Custom fonts
│
├── config.json            # Site configuration
└── global.module.css      # Global styles
```

## Credit

The original design and implementation of this portfolio was created by [Hamish Williams](https://github.com/HamishMW). I've modified the content and some functionality while keeping the core design intact. All credit for the design system, animations, and overall aesthetic goes to Hamish.

## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

The site is deployed using Cloudflare Pages:

```bash
npm run deploy
```

## License & Attribution

This is a fork of Hamish Williams' open-source portfolio. While the code is available for learning and adaptation, please:
- Credit Hamish Williams as the original designer if you use the design substantially unmodified
- Do not present the original projects as your own
- Make the design your own by modifying the theme and components

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  To get the contact form working create an AWS account and set up SES (Simple Email service). Then plug in your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as enviroment variables in the Cloudflare dashboard for it to work in production. Or if you don't mind sending through gmail use [nodemailer](https://nodemailer.com/) instead.
</details>
