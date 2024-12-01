import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/Lotel.jpg';
import gamestackTexturePlaceholder from '~/assets/Lotel.jpg';
import gamestackTexture from '~/assets/Lotel.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import testmanshipScreenShotLarge from '~/assets/Testmanship-Dark.jpg';
import testmanshipScreenShotPlaceholder from '~/assets/Testmanship-Dark.jpg';
import testmanshipScreenShot from '~/assets/Testmanship-Light.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Developer + React',
    description: `Design portfolio of ${config.name} — a developer working on web & mobile apps.`,
  });
};

const ProjectCounter = ({ current, total, visible }) => (
  <div style={{
    position: 'fixed',
    top: '20px',
    right: visible ? '20px' : '-120px',
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    zIndex: 1000,
    transition: 'right 0.3s ease-in-out',
  }}>
    Project {current}/{total}
  </div>
);

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const section = entry.target;
          if (entry.isIntersecting) {
            if (section === projectOne.current) setCurrentProject(1);
            else if (section === projectTwo.current) setCurrentProject(2);
            else if (section === projectThree.current) setCurrentProject(3);
            else if (section === intro.current || section === details.current) setCurrentProject(0);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
        projectObserver.observe(section.current);
      }
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
      projectObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <ProjectCounter 
        current={currentProject} 
        total={3} 
        visible={currentProject > 0}
      />
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Testmanship"
        description="Testmanship is a sophisticated web application designed to help language learners track their writing progress and assess their preparedness across different CEFR (Common European Framework of Reference for Languages) levels."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${testmanshipScreenShot} 1280w, ${testmanshipScreenShotLarge} 2560w`,
              placeholder: testmanshipScreenShotPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Lotel"
        description="Comprehensive hospitality management system for encoding and monitoring various aspects of hotel operations, including sales, billing, payroll, and key performance metrics"
        buttonText="View project"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
