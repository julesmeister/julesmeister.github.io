import backgroundSprLarge from '~/assets/Airline-Crew-Scheduling.png';
import backgroundSprPlaceholder from '~/assets/Airline-Crew-Scheduling.png';
import backgroundSpr from '~/assets/Airline-Crew-Scheduling.png';
import airlineCrews from '~/assets/acs-crews.png';
import airlineCrewSchedulingTimeline from '~/assets/acs-timeline.png';
import airlineCrewSchedulingNewAssignment from '~/assets/acs-new-assignment.png';
import flightMap from '~/assets/flight-map.png';
import udemyCertificate from '~/assets/UC-0f64e9d6-3334-4a59-aec6-56dd7a7204de.pdf';
import assignmentsCode from './createAssignments.txt?raw';
import availabilityTriggerCode from './availabilityTrigger.txt?raw';
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
import styles from './airline.module.css';
import { useState, useEffect, useRef } from 'react';
import { Icon } from '~/components/icon';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { javascript } from 'react-syntax-highlighter/dist/cjs/languages/prism';

const title = 'Airline Crew Scheduling';
const description =
  "This is just a very basic project about scheduling crews for flights. The user can create flight assignments and assign crews to them. I built this project to demonstrate some skills using Lightning Web Components just right after I finished the Udemy course on how to Pass PD1. There's only two Custom Objects I created, Crew and Crew Assignments, or could be called Flight Assignments if you want. ";
const roles = ['Lightning Web Components', 'Apex Classes', 'Apex Triggers', 'Salesforce'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Airline = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for each section
  const headerSection = useRef();
  const introSection = useRef();
  const problemSection = useRef();
  const crewsSection = useRef();
  const newAssignmentSection = useRef();
  const codeSection = useRef();
  const triggerSection = useRef();
  const flightMapSection = useRef();

  const sections = [
    headerSection,
    introSection,
    newAssignmentSection,
    problemSection,
    crewsSection,
    codeSection,
    triggerSection,
    flightMapSection,
  ];

  useEffect(() => {
    // Initialize sections observer only when refs are ready
    if (!sections.every(section => section.current)) return;

    const sectionObserver = new IntersectionObserver(
      entries => {
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
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
    const handleSectionNav = event => {
      const direction = event.detail;
      const newIndex =
        direction === 'up' ? currentSectionIndex - 1 : currentSectionIndex + 1;

      if (newIndex >= 0 && newIndex < sections.length) {
        setCurrentSectionIndex(newIndex);
        sections[newIndex].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
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
          url="https://github.com/julesmeister/Airline-Crew-Scheduling-App"
          linkLabel="View on Github"
          pdfUrl={udemyCertificate}
          pdfLinkLabel="View Udemy Certificate"
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
                  ? `${airlineCrewSchedulingTimeline} 1280w, ${airlineCrewSchedulingTimeline} 2560w`
                  : `${airlineCrewSchedulingTimeline} 1280w, ${airlineCrewSchedulingTimeline} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark ? airlineCrewSchedulingTimeline : airlineCrewSchedulingTimeline
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="These are the assignment boxes or flight schedules"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Crews who are available for flight assignments are dropped in these assignment boxes. A crew can also be removed from the assignment by clicking the 'X' button."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top" ref={newAssignmentSection}>
          <ProjectSectionContent>
            <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${airlineCrewSchedulingNewAssignment} 1280w, ${airlineCrewSchedulingNewAssignment} 2560w`
                  : `${airlineCrewSchedulingNewAssignment} 1280w, ${airlineCrewSchedulingNewAssignment} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? airlineCrewSchedulingNewAssignment
                  : airlineCrewSchedulingNewAssignment
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="This is how those assignment boxes are created"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Quite simply how those crew assignments are created. I managed to
                  squeeze this create button between the previous and next buttons. The
                  crew members can also be set here instead of dragging them in."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection ref={problemSection}>
          <ProjectTextRow>
            <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
            <ProjectSectionText>
              This timeline was the hardest part to design. It took me a couple of days to
              wrap my head around how to make the CSS dynamic. Probably spent more time designing than just throwing around some lightning components. Only LWC is the easy part because it doesn't require much CSS.
              <br />
              <br />
              The main struggle was to make sure the assignment boxes were aligned with
              the timeline. Another struggle was that the width of each box had to be
              calculated based on the duration of the flight.
              <br />
              <br />
              And man, debugging in Salesforce is a whole different beast compared to
              React. There are so many limitations on building things in Salesforce.
              <br />
              <br />
              But hey, I made it work! I found some workarounds and practices that are way
              more suitable for making those features happen anyway. This project was a
              great learning experience for me, indeed.
              <br />
              <br />
              Next up, I'm thinking of adding maps to this project so users can see where
              the flights are headed. That'd be a sick feature to add, right? I'll be
              breaking that component out from the main timeline component, but I'll be
              using pub/sub to allow the two components to communicate to each other.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection padding="top" ref={crewsSection}>
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${airlineCrews} 440w, ${airlineCrews} 880w`}
                  width={440}
                  height={790}
                  placeholder={airlineCrews}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Crews</ProjectSectionHeading>
              <ProjectSectionText>
                Crews can be either a Pilot or a Flight Attendant. The reason why I
                separated them into two types is because I need to know which one is which
                because the number of Pilots and Flight Attendants required for a flight
                must be different.
                <br />
                <br />
                This was much easier to design because it's only a list and some basic
                fetching of data. I was able to get away with not using any of the complex
                features of LWC like the lightning-tree-grid component. I was able to just
                use a simple list and it worked great. Although now that I've mentioned
                it, I'm planning to use the lightning-tree-grid component for another
                project in the future just to demonstrate how it works.
                <br />
                <br />
                But there's also a challenge here where I have to make these boxes
                draggable and drop them in the timeline, on the assignment boxes to be
                exact.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top" ref={codeSection}>
          <ProjectSectionContent>
            <div>
              <ProjectSectionHeading>Custom Attributes</ProjectSectionHeading>
              <ProjectSectionText>
                Surprisingly, I was also able to add custom attributes to Crew
                Assignments. Fields that weren't part of the Crew Assignment object.
              </ProjectSectionText>
              <br />
              <br />

              <div className={styles.codeWrapper}>
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{
                    borderRadius: '8px',
                    padding: '1.5em',
                    fontSize: '0.9em',
                  }}
                  showLineNumbers={true}
                >
                  {assignmentsCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top" ref={triggerSection}>
          <ProjectSectionContent>
            <div>
              <ProjectSectionHeading>Trigger</ProjectSectionHeading>
              <ProjectSectionText>
                The crew's availability is updated whenever a crew is assigned or removed
                from a flight simply by the use of Apex Triggers.
              </ProjectSectionText>
              <br />
              <br />

              <div className={styles.codeWrapper}>
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{
                    borderRadius: '8px',
                    padding: '1.5em',
                    fontSize: '0.9em',
                  }}
                  showLineNumbers={true}
                >
                  {availabilityTriggerCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top" ref={flightMapSection}>
          <ProjectSectionContent>
            <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${flightMap} 1280w, ${flightMap} 2560w`
                  : `${flightMap} 1280w, ${flightMap} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? flightMap
                  : flightMap
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="This is how those assignment boxes are created"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Flight Map is a map that visualizes the origin and destination
                  of each flight. It's a separate LWC component from the
                  scheduling timeline, and yet they are connected by way of
                  pub/sub communication."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
