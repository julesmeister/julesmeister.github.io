import { useState } from 'react';
import styles from './project-grid.module.css';

const phoneGradients = [
  { base: '#123745', middle: '#087f8c', highlight: '#20aaa4', end: '#17618a', glow: '#51f2da', plane: '#39b8eb' },
  { base: '#4a2830', middle: '#a9434a', highlight: '#ef7954', end: '#c44b59', glow: '#ffd078', plane: '#fa966d' },
  { base: '#102f5b', middle: '#1266aa', highlight: '#19b3ca', end: '#16477d', glow: '#58ddeb', plane: '#5c9cff' },
  { base: '#1c3b32', middle: '#5b881e', highlight: '#a6bd2f', end: '#177c80', glow: '#d2ef58', plane: '#6bd4c1' },
  { base: '#573622', middle: '#b85d26', highlight: '#e4a53c', end: '#247c83', glow: '#ffa87a', plane: '#75d7c7' },
  { base: '#283445', middle: '#337e87', highlight: '#d65a4d', end: '#3c5863', glow: '#fc8769', plane: '#83dbcd' },
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
            <li key={technology} className={styles.techTag}>{technology}</li>
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const previousProject = projects[(activeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(activeIndex + 1) % projects.length];
  const progress = ((activeIndex + 1) / projects.length) * 100;

  const changeProject = offset => {
    setActiveIndex(index => (index + offset + projects.length) % projects.length);
  };

  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <h2 id="projects-title">Selected projects</h2>
        <p className={styles.sectionDescription}>
          A selection of software projects, experiments, and things I have built.
        </p>
      </div>
      <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Selected projects">
        <div className={styles.stage}>
          <article
            className={styles.preview}
            data-side="previous"
            role="button"
            tabIndex={0}
            onClick={() => changeProject(-1)}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                changeProject(-1);
              }
            }}
            aria-label={`Show previous project: ${previousProject.title}`}
          >
            <ProjectCardContent
              project={previousProject}
              index={(activeIndex - 1 + projects.length) % projects.length}
              preview
            />
          </article>
          <article
            className={styles.preview}
            data-side="next"
            role="button"
            tabIndex={0}
            onClick={() => changeProject(1)}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                changeProject(1);
              }
            }}
            aria-label={`Show next project: ${nextProject.title}`}
          >
            <ProjectCardContent
              project={nextProject}
              index={(activeIndex + 1) % projects.length}
              preview
            />
          </article>
          <article
            className={styles.projectCard}
            aria-label={`Project ${activeIndex + 1} of ${projects.length}: ${activeProject.title}`}
            aria-live="polite"
          >
            <ProjectCardContent project={activeProject} index={activeIndex} />
          </article>
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