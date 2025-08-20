// Import all images using the new utility
import homeDesktop from '~/assets/blueprintjs_flutter/home-desktop.png';
import home from '~/assets/blueprintjs_flutter/home.png';
import cards from '~/assets/blueprintjs_flutter/cards.png';
import colors from '~/assets/blueprintjs_flutter/colors.png';
import dialog from '~/assets/blueprintjs_flutter/dialog.png';
import form1 from '~/assets/blueprintjs_flutter/form1.png';
import form2 from '~/assets/blueprintjs_flutter/form2.png';
import popovers from '~/assets/blueprintjs_flutter/popovers.png';
import progressBars from '~/assets/blueprintjs_flutter/progress-bars.png';
import table from '~/assets/blueprintjs_flutter/table.png';
import tags from '~/assets/blueprintjs_flutter/tags.png';
import tree from '~/assets/blueprintjs_flutter/tree.png';
import navbar from '~/assets/blueprintjs_flutter/navbar.png';

import { Fragment, useState } from 'react';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
import { Modal } from '~/components/Modal/Modal';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { createImageVariants, createTimelineStep, createFeatureCard } from '~/utils/project-helpers';
import styles from './blueprintjs-flutter.module.css';

// Project configuration
const projectConfig = {
  title: 'Blueprint Flutter Components',
  description: 'A comprehensive Flutter implementation of the Blueprint.js design system. This open-source library recreates Blueprint\'s core components and design language for Flutter applications, featuring 26+ components with pixel-perfect design fidelity and faithful Blueprint.js interactions.',
  roles: ['Flutter', 'Dart', 'Custom Components', 'Open Source'],
  url: 'https://github.com/julesmeister/blueprintjs_flutter',
  linkLabel: 'View on GitHub',
  backgroundImage: homeDesktop,
  sectionNames: ['header', 'intro', 'components', 'features']
};

// Timeline data with images
const timelineSteps = [
  createTimelineStep(1, home, 'Explore Components', 'Start with our comprehensive library of 26+ Flutter components that faithfully recreate the Blueprint.js design system. Each component maintains pixel-perfect styling and interactions.'),
  createTimelineStep(2, cards, 'Interactive Elements', 'Build engaging interfaces with interactive cards, buttons, and navigation components. All components support intent-based theming and Flutter best practices.'),
  createTimelineStep(3, form1, 'Form Controls', 'Create powerful forms with Blueprint\'s signature input fields, checkboxes, radio buttons, and select dropdowns, all with consistent styling and validation states.')
];

// Advanced components data
const advancedComponents = [
  createFeatureCard(4, colors, 'Color System', 'Complete Blueprint color palette with semantic color tokens, dark mode support, and intent-based theming for consistent visual hierarchy.'),
  createFeatureCard(5, popovers, 'Overlay Components', 'Rich overlay system including popovers, tooltips, dialogs, and drawers with positioning, focus management, and accessibility features.'),
  createFeatureCard(6, progressBars, 'Feedback Components', 'Progress indicators, spinners, and loading states that provide clear feedback during async operations and data loading.')
];

// Sidebar images for the last section
const sidebarImages = [
  { src: table, alt: 'Advanced table component with sorting and filtering' },
  { src: tags, alt: 'Tag components with removable and interactive states' },
  { src: tree, alt: 'Tree component with expandable nodes and selection' },
  { src: navbar, alt: 'Navigation bar with branding and menu items' },
  { src: dialog, alt: 'Dialog component with overlay and focus management' },
  { src: form2, alt: 'Advanced form controls with validation and states' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const BlueprintjsFlutter = () => {
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
      <ProjectContainer className={styles.blueprintFlutter}>
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
          roles={projectConfig.roles}
          ref={sectionRefs.header}
        />
        
        <ProjectSection padding="top" ref={sectionRefs.intro}>
          <ProjectSectionContent>
            <div className={styles.timelineContainer}>
              <div className={styles.timelineSteps}>
                {timelineSteps.map((step, index) => (
                  <div key={index} className={styles.timelineStep} data-step={step.stepNumber}>
                    <div className={styles.stepNumber}>{step.stepNumber}</div>
                    <div 
                      className={styles.timelineImage} 
                      onClick={() => handleImageClick(step.image, step.title)}
                      onMouseMove={(e) => handleMouseMove(e, step.image)}
                      onMouseEnter={(e) => handleMouseEnter(e, step.image)}
                      onMouseLeave={handleMouseLeave}
                    >
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

        <ProjectSection ref={sectionRefs.components}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Advanced Components</ProjectSectionHeading>
            <ProjectSectionText>
              Blueprint Flutter Components combines faithful design reproduction with Flutter's powerful widget system. Each component maintains Blueprint's visual identity while following Flutter best practices for state management, animations, and accessibility.
            </ProjectSectionText>
            <div className={styles.featureFlow}>
              {advancedComponents.map((component, index) => (
                <div key={index} className={styles.featureCard} data-feature={component.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className={styles.featureNumber}>{component.featureNumber}</div>
                  <div 
                    className={styles.featureImageWrapper}
                    onClick={() => handleImageClick(component.image, component.title)}
                    onMouseMove={(e) => handleMouseMove(e, component.image)}
                    onMouseEnter={(e) => handleMouseEnter(e, component.image)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      {...createImageVariants(component.image, component.title, { width: 500, height: 350 })}
                      sizes="(max-width: 768px) 90vw, 50vw"
                    />
                  </div>
                  <div className={styles.featureContent}>
                    <h4>{component.title}</h4>
                    <p>{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={sectionRefs.features}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Complete Component Library</ProjectSectionHeading>
            <ProjectSectionText>
              The Blueprint Flutter library provides a comprehensive set of components covering everything from basic UI elements to complex data visualization tools. Each component is meticulously crafted to match Blueprint's design principles while leveraging Flutter's performance capabilities.
            </ProjectSectionText>
            <div className={styles.sidebarGrid}>
              {sidebarImages.map((img, index) => (
                <div 
                  key={index} 
                  className={styles.sidebarImage}
                  onClick={() => handleImageClick(img.src, img.alt)}
                  onMouseMove={(e) => handleMouseMove(e, img.src)}
                  onMouseEnter={(e) => handleMouseEnter(e, img.src)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(img.src, img.alt, { width: 400, height: 300 })}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
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
    </Fragment>
  );
};