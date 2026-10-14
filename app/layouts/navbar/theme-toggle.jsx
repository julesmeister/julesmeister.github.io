import { Button } from '~/components/button';
import { useTheme } from '~/components/theme-provider';
import { useId } from 'react';
import styles from './theme-toggle.module.css';

export const ThemeToggle = props => {
  const { toggleTheme } = useTheme();
  const maskId = useId();

  return (
    <div className={styles.container}>
      <Button
        iconOnly
        className={styles.toggle}
        aria-label="Toggle theme"
        onClick={() => toggleTheme()}
        {...props}
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
    </div>
  );
};
