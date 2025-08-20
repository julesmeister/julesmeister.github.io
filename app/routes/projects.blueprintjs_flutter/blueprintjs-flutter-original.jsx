/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import homeLarge from '~/assets/blueprintjs_flutter/home.png';
import homePlaceholder from '~/assets/blueprintjs_flutter/home.png';
import home from '~/assets/blueprintjs_flutter/home.png';
import cardsLarge from '~/assets/blueprintjs_flutter/cards.png';
import cardsPlaceholder from '~/assets/blueprintjs_flutter/cards.png';
import cards from '~/assets/blueprintjs_flutter/cards.png';
import colorsLarge from '~/assets/blueprintjs_flutter/colors.png';
import colorsPlaceholder from '~/assets/blueprintjs_flutter/colors.png';
import colors from '~/assets/blueprintjs_flutter/colors.png';
import dialogLarge from '~/assets/blueprintjs_flutter/dialog.png';
import dialogPlaceholder from '~/assets/blueprintjs_flutter/dialog.png';
import dialog from '~/assets/blueprintjs_flutter/dialog.png';
import form1Large from '~/assets/blueprintjs_flutter/form1.png';
import form1Placeholder from '~/assets/blueprintjs_flutter/form1.png';
import form1 from '~/assets/blueprintjs_flutter/form1.png';
import form2Large from '~/assets/blueprintjs_flutter/form2.png';
import form2Placeholder from '~/assets/blueprintjs_flutter/form2.png';
import form2 from '~/assets/blueprintjs_flutter/form2.png';
import popoversLarge from '~/assets/blueprintjs_flutter/popovers.png';
import popoversPlaceholder from '~/assets/blueprintjs_flutter/popovers.png';
import popovers from '~/assets/blueprintjs_flutter/popovers.png';
import progressBarsLarge from '~/assets/blueprintjs_flutter/progress-bars.png';
import progressBarsPlaceholder from '~/assets/blueprintjs_flutter/progress-bars.png';
import progressBars from '~/assets/blueprintjs_flutter/progress-bars.png';
import tableLarge from '~/assets/blueprintjs_flutter/table.png';
import tablePlaceholder from '~/assets/blueprintjs_flutter/table.png';
import table from '~/assets/blueprintjs_flutter/table.png';
import tagsLarge from '~/assets/blueprintjs_flutter/tags.png';
import tagsPlaceholder from '~/assets/blueprintjs_flutter/tags.png';
import tags from '~/assets/blueprintjs_flutter/tags.png';
import treeLarge from '~/assets/blueprintjs_flutter/tree.png';
import treePlaceholder from '~/assets/blueprintjs_flutter/tree.png';
import tree from '~/assets/blueprintjs_flutter/tree.png';
import navbarLarge from '~/assets/blueprintjs_flutter/navbar.png';
import navbarPlaceholder from '~/assets/blueprintjs_flutter/navbar.png';
import navbar from '~/assets/blueprintjs_flutter/navbar.png';
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
import styles from './blueprintjs-flutter.module.css';

const title = 'Blueprint Flutter Components';
const description =
  'A comprehensive Flutter implementation of the Blueprint.js design system. This open-source library recreates Blueprint\'s core components and design language for Flutter applications, featuring 26+ components with pixel-perfect design fidelity and faithful Blueprint.js interactions.';
const roles = ['Flutter', 'Dart', 'Custom Components', 'Open Source'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const BlueprintjsFlutter = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [magnifier, setMagnifier] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    backgroundX: 0,
    backgroundY: 0,
    currentImage: null
  });

  const headerSection = useRef();
  const introSection = useRef();
  const componentsSection = useRef();
  const featuresSection = useRef();

  const sections = [
    headerSection,
    introSection,
    componentsSection,
    featuresSection,
  ];

  useEffect(() => {
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

  const sidebarImages = [
    {
      src: colorsLarge,
      alt: "Blueprint Flutter: Complete color palette and theme system with Blueprint.js fidelity."
    },
    {
      src: tableLarge,
      alt: "Blueprint Flutter: Data tables with sorting, selection, and perfect alignment."
    }
  ];

  const handleImageClick = (imageSrc, alt) => {
    setSelectedImage({ src: imageSrc, alt });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleMouseMove = (e, imageSrc, largeImageSrc = null) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const backgroundX = (x / rect.width) * 100;
    const backgroundY = (y / rect.height) * 100;
    
    // Use the large version for magnification if available
    const magnifyImage = largeImageSrc || imageSrc;
    
    setMagnifier({
      isVisible: true,
      x: e.clientX,
      y: e.clientY,
      backgroundX,
      backgroundY,
      currentImage: magnifyImage
    });
  };

  const handleMouseLeave = () => {
    setMagnifier(prev => ({ ...prev, isVisible: false }));
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <Fragment>
      <ProjectContainer className={styles.blueprintFlutter}>
        <ProjectBackground
          src={homeLarge}
          srcSet={`${homeLarge} 1280w, ${homeLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={homePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/julesmeister/blueprintjs_flutter"
          linkLabel="View on GitHub"
          roles={roles}
          ref={headerSection}
        />
        
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
            <div className={styles.timelineContainer}>
              <div className={styles.timelineSteps}>
                <div className={styles.timelineStep} data-step="1">
                  <div className={styles.stepNumber}>1</div>
                  <div 
                    className={styles.timelineImage} 
                    onClick={() => handleImageClick(home, "Comprehensive component gallery with 26+ Flutter components")}
                    onMouseMove={(e) => handleMouseMove(e, home, home)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      srcSet={`${home} 600w, ${home} 1200w`}
                      width={600}
                      height={400}
                      placeholder={home}
                      alt="Comprehensive component gallery with 26+ Flutter components"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>Explore Components</h3>
                    <p>Start with our comprehensive library of 26+ Flutter components that faithfully recreate the Blueprint.js design system. Each component maintains pixel-perfect styling and interactions.</p>
                  </div>
                </div>
                
                <div className={styles.timelineStep} data-step="2">
                  <div className={styles.stepNumber}>2</div>
                  <div 
                    className={styles.timelineImage} 
                    onClick={() => handleImageClick(cards, "Interactive cards with elevation, hover effects, and Blueprint styling")}
                    onMouseMove={(e) => handleMouseMove(e, cards, cards)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      srcSet={`${cards} 600w, ${cards} 1200w`}
                      width={600}
                      height={400}
                      placeholder={cards}
                      alt="Interactive cards with elevation, hover effects, and Blueprint styling"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>Interactive Elements</h3>
                    <p>Build engaging interfaces with interactive cards, buttons, and navigation components. All components support intent-based theming and Flutter best practices.</p>
                  </div>
                </div>
                
                <div className={styles.timelineStep} data-step="3">
                  <div className={styles.stepNumber}>3</div>
                  <div 
                    className={styles.timelineImage} 
                    onClick={() => handleImageClick(form1, "Form controls with input fields, checkboxes, and select components")}
                    onMouseMove={(e) => handleMouseMove(e, form1, form1)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      srcSet={`${form1} 600w, ${form1} 1200w`}
                      width={600}
                      height={400}
                      placeholder={form1}
                      alt="Form controls with input fields, checkboxes, and select components"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>Form Controls</h3>
                    <p>Create powerful forms with Blueprint's signature input fields, checkboxes, radio buttons, and select dropdowns, all with consistent styling and validation states.</p>
                  </div>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={componentsSection}>
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
                  onMouseMove={(e) => handleMouseMove(e, dialog, dialog)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    srcSet={`${dialog} 500w, ${dialog} 1000w`}
                    width={500}
                    height={350}
                    placeholder={dialog}
                    alt="Modal dialogs with perfect header alignment and Blueprint styling"
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
                  onMouseMove={(e) => handleMouseMove(e, table, table)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    srcSet={`${table} 500w, ${table} 1000w`}
                    width={500}
                    height={350}
                    placeholder={table}
                    alt="Data tables with sorting, selection, and perfect alignment"
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
                  onMouseMove={(e) => handleMouseMove(e, navbar, navbar)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    srcSet={`${navbar} 500w, ${navbar} 1000w`}
                    width={500}
                    height={350}
                    placeholder={navbar}
                    alt="Navigation bars with groups, alignments, and Blueprint styling"
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
    
        <ProjectSection ref={featuresSection}>
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
                  onMouseMove={(e) => handleMouseMove(e, img.src, img.src)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    className={styles.sidebarImage}
                    srcSet={`${img.src} 350w, ${img.src} 700w`}
                    width={350}
                    height={750}
                    placeholder={img.src}
                    alt={img.alt}
                    sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                  />
                </div>
              ))}
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className={styles.modalImage}
            />
            <p className={styles.modalCaption}>{selectedImage.alt}</p>
          </div>
        </div>
      )}
      
      {/* Magnifying Glass */}
      {magnifier.isVisible && (
        <div 
          className={styles.magnifier}
          style={{
            left: magnifier.x - 90,
            top: magnifier.y - 90,
            backgroundImage: `url(${magnifier.currentImage})`,
            backgroundPosition: `${magnifier.backgroundX}% ${magnifier.backgroundY}%`
          }}
        />
      )}
      
      <Footer />
    </Fragment>
  );
};