import { useState } from 'react';
import styles from './project-grid.module.css';

const ProjectCardContent = ({ project, index, preview = false }) => (
  <>
    <div className={styles.cardImage}>
      <img src={project.image} alt={preview ? '' : project.title} loading={preview ? 'lazy' : undefined} />
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