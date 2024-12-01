import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
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
import testmanshipScreenShotDarkLarge from '~/assets/Testmanship-Dark-Large.jpg';
import testmanshipScreenShotDarkPlaceholder from '~/assets/Testmanship-Dark-Large.jpg';
import testmanshipScreenShotDark from '~/assets/Testmanship-Dark.jpg';
import testmanshipScreenShotLightLarge from '~/assets/Testmanship-Light-Large.jpg';
import testmanshipScreenShotLightPlaceholder from '~/assets/Testmanship-Light-Large.jpg';
import testmanshipScreenShotLight from '~/assets/Testmanship-Light.jpg';

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
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Testmanship';
const description =
  'I initially thought of this project as a future SaaS, because I saw a demand when I was studying german language and I thought there was a need for a tool that would help people track their progress in writing and speaking German. ';
const roles = [
  'SaaS Development',
  'Next.js',
  'React',
  'Openrouter AI',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Testmanship = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

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
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
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
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              While leveraging Openrouter's AI capabilities, I encountered some limitations. The chosen cost-effective models sometimes generate responses that deviate from the original prompt, which could lead to user confusion. Furthermore, the API occasionally truncates its response, impeding the tool's overall reliability. I have temporarily circumvented these issues by giving the user the option to retry their request. Lastly, the absence of Stripe as a payment gateway in the Philippines has presented a significant challenge.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${testChallengeDark} 1024w, ${testChallengeDarkLarge} 2048w`
                  : `${testChallengeLight} 1024w, ${testChallengeLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? testChallengeDarkPlaceholder
                  : testChallengeLightPlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
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
                There are two types of taking a test: practice mode and exam mode. Practice test allows the user to use AI as a guide to help them know if there's anything they need to improve on their writing. It also gives them suggestions on what to write next if they've been idle for 20 seconds so they don't get stuck. Exam mode only allows the user to take a test without AI assistance and see their evaluation when time is up or when they complete the word count threshold.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
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
              alt="The homepage of the aero design system docs website linking to principles and components."
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
      </ProjectContainer>
      <Footer />
    </>
  );
};
