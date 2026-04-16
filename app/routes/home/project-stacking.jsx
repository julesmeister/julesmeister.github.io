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
  const frontIndexRef = useRef(0);
  const cardRefs = useRef([]);

  // Keep ref in sync with state
  useEffect(() => {
    frontIndexRef.current = frontIndex;
  }, [frontIndex]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if all cards are stuck at top (sticky phase complete)
      let allStuckAtTop = true;
      let firstVisibleIndex = -1;
      
      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        
        // If any card is below top edge, we're still in stacking phase
        if (rect.top > 0) {
          allStuckAtTop = false;
          if (firstVisibleIndex === -1) {
            firstVisibleIndex = index;
          }
        }
      });
      
      if (allStuckAtTop) {
        // All cards stuck at top - use scroll position to determine front
        // Find the last card that should be visible based on scroll
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const lastCardIndex = cardRefs.current.length - 1;
        
        // When all stuck, front is the last card
        setFrontIndex(lastCardIndex);
      } else if (firstVisibleIndex !== -1) {
        // In stacking phase - find front card among visible ones
        let maxIndex = firstVisibleIndex;
        let maxY = -Infinity;
        
        cardRefs.current.forEach((ref, index) => {
          if (!ref || index < firstVisibleIndex) return;
          const rect = ref.getBoundingClientRect();
          const y = rect.top + rect.height / 2;
          
          if (y < window.innerHeight && y > maxY) {
            maxY = y;
            maxIndex = index;
          }
        });
        
        setFrontIndex(maxIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation button clicks - calculate directly from DOM
  useEffect(() => {
    const handleNavClick = (event) => {
      const direction = event.detail;
      
      // Find which card is currently at front
      // With sticky cards, the one with highest index that has top near 0 is the front
      let currentCardIndex = 0;
      let bestScore = -Infinity;
      
      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        
        // Score: higher index = more front, but must be visible
        // If top is 0 (stuck), add bonus to prefer higher index
        const isStuck = rect.top <= 1; // Allow small tolerance
        const visibility = rect.bottom > 0 && rect.top < window.innerHeight ? 1 : 0;
        const stuckBonus = isStuck ? index * 100 : 0;
        const score = index + stuckBonus;
        
        if (visibility && score > bestScore) {
          bestScore = score;
          currentCardIndex = index;
        }
      });
      
      // Calculate scroll amount
      // Each card is ~100vh, so scroll one viewport height in the direction
      const scrollAmount = direction === 'up' ? -window.innerHeight * 0.8 : window.innerHeight * 0.8;
      
      // Check if at first card and going up
      if (direction === 'up' && currentCardIndex === 0) {
        window.dispatchEvent(new CustomEvent('navigate-to-intro'));
        return;
      }
      
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
      });
    };

    window.addEventListener('navigate-section', handleNavClick);
    return () => window.removeEventListener('navigate-section', handleNavClick);
  }, [projects.length]);

  // Determine visible range: front card and 6 cards behind it
  const visibleStart = Math.max(0, frontIndex - 6);

  return (
    <div className={styles.stackingContainer}>
      {projects.map((project, index) => {
        // Calculate offset relative to visible start to maintain consistent
        // spacing from top when cards are hidden from the back
        const adjustedIndex = index - visibleStart;
        const topOffset = Math.max(0, adjustedIndex * 25);
        
        // Card is hidden if it's before the visible window
        const isHidden = index < visibleStart;
        
        // If visible, determine its position in the stack (0 = back, 6 = front)
        // Hidden cards keep a fixed small scale to prevent expansion glitch
        const positionInStack = index - visibleStart;
        const scale = isHidden ? 0.8 : (scaleProgression[positionInStack] || 1);
        
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
                transition: isHidden ? 'none' : 'transform 0.2s ease-out',
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
