import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { cssProps } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';
const TicketsSkills = lazy(() =>
  import('./tickets-skills').then(module => ({ default: module.TicketsSkills }))
);

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
    ', and '
  );
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            <div className={styles.container} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
              <header className={styles.text} style={{ flex: '1 1 40%', minWidth: '300px' }}>
                <h1 className={styles.name} data-visible={visible} id={titleId}>
                  <DecoderText text={config.name} delay={500} />
                </h1>
                <Heading level={0} as="h2" className={styles.title}>
                  <VisuallyHidden className={styles.label}>
                    {`${config.role} + ${introLabel}`}
                  </VisuallyHidden>
                  <span aria-hidden className={styles.row}>
                    <span
                      className={styles.word}
                      data-status={status}
                      style={cssProps({ delay: tokens.base.durationXS })}
                    >
                      {config.role}
                    </span>
                    <span className={styles.line} data-status={status} />
                  </span>
                  <div className={styles.row}>
                    {disciplines.map(item => (
                      <Transition
                        unmount
                        in={item === currentDiscipline}
                        timeout={{ enter: 3000, exit: 2000 }}
                        key={item}
                      >
                        {({ status, nodeRef }) => (
                          <span
                            aria-hidden
                            ref={nodeRef}
                            className={styles.word}
                            data-plus={true}
                            data-status={status}
                            style={cssProps({ delay: tokens.base.durationL })}
                          >
                            {item}
                          </span>
                        )}
                      </Transition>
                    ))}
                  </div>
                </Heading>
              </header>
              {isHydrated && window.innerWidth > 768 && (
                <div style={{ flex: '1 1 40%', minWidth: '300px', maxWidth: '800px', display: 'flex', alignItems: 'center' }}>
                  <Suspense>
                    <TicketsSkills />
                  </Suspense>
                </div>
              )}
            </div>
            <RouterLink
              to="/#project-1"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/#project-1"
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}
