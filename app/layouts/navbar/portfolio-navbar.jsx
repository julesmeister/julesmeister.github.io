import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import { Link as RouterLink } from '@remix-run/react';
import { useState } from 'react';
import { navLinks } from './nav-data';
import styles from './portfolio-dock.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.portfolioDockShell}>
      <nav
        className={`${styles.portfolioFluidNavigation} ${styles.isFloatingVisible}`}
        aria-label="Quick navigation"
      >
        <button
          className={styles.portfolioFluidNavigationTrigger}
          type="button"
          aria-controls="portfolio-fluid-navigation-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span
            className={`${styles.portfolioFluidNavigationTriggerIcon} ${styles.menuIcon}`}
            data-active={!menuOpen}
          >
            <Icon icon="menu-outline" />
          </span>
          <span
            className={`${styles.portfolioFluidNavigationTriggerIcon} ${styles.closeIcon}`}
            data-active={menuOpen}
          >
            <Icon icon="x" />
          </span>
        </button>
        <ul
          className={`${styles.portfolioFluidNavigationMenu} ${menuOpen ? styles.menuOpen : ''}`}
          id="portfolio-fluid-navigation-menu"
          aria-hidden={!menuOpen}
        >
          {navLinks.map(({ label, pathname, icon }) => (
            <li className={styles.portfolioFluidNavigationItem} key={label}>
              <RouterLink
                className={styles.fluidNavigationLink}
                to={pathname}
                prefetch="intent"
                aria-label={label}
                title={label}
                tabIndex={menuOpen ? 0 : -1}
                data-open={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                <Icon icon={icon} />
              </RouterLink>
            </li>
          ))}
            <li className={styles.portfolioFluidNavigationItem}>
              <button
                className={styles.fluidNavigationLink}
                type="button"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                tabIndex={menuOpen ? 0 : -1}
                data-open={menuOpen}
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
              >
                <Icon icon={theme === 'dark' ? 'sun' : 'moon'} />
              </button>
            </li>
        </ul>
      </nav>
      <div className={styles.portfolioChatLauncherPosition}>
        <RouterLink
          className={styles.portfolioChatLauncher}
          to="/#contact"
          aria-label="Contact Jules"
          title="Let's connect"
        >
          <Icon icon="message-circle" />
          <span className={styles.chatLabel}>Let&apos;s connect</span>
        </RouterLink>
      </div>
    </header>
  );
};