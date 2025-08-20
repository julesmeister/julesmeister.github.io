/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import lotelHome from '~/assets/Lotel-Home-Cut.jpg';
import lotelMart from '~/assets/Lotel-Mart.jpg';
import lotelTransactions from '~/assets/Lotel-Transactions.jpg';
import lotelRemittance from '~/assets/Lotel-Remittance-Cut.jpg';
import remittanceReport from '~/assets/Remittance-Report.png';

import { Fragment, useState } from 'react';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
import { Footer } from '~/components/footer';
import { Modal } from '~/components/Modal/Modal';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectImageColumns,
} from '~/layouts/project';
import { createProjectMeta } from '~/components/project-template';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { createImageVariants, createTimelineStep, createFeatureCard } from '~/utils/project-helpers';
import { media } from '~/utils/style';
import styles from './lotel.module.css';

// Project configuration
const projectConfig = {
  title: 'Lotel Android App',
  description: 'I rebuilt this project using Flutterflow and Firebase, migrating it from a desktop Electron app with a Vue frontend. I have onboarded our staff and co-owners, who use the app on their Android phones to monitor hotels\' performance. While not distributed through the Google Play Store, the app has been successfully running in production for over a year with active daily usage by our staffs. A limited demo mode is available upon request.',
  roles: ['Android', 'Flutterflow', 'Firebase', 'No-Code'],
  url: 'https://lotel-7ac21u.flutterflow.app/',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/julesmeister/lotel',
  secondaryLinkLabel: 'View on Github',
  backgroundImage: lotelHome,
  sectionNames: ['header', 'intro', 'features', 'reports', 'tech-stack']
};

// Main app screens data
const appScreens = [
  { src: lotelHome, name: 'Home', alt: 'Lotel: Home page of the app.' },
  { src: lotelMart, name: 'Mart', alt: 'Lotel: Mart page of the app.' },
  { src: lotelTransactions, name: 'Transactions', alt: 'Lotel: Transactions page of the app.' }
];

// Timeline steps data
const timelineSteps = [
  createTimelineStep(1, lotelHome, 'Dashboard Overview', 'Monitor all hotel operations from a centralized dashboard. Track daily sales, occupancy rates, and key performance indicators in real-time.'),
  createTimelineStep(2, lotelMart, 'Point of Sale', 'Process transactions seamlessly with integrated POS functionality. Handle room bookings, food orders, and additional services all in one place.'),
  createTimelineStep(3, lotelTransactions, 'Transaction History', 'Access comprehensive transaction records with detailed filtering and search capabilities. Generate reports and track financial performance over time.')
];

// Feature cards data
const featureCards = [
  createFeatureCard(4, lotelRemittance, 'Remittance Management', 'Streamline daily cash flow with automated remittance tracking and comprehensive financial summaries'),
  createFeatureCard(5, remittanceReport, 'PDF Report Generation', 'Generate professional reports in PDF format for easy sharing and record-keeping with stakeholders')
];

// Sidebar images for tech stack section  
const sidebarImages = [
  { src: lotelRemittance, alt: 'Lotel: Remittance management interface for tracking daily cash flow' },
  { src: remittanceReport, alt: 'Lotel: Professional PDF report showing detailed remittance summary' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const Lotel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { magnifier, showMagnifier, hideMagnifier, updateMagnifier } = useMagnifier();
  const { sectionRefs } = useProjectPage(projectConfig.sectionNames);

  const handleImageClick = (imageSrc, alt) => {
    setSelectedImage({ src: imageSrc, alt });
  };

  const handleMouseMove = (e, imageSrc) => {
    updateMagnifier(e, imageSrc);
  };

  const handleMouseLeave = () => {
    hideMagnifier();
  };

  const handleMouseEnter = (e, imageSrc) => {
    showMagnifier(e, imageSrc);
  };

  // Transform app screens into image data with interactive features
  const images = appScreens.map(screen => ({
    ...createImageVariants(screen.src, screen.alt, { width: 800, height: 500 }),
    onClick: () => handleImageClick(screen.src, screen.alt),
    onMouseMove: (e) => handleMouseMove(e, screen.src),
    onMouseEnter: (e) => handleMouseEnter(e, screen.src),
    onMouseLeave: handleMouseLeave
  }));

  return (
    <Fragment>
      <ProjectContainer className={styles.lotel}>
        <ProjectBackground
          src={projectConfig.backgroundImage}
          srcSet={`${projectConfig.backgroundImage} 1280w, ${projectConfig.backgroundImage} 2560w`}
          width={1280}
          height={800}
          placeholder={projectConfig.backgroundImage}
          opacity={0.8}
        />
        <ProjectHeader
          title={projectConfig.title}
          description={projectConfig.description}
          url={projectConfig.url}
          linkLabel={projectConfig.linkLabel}
          secondaryUrl={projectConfig.secondaryUrl}
          secondaryLinkLabel={projectConfig.secondaryLinkLabel}
          roles={projectConfig.roles}
          ref={sectionRefs.header}
        />
        <ProjectSection padding="top" ref={sectionRefs.intro}>
          <ProjectSectionContent>
            <div className={styles.timelineContainer}>
              <div className={styles.timelineSteps}>
                {timelineSteps.map((step, index) => (
                  <div key={index} className={styles.timelineStep} data-step={step.stepNumber}>
                    <div 
                      className={styles.timelineImage}
                      onClick={() => handleImageClick(step.image, step.title)}
                      onMouseMove={(e) => handleMouseMove(e, step.image)}
                      onMouseEnter={(e) => handleMouseEnter(e, step.image)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={styles.stepNumber}>{step.stepNumber}</div>
                      <Image
                        {...createImageVariants(step.image, step.title, { width: 600, height: 400 })}
                        sizes="(max-width: 768px) 90vw, 45vw"
                      />
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={sectionRefs.features}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Advanced Features</ProjectSectionHeading>
            <ProjectSectionText>
              Lotel combines powerful no-code development with production-ready hotel management capabilities. Built with Flutterflow and Firebase, the app delivers comprehensive POS functionality, real-time analytics, and automated reporting for efficient hotel operations.
            </ProjectSectionText>
            <div className={styles.featureFlow}>
              <div className={styles.featureCard} data-feature="remittance">
                <div className={styles.featureNumber}>4</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(lotelRemittance, "Remittance Management")}
                  onMouseMove={(e) => handleMouseMove(e, lotelRemittance)}
                  onMouseEnter={(e) => handleMouseEnter(e, lotelRemittance)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(lotelRemittance, "Remittance Management", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Remittance Management</h4>
                  <p>Streamline daily cash flow with automated remittance tracking and comprehensive financial summaries</p>
                </div>
              </div>
              
              <div className={styles.featureCard} data-feature="reports">
                <div className={styles.featureNumber}>5</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(remittanceReport, "PDF Report Generation")}
                  onMouseMove={(e) => handleMouseMove(e, remittanceReport)}
                  onMouseEnter={(e) => handleMouseEnter(e, remittanceReport)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(remittanceReport, "PDF Report Generation", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>PDF Report Generation</h4>
                  <p>Generate professional reports in PDF format for easy sharing and record-keeping with stakeholders</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
    
        <ProjectSection ref={sectionRefs.reports}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Why I chose Flutterflow?</ProjectSectionHeading>
              <ProjectSectionText>
                Having already worked with Flutter in the past, I strategically chose Flutterflow for its rapid prototyping capabilities. For a project with straightforward CRUD requirements and minimal UI complexity, this decision allowed me to quickly develop a functional app that was easily accessible to my target users on Android.
              </ProjectSectionText>
              <ProjectSectionText>
                Flutterflow provides a high-level abstraction of UI code, making it easier to work with. Furthermore, its built-in state management features were easy to work with and didn't require any additional libraries. If needed, I could still utilize Flutter packages for advanced functionality like PDF generation.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              {sidebarImages.map((img, index) => (
                <div 
                  key={index}
                  className={styles.sidebarImageWrapper}
                  onClick={() => handleImageClick(img.src, img.alt)}
                  onMouseMove={(e) => handleMouseMove(e, img.src)}
                  onMouseEnter={(e) => handleMouseEnter(e, img.src)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    className={styles.sidebarImage}
                    {...createImageVariants(img.src, img.alt, { width: 350, height: 750 })}
                    sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                  />
                </div>
              ))}
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>

      {/* Magnifier */}
      {magnifier.isVisible && (
        <div
          className={styles.magnifier}
          style={{
            left: magnifier.x,
            top: magnifier.y,
            backgroundImage: `url(${magnifier.currentImage})`,
            backgroundPosition: `${magnifier.backgroundX}% ${magnifier.backgroundY}%`,
          }}
        />
      )}

      {/* Modal for full-size images */}
      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <div className={styles.modalImageContainer}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
            <p className={styles.modalCaption}>{selectedImage.alt}</p>
          </div>
        </Modal>
      )}
      
      <Footer />
    </Fragment>
  );
};
