/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import dashboard from '~/assets/deutschcraft/dashboard.png';
import flashcardCategories from '~/assets/deutschcraft/flashcard-categories.png';
import flashcardPractice from '~/assets/deutschcraft/flashcard-practice.png';
import writingExercises from '~/assets/deutschcraft/writing-exercises.png';
import writingInterface from '~/assets/deutschcraft/writing-interface.png';
import grammarPractice from '~/assets/deutschcraft/grammar-practice.png';
import answerHub from '~/assets/deutschcraft/answer-hub.png';
import exerciseDetail from '~/assets/deutschcraft/exercise-detail.png';
import socialFeed from '~/assets/deutschcraft/social-feed.png';
import liveClassroom from '~/assets/deutschcraft/live-classroom.png';
import pacmanGame from '~/assets/deutschcraft/pacman-game.png';
import achievements from '~/assets/deutschcraft/achievements.png';
import dictionary from '~/assets/deutschcraft/dictionary.png';
import syllabus from '~/assets/deutschcraft/syllabus.png';

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
import styles from './deutschcraft.module.css';

// Project configuration
const projectConfig = {
  title: 'DeutschCraft',
  description: 'A comprehensive German language learning platform featuring spaced-repetition flashcards across 25+ vocabulary categories, writing exercises with CEFR-leveled prompts, grammar practice with translation drills, an Answer Hub for Schritte textbook exercises, live voice classrooms, social feed with peer corrections, and gamified Der Die Das practice with a Pacman-style game.',
  roles: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
  url: 'https://github.com/julesmeister/deutschcraft',
  linkLabel: 'View on GitHub',
  backgroundImage: dashboard,
  sectionNames: ['header', 'intro', 'features', 'dashboard', 'tech-stack']
};

// Timeline steps data for main learning flow
const timelineSteps = [
  createTimelineStep(1, dashboard, 'Student Dashboard', 'Central hub showing 3,375+ words learned, mastery stats, weekly progress charts, daily goals, and quick access to Practice, Write, Review, and Social sections. Quick Practice with fill-in-the-blank exercises keeps vocabulary sharp.'),
  createTimelineStep(2, flashcardCategories, 'Vocabulary Categories', 'B1-level vocabulary organized into 25+ categories including Abstract Concepts, Adjectives, Adverbs, General Verbs, Separable Verbs, and more. Each card shows due count, total cards, and completion status with color-coded progress bars.'),
  createTimelineStep(3, flashcardPractice, 'Flashcard Practice', 'Interactive spaced-repetition flashcards with English-to-German translation. Rate knowledge as Forgotten, Hard, Good, Easy, or Expert. Bookmark words, track mastery percentage, and navigate with keyboard shortcuts.')
];

// Feature cards data
const featureCards = [
  createFeatureCard(4, writingExercises, 'Writing Exercises', '282 completed exercises across CEFR levels A1-C2 with 92% average score. Choose from Creative Writing, Translation, Email Writing, Letter Writing, and Freestyle. Track recent submissions with review status and word counts.'),
  createFeatureCard(5, writingInterface, 'Writing Interface', 'Rich writing editor with task instructions, grammar focus tags (Perfect tense, Time expressions), vocabulary suggestions, and writing tips. Draft or submit directly with word count tracking and Redemittel reference panel.'),
  createFeatureCard(6, grammarPractice, 'Grammar Practice', 'Interactive grammar drills like "Negation with kein" — translate English sentences to German with instant correctness feedback. Rate difficulty with spaced-repetition controls and progress through 10-question sessions.'),
  createFeatureCard(7, answerHub, 'Answer Hub', 'Practice Schritte International Neu textbook exercises organized by Lektion (1-14) with completion tracking. View exercise counts, progress percentages, and practice all exercises or individual lessons across CEFR levels.'),
  createFeatureCard(8, exerciseDetail, 'Exercise Detail', 'Individual exercise view with audio attachments for listening practice, multiple answer items, "Copy for AI" functionality, discussion threads with batch-mates, and built-in dictionary lookup. Supports audio playback for pronunciation.'),
  createFeatureCard(9, socialFeed, 'Social Feed', 'Community practice space where students post in German and receive peer corrections. Teacher dashboard shows teaching impact stats, common mistake patterns (article usage, verb conjugation, word order), and suggested topics.'),
  createFeatureCard(10, liveClassroom, 'Live Classroom', 'Real-time voice and video sessions with teacher controls (Mute, Cam, Stop), layout options (Teacher, Gallery, Left, Right), shared writing board, classroom tools (Dice, Groups, Picker, Timer, Score), and exercise/material sharing.'),
  createFeatureCard(11, pacmanGame, 'Der Die Das Pacman', 'Gamified German noun gender learning — control Pacman to eat the correct article (der/die/das) for word endings like -ig, -er, -um. Tracks score, correct/wrong answers, streak, and endings learned with lives system.'),
  createFeatureCard(12, achievements, 'Learning Progress', 'Detailed progress tracking with 3,531 total cards, 2,432 mastered, 81% accuracy. Category breakdown shows completion per topic (Separable Verbs 92%, Adjectives 95%, Technology 100%). Session history with accuracy and duration.')
];

// Sidebar images
const sidebarImages = [
  { src: dictionary, alt: 'DeutschCraft: German-English dictionary with 5,862+ entries, bidirectional search, and detailed translations including conjugations and usage context' },
  { src: syllabus, alt: 'DeutschCraft: Comprehensive German language syllabus from A1 to C2 with grammar topics, vocabulary themes, communication skills, and weekly study schedule mapped to Schritte textbook' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const DeutschCraft = () => {
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
      <ProjectContainer className={styles.deutschcraft}>
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
            <ProjectSectionHeading>Comprehensive Learning Suite</ProjectSectionHeading>
            <ProjectSectionText>
              DeutschCraft combines proven language learning methodologies with modern web technologies. From spaced-repetition flashcards and grammar drills to live voice classrooms and gamified article practice, every feature is designed to accelerate German fluency across all CEFR levels from A1 to C2.
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
                      {...createImageVariants(card.image, card.title, { width: 500, height: 350 })}
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

        <ProjectSection ref={sectionRefs.dashboard}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Built for Language Learners</ProjectSectionHeading>
              <ProjectSectionText>
                DeutschCraft evolved from Testmanship Web V2 into a full-featured German learning platform. The dictionary provides instant access to 5,862+ German-English translations with bidirectional search. The structured syllabus maps grammar topics, vocabulary themes, and communication skills to the Schritte International Neu textbook series with weekly study schedules.
              </ProjectSectionText>
              <ProjectSectionText>
                The platform supports both self-study and teacher-led learning. Teachers can create live voice rooms with shared writing boards, classroom tools, and exercise materials. The social feed enables peer corrections with teaching impact tracking. Firebase powers real-time synchronization across all features with robust offline support.
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
            <ProjectSectionHeading>Modern Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Built with Next.js 15 using the App Router for optimal performance and SEO. TypeScript ensures type safety throughout the codebase. Tailwind CSS 4 powers the responsive design with smooth animations via Framer Motion. Firebase provides real-time database synchronization and authentication, while Turso adds local-first database capabilities for the dictionary.
            </ProjectSectionText>
            <ProjectSectionText>
              The platform leverages TanStack Query for efficient data fetching, TipTap for the rich text editor, and ApexCharts for analytics visualizations. Live voice sessions use WebRTC for low-latency audio/video. The gamified Der Die Das modes combine Canvas animations with spaced-repetition algorithms for an engaging learning experience.
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
