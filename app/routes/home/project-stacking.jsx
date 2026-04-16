import { useEffect, useState, Suspense, lazy, useRef } from 'react';
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
        <div className={styles.cardText}>
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
    </div>
  );
};

export const ProjectStacking = ({ projects }) => {
  // Scale progression: each card in the visible stack gets a scale
  // Index 0 = back (smallest), Index 6 = front (largest, near 1.0)
  const scaleProgression = [0.83, 0.87, 0.90, 0.93, 0.96, 0.985, 1.0];
  const [frontIndex, setFrontIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Find the card with the highest Y position (front of stack)
      let maxIndex = 0;
      let maxY = -Infinity;
      
      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const y = rect.top + rect.height / 2;
        
        // Only consider cards that are:
        // 1. Below the top edge (not stuck at top)
        // 2. Above the bottom edge (still visible)
        // 3. Have the highest Y (most front in stack)
        if (y > 0 && y < window.innerHeight && y > maxY) {
          maxY = y;
          maxIndex = index;
        }
      });
      
      setFrontIndex(prev => {
        // Never go backwards - front index should only increase
        // This prevents cards from reappearing when scrolling back up
        return Math.max(prev, maxIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine visible range: front card and 6 cards behind it
  const visibleStart = Math.max(0, frontIndex - 6);

  return (
    <div className={styles.stackingContainer}>
      {projects.map((project, index) => {
        const topOffset = index * 25;
        
        // Card is hidden if it's before the visible window
        const isHidden = index < visibleStart;
        
        // If visible, determine its position in the stack (0 = back, 6 = front)
        const positionInStack = index - visibleStart;
        const scale = scaleProgression[positionInStack] || 1;
        
        return (
          <div
            key={project.id}
            ref={(el) => { cardRefs.current[index] = el; }}
            className={styles.stackingCard}
            data-hidden={isHidden}
            style={{ 
              zIndex: isHidden ? -1 : index + 1,
              opacity: isHidden ? 0 : 1,
              visibility: isHidden ? 'hidden' : 'visible',
              transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
              pointerEvents: isHidden ? 'none' : 'auto',
              willChange: isHidden ? 'opacity, visibility' : 'auto',
            }}
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
