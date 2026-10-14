import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { formatDate } from '~/utils/date';
import { classes, cssProps } from '~/utils/style';
import styles from './articles.module.css';

function ArticlesPost({ slug, frontmatter, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner } = frontmatter;

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={banner}
            placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={`/articles/${slug}`}
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            {dateTime}
          </div>
          <Heading as="h2" level={featured ? 2 : 4}>
            {title}
          </Heading>
          <Text size={featured ? 'l' : 's'} as="p">
            {abstract}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevron-right" as="div">
              Read article
            </Button>
            <Text className={styles.timecode} size="s">
              {timecode}
            </Text>
          </div>
        </div>
      </RouterLink>
      {featured && (
        <Text aria-hidden className={styles.postTag} size="s">
          477
        </Text>
      )}
    </article>
  );
}

function SkeletonPost({ index }) {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevron-right" as="div">
              Read more
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Articles() {
  const { posts, featured } = useLoaderData();
  const featuredPost = <ArticlesPost {...featured} />;

  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        <div className={styles.shell}>
          <div className={styles.systemLine}>
            <RouterLink className={styles.backLink} to="/#intro" aria-label="Back to home">
              <Icon icon="arrow-left-line" size={12} />
              <span>Home</span>
            </RouterLink>
            <span className={styles.systemName}><b aria-hidden="true">&gt;_</b> ARTICLE.SYSTEM</span>
            <span className={styles.systemMeta}>WRITING / {String(posts.length + 1).padStart(2, '0')} FILES</span>
          </div>
          <header className={styles.header}>
            <p className={styles.headerEyebrow}>JOURNAL / NOTES</p>
            <Heading className={styles.heading} level={2} as="h1">
              Latest articles
            </Heading>
            <p className={styles.headerDescription}>
              Reflections on software, learning, and the work behind my projects.
            </p>
          </header>
          <section className={styles.featuredSection} aria-labelledby="featured-article-title">
            <div className={styles.sectionLabel}>
              <span>FEATURED / 01</span>
              <span>ARTICLE FILE</span>
            </div>
            {featuredPost}
          </section>
          <section className={styles.archive} aria-labelledby="article-archive-title">
            <header className={styles.archiveHeader}>
              <div>
                <p className={styles.headerEyebrow}>INDEX / ARTICLES</p>
                <h2 id="article-archive-title">Article archive</h2>
              </div>
              <span>{String(posts.length).padStart(2, '0')} FILES</span>
            </header>
            <div className={styles.list}>
              {posts.map(({ slug, ...post }, index) => (
                <ArticlesPost key={slug} slug={slug} index={index} {...post} />
              ))}
            </div>
          </section>
        </div>
      </Section>
      <Footer />
    </article>
  );
}
