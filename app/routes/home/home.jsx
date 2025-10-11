import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectGrid } from './project-grid';
import { projectsData } from './projects-data';
import { useViewMode } from '~/contexts/view-context';
import { useHomePage } from '~/hooks/use-home-page';
import config from '~/config.json';
import styles from './home.module.css';
import projectCounterStyles from './project-counter.module.css';

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
    description: `${config.name} — Full-stack developer specializing in React, Flutter, React Native, and Salesforce. Explore my portfolio featuring modern web & mobile applications including Orbit and Chill (Next.js 15 astrology platform), Blueprint.js Flutter, and enterprise solutions. Expert in TypeScript, responsive design, and 3D web experiences.`,
  });
};

const ProjectCounter = ({ current, total, visible }) => (
  <div className={projectCounterStyles.counter} data-visible={visible}>
    Project {current}/{total}
  </div>
);

export const Home = () => {
  const { viewMode } = useViewMode();
  
  const {
    visibleSections,
    currentProject,
    scrollIndicatorHidden,
    intro,
    details,
    projectRefs
  } = useHomePage(projectsData.length);

  return (
    <>
      <div className={styles.home}>
        <ProjectCounter current={currentProject} total={projectsData.length} visible={currentProject > 0} />
        <Intro
          id="intro"
          index={0}
          sectionRef={intro}
          scrollIndicatorHidden={scrollIndicatorHidden}
        />
        
        {/* Conditional rendering based on view mode */}
        {viewMode === 'scroll' ? (
          // Algorithmic scroll view rendering
          <>
            {projectsData.map((project, index) => (
              <ProjectSummary
                key={project.id}
                id={`project-${index + 1}`}
                sectionRef={projectRefs[index]}
                visible={visibleSections.includes(projectRefs[index].current)}
                index={index + 1}
                title={project.title}
                description={project.description}
                buttonText="View project"
                buttonLink={project.link}
                model={{
                  type: project.scrollView.modelType,
                  alt: project.scrollView.alt,
                  textures: project.scrollView.textures,
                }}
              />
            ))}
          </>
        ) : (
          // Grid view
          <ProjectGrid projects={projectsData} />
        )}
        
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