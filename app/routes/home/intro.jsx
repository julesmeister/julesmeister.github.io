import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Link as RouterLink } from '@remix-run/react';
import config from '~/config.json';
import styles from './intro.module.css';

export function Intro({ id, sectionRef, ...rest }) {
  const titleId = `${id}-title`;

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
      <header className={styles.text}>
        <a
          className={styles.availability}
          href={`https://www.linkedin.com/in/${config.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${config.name}'s LinkedIn profile`}
        >
          <span className={styles.availabilityBorder} aria-hidden="true">
            <span className={styles.availabilitySpinner} />
          </span>
          <span className={styles.availabilityContent}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            <span>Available for Work</span>
          </span>
        </a>
        <h1 className={styles.name} id={titleId}>
          <DecoderText text={config.name} delay={500} />
        </h1>
        <Heading level={0} as="h2" className={styles.title}>
          {config.role}
        </Heading>
        <p className={styles.description}>
          I build practical web and mobile software across React, FlutterFlow, and Kotlin.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#projects">
            Explore projects <span aria-hidden="true">&#8595;</span>
          </a>
          <RouterLink className={styles.secondaryAction} to="/contact">
            Get in touch <span aria-hidden="true">&#8599;</span>
          </RouterLink>
        </div>
      </header>
    </Section>
  );
}
