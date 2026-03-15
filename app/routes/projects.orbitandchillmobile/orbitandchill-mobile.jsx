/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import natalChart from '~/assets/orbitandchill_mobile/natal-chart.jpg';
import aspects from '~/assets/orbitandchill_mobile/aspects.jpg';
import qualities from '~/assets/orbitandchill_mobile/qualities.jpg';
import synastryChart from '~/assets/orbitandchill_mobile/synastry-chart.jpg';
import synastryCompatibility from '~/assets/orbitandchill_mobile/synastry-compatibility.jpg';
import matrix from '~/assets/orbitandchill_mobile/matrix.jpg';
import humanDesign from '~/assets/orbitandchill_mobile/human-design.jpg';
import lifeStory from '~/assets/orbitandchill_mobile/life-story.jpg';
import profections from '~/assets/orbitandchill_mobile/profections.jpg';
import moonMagic from '~/assets/orbitandchill_mobile/moon-magic.jpg';
import moonTransits from '~/assets/orbitandchill_mobile/moon-transits.jpg';
import electional from '~/assets/orbitandchill_mobile/electional.jpg';
import planetaryHours from '~/assets/orbitandchill_mobile/planetary-hours.jpg';
import persons from '~/assets/orbitandchill_mobile/persons.jpg';
import timeTab from '~/assets/orbitandchill_mobile/time-tab.jpg';

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
  description: 'A professional-grade Android astrology app built with Jetpack Compose and Kotlin. Features accurate natal charts with 15 celestial bodies, synastry compatibility analysis, Matrix of Destiny divination, Human Design bodygraph, annual profections, planetary hours, electional astrology, and real-time moon phase tracking.',
  roles: ['Jetpack Compose', 'Kotlin', 'Android', 'Astrology'],
  url: 'https://orbitandchill.com',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/julesmeister/Orbit-and-Chill-Mobile',
  secondaryLinkLabel: 'View on Github',
  backgroundImage: natalChart,
  sectionNames: ['header', 'intro', 'features', 'advanced', 'tech-stack']
};

// Timeline steps data - core chart features
const timelineSteps = [
  createTimelineStep(1, natalChart, 'Natal Chart & Transits', 'Full birth chart with inner ring (natal positions) and outer ring (current transits). Transit Navigator lets you scrub through time — 24 hours to 20 years — to see how planets move. Solar Return jumps to your birthday chart instantly.'),
  createTimelineStep(2, qualities, 'Planet Placements', 'Every planet listed with zodiac sign, exact degree, house position, and dignity status (Exalted, Domicile, Detriment, Fall). Color-coded rows make it easy to spot strengths and challenges at a glance.'),
  createTimelineStep(3, aspects, 'Aspects & Filters', 'Interactive aspect chart showing Conjunctions, Oppositions, Trines, Squares, and Sextiles with counts. Filter by any planet to isolate its connections. Toggle between Celestial and Matrix aspect views.')
];

// Feature cards data - expanded features
const featureCards = [
  createFeatureCard(4, synastryCompatibility, 'Synastry Compatibility', 'Compare two birth charts with an overall compatibility percentage. Add meeting info for electional insights. Toggle between Compatibility overview and detailed Aspects analysis to understand relationship dynamics.'),
  createFeatureCard(5, synastryChart, 'Synastry Aspects', 'Dual-ring synastry chart overlaying two natal charts. Filter aspects by planet (Sun through Pluto) and aspect type. See exactly how your planets interact with another person\'s chart for deep relationship insights.'),
  createFeatureCard(6, matrix, 'Matrix of Destiny', 'Mystical divination system using 22 tarot arcana mapped to your birth date. Tap any of the 33 numbered circles to reveal life path meanings — talents, challenges, karma, and spiritual purpose arranged in an intricate geometric pattern.'),
  createFeatureCard(7, humanDesign, 'Human Design', 'Complete bodygraph showing defined and undefined centers, gates, and channels. Design (unconscious) and Personality (conscious) columns display planetary positions with line numbers. Visual body silhouette maps energy flow.'),
  createFeatureCard(8, lifeStory, 'Life Story', 'Deep interpretations of your chart ruler and key placements. "Your Life Direction" reveals how Mercury in House 6 as Chart Ruler (Gemini Rising) shapes your path toward service, health, and daily routines. Written in plain English, not jargon.'),
  createFeatureCard(9, profections, 'Annual Profections', 'Track your current profection year showing profected sign, house, and rising sign. Year Progress bar shows where you are in the cycle. Time Lord reveals which planet rules your year. Full 12-year profection cycle at a glance.'),
  createFeatureCard(10, moonMagic, 'Moon Phase Magic', 'Current moon phase with illumination percentage and zodiac sign. Correspondences tab reveals magical associations for each phase — from New Moon (setting intentions) through Full Moon (manifestation) and beyond.'),
  createFeatureCard(11, moonTransits, 'Moon Sign Transits', 'Upcoming moon sign changes with exact dates and times. Track when the Moon moves through Aquarius, Pisces, Aries, and beyond. Calendar view for planning activities aligned with lunar energy.'),
  createFeatureCard(12, electional, 'Electional Astrology', 'Find the perfect timing for important life events. Choose your goal — Launch Something, Career Move, Romance, Sign Contract, Real Estate, Medical, Travel, Creative Work, Social Event — and get optimal timing based on planetary transits.'),
  createFeatureCard(13, planetaryHours, 'Planetary Hours', 'Traditional Chaldean planetary hour calculator showing current ruling planet with countdown timer. Sunrise/sunset times, day ruler, and complete hour-by-hour schedule with planet meanings for timing decisions.'),
  createFeatureCard(14, persons, 'Persons Management', 'Save multiple birth profiles with names, dates, and exact birth times. Alphabetically organized with quick-add button. Switch between saved persons to instantly view any chart, compare synastry, or check compatibility.')
];

// Sidebar images
const sidebarImages = [
  { src: timeTab, alt: 'Orbit and Chill Mobile: Time tab showing planetary hours overview with current Mercury hour, electional astrology access, and 13 saved persons' },
  { src: profections, alt: 'Orbit and Chill Mobile: Annual profections showing Age 0 in 1st profection year with Capricorn rising, Saturn as Time Lord, and 12-year cycle overview' }
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
          secondaryUrl={projectConfig.secondaryUrl}
          secondaryLinkLabel={projectConfig.secondaryLinkLabel}
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
            <ProjectSectionHeading>Complete Astrology Toolkit</ProjectSectionHeading>
            <ProjectSectionText>
              Beyond natal charts, Orbit and Chill Mobile offers a comprehensive suite of astrological tools. From relationship compatibility and life path readings to timing tools and mystical systems like Matrix of Destiny and Human Design — everything loads instantly with beautiful visualizations optimized for Android phones.
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

        <ProjectSection ref={sectionRefs.advanced}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Built Native for Android</ProjectSectionHeading>
              <ProjectSectionText>
                The app is built with Jetpack Compose, delivering that smooth, modern Android feel. Charts render instantly using a custom engine rebuilt from scratch — 90% faster than the previous version. All astronomical calculations match professional software accuracy with 15 celestial bodies tracked.
              </ProjectSectionText>
              <ProjectSectionText>
                Over 700 interpretations written in plain English cover natal placements, aspects, life story narratives, and Matrix of Destiny meanings. Human Design bodygraph calculations include gates, channels, and defined/undefined centers. Planetary hours follow the traditional Chaldean order with real-time countdown timers.
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
              Built with Kotlin and Jetpack Compose for a fully native Android experience. The custom chart rendering engine uses Canvas APIs for pixel-perfect astrological wheels with smooth pinch-to-zoom and rotation. Kotlin coroutines handle complex astronomical calculations off the main thread for a consistently smooth 60fps UI.
            </ProjectSectionText>
            <ProjectSectionText>
              The app supports offline usage with pre-computed ephemeris data for accurate planetary positions. Material Design 3 theming provides a cohesive purple-accented look across all screens. Navigation between the five main tabs — Chart, Persons, Moon, Synastry, and Time — uses Compose Navigation with fluid shared element transitions.
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
