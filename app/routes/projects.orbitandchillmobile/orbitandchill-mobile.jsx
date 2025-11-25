/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import synastryImg from '~/assets/orbitandchill_mobile/synastry.jpg';
import aspectsImg from '~/assets/orbitandchill_mobile/aspects.jpg';
import qualitiesImg from '~/assets/orbitandchill_mobile/qualities.jpg';
import natalChartImg from '~/assets/orbitandchill_mobile/natal-chart.jpg';
import matrixImg from '~/assets/orbitandchill_mobile/matrix.jpg';

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
import styles from './orbitandchill-mobile.module.css';

// Project configuration
const projectConfig = {
  title: 'Orbit and Chill Mobile',
  description: 'A powerful Android astrology app for your tablet. Get accurate birth charts with 15 celestial bodies, check relationship compatibility, explore Matrix of Destiny readings, and track moon phases. Built with Jetpack Compose for smooth, beautiful charts that load instantly. Perfect for astrology enthusiasts who want professional insights on the go.',
  roles: ['Jetpack Compose', 'Kotlin', 'Android', 'Astrology'],
  url: 'https://orbitandchill.com',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/julesmeister/Orbit-and-Chill-Mobile',
  secondaryLinkLabel: 'View on Github',
  backgroundImage: natalChartImg,
  sectionNames: ['header', 'intro', 'features', 'matrix', 'tech-stack']
};

// Timeline steps data
const timelineSteps = [
  createTimelineStep(1, natalChartImg, 'Birth Charts That Make Sense', 'Create your natal chart with all 10 planets plus important points like your North Node and Lilith. Tap any planet to learn what it means for you. Charts are super accurate and look beautiful on your tablet screen.'),
  createTimelineStep(2, aspectsImg, 'Understand Your Patterns', 'See how planets in your chart connect to each other. The app shows which connections are helpful (harmonious) and which ones create tension (challenging). Filter by any planet to focus on what matters to you.'),
  createTimelineStep(3, qualitiesImg, 'Deep Dive Into Placements', 'Learn where each planet sits in your chart - which zodiac sign, which house, and whether it\'s strong or weak there. Includes retrogrades and special positions that make your chart unique.')
];

// Advanced features data
const advancedFeatures = [
  createFeatureCard(4, synastryImg, 'Check Your Compatibility', 'Compare two birth charts to see how compatible you are. The app looks at your Venus (how you love), Moon (your emotions), and other key points to show where you click and where you might clash. Great for relationships, friendships, or just understanding your connections better.'),
  createFeatureCard(5, matrixImg, 'Matrix of Destiny', 'Explore your life path through the Matrix of Destiny - a mystical system using tarot cards mapped to your birth date. Tap any number on the colorful chart to discover what it means for your current life stage, relationships, career, and spiritual journey.')
];

// Sidebar images for tech stack section
const sidebarImages = [
  { src: matrixImg, alt: 'Matrix of Destiny chart with colorful numbers and tarot meanings' },
  { src: synastryImg, alt: 'Synastry chart comparing two people for relationship compatibility' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const OrbitAndChillMobile = () => {
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
      <ProjectContainer className={styles.orbitandchillmobile}>
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
                        {...createImageVariants(step.image, step.title, { width: 800, height: 600 })}
                        sizes="(max-width: 768px) 90vw, 800px"
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
            <ProjectSectionHeading>More Cool Features</ProjectSectionHeading>
            <ProjectSectionText>
              Beyond basic birth charts, the app offers powerful tools for deeper exploration. Check compatibility with anyone in your life, explore mystical divination systems, and get easy-to-understand interpretations written in plain English. Everything loads fast and looks gorgeous on your Android tablet.
            </ProjectSectionText>
            <div className={styles.featureFlow}>
              {advancedFeatures.map((feature) => (
                <div key={feature.featureNumber} className={styles.featureCard} data-feature="synastry">
                  <div className={styles.featureNumber}>{feature.featureNumber}</div>
                  <div
                    className={styles.featureImageWrapper}
                    onClick={() => handleImageClick(feature.image, feature.title)}
                    onMouseMove={(e) => handleMouseMove(e, feature.image)}
                    onMouseEnter={(e) => handleMouseEnter(e, feature.image)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      {...createImageVariants(feature.image, feature.title, { width: 800, height: 600 })}
                      sizes="(max-width: 768px) 85vw, 600px"
                    />
                  </div>
                  <div className={styles.featureContent}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={sectionRefs.matrix}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Matrix of Destiny</ProjectSectionHeading>
            <ProjectSectionText>
              This feature adds a whole new dimension to your astrological insights. The Matrix of Destiny uses 22 tarot cards arranged in a special pattern based on your birth date. Each position reveals something different about your life - your talents, challenges, relationships, and spiritual path.
            </ProjectSectionText>
            <div
              className={styles.nativeExperienceContainer}
              onClick={() => handleImageClick(matrixImg, "Matrix of Destiny chart with interactive tarot positions")}
              onMouseMove={(e) => handleMouseMove(e, matrixImg)}
              onMouseEnter={(e) => handleMouseEnter(e, matrixImg)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                className={styles.nativeExperienceImage}
                {...createImageVariants(matrixImg, "Matrix of Destiny chart with interactive tarot positions", { width: 800, height: 600 })}
                sizes="(max-width: 768px) 95vw, 800px"
              />
            </div>
            <ProjectSectionText>
              Tap any of the 33 colored circles to jump straight to its meaning. The app automatically scrolls to show you detailed interpretations in simple language. You'll also find moon tracking features that show lunar phases, best times for different activities, and even magical correspondences if you're into that sort of thing.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={sectionRefs['tech-stack']}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Built for Android Tablets</ProjectSectionHeading>
              <ProjectSectionText>
                The app is built with Jetpack Compose, giving it that smooth, modern Android feel. Charts load instantly because I rebuilt the rendering engine from scratch - they're 90% faster than before. Everything is optimized for tablets like the Huawei MatePad, so you get the full experience on a nice big screen.
              </ProjectSectionText>
              <ProjectSectionText>
                Under the hood, it uses the same astronomy calculations as professional software, so the charts are super accurate. I've also written over 700 interpretations in plain English - no confusing astrology jargon. Whether you're checking your chart, comparing compatibility, or exploring the Matrix, everything just works smoothly.
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
                    {...createImageVariants(img.src, img.alt, { width: 600, height: 450 })}
                    sizes={`(max-width: ${media.mobile}px) 300px, 600px`}
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
