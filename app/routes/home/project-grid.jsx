import styles from './project-grid.module.css';

export const ProjectGrid = ({ projects }) => {
  return (
    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <div key={project.id} className={`${styles.projectCard} ${project.featured ? styles.featured : styles.regular}`}>
          <div className={styles.cardImage}>
            <img src={project.image} alt={project.title} />
            {project.featured && <div className={styles.featuredBadge}>Featured</div>}
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.cardTech}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <a href={project.link} className={styles.cardButton}>
              View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};