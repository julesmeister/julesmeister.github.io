import { Icon } from '~/components/icon';
import { useEffect, useState } from 'react';
import styles from './section-nav.module.css';

export const SectionNav = ({ sections, currentIndex, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log('SectionNav state:', {
        currentIndex,
        sectionsLength: sections.length,
        sectionsValid: sections.every(s => s?.current),
      });
    }
  }, [mounted, currentIndex, sections]);

  const handleNavClick = (direction) => {
    if (!ready) return;

    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    
    console.log('Navigation attempt:', {
      direction,
      currentIndex,
      targetIndex,
      hasTarget: Boolean(sections[targetIndex]?.current)
    });

    // Trigger animation
    setClickedButton(direction);
    setTimeout(() => setClickedButton(null), 150);

    if (targetIndex >= 0 && targetIndex < sections.length) {
      const targetSection = sections[targetIndex].current;
      if (targetSection) {
        onChange(targetIndex);
        setTimeout(() => {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }, 0);
      }
    }
  };

  if (!mounted || !sections.every(s => s?.current)) return null;

  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= sections.length - 1;

  const getButtonStyle = (direction, disabled) => ({
    width: '44px',
    height: '44px',
    border: '2px solid currentColor',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: clickedButton === direction ? 'rgb(var(--rgbText))' : 'var(--background)',
    color: clickedButton === direction ? 'rgb(var(--rgbBackground))' : 'var(--textBody)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.3 : 1,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: clickedButton === direction ? 'scale(0.9)' : 'scale(1)',
  });

  const getIconStyle = (direction) => ({
    transform: direction === 'up' ? 'rotate(-90deg)' : 'rotate(90deg)',
    transition: 'all 0.15s ease',
    opacity: 1,
    color: clickedButton === direction ? '#ff6b00' : 'inherit',
    filter: clickedButton === direction ? 'brightness(1.5) drop-shadow(0 0 5px #ff6b00)' : 'none',
  });

  return (
    <div 
      className={styles.sectionNav} 
      role="navigation" 
      aria-label="Section Navigation"
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '24px',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        pointerEvents: 'auto',
      }}
    >
      <button
        className={styles.navButton}
        aria-label="Previous section"
        disabled={isFirst}
        onClick={() => handleNavClick('up')}
        style={getButtonStyle('up', isFirst)}
      >
        <Icon icon="chevron-right" style={getIconStyle('up')} />
      </button>
      <button
        className={styles.navButton}
        aria-label="Next section"
        disabled={isLast}
        onClick={() => handleNavClick('down')}
        style={getButtonStyle('down', isLast)}
      >
        <Icon icon="chevron-right" style={getIconStyle('down')} />
      </button>
    </div>
  );
};
