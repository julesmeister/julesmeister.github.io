/* eslint-disable react/no-unescaped-entities */
import { Button } from '~/components/button';
import { HomeCardGlow } from '~/components/home-card-glow';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { ProfilePortrait } from './profile-portrait';
import config from '~/config.json';
import {
  siAngular,
  siDavinciresolve,
  siFlutter,
  siJetpackcompose,
  siReact,
  siRubyonrails,
  siSwift,
} from 'simple-icons';
import styles from './profile.module.css';

const coreSkills = [
  'ReactJS',
  'Jetpack Compose',
  'Flutter',
  'Basic SQL',
  'Ruby on Rails',
  'Swift',
  'Angular',
];

const creativeTools = ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Vibe Coding'];

const skillIcons = {
  ReactJS: siReact,
  'Jetpack Compose': siJetpackcompose,
  Flutter: siFlutter,
  'Ruby on Rails': siRubyonrails,
  Swift: siSwift,
  Angular: siAngular,
  'DaVinci Resolve': siDavinciresolve,
};

const fallbackSkillIcons = {
  'Basic SQL': 'M12 3c-4.4 0-8 1.34-8 3v12c0 1.66 3.6 3 8 3s8-1.34 8-3V6c0-1.66-3.6-3-8-3zm0 2c3.87 0 6 .94 6 1s-2.13 1-6 1-6-.94-6-1 2.13-1 6-1zm-6 4c1.43.68 3.61 1 6 1s4.57-.32 6-1v2c0 .06-2.13 1-6 1s-6-.94-6-1V9zm0 5c1.43.68 3.61 1 6 1s4.57-.32 6-1v2c0 .06-2.13 1-6 1s-6-.94-6-1v-2z',
  'Adobe Premiere Pro': 'M4 3h16v18H4V3zm2 2v4h3.5a2 2 0 0 0 0-4H6zm2 1.5h1.5v1H8v-1zM6 11h12v2H6v-2zm0 4h8v2H6v-2z',
  'Adobe After Effects': 'M4 3h16v18H4V3zm2 2v4h3.5a2 2 0 0 0 0-4H6zm2 1.5h1.5v1H8v-1zM6 11h12v2H6v-2zm0 4h8v2H6v-2z',
  'Vibe Coding': 'M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z',
};

const SkillIcon = ({ skill }) => {
  const icon = skillIcons[skill];
  const path = icon?.path || fallbackSkillIcons[skill];

  return (
    <svg className={styles.skillIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill={icon ? `#${icon.hex}` : 'currentColor'} />
    </svg>
  );
};

const SkillMarquee = ({ label, skills, direction }) => {
  const renderSkills = clone => (
    <ul className={styles.skillMarqueeList} aria-hidden={clone || undefined}>
      {skills.map((skill, index) => (
        <li className={styles.skillMarqueeItem} key={`${clone ? 'clone-' : ''}${skill}-${index}`}>
          <SkillIcon skill={skill} />
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.skillMarqueeGroup}>
      <p className={styles.skillGroupLabel}>
        {label === 'Creative and workflow tools' ? `[${label}]` : label}
      </p>
      <div className={styles.skillMarqueeViewport} role="group" aria-label={label}>
        <div className={`${styles.skillMarqueeTrack} ${styles[direction]}`}>
          {renderSkills(false)}
          {renderSkills(true)}
        </div>
      </div>
    </div>
  );
};

const ProfileText = ({ visible, titleId }) => (
  <>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Why I build" start={visible} delay={500} />
    </Heading>
    <dl className={styles.facts}>
      <div>
        <dt>Name</dt>
        <dd>Jules Leslie Lee</dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>Angular Developer</dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>Pasay City, Philippines</dd>
      </div>
      <div>
        <dt>Education</dt>
        <dd>BS Computer Science</dd>
      </div>
    </dl>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Since high school, I've been tinkering on web tools and discovered how much I love development. PHP was the only popular language at the time. I've since enjoyed building using other languages and frameworks. Lotel is the project I'm proudest of, and Kotlin mobile development is a favorite.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm currently training at Accenture in Angular and Java Spring Boot, strengthening my fundamentals and broadening my perspective through the collaborative, systems-minded reality of corporate software development.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm curious about AI and automation, and hope to freelance one day. Outside development, I enjoy skating and exploring astrology.
    </Text>
  </>
);

export const Profile = ({ id, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={true} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.inner} ref={nodeRef}>
            <header className={styles.sectionHeading}>
              <p className={styles.sectionLabel}>[PROFILE / 01]</p>
              <Heading level={2} as="h2" id={titleId}>About</Heading>
            </header>
            <div className={styles.content}>
              <figure className={styles.portraitCard} data-home-magic-card>
                <ProfilePortrait />
                <figcaption>
                  <span>01 / PROFILE</span>
                  <span>{config.name}</span>
                </figcaption>
                <HomeCardGlow />
              </figure>
              <article className={styles.profileCard} data-cut-corner="top-right" data-home-magic-card>
                <HomeCardGlow />
                <p className={styles.cardLabel}>[ABOUT.LOG]</p>
                <ProfileText visible={visible} titleId={`${id}-bio-title`} />
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
              </article>
              <div className={styles.skillsLayout}>
                <section className={styles.skillsCard} data-home-magic-card aria-labelledby={`${id}-skills-title`}>
                  <HomeCardGlow />
                  <p className={styles.cardLabel}>[CORE SKILLS / TOOLS]</p>
                  <Heading level={4} as="h3" id={`${id}-skills-title`}>
                    Technologies and tools
                  </Heading>
                  <div className={styles.skillGroups}>
                    <SkillMarquee
                      label="Programming"
                      skills={coreSkills}
                      direction="skillMarqueeTrackReverse"
                    />
                    <SkillMarquee
                      label="Creative and workflow tools"
                      skills={creativeTools}
                      direction="skillMarqueeTrackForward"
                    />
                  </div>
                </section>
                <aside className={styles.focusCard} data-home-magic-card aria-labelledby={`${id}-focus-title`}>
                  <HomeCardGlow />
                  <p className={styles.cardLabel}>[CURRENT FOCUS / ANGULAR]</p>
                  <Heading level={4} as="h3" id={`${id}-focus-title`}>
                    Building practical applications
                  </Heading>
                  <ul className={styles.focusList}>
                    <li>Contact Management Application</li>
                    <li>Inventory Manager</li>
                    <li>Angular and TypeScript</li>
                    <li>Angular Material, RxJS, and Signals</li>
                    <li>Reactive Forms and routing</li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
