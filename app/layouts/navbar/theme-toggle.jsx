import { Button } from '~/components/button';
import { useTheme } from '~/components/theme-provider';
import { useId } from 'react';
import { useLocation } from '@remix-run/react';
import { useViewMode } from '~/contexts/view-context';
import styles from './theme-toggle.module.css';
import { Icon } from '~/components/icon';

export const ThemeToggle = ({ isMobile, ...rest }) => {
  const { toggleTheme } = useTheme();
  const location = useLocation();
  const { viewMode, setViewMode } = useViewMode();
  const maskId = useId();
  const navButtonClass = `${styles.toggle} ${styles.navButton}`;
  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.container} style={{ top: '0px', right: '-10px' }}>
      <Button
        iconOnly
        className={styles.toggle}
        data-mobile={isMobile}
        aria-label="Toggle theme"
        onClick={() => toggleTheme()}
        {...rest}
      >
        <svg aria-hidden className={styles.svg} width="38" height="38" viewBox="0 0 38 38">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="38" height="38" fill="white" />
              <circle className={styles.mask} cx="25" cy="17" r="9" />
            </mask>
          </defs>
          <circle
            className={styles.circle}
            mask={`url(#${maskId})`}
            cx="19"
            cy="19"
            r="13"
          />
          <path
            className={styles.path}
            d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          />
        </svg>
      </Button>
      <div className={styles.navContainer} style={{ marginTop: '2rem' }}>
        {isHomePage && (
          <>
            <Button
              iconOnly
              className={navButtonClass}
              data-mobile={isMobile}
              aria-label="Scroll view"
              onClick={() => setViewMode('scroll')}
              data-active={viewMode === 'scroll'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
              </svg>
            </Button>
            <Button
              iconOnly
              className={navButtonClass}
              style={{ marginTop: 'var(--spaceXS)' }}
              data-mobile={isMobile}
              aria-label="Grid view"
              onClick={() => setViewMode('grid')}
              data-active={viewMode === 'grid'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM10 17H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zM21 6h-5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM21 17h-5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"/>
              </svg>
            </Button>
          </>
        )}
        <Button
          iconOnly
          className={navButtonClass}
          style={{ marginTop: isHomePage ? '2rem' : '0' }}
          data-mobile={isMobile}
          aria-label="Previous section"
          onClick={() => window.dispatchEvent(new CustomEvent('navigate-section', { detail: 'up' }))}
        >
          <Icon icon="chevron-right" style={{ transform: 'rotate(-90deg) scale(1.5)' }} />
        </Button>
        <Button
          iconOnly
          className={navButtonClass}
          style={{ marginTop: 'var(--spaceXS)' }}
          data-mobile={isMobile}
          aria-label="Next section"
          onClick={() => window.dispatchEvent(new CustomEvent('navigate-section', { detail: 'down' }))}
        >
          <Icon icon="chevron-right" style={{ transform: 'rotate(90deg) scale(1.5)' }} />
        </Button>
      </div>
    </div>
  );
};
