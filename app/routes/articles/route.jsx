import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

export async function loader({ request }) {
  const pathname = new URL(request.url).pathname;
  const slug = pathname.split('/').filter(Boolean).at(-1);

  if (!slug || slug === 'articles') {
    throw new Response('Article not found', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const module = await import(`../articles.${slug}.mdx`);
  const text = await import(`../articles.${slug}.mdx?raw`);
  const readTime = readingTime(text.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}

export function meta({ data }) {
  if (!data?.frontmatter) {
    return baseMeta({
      title: 'Article not found',
      description: 'The requested article could not be found.',
    });
  }

  const { title, abstract } = data.frontmatter;

  return baseMeta({
    title,
    description: abstract,
    prefix: '',
    ogImage: data.ogImage,
  });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}