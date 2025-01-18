import sweldoHomeLarge from '~/assets/Sweldo-Home-Cut.png';
import sweldoHomePlaceholder from '~/assets/Sweldo-Home-Cut.png';
import sweldoHome from '~/assets/Sweldo-Home-Cut.png';
import sweldoPDFLarge from '~/assets/PDF-Sweldo.png';
import sweldoPDFPlaceholder from '~/assets/PDF-Sweldo.png';
import sweldoPDF from '~/assets/PDF-Sweldo.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon'; 
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectImageColumns,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, useRef, useState, useEffect } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './sweldo.module.css';

const title = 'Sweldo Salary System';
const description =
  'We use the ZKTeco biometric scanner to capture attendance. This app allows the upload of time sheet data and has a dashboard to track employee performance.';
const roles = ['Supabase', 'Flutterflow', 'Firebase', 'No-Code'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Sweldo = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for each section
  const headerSection = useRef();
  const introSection = useRef();
  const problemSection = useRef();
  const pdfSection = useRef();
  const exercisesSection = useRef();

  const sections = [
    headerSection,
    introSection,
    problemSection,
    pdfSection,
  ];

  useEffect(() => {
    // Initialize sections observer only when refs are ready
    if (!sections.every(section => section.current)) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const sectionIndex = sections.findIndex(s => s.current === section);

            if (sectionIndex !== -1) {
              setCurrentSectionIndex(sectionIndex);
            }
          }
        });
      },
      { 
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    return () => sectionObserver.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleSectionNav = (event) => {
      const direction = event.detail;
      const newIndex = direction === 'up' ? currentSectionIndex - 1 : currentSectionIndex + 1;
      
      if (newIndex >= 0 && newIndex < sections.length) {
        setCurrentSectionIndex(newIndex);
        sections[newIndex].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    window.addEventListener('navigate-section', handleSectionNav);
    return () => window.removeEventListener('navigate-section', handleSectionNav);
  }, [currentSectionIndex, sections]);




  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sweldoHomeLarge}
          srcSet={`${sweldoHomeLarge} 1280w, ${sweldoHomeLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sweldoHomeLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/julesmeister/sweldo"
          linkLabel="View on Github"
          roles={roles}
          ref={headerSection}
        />
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
          <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${sweldoHomeLarge} 1280w, ${sweldoHomeLarge} 2560w`
                  : `${sweldoHomeLarge} 1280w, ${sweldoHomeLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? sweldoHomePlaceholder
                  : sweldoHomePlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Sweldo Time Sheet"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Time Sheet shows the time in and out of each employee. With this, their summary can be easily calculated. Don't worry, none of the data on the sidebar is real. It's just a mockup to show the flow of the app."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
    
        <ProjectSection ref={problemSection}>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              This is very intensive with database queries, so I opted to split my usage into two databases. Firestore and Supabase. It is a pain to work with two databases but it's the only way to go given the constraints of the projects I'm working on.
              <br></br>
              <br></br>
              I'm afraid I can't share the link to the actual app because the information is sensitive. I don't want other people to alter the data especially for this project.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="top" ref={pdfSection}>
          <ProjectSectionContent>
          <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${sweldoPDFPlaceholder} 1280w, ${sweldoPDFLarge} 2560w`
                  : `${sweldoPDFPlaceholder} 1280w, ${sweldoPDFLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? sweldoPDFPlaceholder
                  : sweldoPDFPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Sweldo Time Sheet"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Once the pay slips are generated for each employee, it can be downloaded as a PDF."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
