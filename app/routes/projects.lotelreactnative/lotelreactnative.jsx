/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import handymenPayments from '~/assets/lotel_react_native/handymen-payments.jpg';
import groceryAnalytics from '~/assets/lotel_react_native/grocery-analytics.jpg';
import remittance from '~/assets/lotel_react_native/remittance.jpg';
import beddings from '~/assets/lotel_react_native/beddings.jpg';
import issues from '~/assets/lotel_react_native/issues.jpg';
import roomBooking from '~/assets/lotel_react_native/room-booking.jpg';
import expenses from '~/assets/lotel_react_native/expenses.jpg';
import roles from '~/assets/lotel_react_native/roles.jpg';
import inventory from '~/assets/lotel_react_native/inventory.jpg';
import mart from '~/assets/lotel_react_native/mart.jpg';
import transactions from '~/assets/lotel_react_native/transactions.jpg';
import payroll from '~/assets/lotel_react_native/payroll.jpg';
import homeDashboard from '~/assets/lotel_react_native/home-dashboard.jpg';
import staffPayroll from '~/assets/lotel_react_native/staff-payroll.jpg';
import salesDashboard from '~/assets/lotel_react_native/sales-dashboard.jpg';

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
import styles from './lotelreactnative.module.css';

// Project configuration
const projectConfig = {
  title: 'Lotel React Native',
  description: 'Modern rebuild of the Lotel hotel management system using React Native and Expo. Features enhanced UI/UX with handymen payment tracking, grocery profitability analytics, remittance management with PDF generation, beddings/linens inventory, maintenance issue tracking, and comprehensive room booking management. Built for production use with real-time Firebase synchronization.',
  roles: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
  url: 'https://github.com/julesmeister/lotel',
  linkLabel: 'View on GitHub',
  backgroundImage: salesDashboard,
  sectionNames: ['header', 'intro', 'features', 'analytics', 'tech-stack']
};

// Timeline steps data for main workflow
const timelineSteps = [
  createTimelineStep(1, handymenPayments, 'Handymen Payment Tracking', 'Track daily rates and monthly payments for handymen like Ariel, Bersamin, and others. Calendar view shows payment history with remittance status and details for each payment including days worked and hotel assignment.'),
  createTimelineStep(2, remittance, 'Daily Remittance Management', 'Comprehensive daily remittance tracking with breakdown of expenses, handymen costs, and sales. Generate PDF reports showing prepared by/collected by staff members. Net amount calculation with emoji feedback for profitability.'),
  createTimelineStep(3, roomBooking, 'Room Booking Details', 'Complete room booking management showing stay information, guest count, duration, payment status, and guest details. Modify bookings or process checkouts with a single tap.')
];

// Feature cards data
const featureCards = [
  createFeatureCard(4, groceryAnalytics, 'Grocery Profitability', 'Track grocery expenses vs revenue with profitability indicators. See days to breakeven, net profit percentage, and purchase history. Real-time analytics help optimize inventory purchasing decisions.'),
  createFeatureCard(5, beddings, 'Beddings & Linens Inventory', 'Manage bedsheet, pillowcase, and towel inventory across all rooms. Track units, pricing, total costs, and room assignments. Filter by type and year for comprehensive inventory control.'),
  createFeatureCard(6, issues, 'Maintenance Issue Tracking', 'Report and track hotel maintenance issues with status updates, reporter information, and resolution timeline. Issues like fire safety inspections, tissue restocking, and room repairs are organized by date with quick edit access.'),
  createFeatureCard(7, expenses, 'Expense Management', 'Record daily hotel expenses with categorized types including softdrinks, cash advances, salary, food, and more. Track amount and description for complete financial visibility across all hotel operations.'),
  createFeatureCard(8, roles, 'Staff Role Management', 'Manage hotel staff with role-based access control. Track staff and admin users with real-time activity status. View who is currently active and manage user roles efficiently.'),
  createFeatureCard(9, inventory, 'Complete Inventory System', 'Comprehensive inventory management for candy, essentials, and drinks. Track stock levels, pricing, and out-of-stock items. Edit or delete inventory items with simple action buttons.'),
  createFeatureCard(10, mart, 'Lotel Mart Shopping', 'Internal shopping cart system for hotel purchases. Add items to cart with quantity controls, view categorized inventory (27 items total), and process transactions seamlessly.'),
  createFeatureCard(11, payroll, 'Payroll Management', 'Manage fortnightly payroll cycles with total expenditure tracking (₱535,088.8). View pending and settled payrolls organized by fortnight, with status indicators for each payment period.'),
  createFeatureCard(12, staffPayroll, 'Staff Payroll Tracking', 'Monitor individual staff member advances and settlements. Track pending cash advances with visual alerts, settled amounts per staff member, and maintain complete payroll transparency across all hotel employees.')
];

// Sidebar images for dashboard section
const sidebarImages = [
  { src: homeDashboard, alt: 'Lotel React Native: Home dashboard overview showing documents, grocery analytics, bills, and payroll sections with quick access buttons' },
  { src: transactions, alt: 'Lotel React Native: Daily transactions view with bookings/goods filters, total and remitted amounts, and detailed sales records by staff member' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const LotelReactNative = () => {
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
      <ProjectContainer className={styles.lotelreactnative}>
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
            <ProjectSectionHeading>Advanced Management Features</ProjectSectionHeading>
            <ProjectSectionText>
              Lotel React Native modernizes hotel operations with a comprehensive suite of management tools. Built with React Native and Expo for cross-platform compatibility, the app features real-time Firebase synchronization, PDF report generation, and intuitive UI components designed for daily operational efficiency.
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
              <ProjectSectionHeading>Why Rebuild with React Native?</ProjectSectionHeading>
              <ProjectSectionText>
                After running the Flutterflow version successfully in production for over a year, I decided to rebuild Lotel using React Native and Expo for better performance, maintainability, and customization capabilities. The new version offers enhanced UI/UX with modern design patterns and more granular control over app behavior.
              </ProjectSectionText>
              <ProjectSectionText>
                React Native with Expo provides excellent development velocity with hot reloading, easier debugging, and access to a rich ecosystem of packages. Firebase integration enables real-time data synchronization across devices, ensuring all staff members have up-to-date information about hotel operations.
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
            <ProjectSectionHeading>Modern Mobile Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Built with React Native and Expo for cross-platform development, ensuring consistent performance on both iOS and Android devices. TypeScript provides type safety throughout the codebase, reducing bugs and improving maintainability. Firebase Firestore handles real-time data synchronization with offline support.
            </ProjectSectionText>
            <ProjectSectionText>
              The app leverages Expo's managed workflow for rapid development and easy deployments. PDF generation is handled natively for professional remittance reports. The purple-themed UI uses modern design patterns with smooth animations and intuitive navigation for optimal user experience during daily hotel operations.
            </ProjectSectionText>
            <ProjectSectionHeading>Future Plans: Migrating to Kotlin & Jetpack Compose</ProjectSectionHeading>
            <ProjectSectionText>
              While React Native with Expo enabled rapid prototyping, the app suffers from slow load times and performance issues that impact daily operations. I'm planning to rebuild this application using native Android development with Kotlin and Jetpack Compose to address these performance bottlenecks and provide a significantly faster, more responsive user experience.
            </ProjectSectionText>
            <ProjectSectionText>
              The migration to native Android will eliminate the JavaScript bridge overhead, provide instant app startup, smoother animations, and better memory management. Jetpack Compose's modern declarative UI framework combined with Material Design 3 components will enable a polished, performant hotel management system that staff can rely on for critical daily operations.
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
