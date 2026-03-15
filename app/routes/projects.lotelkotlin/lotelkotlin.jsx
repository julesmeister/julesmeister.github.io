/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import homeDashboard from '~/assets/lotel_kotlin/home-dashboard.jpg';
import metricsDashboard from '~/assets/lotel_kotlin/metrics-dashboard.jpg';
import transactions from '~/assets/lotel_kotlin/transactions.jpg';
import bookingDetails from '~/assets/lotel_kotlin/booking-details.jpg';
import stayInformation from '~/assets/lotel_kotlin/stay-information.jpg';
import remittances from '~/assets/lotel_kotlin/remittances.jpg';
import groceryProfitability from '~/assets/lotel_kotlin/grocery-profitability.jpg';
import rentals from '~/assets/lotel_kotlin/rentals.jpg';
import payrollStaff from '~/assets/lotel_kotlin/payroll-staff.jpg';

import { Fragment, useState } from 'react';
import { Image } from '~/components/image';
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
} from '~/layouts/project';
import { createProjectMeta } from '~/components/project-template';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { createImageVariants, createTimelineStep, createFeatureCard } from '~/utils/project-helpers';
import { media } from '~/utils/style';
import styles from './lotelkotlin.module.css';

// Project configuration
const projectConfig = {
  title: 'Lotel Kotlin',
  description: 'Native Android rebuild of the Lotel hotel management system using Kotlin and Jetpack Compose. Eliminates the JavaScript bridge overhead from React Native, delivering instant startup, smoother animations, and better memory management. Features Material Design 3 components with a polished, performant UI for daily hotel operations.',
  roles: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android'],
  url: 'https://github.com/julesmeister/lotel',
  linkLabel: 'View on GitHub',
  backgroundImage: homeDashboard,
  sectionNames: ['header', 'intro', 'features', 'analytics', 'tech-stack']
};

// Timeline steps data for main workflow
const timelineSteps = [
  createTimelineStep(1, homeDashboard, 'Home Dashboard', 'Central hub showing today\'s sales, pending remittances, occupancy metrics, and transaction counts. Room grid displays real-time status with color-coded indicators for occupied, available, and guest count. Quick access to all hotel operations from a single screen.'),
  createTimelineStep(2, bookingDetails, 'Booking Management', 'Detailed room booking view with staff check-in records, quick actions for extending stays, adding beds, or processing refunds. Change room functionality and complete transaction history with payment status tracking.'),
  createTimelineStep(3, transactions, 'Transaction History', 'Filterable daily transaction log covering bookings, goods sales, and expenses. Each entry shows time, amount, remittance status, and detailed descriptions. Bottom navigation provides quick access to all major sections.')
];

// Feature cards data
const featureCards = [
  createFeatureCard(4, metricsDashboard, 'Financial Metrics', 'Comprehensive monthly breakdown of rooms revenue, goods sales, rentals, expenses, salaries, and bills. Each metric shows month-over-month percentage changes. Filter by hotel property with net income calculation at a glance.'),
  createFeatureCard(5, remittances, 'Remittance Tracking', 'Daily remittance management with expenses and sales breakdown. Shows net amount with visual emoji feedback for profitability. Tracks who prepared and received each remittance with quick access to view detailed transactions.'),
  createFeatureCard(6, stayInformation, 'Stay Information', 'Detailed guest stay data including check-in time, guest count, extra beds, duration, guest type, and promo status. Room info section displays room type, capacity, and senior/PWD rates for transparent pricing.'),
  createFeatureCard(7, groceryProfitability, 'Grocery Profitability', 'Yearly overview tracking total grocery expenses against revenue with profit margin calculations. Breakdown shows tracking periods, profitability ratio, average breakeven days, and average grocery cost per period.'),
  createFeatureCard(8, rentals, 'Rental Management', 'Monthly rental revenue tracking with paid/unpaid status indicators. View individual unit details including tenant names, amounts, and payment dates. Color-coded cards for quick revenue, paid, and unpaid summaries.'),
  createFeatureCard(9, payrollStaff, 'Payroll & Staff', 'Staff management with daily rate tracking and advance payment monitoring. Toggle between payroll and staff views. Yearly total expenditure overview with individual staff profiles showing pending advances status.')
];

// Sidebar images for dashboard section
const sidebarImages = [
  { src: homeDashboard, alt: 'Lotel Kotlin: Home dashboard with sales metrics, occupancy tracking, and room grid with real-time status indicators' },
  { src: metricsDashboard, alt: 'Lotel Kotlin: Financial metrics dashboard showing rooms, goods, rentals, expenses, salaries breakdown with monthly trends' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const LotelKotlin = () => {
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

  return (
    <Fragment>
      <ProjectContainer className={styles.lotelkotlin}>
        <ProjectBackground
          src={projectConfig.backgroundImage}
          srcSet={`${projectConfig.backgroundImage} 800w, ${projectConfig.backgroundImage} 1600w`}
          width={800}
          height={1600}
          placeholder={projectConfig.backgroundImage}
          opacity={0.8}
        />
        <ProjectHeader
          title={projectConfig.title}
          description={projectConfig.description}
          url={projectConfig.url}
          linkLabel={projectConfig.linkLabel}
          roles={projectConfig.roles}
          ref={sectionRefs.header}
        />
        <ProjectSection padding="top" ref={sectionRefs.intro}>
          <ProjectSectionContent>
            <div className={styles.timelineContainer}>
              <div className={styles.timelineStepsHorizontal}>
                {timelineSteps.map((step, index) => (
                  <div key={index} className={styles.timelineStepHorizontal} data-step={step.stepNumber}>
                    <div
                      className={styles.timelineImage}
                      onClick={() => handleImageClick(step.image, step.title)}
                      onMouseMove={(e) => handleMouseMove(e, step.image)}
                      onMouseEnter={(e) => handleMouseEnter(e, step.image)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={styles.stepNumber}>{step.stepNumber}</div>
                      <Image
                        {...createImageVariants(step.image, step.title, { width: 400, height: 800 })}
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
            <ProjectSectionHeading>Native Android Features</ProjectSectionHeading>
            <ProjectSectionText>
              Lotel Kotlin delivers a complete hotel management suite built natively for Android with Jetpack Compose. Every screen benefits from instant rendering, smooth 60fps animations, and efficient memory usage — critical for a tool used throughout daily hotel operations.
            </ProjectSectionText>
            <div className={styles.featureFlowHorizontal}>
              {featureCards.map((card, index) => (
                <div key={index} className={styles.featureCardHorizontal} data-feature={`feature-${card.featureNumber}`}>
                  <div className={styles.featureNumber}>{card.featureNumber}</div>
                  <div
                    className={styles.featureImageWrapper}
                    onClick={() => handleImageClick(card.image, card.title)}
                    onMouseMove={(e) => handleMouseMove(e, card.image)}
                    onMouseEnter={(e) => handleMouseEnter(e, card.image)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      {...createImageVariants(card.image, card.title, { width: 400, height: 800 })}
                      sizes="(max-width: 768px) 85vw, 40vw"
                    />
                  </div>
                  <div className={styles.featureContent}>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={sectionRefs.analytics}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Why Go Native?</ProjectSectionHeading>
              <ProjectSectionText>
                After running the React Native version in production, performance bottlenecks became apparent — slow startup times, janky animations, and high memory usage impacted daily hotel operations. The decision to rebuild with Kotlin and Jetpack Compose was driven by the need for a truly responsive, reliable tool that staff can depend on.
              </ProjectSectionText>
              <ProjectSectionText>
                Jetpack Compose's declarative UI paired with Kotlin coroutines delivers smooth, lag-free interactions. Firebase integration remains seamless with native Android SDKs, providing even better real-time synchronization. Material Design 3 components give the app a polished, modern look that feels right at home on Android devices.
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

        <ProjectSection ref={sectionRefs.techStack}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Native Android Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Built with Kotlin and Jetpack Compose for a fully native Android experience. The app leverages Compose's modern declarative UI framework to build responsive, efficient interfaces with significantly less boilerplate than traditional XML layouts. Kotlin coroutines handle asynchronous operations cleanly, from Firebase queries to UI state management.
            </ProjectSectionText>
            <ProjectSectionText>
              Firebase Firestore provides real-time data synchronization with robust offline support — essential for hotel environments where connectivity can be intermittent. Material Design 3 theming ensures visual consistency across all screens, while Compose navigation handles screen transitions with fluid animations. The result is a hotel management system that's fast, reliable, and a pleasure to use every day.
            </ProjectSectionText>
          </ProjectSectionContent>
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
