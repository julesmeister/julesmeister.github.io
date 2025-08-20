/* eslint-disable react/no-unescaped-entities */
import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import testChallengeDarkLarge from '~/assets/Test-Dark.jpg';
import testChallengeDarkPlaceholder from '~/assets/Test-Dark.jpg';
import testChallengeDark from '~/assets/Test-Dark.jpg';
import testChallengeLightLarge from '~/assets/Test.jpg';
import testChallengeLightPlaceholder from '~/assets/Test.jpg';
import testChallengeLight from '~/assets/Test.jpg';
import challengeGeneratorDarkLarge from '~/assets/Challenge-Generator-Dark.png';
import challengeGeneratorDarkPlaceholder from '~/assets/Challenge-Generator-Dark.png';
import challengeGeneratorDark from '~/assets/Challenge-Generator-Dark.png';
import challengeGeneratorLightLarge from '~/assets/Challenge-Generator.png';
import challengeGeneratorLightPlaceholder from '~/assets/Challenge-Generator.png';
import challengeGeneratorLight from '~/assets/Challenge-Generator.png';
import writingComparisonDarkLarge from '~/assets/Writing-Comparison-Dark.png';
import writingComparisonDarkPlaceholder from '~/assets/Writing-Comparison-Dark.png';
import writingComparisonDark from '~/assets/Writing-Comparison-Dark.png';
import writingComparisonLightLarge from '~/assets/Writing-Comparison.png';
import writingComparisonLightPlaceholder from '~/assets/Writing-Comparison.png';
import writingComparisonLight from '~/assets/Writing-Comparison.png';
import testmanshipScreenShotDarkLarge from '~/assets/Testmanship-Dark-Large.jpg';
import testmanshipScreenShotDarkPlaceholder from '~/assets/Testmanship-Dark-Large.jpg';
import testmanshipScreenShotDark from '~/assets/Testmanship-Dark.jpg';
import testmanshipScreenShotLightLarge from '~/assets/Testmanship-Light-Large.jpg';
import testmanshipScreenShotLightPlaceholder from '~/assets/Testmanship-Light-Large.jpg';
import testmanshipScreenShotLight from '~/assets/Testmanship-Light.jpg';
import testExercisesDarkLarge from '~/assets/test-exercises-dark.png';
import testExercisesDarkPlaceholder from '~/assets/test-exercises-dark.png';
import testExercisesDark from '~/assets/test-exercises-dark.png';
import testExercisesLightLarge from '~/assets/test-exercises.png';
import testExercisesLightPlaceholder from '~/assets/test-exercises.png';
import testExercisesLight from '~/assets/test-exercises.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
  ProjectTextRow,
} from '~/layouts/project';
import { List, ListItem } from '~/components/list';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './testmanship.module.css';
import { useState, useEffect, useRef } from 'react';
import { Icon } from '~/components/icon';

const title = 'Testmanship';
const description =
  'I initially thought of this project as a future SaaS, because I saw a demand when I was studying german language and I thought there was a need for a tool that would help people track their progress in writing and speaking German. This web app is basically an AI wrapper as well as a repository for practice tests.';
const roles = [
  'Supabase',
  'Next.js',
  'React',
  'shadcn/ui',
  'Tailwind',
  'Openrouter AI',
  'Vercel',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Testmanship = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for each section
  const headerSection = useRef();
  const introSection = useRef();
  const problemSection = useRef();
  const testSection = useRef();
  const challengeSection = useRef();
  const comparisonSection = useRef();
  const exercisesSection = useRef();

  const sections = [
    headerSection,
    introSection,
    problemSection,
    testSection,
    challengeSection,
    comparisonSection,
    exercisesSection,
  ];

  useEffect(() => {
    // Initialize sections observer only when refs are ready
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

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://testmanship.vercel.app/"
          linkLabel="View website"
          secondaryUrl="https://github.com/julesmeister/testmanship"
          secondaryLinkLabel="View on Github"
          roles={roles}
          ref={headerSection}
        />
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
            <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${testmanshipScreenShotDark} 1280w, ${testmanshipScreenShotDarkLarge} 2560w`
                  : `${testmanshipScreenShotLight} 1280w, ${testmanshipScreenShotLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? testmanshipScreenShotDarkPlaceholder
                  : testmanshipScreenShotLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Testmanship dashboard showing a student's progress"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Upon completing challenges, users are presented with an exercise on their dashboard tailored to their identified weak points, facilitating targeted learning and improvement."
              </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection ref={problemSection}>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              While leveraging Openrouter's AI capabilities, I encountered some limitations. The chosen cost-effective models sometimes generate responses that deviate from the original prompt, which could lead to user confusion. Furthermore, the API occasionally truncates its response, impeding the tool's overall reliability. I have temporarily circumvented these issues by giving the user the option to retry their request. Lastly, the absence of Stripe as a payment gateway in the Philippines has presented a significant challenge.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark} ref={testSection}>
          <ProjectSectionContent>
            <Image
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${testChallengeDark} 1024w, ${testChallengeDarkLarge} 2048w`
                  : `${testChallengeLight} 1024w, ${testChallengeLightLarge} 2048w`
              }
              width={1024}
              height={800}
              placeholder={
                isDark
                  ? testChallengeDarkPlaceholder
                  : testChallengeLightPlaceholder
              }
              alt={`Taking a practice test in Testmanship`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Taking A Test</ProjectSectionHeading>
              <ProjectSectionText>
                There are two types of taking a test: 
                <List>
                  <ListItem>
                  Practice mode allows the user to use AI as a guide to help them know if there's anything they need to improve on their writing. It also gives them suggestions on what to write next if they've been idle for 20 seconds so they don't get stuck.
                  </ListItem>
                  <ListItem>
                  Exam mode only allows the user to take a test without AI assistance and see their evaluation when time is up or when they complete the word count threshold.
                  </ListItem>
                  </List> 
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection ref={challengeSection}>
          <ProjectSectionContent>
            <Image
              key={theme}
              className={styles.themeImage}
              srcSet={
                isDark
                  ? `${challengeGeneratorDark} 1280w, ${challengeGeneratorDarkLarge} 2560w`
                  : `${challengeGeneratorLight} 1280w, ${challengeGeneratorLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? challengeGeneratorDarkPlaceholder
                  : challengeGeneratorLightPlaceholder
              }
              alt={`The challenge generator is utilized to create practice tests when the user doesn't see a specific challenge they prefer to write about in the challenge selection area. Users can either manually create a challenge by typing it themselves or leverage the AI to generate one for them.`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Challenge Generator</ProjectSectionHeading>
              <ProjectSectionText>
              The challenge generator is utilized to create practice tests when the user doesn't see a specific challenge they prefer to write about in the challenge selection area. Users can either manually create a challenge by typing it themselves or leverage the AI to generate one for them. 
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={comparisonSection}>
          <ProjectSectionContent>
            <Image
              key={theme}
              className={styles.themeImage}
              srcSet={
                isDark
                  ? `${writingComparisonDark} 1280w, ${writingComparisonDarkLarge} 2560w`
                  : `${writingComparisonLight} 1280w, ${writingComparisonLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? writingComparisonDarkPlaceholder
                  : writingComparisonLightPlaceholder
              }
              alt="How it looks when a user reviews their writing from a challenge they just completed."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Writing Comparison with AI</ProjectSectionHeading>
              <ProjectSectionText>
              Upon completing a writing challenge, users can review their own writing alongside the AI's generated content. This allows them to identify areas for improvement and refine their writing skills.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={exercisesSection}>
          <ProjectSectionContent>
            <Image
              key={theme}
              className={styles.themeImage}
              srcSet={
                isDark
                  ? `${testExercisesDark} 1280w, ${testExercisesDarkLarge} 2560w`
                  : `${testExercisesLight} 1280w, ${testExercisesLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? testExercisesDarkPlaceholder
                  : testExercisesLightPlaceholder
              }
              alt="How it looks when a user reviews their writing from a challenge they just completed."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Exercises</ProjectSectionHeading>
              <ProjectSectionText>
                This interactive section features a comprehensive set of carefully designed exercises that allow users to demonstrate and validate their understanding of the language. Through hands-on practice and real-world challenges, users can test their knowledge, improve their skills, and track their progress as they master various language concepts.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
