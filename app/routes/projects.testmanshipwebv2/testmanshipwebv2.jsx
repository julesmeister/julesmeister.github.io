/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import hero from '~/assets/testmanship_web_v2/hero.png';
import featuresTestimonials from '~/assets/testmanship_web_v2/features-testimonials.png';
import teacherDashboard from '~/assets/testmanship_web_v2/teacher-dashboard.png';
import studentDashboard from '~/assets/testmanship_web_v2/student-dashboard.png';
import flashcards from '~/assets/testmanship_web_v2/flashcards.png';
import flashcardPractice from '~/assets/testmanship_web_v2/flashcard-practice.png';
import writingExercises from '~/assets/testmanship_web_v2/writing-exercises.png';
import writingInterface from '~/assets/testmanship_web_v2/writing-interface.png';
import writingFeedback from '~/assets/testmanship_web_v2/writing-feedback.png';
import germanSyllabus from '~/assets/testmanship_web_v2/german-syllabus.png';

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
import styles from './testmanshipwebv2.module.css';

// Project configuration
const projectConfig = {
  title: 'Testmanship Web V2',
  description: 'A modern German language learning platform built with Next.js 15, featuring spaced-repetition flashcards across 24 vocabulary categories, comprehensive writing exercises with 165+ prompts, live voice sessions for real-time practice, and a powerful teacher dashboard for monitoring student progress across CEFR levels A1-C2.',
  roles: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
  url: 'https://github.com/julesmeister/testmanship-web-v2',
  linkLabel: 'View on GitHub',
  backgroundImage: hero,
  sectionNames: ['header', 'intro', 'features', 'dashboard', 'tech-stack']
};

// Timeline steps data for main learning flow
const timelineSteps = [
  createTimelineStep(1, studentDashboard, 'Student Dashboard', 'Track your learning journey with comprehensive statistics including words learned, current streak, writing exercises completed, and CEFR level progression from A1 to C2.'),
  createTimelineStep(2, flashcards, 'Vocabulary Categories', 'Access 820+ flashcards organized into 24 categories including adjectives, verbs, family, food, and more. Each category supports all CEFR levels with intelligent spaced-repetition algorithms.'),
  createTimelineStep(3, flashcardPractice, 'Interactive Flashcards', 'Practice German vocabulary with an intuitive flashcard interface. Click to reveal translations, rate your knowledge level, and let the spaced-repetition algorithm optimize your learning schedule.')
];

// Feature cards data for advanced capabilities
const featureCards = [
  createFeatureCard(4, writingExercises, 'Writing Exercises', '165+ comprehensive writing prompts across all CEFR levels. Practice creative writing, translation, email composition, and more with structured exercises ranging from 12-15 minutes each.'),
  createFeatureCard(5, writingInterface, 'Rich Text Editor', 'Write your German translations with a powerful editor featuring hints, reference answers, and helpful tips. Submit completed work for teacher review and track your progress over time.'),
  createFeatureCard(6, writingFeedback, 'Teacher Feedback System', 'Receive detailed feedback on your writing with overall scores (grammar, vocabulary, coherence), strengths, areas for improvement, and teacher comments. Track your progress with assessment history and approval status.'),
  createFeatureCard(7, germanSyllabus, 'Structured Curriculum', 'Follow a comprehensive German language syllabus from A1-Beginner to upper-intermediate levels. Organized grammar topics, vocabulary themes, and communication skills with estimated study times and progress tracking.')
];

// Sidebar images for tech stack section
const sidebarImages = [
  { src: teacherDashboard, alt: 'Testmanship Web V2: Teacher dashboard showing student management, level distribution, and quick actions for analytics, messaging, and assignment creation' },
  { src: featuresTestimonials, alt: 'Testmanship Web V2: Landing page featuring comprehensive flashcards, writing evaluation, student tracking, and teacher dashboard capabilities' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const TestmanshipWebV2 = () => {
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
      <ProjectContainer className={styles.testmanshipwebv2}>
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
            <ProjectSectionHeading>Advanced Learning Features</ProjectSectionHeading>
            <ProjectSectionText>
              Testmanship Web V2 combines modern web technologies with proven language learning methodologies. The platform features spaced-repetition flashcards, comprehensive writing exercises with teacher feedback, live voice sessions for pronunciation practice, and real-time progress tracking across CEFR levels A1-C2.
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
              <ProjectSectionHeading>Teacher-Student Collaboration</ProjectSectionHeading>
              <ProjectSectionText>
                The platform features a comprehensive teacher dashboard for monitoring student progress, managing assignments, and providing personalized feedback. Teachers can track student activity, review writing submissions, create custom assignments, and message students directly.
              </ProjectSectionText>
              <ProjectSectionText>
                Built with Firebase for real-time synchronization, the dashboard provides instant insights into student performance metrics, CEFR level distribution, completion rates, and pending reviews. The responsive design ensures seamless access across all devices.
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
              Built with Next.js 15 using the App Router for optimal performance and SEO. TypeScript ensures type safety throughout the codebase. Tailwind CSS 4 powers the beautiful, responsive design with smooth animations via Framer Motion. Firebase provides real-time database synchronization and authentication, while Turso adds local-first database capabilities.
            </ProjectSectionText>
            <ProjectSectionText>
              The platform leverages TanStack Query for efficient data fetching, TipTap for the rich text editor, and ApexCharts for analytics visualizations. The design system is inspired by modern SaaS templates with vibrant colors and heavily animated interactions throughout the user experience.
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
