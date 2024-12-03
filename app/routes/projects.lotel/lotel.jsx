import lotelHomeLarge from '~/assets/Lotel-Home-Cut.jpg';
import lotelHomePlaceholder from '~/assets/Lotel-Home-Cut.jpg';
import lotelHome from '~/assets/Lotel-Home-Cut.jpg';
import lotelMartLarge from '~/assets/Lotel-Mart.jpg';
import lotelMartPlaceholder from '~/assets/Lotel-Mart.jpg';
import lotelMart from '~/assets/Lotel-Mart.jpg';
import lotelTransactionsLarge from '~/assets/Lotel-Transactions.jpg';
import lotelTransactionsPlaceholder from '~/assets/Lotel-Transactions.jpg';
import lotelTransactions from '~/assets/Lotel-Transactions.jpg';
import lotelRemittanceLarge from '~/assets/Lotel-Remittance-Cut.jpg';
import lotelRemittancePlaceholder from '~/assets/Lotel-Remittance-Cut.jpg';
import lotelRemittance from '~/assets/Lotel-Remittance-Cut.jpg';
import remittanceReportLarge from '~/assets/Remittance-Report.png';
import remittanceReportPlaceholder from '~/assets/Remittance-Report.png';
import remittanceReport from '~/assets/Remittance-Report.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
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
} from '~/layouts/project';
import { Fragment, useRef, useState, useEffect } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './lotel.module.css';

const title = 'Lotel Android App';
const description =
  'I rebuilt this project using Flutterflow and Firebase, migrating it from a desktop Electron app with a Vue frontend. I have onboarded our staff and co-owners, who use the app on their Android phones to monitor hotels\' performance. While not distributed through the Google Play Store, the app has been successfully running in production for over a year with active daily usage by our staffs. A limited demo mode is available upon request.';
const roles = ['Android', 'Flutterflow', 'Firebase', 'No-Code'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for each section
  const introSection = useRef();
  const featuresSection = useRef();
  const whySection = useRef();

  const sections = [introSection, whySection];

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
          src={lotelHomeLarge}
          srcSet={`${lotelHomeLarge} 1280w, ${lotelHomeLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={lotelHomeLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://lotel-7ac21u.flutterflow.app/"
          linkLabel="Visit website"
          secondaryUrl="https://github.com/julesmeister/lotel"
          secondaryLinkLabel="View on Github"
          roles={roles}
        />
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
            <ProjectImageColumns
              images={[
                {
                  srcSet: `${lotelHome} 800w, ${lotelHomeLarge} 1920w`,
                  width: 800,
                  height: 500,
                  placeholder: lotelHomePlaceholder,
                  alt: 'The Slice web application showing a selected user annotation.',
                },
                {
                  srcSet: `${lotelMart} 800w, ${lotelMartLarge} 1920w`,
                  width: 800,
                  height: 500,
                  placeholder: lotelMartPlaceholder,
                  alt: 'The Slice web application showing a selected user annotation.',
                },
                {
                  srcSet: `${lotelTransactions} 800w, ${lotelTransactionsLarge} 1920w`,
                  width: 800,
                  height: 500,
                  placeholder: lotelTransactionsPlaceholder,
                  alt: 'The Slice web application showing a selected user annotation.',
                },
              ]}
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "The dashboard, the POS, and the transactions page."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
    
        <ProjectSection ref={whySection}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Why I chose Flutterflow?</ProjectSectionHeading>
              <ProjectSectionText>
                Having already worked with Flutter in the past, I strategically chose Flutterflow for its rapid prototyping capabilities. For a project with straightforward CRUD requirements and minimal UI complexity, this decision allowed me to quickly develop a functional app that was easily accessible to my target users on Android. It's also readily available as a web application.
              </ProjectSectionText>
              <ProjectSectionText>
                Flutterflow provides a high-level abstraction of UI code, making it easier to work with. Furthermore, its built-in state management features were easy to work with and didn't require any additional libraries. If needed, I could still utilize Flutter packages. As an example, I was able to quickly implement <b>PDF generation</b> for the day's remittance report, which was a valuable feature for the app.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
            <Image
                className={styles.sidebarImage}
                srcSet={`${remittanceReport} 350w, ${remittanceReportLarge} 700w`}
                width={350}
                height={750}
                placeholder={remittanceReportPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${lotelRemittance} 350w, ${lotelRemittanceLarge} 700w`}
                width={350}
                height={750}
                placeholder={lotelRemittancePlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
