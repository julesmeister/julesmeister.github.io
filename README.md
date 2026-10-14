# Jules Lee's Portfolio

Personal portfolio for Jules Lee, featuring selected projects, professional experience, education, skills, certificates, writing, and contact information. The site has a responsive editorial layout, project and article detail pages, and a floating navigation dock.

Visit the [live portfolio](https://julesmeister.pages.dev) or browse the source in this repository.

## Stack

- React and Remix
- Vite
- CSS Modules
- Framer Motion
- Cloudflare Pages

## Development

Requires Node.js 19.9.0 or later. Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Deploy to Cloudflare Pages with:

```bash
npm run deploy
```

## Project Layout

- `app/routes/home/` contains the homepage sections and project carousel.
- `app/routes/projects.*` contains individual project pages.
- `app/routes/articles*` contains the article index and article content.
- `app/layouts/` contains shared navigation, project, and article layouts.
- `app/components/` contains reusable interface components.
- `app/assets/` contains project media, certificates, and fonts.

Visual inspiration: [Switberto Silvosa](https://www.switberto.com/).

See [LICENSE](LICENSE) for licensing terms.
