import { useEffect, useState, Suspense, lazy } from 'react';
import { Loader } from '~/components/loader';
import { deviceModels } from '~/components/model/device-models';
import { useHydrated } from '~/hooks/useHydrated';
import { media } from '~/utils/style';
import styles from './project-stacking.module.css';

// Lazy load the Model component
const LazyModel = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

const StackingCard = ({ project, index, totalProjects }) => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const isHydrated = useHydrated();

  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  // Fallback: hide loader after timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!modelLoaded) {
        setModelLoaded(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [modelLoaded]);
  const indexText = index < 10 ? `0${index}` : index;

  const model = project.scrollView;

  // Katakana removed - was showing instead of 3D model

  return (
    <div className={styles.stackingCardInner}>
      <div className={styles.cardContent}>
        <span className={styles.cardIndex}>{indexText} / {totalProjects}</span>
        <h2 className={styles.cardTitle}>{project.title}</h2>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.cardTech}>
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        <a href={project.link} className={styles.cardButton}>
          View Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className={styles.cardVisual}>
        {model?.modelType === 'laptop' && (
          <>
            <div className={styles.deviceFrame} data-device="laptop">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={true} />
              )}
              <img 
                src={model.textures[0].placeholder} 
                alt={model.alt}
                className={styles.deviceScreen}
              />
              {isHydrated && (
                <Suspense fallback={null}>
                  <LazyModel
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 8 }}
                    showDelay={300}
                    onLoad={() => setModelLoaded(true)}
                    show={true}
                    models={[
                      {
                        ...deviceModels.laptop,
                        texture: {
                          ...model.textures[0],
                          sizes: laptopSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
        {model?.modelType === 'phone' && (
          <>
            <div className={styles.deviceFrame} data-device="phone">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={true} />
              )}
              <img 
                src={model.textures[0].placeholder} 
                alt={model.alt}
                className={styles.deviceScreen}
              />
              {isHydrated && (
                <Suspense fallback={null}>
                  <LazyModel
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 11.5 }}
                    showDelay={200}
                    onLoad={() => setModelLoaded(true)}
                    show={true}
                    models={[
                      {
                        ...deviceModels.phone,
                        position: { x: -0.6, y: 1.1, z: 0 },
                        texture: {
                          ...model.textures[0],
                          sizes: phoneSizes,
                        },
                      },
                      {
                        ...deviceModels.phone,
                        position: { x: 0.6, y: -0.5, z: 0.3 },
                        texture: {
                          ...model.textures[1],
                          sizes: phoneSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
        {!model?.modelType && (
          <img
            src={project.image}
            alt={project.title}
            className={styles.fallbackImage}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export const ProjectStacking = ({ projects }) => {
  // Pre-calculated scale values from reference (index-based, not dynamic)
  const scaleValues = [0.799347, 0.841988, 0.882789, 0.920962, 0.955193, 0.983116];

  return (
    <div className={styles.stackingContainer}>
      {projects.map((project, index) => {
        // Static values based on index like reference
        const scale = scaleValues[index] || 1;
        const topOffset = index * 25; // 0, 25, 50, 75, 100...
        
        return (
          <div
            key={project.id}
            className={styles.stackingCard}
            style={{ zIndex: index + 1 }}
          >
            <div 
              className={styles.stackingCardInner}
              style={{
                transform: `scale(${scale})`,
                top: `calc(-5% + ${topOffset}px)`,
                zIndex: index + 1,
              }}
            >
              <StackingCard
                project={project}
                index={index + 1}
                totalProjects={projects.length}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
