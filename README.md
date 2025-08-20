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
├── components/           # Reusable UI components
│   ├── button/
│   ├── model/           # 3D model components
│   ├── carousel/
│   └── ...
├── routes/              # Remix route components
│   ├── home/
│   │   ├── home.jsx           # Main home page (refactored)
│   │   ├── projects-data.js   # Centralized project data
│   │   ├── project-summary.jsx
│   │   └── project-grid.jsx
│   ├── projects.*/      # Individual project pages
│   └── ...
├── hooks/               # Custom React hooks
│   ├── use-home-page.js      # Home page logic hook
│   ├── useScrollToHash.js
│   └── ...
├── utils/               # Utility functions
│   ├── intersection-observers.js  # Reusable observer factories
│   ├── ref-management.js         # Dynamic ref utilities
│   ├── navigation.js            # Navigation handlers
│   ├── home-observers.js        # Home-specific observer logic
│   ├── three.js                 # Three.js utilities
│   └── ...
├── contexts/            # React contexts
│   └── view-context.jsx      # View mode switching
└── assets/              # Static assets
    ├── blueprintjs_flutter/  # Blueprint Flutter project assets
    ├── orbitandchill/       # Orbit and Chill project assets
    └── ...
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
