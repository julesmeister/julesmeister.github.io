import config from '~/config.json';

const { name, url, twitter, disciplines } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const keywords = `${name}, ${disciplines.join(', ')}, full-stack developer, web developer, mobile developer, portfolio, UI/UX, TypeScript, JavaScript, Next.js, Expo, Flutter, FlutterFlow`;

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: name },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: 'Banner for the site' },
    { property: 'og:image:width', content: '1280' },
    { property: 'og:image:height', content: '800' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: url },
    { property: 'twitter:creator', content: twitter },
    { property: 'twitter:image', content: ogImage },
  ];
}
