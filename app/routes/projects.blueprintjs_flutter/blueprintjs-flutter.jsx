/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Import all images using the new utility
import homeDesktop from '~/assets/blueprintjs_flutter/home-desktop.png';
import home from '~/assets/blueprintjs_flutter/home.png';
import cards from '~/assets/blueprintjs_flutter/cards.png';
import colors from '~/assets/blueprintjs_flutter/colors.png';
import dialog from '~/assets/blueprintjs_flutter/dialog.png';
import form1 from '~/assets/blueprintjs_flutter/form1.png';
import form2 from '~/assets/blueprintjs_flutter/form2.png';
// eslint-disable-next-line no-unused-vars
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
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { createImageVariants, createTimelineStep } from '~/utils/project-helpers';
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

// Sidebar images for the last section
const sidebarImages = [
  { src: colors, alt: 'Blueprint Flutter: Complete color palette and theme system with Blueprint.js fidelity.' },
  { src: table, alt: 'Blueprint Flutter: Data tables with sorting, selection, and perfect alignment.' }
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
              <div className={styles.featureCard} data-feature="dialogs">
                <div className={styles.featureNumber}>4</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(dialog, "Modal dialogs with perfect header alignment and Blueprint styling")}
                  onMouseMove={(e) => handleMouseMove(e, dialog)}
                  onMouseEnter={(e) => handleMouseEnter(e, dialog)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(dialog, "Modal dialogs with perfect header alignment and Blueprint styling", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Modal Dialogs</h4>
                  <p>Professional modal dialogs with perfect header alignment, customizable actions, and intent-based styling</p>
                </div>
              </div>
              
              <div className={styles.featureCard} data-feature="data">
                <div className={styles.featureNumber}>5</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(table, "Data tables with sorting, selection, and perfect alignment")}
                  onMouseMove={(e) => handleMouseMove(e, table)}
                  onMouseEnter={(e) => handleMouseEnter(e, table)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(table, "Data tables with sorting, selection, and perfect alignment", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Data Display</h4>
                  <p>Complex data tables with sorting, selection, tree views, and perfectly aligned headers and cells</p>
                </div>
              </div>
              
              <div className={styles.featureCard} data-feature="navigation">
                <div className={styles.featureNumber}>6</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(navbar, "Navigation bars with groups, alignments, and Blueprint styling")}
                  onMouseMove={(e) => handleMouseMove(e, navbar)}
                  onMouseEnter={(e) => handleMouseEnter(e, navbar)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(navbar, "Navigation bars with groups, alignments, and Blueprint styling", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Navigation</h4>
                  <p>Professional navigation bars, breadcrumbs, and tabs with groups, alignments, and responsive behavior</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={sectionRefs.features}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Design System Fidelity</ProjectSectionHeading>
              <ProjectSectionText>
                This Flutter implementation recreates <b>26+ Blueprint.js components</b> with faithful design reproduction and proper Flutter architecture. Each component maintains Blueprint's visual identity while following Flutter best practices for state management, animations, and widget composition.
              </ProjectSectionText>
              <ProjectSectionText>
                Key features include complete Blueprint color palette implementation, intent-based theming (Primary, Success, Warning, Danger), responsive layouts with the 10px grid system, factory methods for convenient component creation, and comprehensive examples with documentation for each component.
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
                    sizes="(max-width: 768px) 200px, 343px"
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
    </Fragment>
  );
};