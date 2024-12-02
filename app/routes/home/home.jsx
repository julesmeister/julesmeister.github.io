import lotelScreenShot2Large from '~/assets/Lotel-Home.jpg';
import lotelScreenShot2Placeholder from '~/assets/Lotel-Home.jpg';
import lotelScreenShot2 from '~/assets/Lotel-Home.jpg';
import lotelScreenShotLarge from '~/assets/Lotel-Remittance.jpg';
import lotelScreenShotPlaceholder from '~/assets/Lotel-Remittance.jpg';
import lotelScreenShot from '~/assets/Lotel-Remittance.jpg';
import cTraderScreenShotLarge from '~/assets/cTrader.png';
import cTraderScreenShotPlaceholder from '~/assets/cTrader.png';
import cTraderScreenShot from '~/assets/cTrader.png';
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
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  const sections = [intro, projectOne, projectTwo, projectThree, details];

  useEffect(() => {
    // Initialize sections observer only when refs are ready
    if (!sections.every(section => section.current)) return;

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const sectionIndex = sections.findIndex(s => s.current === section);
            console.log('Section in view:', {
              sectionIndex,
              id: section.id,
              isIntersecting: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio
            });

            // Don't unobserve - we want to keep tracking all sections
            if (visibleSections.includes(section)) return;
            
            setVisibleSections(prevSections => [...prevSections, section]);

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

    // Observe all sections
    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [sections]);

  useEffect(() => {
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

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        projectObserver.observe(section.current);
      }
    });

    indicatorObserver.observe(intro.current);

    return () => {
      projectObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

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

  return (
    <>
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
          buttonLink="/projects/testmanship"
          model={{
            type: 'laptop',
            alt: 'Testmanship Language Learning Hub',
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
          buttonLink="/projects/lotel"
          model={{
            type: 'phone',
            alt: 'Lotel hospitality management system',
            textures: [
              {
                srcSet: `${lotelScreenShot} 375w, ${lotelScreenShotLarge} 750w`,
                placeholder: lotelScreenShotPlaceholder,
              },
              {
                srcSet: `${lotelScreenShot2} 375w, ${lotelScreenShot2Large} 750w`,
                placeholder: lotelScreenShot2Placeholder,
              },
            ],
          }}
        />
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Enhanced Equity Stop with Cooldown for cTrader"
          description="A sophisticated modification of Acronew's Equity Stop with advanced features and improved UI."
          buttonText="View project"
          buttonLink="/projects/cTrader"
          model={{
            type: 'laptop',
            alt: 'A sophisticated modification of Acronew\'s Equity Stop with advanced features and improved UI.',
            textures: [
              {
                srcSet: `${cTraderScreenShot} 800w, ${cTraderScreenShotLarge} 1920w`,
                placeholder: cTraderScreenShotPlaceholder,
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
    </>
  );
};
