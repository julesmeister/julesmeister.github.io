import { Footer } from '~/components/footer';
import { HomeCardGlow } from '~/components/home-card-glow';
import { Icon } from '~/components/icon';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectGrid } from './project-grid';
import { ProjectStacking } from './project-stacking';
import { projectsData } from './projects-data';
import { useViewMode } from '~/contexts/view-context';
import { useHomePage } from '~/hooks/use-home-page';
import { Link as RouterLink } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import { gearItems } from '~/utils/gear';
import { certificatesData } from '~/routes/certificates/certificates-data';
import styles from './home.module.css';
import projectCounterStyles from './project-counter.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developer + React',
    description: `${config.name} — Full-stack developer specializing in React, Flutter, React Native, and Salesforce. Explore my portfolio featuring modern web & mobile applications including Orbit and Chill (Next.js 15 astrology platform), Blueprint.js Flutter, and enterprise solutions. Expert in TypeScript, responsive design, and 3D web experiences.`,
  });
};

const ProjectCounter = ({ current, total, visible }) => (
  <div className={projectCounterStyles.counter} data-visible={visible}>
    Project {current}/{total}
  </div>
);

const SectionHeading = ({ id, eyebrow, title, description }) => (
  <header className={styles.sectionHeader}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h2 id={id}>{title}</h2>
    {description && <p className={styles.sectionDescription}>{description}</p>}
  </header>
);

const experienceItems = [
  {
    title: 'Angular Developer',
    organization: 'Accenture, Mandaluyong City',
    dates: 'July 2026 - Present',
    details: [
      'Completed hands-on Angular training through coding exercises, assessments, and application projects.',
      'Built Contact Management and Inventory Manager applications with Angular, TypeScript, Angular Material, RxJS, Signals, Reactive Forms, Routing, and JSON Server.',
      'Applied CRUD, validation, responsive layouts, route guards, lazy loading, dependency injection, and service-based architecture.',
    ],
  },
  {
    title: 'Software Developer & General Manager',
    organization: 'Serenity Pension Inn, Zamboanga City',
    dates: 'January 2019 - June 2026',
    details: [
      'Developed and maintained an internal business system with Kotlin, Firebase, and Firestore.',
      'Implemented authentication, role-based access, CRUD, PDF reporting, and sales-trend monitoring.',
      'Managed staff coordination, procurement, inventory, financial reconciliation, payroll, and sales audits.',
    ],
  },
  {
    title: 'Temporary German Language Instructor',
    organization: 'Volant Academy, Silang, Cavite',
    dates: 'September 2022 - October 2022',
    details: ['Taught German at the A1 proficiency level.'],
  },
  {
    title: 'iOS Developer Intern',
    organization: '4k Software under UKLWD LTD., Baguio City',
    dates: 'January 2016 - July 2016',
    details: [
      'Contributed to an MVP for iOS after the team shifted focus from a Laravel backend.',
    ],
  },
];

const educationItems = [
  {
    title: 'Bachelor of Science in Computer Science',
    organization: 'University of the Cordilleras',
    dates: '2014 - 2016',
    details: [
      'GPA: 83.05% (2.5).',
      'Vice President, UC CITCS College Student Council (2016).',
      'Auditor, UC CITCS College Student Council (2015).',
    ],
  },
];

const ResumeTimeline = ({ items }) => (
  <ol className={styles.resumeTimeline}>
    {items.map(item => (
      <li className={styles.resumeTimelineItem} key={item.title}>
        <span className={styles.resumeNode} aria-hidden="true" />
        <div>
          <p className={styles.resumeTimelineTitle}>{item.title}</p>
          <p className={styles.resumeTimelineMeta}>{item.organization}</p>
          <p className={styles.resumeTimelineMeta}>{item.dates}</p>
          <ul>
            {item.details.map(detail => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </li>
    ))}
  </ol>
);

const CareerSnapshot = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const mobileItems = activeTab === 'experience' ? experienceItems : educationItems;

  return (
    <section className={styles.section} id="career" aria-labelledby="career-title">
      <div className={styles.sectionInner}>
        <SectionHeading
          id="career-title"
          eyebrow="[ resume.log ]"
          title="Résumé snapshot"
          description="Experience and education, distilled into one concise view."
        />
        <div className={styles.resumeDesktop} data-home-magic-card>
          <HomeCardGlow />
          <div className={styles.resumeHeader}>
            <span className={styles.resumeCommandTitle}>[RESUME.LOG]</span>
            <span className={styles.resumeCommandStatus}>PROFILE / 01</span>
          </div>
          <div className={styles.resumeCommandBody}>
            <article className={`${styles.resumePanel} ${styles.resumeExperiencePanel}`}>
              <p className={styles.resumeKicker}>[experience]</p>
              <h3>Professional experience</h3>
              <ResumeTimeline items={experienceItems} />
            </article>
            <article className={`${styles.resumePanel} ${styles.resumeEducationPanel}`}>
              <p className={styles.resumeKicker}>[education]</p>
              <h3>Bachelor of Science in Computer Science</h3>
              <p className={styles.resumeEducationMeta}>
                University of the Cordilleras<br />
                2014 - 2016
              </p>
              <p className={styles.resumeKicker}>[academic record]</p>
              <ul className={styles.resumeEducationFocus}>
                {educationItems[0].details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          </div>
        </div>
        <div className={styles.resumeMobile} data-home-magic-card>
          <HomeCardGlow />
          <div className={styles.resumeHeader}>
            <span className={styles.resumeCommandTitle}>[resume.log]</span>
            <span className={styles.resumeCommandStatus} aria-live="polite">
              {activeTab === 'experience' ? '01' : '02'} / 02
            </span>
          </div>
          <div className={styles.resumeMobileTabs} role="tablist" aria-label="Résumé sections">
            <button
              className={styles.resumeMobileTab}
              id="experience-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === 'experience'}
              aria-controls="experience-panel"
              onClick={() => setActiveTab('experience')}
            >
              <span className={styles.resumeMobileTabNumber}>01</span> Experience
            </button>
            <button
              className={styles.resumeMobileTab}
              id="education-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === 'education'}
              aria-controls="education-panel"
              onClick={() => setActiveTab('education')}
            >
              <span className={styles.resumeMobileTabNumber}>02</span> Education
            </button>
          </div>
          <div
            className={styles.resumeMobileContent}
            id={`${activeTab}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
            tabIndex={0}
          >
            <ResumeTimeline items={mobileItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSnapshot = () => (
  <section className={styles.section} id="certificates" aria-labelledby="certificates-title">
    <div className={styles.sectionInner}>
      <SectionHeading
        id="certificates-title"
        eyebrow="[Learning / credentials]"
        title="Certificates"
        description={`${certificatesData.length} course entries across software development and creative tools.`}
      />
      <div className={styles.credentialList}>
        {certificatesData.map(({ title, issuer, date, documents }) => (
          <article className={styles.credential} key={title} data-home-magic-card>
            <HomeCardGlow />
            <p className={styles.entryLabel}>
              {issuer ? [issuer, date].filter(Boolean).join(' / ') : `${documents.length} module certificates`}
            </p>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
      <RouterLink className={styles.textLink} to="/certificates">
        View all {certificatesData.length} certificate entries <span aria-hidden="true">&#8599;</span>
      </RouterLink>
    </div>
  </section>
);

const GearSnapshot = () => {
  return (
    <section className={styles.section} id="gear" aria-labelledby="gear-title">
      <div className={styles.sectionInner}>
        <SectionHeading
          id="gear-title"
          eyebrow="[Tools / setup]"
          title="Gear"
          description="The hardware and everyday tools behind my work."
        />
        <dl className={styles.gearGrid}>
          {gearItems.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <RouterLink className={styles.textLink} to="/uses">
          View the full setup <span aria-hidden="true">&#8599;</span>
        </RouterLink>
      </div>
    </section>
  );
};

const ActivitySnapshot = () => (
  <section className={styles.section} id="activity" aria-labelledby="activity-title">
    <div className={styles.sectionInner}>
      <SectionHeading
        id="activity-title"
          eyebrow="[Notes / open source]"
        title="Writing and code"
        description="Thoughts from the build process and the projects behind it."
      />
      <div className={styles.activityGrid}>
        <RouterLink
          className={styles.activityLink}
          data-cut-corner="top-right"
          data-home-magic-card
          to="/articles"
        >
          <span className={styles.entryLabel}>Articles</span>
          <span className={styles.activityTitle}>Read notes on learning, work, and building</span>
          <span aria-hidden="true" className={styles.activityArrow}>&#8599;</span>
          <HomeCardGlow />
        </RouterLink>
        <a
          className={styles.activityLink}
          data-cut-corner="top-right"
          data-home-magic-card
          href={`https://github.com/${config.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.entryLabel}>GitHub</span>
          <span className={styles.activityTitle}>Explore my public repositories</span>
          <span aria-hidden="true" className={styles.activityArrow}>&#8599;</span>
          <HomeCardGlow />
        </a>
      </div>
    </div>
  </section>
);

const ContactSnapshot = () => (
  <section className={styles.contact} id="contact" aria-labelledby="contact-title">
    <div className={styles.contactInner}>
      <h2 id="contact-title">Let&apos;s connect</h2>
      <p className={styles.contactDescription}>
        For project opportunities, collaboration, or a conversation about my work, reach me here.
      </p>
      <ul className={styles.socialLinks} aria-label="Social profiles">
        <li className={styles.socialItem}>
          <a
            className={styles.socialLink}
            data-social="github"
            href={`https://github.com/${config.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <Icon icon="github" size={20} />
          </a>
          <span className={styles.socialTooltip} aria-hidden="true">GitHub</span>
        </li>
        <li className={styles.socialItem}>
          <a
            className={styles.socialLink}
            data-social="linkedin"
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <Icon icon="linkedin" size={20} />
          </a>
          <span className={styles.socialTooltip} aria-hidden="true">LinkedIn</span>
        </li>
      </ul>
    </div>
  </section>
);

export const Home = () => {
  const { viewMode } = useViewMode();
  const homeRef = useRef(null);

  useEffect(() => {
    const home = homeRef.current;
    if (!home) return undefined;

    let activeCard = null;

    const findCard = target =>
      target instanceof Element ? target.closest('[data-home-magic-card]') : null;

    const clearCard = card => {
      card.style.setProperty('--home-card-glow-opacity', '0');
      if (activeCard === card) activeCard = null;
    };

    const handlePointerMove = event => {
      if (event.pointerType === 'touch') return;

      const card = findCard(event.target);
      if (!card || !home.contains(card)) {
        if (activeCard) clearCard(activeCard);
        return;
      }

      if (activeCard && activeCard !== card) clearCard(activeCard);

      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--home-card-glow-x', `${event.clientX - bounds.left}px`);
      card.style.setProperty('--home-card-glow-y', `${event.clientY - bounds.top}px`);
      card.style.setProperty('--home-card-glow-opacity', '1');
      activeCard = card;
    };

    const handlePointerOut = event => {
      const card = findCard(event.target);
      if (card && !card.contains(event.relatedTarget)) clearCard(card);
    };

    home.addEventListener('pointermove', handlePointerMove, { passive: true });
    home.addEventListener('pointerout', handlePointerOut, { passive: true });

    return () => {
      home.removeEventListener('pointermove', handlePointerMove);
      home.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);
  
  const {
    visibleSections,
    currentProject,
    intro,
    details,
    projectRefs
  } = useHomePage(projectsData.length);

  return (
    <div className={styles.home} ref={homeRef}>
      <ProjectCounter current={currentProject} total={projectsData.length} visible={currentProject > 0} />
      <Intro id="intro" index={0} sectionRef={intro} />

      {viewMode === 'stacking' && (
        <ProjectStacking projects={projectsData} />
      )}
      {viewMode === 'scroll' &&
        projectsData.map((project, index) => (
          <ProjectSummary
            key={project.id}
            id={`project-${index + 1}`}
            sectionRef={projectRefs[index]}
            visible={visibleSections.includes(projectRefs[index].current)}
            index={index + 1}
            title={project.title}
            description={project.description}
            buttonText="View project"
            buttonLink={project.link}
            model={{
              type: project.scrollView.modelType,
              alt: project.scrollView.alt,
              textures: project.scrollView.textures,
            }}
          />
        ))}
      {viewMode === 'grid' && <ProjectGrid projects={projectsData} />}

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <CareerSnapshot />
      <CertificationsSnapshot />
      <GearSnapshot />
      <ActivitySnapshot />
      <ContactSnapshot />
      <Footer />
    </div>
  );
};