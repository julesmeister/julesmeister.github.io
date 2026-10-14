/* eslint-disable react/no-unescaped-entities */
import profileImgLarge from '~/assets/photo_2022-12-26_03-22-53.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/photo_2022-12-26_03-22-53.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { media } from '~/utils/style';
import config from '~/config.json';
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

const SkillMarquee = ({ label, skills, direction }) => {
  const renderSkills = clone => (
    <ul className={styles.skillMarqueeList} aria-hidden={clone || undefined}>
      {skills.map((skill, index) => (
        <li className={styles.skillMarqueeItem} key={`${clone ? 'clone-' : ''}${skill}-${index}`}>
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.skillMarqueeGroup}>
      <p className={styles.skillGroupLabel}>{label}</p>
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
      <DecoderText text="A little bit about myself" start={visible} delay={500} />
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
      I'm Jules, a Filipino of Chinese descent based in Pasay City. The Japanese text on my site sometimes gives people the wrong idea, but I'm Filipino through and through: adobo and sinigang included. I'm currently an Angular Developer at Accenture, where my training has included building contact-management and inventory applications.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      From 2019 to 2026, I worked as a Software Developer and General Manager at Serenity Pension Inn in Zamboanga City. I built and maintained its Kotlin and Firebase business system while supporting daily operations.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My other work includes FlutterFlow, cTrader, and React/Next.js projects. Outside work, I spend time at the gym. For my everyday tools and setup, visit the <Link href="/uses">uses page</Link>; for project discussions, <Link href="/contact">get in touch</Link>.
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
              <p className={styles.sectionLabel}>PROFILE / 01</p>
              <Heading level={2} as="h2" id={titleId}>About</Heading>
            </header>
            <div className={styles.content}>
              <figure className={styles.portraitCard}>
                <div className={styles.image}>
                  <Image
                    reveal
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                    width={960}
                    height={957}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 360px`}
                    alt="Jules Lee at the Galilean Sea"
                  />
                </div>
                <figcaption>
                  <span>01 / PROFILE</span>
                  <span>{config.name}</span>
                </figcaption>
              </figure>
              <article className={styles.profileCard}>
                <p className={styles.cardLabel}>ABOUT.LOG</p>
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
                <section className={styles.skillsCard} aria-labelledby={`${id}-skills-title`}>
                  <p className={styles.cardLabel}>CORE SKILLS / TOOLS</p>
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
                <aside className={styles.focusCard} aria-labelledby={`${id}-focus-title`}>
                  <p className={styles.cardLabel}>CURRENT FOCUS / ANGULAR</p>
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
