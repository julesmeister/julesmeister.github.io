import electionalImg from '~/assets/orbitandchill/electional.png';
import natalChartImg from '~/assets/orbitandchill/Screenshot 2025-08-18 195310.png';
import photo1 from '~/assets/orbitandchill/photo_1_2025-08-18_18-13-46.jpg';
import photo3 from '~/assets/orbitandchill/photo_3_2025-08-18_18-13-46.jpg';
import photo4 from '~/assets/orbitandchill/photo_4_2025-08-18_18-13-46.jpg';
import photo5 from '~/assets/orbitandchill/photo_5_2025-08-18_18-13-46.jpg';
import photo6 from '~/assets/orbitandchill/photo_6_2025-08-18_18-13-46.jpg';
import photo7 from '~/assets/orbitandchill/photo_7_2025-08-18_18-13-46.jpg';

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
import styles from './orbitandchill.module.css';

// Project configuration
const projectConfig = {
  title: 'Orbit and Chill',
  description: 'A modern astrology platform combining precise natal chart generation with community engagement. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring free natal chart generation, location search, user persistence, and a comprehensive forum system with threaded discussions.',
  roles: ['Next.js', 'TypeScript', 'TurboDB', 'Astrology'],
  url: 'https://orbitandchill.com',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/julesmeister/orbit-and-chill',
  secondaryLinkLabel: 'View on Github',
  backgroundImage: photo1,
  sectionNames: ['header', 'intro', 'features', 'natal-chart', 'tech-stack']
};

// Timeline steps data
const timelineSteps = [
  createTimelineStep(1, photo7, 'Explore Tools', 'Start with our free natal chart calculator and comprehensive astrology toolkit. Access powerful features designed for both beginners and experienced practitioners.'),
  createTimelineStep(2, photo1, 'Learn & Connect', 'Access featured articles and cosmic wisdom from astrology experts. Join our vibrant community to discuss insights and share your astrological journey.'),
  createTimelineStep(3, photo5, 'Matrix Destiny', 'Explore matrix destiny charts using numerological calculations based on your birth date. This alternative system reveals life patterns and spiritual insights through sacred number combinations.')
];

// Advanced features data
const advancedFeatures = [
  createFeatureCard(4, photo6, 'Chart Interpretation', 'Unlock deep insights with comprehensive personality analysis, stellium details, and astrological meanings'),
  createFeatureCard(5, photo4, 'Community Discussions', 'Connect with fellow astrology enthusiasts, share insights, and explore cosmic wisdom together'),
  createFeatureCard(6, photo3, 'Optimal Timing', 'Make decisions with confidence using 24-hour planetary schedules and electional astrology guidance')
];

// Sidebar images for tech stack section
const sidebarImages = [
  { src: electionalImg, alt: 'Orbit and Chill: Electional astrology calendar for planning optimal timing of events' },
  { src: photo5, alt: 'Orbit and Chill: Detailed natal chart with birth information and sharing capabilities' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const OrbitAndChill = () => {
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
      <ProjectContainer className={styles.orbitandchill}>
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
              Orbit and Chill combines precise astronomical calculations with modern web technologies to deliver a comprehensive astrology platform. The application features free natal chart generation using the astronomy-engine library, providing ±1 arcminute precision for professional-grade accuracy.
            </ProjectSectionText>
            <div className={styles.featureFlow}>
              <div className={styles.featureCard} data-feature="interpretation">
                <div className={styles.featureNumber}>4</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(photo6, "Chart Interpretation")}
                  onMouseMove={(e) => handleMouseMove(e, photo6)}
                  onMouseEnter={(e) => handleMouseEnter(e, photo6)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(photo6, "Chart Interpretation", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Chart Interpretation</h4>
                  <p>Unlock deep insights with comprehensive personality analysis, stellium details, and astrological meanings</p>
                </div>
              </div>
              
              <div className={styles.featureCard} data-feature="community">
                <div className={styles.featureNumber}>5</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(photo4, "Community Discussions")}
                  onMouseMove={(e) => handleMouseMove(e, photo4)}
                  onMouseEnter={(e) => handleMouseEnter(e, photo4)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(photo4, "Community Discussions", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Community Discussions</h4>
                  <p>Connect with fellow astrology enthusiasts, share insights, and explore cosmic wisdom together</p>
                </div>
              </div>
              
              <div className={styles.featureCard} data-feature="timing">
                <div className={styles.featureNumber}>6</div>
                <div 
                  className={styles.featureImageWrapper}
                  onClick={() => handleImageClick(photo3, "Optimal Timing")}
                  onMouseMove={(e) => handleMouseMove(e, photo3)}
                  onMouseEnter={(e) => handleMouseEnter(e, photo3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    {...createImageVariants(photo3, "Optimal Timing", { width: 500, height: 350 })}
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>
                <div className={styles.featureContent}>
                  <h4>Optimal Timing</h4>
                  <p>Make decisions with confidence using 24-hour planetary schedules and electional astrology guidance</p>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
    
        <ProjectSection ref={sectionRefs['natal-chart']}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Natal Chart Generation</ProjectSectionHeading>
            <ProjectSectionText>
              At the heart of Orbit and Chill is our professional-grade natal chart generator. This comprehensive astrological chart maps the exact positions of celestial bodies at the moment of birth, providing deep insights into personality traits, life patterns, and cosmic influences.
            </ProjectSectionText>
            <div 
              className={styles.natalChartContainer}
              onClick={() => handleImageClick(natalChartImg, "Professional natal chart showing planetary positions, houses, and astrological aspects")}
            >
              <Image
                className={styles.natalChart}
                {...createImageVariants(natalChartImg, "Professional natal chart showing planetary positions, houses, and astrological aspects", { width: 800, height: 600 })}
                sizes="(max-width: 768px) 95vw, 80vw"
              />
            </div>
            <ProjectSectionText>
              Each natal chart includes detailed planetary placements, house positions, and aspect patterns, calculated with ±1 arcminute precision using advanced astronomical algorithms. The interactive visualization allows users to explore their cosmic blueprint and understand the astrological influences that shape their lives.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection ref={sectionRefs['tech-stack']}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Technology Stack</ProjectSectionHeading>
              <ProjectSectionText>
                Built with Next.js 15 and TypeScript for robust frontend architecture, the platform leverages Tailwind CSS 4.1 for modern styling and Zustand for efficient state management. The backend utilizes TurboDB for fast data operations and the astronomy-engine library for precise chart calculations.
              </ProjectSectionText>
              <ProjectSectionText>
                Key features include free natal chart generation with ±1 arcminute precision, electional astrology for optimal timing, comprehensive chart interpretation with personality analysis, and a vibrant community forum. The platform offers anonymous user persistence, intelligent location search, and features like 24-hour planetary schedules and detailed stellium analysis.
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