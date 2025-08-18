import electionalImg from '~/assets/orbitandchill/electional.png';
import natalChartImg from '~/assets/orbitandchill/Screenshot 2025-08-18 195310.png';
import photo1 from '~/assets/orbitandchill/photo_1_2025-08-18_18-13-46.jpg';
import photo3 from '~/assets/orbitandchill/photo_3_2025-08-18_18-13-46.jpg';
import photo4 from '~/assets/orbitandchill/photo_4_2025-08-18_18-13-46.jpg';
import photo5 from '~/assets/orbitandchill/photo_5_2025-08-18_18-13-46.jpg';
import photo6 from '~/assets/orbitandchill/photo_6_2025-08-18_18-13-46.jpg';
import photo7 from '~/assets/orbitandchill/photo_7_2025-08-18_18-13-46.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
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
  ProjectImageColumns,
} from '~/layouts/project';
import { Fragment, useRef, useState, useEffect } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './orbitandchill.module.css';

const title = 'Orbit and Chill';
const description =
  'A modern astrology platform combining precise natal chart generation with community engagement. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring free natal chart generation, location search, user persistence, and a comprehensive forum system with threaded discussions.';
const roles = ['Next.js', 'TypeScript', 'TurboDB', 'Astrology'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const OrbitAndChill = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const headerSection = useRef();
  const introSection = useRef();
  const featuresSection = useRef();
  const whySection = useRef();

  const sections = [
    headerSection,
    introSection,
    featuresSection,
    whySection,
  ];

  useEffect(() => {
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

  const mainImages = [
    {
      src: photo7,
      alt: 'Orbit and Chill: Main landing page with free natal chart calculator and astrology tools'
    },
    {
      src: photo1,
      alt: 'Orbit and Chill: Homepage featuring astrology blog and featured articles'
    },
    {
      src: photo5,
      alt: 'Orbit and Chill: Interactive natal chart wheel with detailed astrological placements'
    }
  ].map(img => ({
    srcSet: `${img.src} 800w, ${img.src} 1920w`,
    width: 800,
    height: 500,
    placeholder: img.src,
    alt: img.alt
  }));

  const featureImages = [
    {
      src: photo6,
      alt: 'Orbit and Chill: Comprehensive chart interpretation with personality analysis and stellium details'
    },
    {
      src: photo4,
      alt: 'Orbit and Chill: Community forum with astrological discussions and categorized topics'
    },
    {
      src: photo3,
      alt: 'Orbit and Chill: 24-hour planetary schedule showing day and night hours for optimal timing'
    }
  ].map(img => ({
    srcSet: `${img.src} 800w, ${img.src} 1920w`,
    width: 800,
    height: 500,
    placeholder: img.src,
    alt: img.alt
  }));

  const sidebarImages = [
    {
      src: electionalImg,
      alt: 'Orbit and Chill: Electional astrology calendar for planning optimal timing of events'
    },
    {
      src: photo5,
      alt: 'Orbit and Chill: Detailed natal chart with birth information and sharing capabilities'
    }
  ];

  return (
    <Fragment>
      <ProjectContainer className={styles.orbitandchill}>
        <ProjectBackground
          src={photo1}
          srcSet={`${photo1} 1280w, ${photo1} 2560w`}
          width={1280}
          height={800}
          placeholder={photo1}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://orbitandchill.com"
          linkLabel="Visit website"
          secondaryUrl="https://github.com/julesmeister/orbit-and-chill"
          secondaryLinkLabel="View on Github"
          roles={roles}
          ref={headerSection}
        />
        
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
            <div className={styles.timelineContainer}>
              <div className={styles.timelineSteps}>
                <div className={styles.timelineStep} data-step="1">
                  <div className={styles.timelineImage}>
                    <div className={styles.stepNumber}>1</div>
                    <Image
                      srcSet={`${photo7} 600w, ${photo7} 1200w`}
                      width={600}
                      height={400}
                      placeholder={photo7}
                      alt="Start your cosmic journey with free natal chart tools"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>Explore Tools</h3>
                    <p>Start with our free natal chart calculator and comprehensive astrology toolkit. Access powerful features designed for both beginners and experienced practitioners.</p>
                  </div>
                </div>
                
                <div className={styles.timelineStep} data-step="2">
                  <div className={styles.timelineImage}>
                    <div className={styles.stepNumber}>2</div>
                    <Image
                      srcSet={`${photo1} 600w, ${photo1} 1200w`}
                      width={600}
                      height={400}
                      placeholder={photo1}
                      alt="Explore featured astrology articles and cosmic insights"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>Learn & Connect</h3>
                    <p>Access featured articles and cosmic wisdom from astrology experts. Join our vibrant community to discuss insights and share your astrological journey.</p>
                  </div>
                </div>
                
                <div className={styles.timelineStep} data-step="3">
                  <div className={styles.timelineImage}>
                    <div className={styles.stepNumber}>3</div>
                    <Image
                      srcSet={`${photo5} 600w, ${photo5} 1200w`}
                      width={600}
                      height={400}
                      placeholder={photo5}
                      alt="Explore matrix destiny chart with numerological calculations"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>Matrix Destiny</h3>
                    <p>Explore matrix destiny charts using numerological calculations based on your birth date. This alternative system reveals life patterns and spiritual insights through sacred number combinations.</p>
                  </div>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection ref={featuresSection}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Advanced Features</ProjectSectionHeading>
            <ProjectSectionText>
              Orbit and Chill combines precise astronomical calculations with modern web technologies to deliver a comprehensive astrology platform. The application features free natal chart generation using the astronomy-engine library, providing ±1 arcminute precision for professional-grade accuracy.
            </ProjectSectionText>
            <div className={styles.featureFlow}>
              <div className={styles.featureCard} data-feature="interpretation">
                <div className={styles.featureNumber}>4</div>
                <div className={styles.featureImageWrapper}>
                  <Image
                    srcSet={`${photo6} 500w, ${photo6} 1000w`}
                    width={500}
                    height={350}
                    placeholder={photo6}
                    alt="Comprehensive chart interpretation with personality analysis"
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
                <div className={styles.featureImageWrapper}>
                  <Image
                    srcSet={`${photo4} 500w, ${photo4} 1000w`}
                    width={500}
                    height={350}
                    placeholder={photo4}
                    alt="Join vibrant astrological discussions and community"
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
                <div className={styles.featureImageWrapper}>
                  <Image
                    srcSet={`${photo3} 500w, ${photo3} 1000w`}
                    width={500}
                    height={350}
                    placeholder={photo3}
                    alt="24-hour planetary schedule for optimal timing"
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
    
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Natal Chart Generation</ProjectSectionHeading>
            <ProjectSectionText>
              At the heart of Orbit and Chill is our professional-grade natal chart generator. This comprehensive astrological chart maps the exact positions of celestial bodies at the moment of birth, providing deep insights into personality traits, life patterns, and cosmic influences.
            </ProjectSectionText>
            <div className={styles.natalChartContainer}>
              <Image
                className={styles.natalChart}
                srcSet={`${natalChartImg} 800w, ${natalChartImg} 1600w`}
                width={800}
                height={600}
                placeholder={natalChartImg}
                alt="Professional natal chart showing planetary positions, houses, and astrological aspects"
                sizes="(max-width: 768px) 95vw, 80vw"
              />
            </div>
            <ProjectSectionText>
              Each natal chart includes detailed planetary placements, house positions, and aspect patterns, calculated with ±1 arcminute precision using advanced astronomical algorithms. The interactive visualization allows users to explore their cosmic blueprint and understand the astrological influences that shape their lives.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection ref={whySection}>
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
                <Image
                  key={index}
                  className={styles.sidebarImage}
                  srcSet={`${img.src} 350w, ${img.src} 700w`}
                  width={350}
                  height={750}
                  placeholder={img.src}
                  alt={img.alt}
                  sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                />
              ))}
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};