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
  const cardRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [animationStyles, setAnimationStyles] = useState({});
  const isHydrated = useHydrated();
  const isVisible = true; // Always visible

  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  // Always visible - removed IntersectionObserver that was causing issues

  // Update animation styles on scroll - scale based on distance from viewport top
  useEffect(() => {
    const updateAnimation = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // When card is at top: scale = 1
      // When card is scrolled up (rect.top < 0): scale down
      // Calculate scale based on how much the card has scrolled past the viewport
      const maxScrollDistance = viewportHeight * 0.5;
      const scrollDistance = Math.max(0, -rect.top);
      const scrollProgress = Math.min(1, scrollDistance / maxScrollDistance);
      
      // Scale from 1 down to 0.85 as it scrolls up
      const scale = 1 - (scrollProgress * 0.15);
      const opacity = 1 - (scrollProgress * 0.2);
      const shadowOpacity = 0.25 - (scrollProgress * 0.15);

      setAnimationStyles({
        transform: `scale(${scale})`,
        opacity,
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, ${shadowOpacity})`,
      });
    };

    window.addEventListener('scroll', updateAnimation, { passive: true });
    updateAnimation(); // Initial call

    return () => window.removeEventListener('scroll', updateAnimation);
  }, []);

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
    <div
      ref={cardRef}
      className={styles.stackingCard}
      style={{ '--card-index': index }}
      data-visible={true}
    >
      <div className={styles.stackingCardInner} style={animationStyles}>
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
      const viewportHeight = window.innerHeight;
      const newStates = {};

      Array.from(cards).forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distanceFromTop = rect.top;

        // When card reaches or passes the top of viewport
        if (distanceFromTop <= 0) {
          const scrollDistance = Math.abs(distanceFromTop);
          const maxScroll = viewportHeight * 0.6;
          const progress = Math.min(1, scrollDistance / maxScroll);
          const scale = 1 - (progress * 0.35); // Even more aggressive scaling
          const translateY = -progress * 20; // Move up slightly as it scales

          newStates[index] = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
            zIndex: index + 1,
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
