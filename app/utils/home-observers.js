import { 
  createSectionObserver, 
  createProjectObserver, 
  createScrollIndicatorObserver, 
  observeSections 
} from './intersection-observers';

export const useHomeObservers = ({
  sections,
  visibleSections,
  setVisibleSections,
  setCurrentProject,
  setCurrentSectionIndex,
  setScrollIndicatorHidden,
  intro
}) => {
  const setupSectionObserver = () => {
    const handleSectionChange = (section, entry) => {
      const sectionIndex = sections.findIndex(s => s.current === section);
      
      console.log('Section in view:', {
        sectionIndex,
        id: section.id,
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
      });

      if (visibleSections.includes(section)) return;
      
      setVisibleSections(prevSections => [...prevSections, section]);
      
      if (sectionIndex !== -1) {
        setCurrentSectionIndex(sectionIndex);
      }
    };

    const observer = createSectionObserver(handleSectionChange);
    observeSections(observer, sections);
    return observer;
  };

  const setupProjectObserver = () => {
    const observer = createProjectObserver(sections, (sectionIndex) => {
      // Handle intro and details sections specially
      if (sectionIndex === 0 || sectionIndex === sections.length - 1) {
        setCurrentProject(0);
      } else {
        setCurrentProject(sectionIndex);
      }
    });
    
    observeSections(observer, sections);
    return observer;
  };

  const setupScrollIndicatorObserver = () => {
    const observer = createScrollIndicatorObserver(setScrollIndicatorHidden);
    if (intro.current) {
      observer.observe(intro.current);
    }
    return observer;
  };

  return {
    setupSectionObserver,
    setupProjectObserver,
    setupScrollIndicatorObserver
  };
};