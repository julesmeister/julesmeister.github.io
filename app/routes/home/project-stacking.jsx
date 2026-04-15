import { useEffect, useRef, useState, Suspense, lazy } from 'react';
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
  const containerRef = useRef();
  const [cardStates, setCardStates] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.children;
      const newStates = {};

      // Find all stuck cards and calculate their stack depth
      const cardArray = Array.from(cards);
      const stuckIndices = [];
      
      cardArray.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 0) {
          stuckIndices.push(index);
        }
      });

      cardArray.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distanceFromTop = rect.top;

        // When card reaches or passes the top of viewport
        if (distanceFromTop <= 0) {
          // Position in stuck stack (0 = first/bottom, last = top/front)
          const stuckPosition = stuckIndices.indexOf(index);
          const totalStuck = stuckIndices.length;
          
          // Cards at front (higher stuckPosition) are full size
          // Cards behind (lower stuckPosition) get smaller
          const depthFromFront = totalStuck - 1 - stuckPosition;
          const scale = Math.max(0.75, 1 - (depthFromFront * 0.08));
          
          // Vertical offset - cards behind are offset lower
          const offsetY = depthFromFront * 30;

          newStates[index] = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, calc(-50% + ${offsetY}px)) scale(${scale})`,
            zIndex: stuckPosition + 100, // z-index based on stuck order
          };
        } else {
          newStates[index] = {
            position: 'relative',
            transform: 'translateY(0) scale(1)',
            zIndex: index + 1,
          };
        }
      });

      setCardStates(newStates);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <div ref={containerRef} className={styles.stackingContainer}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={styles.stackingCard}
          style={cardStates[index] || { position: 'relative' }}
        >
          <StackingCard
            project={project}
            index={index + 1}
            totalProjects={projects.length}
          />
        </div>
      ))}
    </div>
  );
};
