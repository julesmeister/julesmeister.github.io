import { useState } from 'react';
import { HomeCardGlow } from '~/components/home-card-glow';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  siAndroid,
  siAngular,
  siDart,
  siElectron,
  siExpo,
  siFirebase,
  siFlutter,
  siJavascript,
  siJetpackcompose,
  siKotlin,
  siNextdotjs,
  siReact,
  siDotnet,
  siLightning,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';
import styles from './project-grid.module.css';

const cardVariants = {
  enter: direction => ({ opacity: 0, x: direction * 48 }),
  visible: { opacity: 1, x: 0 },
  exit: direction => ({ opacity: 0, x: direction * -48 }),
};

const phoneGradients = [
  { base: '#123745', middle: '#087f8c', highlight: '#20aaa4', end: '#17618a', glow: '#51f2da', plane: '#39b8eb' },
  { base: '#4a2830', middle: '#a9434a', highlight: '#ef7954', end: '#c44b59', glow: '#ffd078', plane: '#fa966d' },
  { base: '#102f5b', middle: '#1266aa', highlight: '#19b3ca', end: '#16477d', glow: '#58ddeb', plane: '#5c9cff' },
  { base: '#1c3b32', middle: '#5b881e', highlight: '#a6bd2f', end: '#177c80', glow: '#d2ef58', plane: '#6bd4c1' },
  { base: '#573622', middle: '#b85d26', highlight: '#e4a53c', end: '#247c83', glow: '#ffa87a', plane: '#75d7c7' },
  { base: '#283445', middle: '#337e87', highlight: '#d65a4d', end: '#3c5863', glow: '#fc8769', plane: '#83dbcd' },
];

const technologyIcons = {
  Angular: siAngular,
  'Angular Material': siAngular,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  'Tailwind CSS': siTailwindcss,
  Firebase: siFirebase,
  'Jetpack Compose': siJetpackcompose,
  Kotlin: siKotlin,
  Android: siAndroid,
  Flutter: siFlutter,
  Dart: siDart,
  Nextron: siElectron,
  Electron: siElectron,
  React: siReact,
  Flutterflow: siFlutter,
  Supabase: siSupabase,
  Salesforce: siLightning,
  LWC: siLightning,
  JavaScript: siJavascript,
  'React Native': siReact,
  Expo: siExpo,
  'C#': siDotnet,
};

const brandIcons = [...new Map(Object.values(technologyIcons).map(icon => [icon.slug, icon])).values()];

const fallbackTechnologyIcons = {
  'JSON Server': 'database',
  'Custom Components': 'components',
  TurboDB: 'database',
  AI: 'sparkles',
  cTrader: 'chart',
  Trading: 'chart',
};

const fallbackIcons = [
  { slug: 'code', path: 'M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16' },
  { slug: 'components', path: 'M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z' },
  { slug: 'database', path: 'M12 3c-4.4 0-8 1.34-8 3v12c0 1.66 3.6 3 8 3s8-1.34 8-3V6c0-1.66-3.6-3-8-3zm0 2c3.87 0 6 .94 6 1s-2.13 1-6 1-6-.94-6-1 2.13-1 6-1zm-6 4c1.43.68 3.61 1 6 1s4.57-.32 6-1v2c0 .06-2.13 1-6 1s-6-.94-6-1V9zm0 5c1.43.68 3.61 1 6 1s4.57-.32 6-1v2c0 .06-2.13 1-6 1s-6-.94-6-1v-2z' },
  { slug: 'sparkles', path: 'M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z' },
  { slug: 'chart', path: 'M3 3v18h18v-2H5V3H3zm4 13 4-4 3 2 6-7-1.5-1.3-4.8 5.6-3.2-2.1L5.6 14.6 7 16z' },
];

const ProjectCardContent = ({ project, index, preview = false }) => {
  const phoneScreens = project.scrollView?.modelType === 'phone'
    ? project.scrollView.textures
        .slice(0, 2)
        .map(texture => texture.placeholder || texture.srcSet?.split(' ')[0])
        .filter(Boolean)
    : [];
  const phoneGradient = phoneGradients[index % phoneGradients.length];

  return (
    <>
      <div
        className={`${styles.cardImage} ${phoneScreens.length ? styles.phoneCardImage : ''}`}
        style={phoneScreens.length ? {
          '--phone-base': phoneGradient.base,
          '--phone-middle': phoneGradient.middle,
          '--phone-highlight': phoneGradient.highlight,
          '--phone-end': phoneGradient.end,
          '--phone-glow': phoneGradient.glow,
          '--phone-plane': phoneGradient.plane,
        } : undefined}
      >
        {phoneScreens.length ? (
          <>
            <img
              className={styles.phoneBackdrop}
              src={project.image}
              alt=""
              aria-hidden="true"
              loading={preview ? 'lazy' : undefined}
            />
            <div className={styles.phoneScreens}>
              {phoneScreens.map((screen, screenIndex) => (
                <img
                  className={styles.phoneScreenshot}
                  src={screen}
                  alt={preview ? '' : `${project.title} app screen ${screenIndex + 1}`}
                  aria-hidden={preview ? 'true' : undefined}
                  loading={preview ? 'lazy' : undefined}
                  key={screen}
                />
              ))}
            </div>
          </>
        ) : (
          <img src={project.image} alt={preview ? '' : project.title} loading={preview ? 'lazy' : undefined} />
        )}
        <span className={styles.projectIndex}>PROJECT / {String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.projectCategory}>
          {project.featured ? 'Featured project' : 'Selected project'}
        </p>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={`${styles.cardDescription} ${preview ? styles.previewDescription : ''}`}>
          {project.description}
        </p>
        <ul className={styles.cardTech} aria-label="Technologies used">
          {project.technologies.map(technology => (
            <li key={technology} className={styles.techTag}>
              <svg className={styles.techIcon} viewBox="0 0 24 24" aria-hidden="true">
                <use href={`#tech-${technologyIcons[technology]?.slug || fallbackTechnologyIcons[technology] || 'code'}`} />
              </svg>
              <span>{technology}</span>
            </li>
          ))}
        </ul>
        {!preview && (
          <a href={project.link} className={styles.cardButton}>
            View project <span aria-hidden="true">&#8599;</span>
          </a>
        )}
      </div>
    </>
  );
};

export const ProjectGrid = ({ projects }) => {
  const [{ activeIndex, direction }, setSelection] = useState({ activeIndex: 0, direction: 1 });
  const reduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex];
  const previousProject = projects[(activeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(activeIndex + 1) % projects.length];
  const progress = ((activeIndex + 1) / projects.length) * 100;

  const changeProject = offset => {
    setSelection(selection => ({
      activeIndex: (selection.activeIndex + offset + projects.length) % projects.length,
      direction: Math.sign(offset),
    }));
  };

  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <svg className={styles.techSprite} aria-hidden="true" focusable="false">
        <defs>
          {brandIcons.map(icon => (
            <symbol id={`tech-${icon.slug}`} key={icon.slug} viewBox="0 0 24 24">
              <path d={icon.path} fill={`#${icon.hex}`} />
            </symbol>
          ))}
          {fallbackIcons.map(icon => (
            <symbol id={`tech-${icon.slug}`} key={icon.slug} viewBox="0 0 24 24">
              <path d={icon.path} fill="currentColor" />
            </symbol>
          ))}
        </defs>
      </svg>
      <div className={styles.sectionHeading}>
        <h2 id="projects-title">Selected projects</h2>
        <p className={styles.sectionDescription}>
          A selection of software projects, experiments, and things I have built.
        </p>
      </div>
      <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Selected projects">
        <div className={styles.stage}>
          <div
            className={styles.preview}
            data-cut-corner="top-right"
            data-home-magic-card
            data-side="previous"
          >
            <motion.div
              key={previousProject.link}
              className={styles.previewContent}
              data-cut-inner
              aria-hidden="true"
              initial={{ opacity: reduceMotion ? 1 : 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
            >
              <ProjectCardContent
                project={previousProject}
                index={(activeIndex - 1 + projects.length) % projects.length}
                preview
              />
            </motion.div>
            <button
              className={styles.previewAction}
              type="button"
              onClick={() => changeProject(-1)}
              aria-label={`Show previous project: ${previousProject.title}`}
            />
            <HomeCardGlow />
          </div>
          <div
            className={styles.preview}
            data-cut-corner="top-right"
            data-home-magic-card
            data-side="next"
          >
            <motion.div
              key={nextProject.link}
              className={styles.previewContent}
              data-cut-inner
              aria-hidden="true"
              initial={{ opacity: reduceMotion ? 1 : 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
            >
              <ProjectCardContent
                project={nextProject}
                index={(activeIndex + 1) % projects.length}
                preview
              />
            </motion.div>
            <button
              className={styles.previewAction}
              type="button"
              onClick={() => changeProject(1)}
              aria-label={`Show next project: ${nextProject.title}`}
            />
            <HomeCardGlow />
          </div>
          <AnimatePresence initial={false} custom={direction}>
            <motion.article
              key={activeIndex}
              className={styles.projectCard}
              data-cut-corner="top-right"
              data-home-magic-card
              custom={direction}
              variants={cardVariants}
              initial={reduceMotion ? false : 'enter'}
              animate="visible"
              exit={reduceMotion ? undefined : 'exit'}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Project ${activeIndex + 1} of ${projects.length}: ${activeProject.title}`}
              aria-live="polite"
            >
              <div className={styles.projectCardContent} data-cut-inner>
                <ProjectCardContent project={activeProject} index={activeIndex} />
              </div>
              <HomeCardGlow />
            </motion.article>
          </AnimatePresence>
        </div>
        <div className={styles.carouselControls}>
          <button
            className={styles.carouselButton}
            type="button"
            onClick={() => changeProject(-1)}
            aria-label="Previous project"
          >
            <span aria-hidden="true">&#8592;</span>
          </button>
          <div className={styles.carouselProgress} aria-live="polite">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <div className={styles.progressTrack} aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>
          <button
            className={styles.carouselButton}
            type="button"
            onClick={() => changeProject(1)}
            aria-label="Next project"
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};