import { useEffect, useState } from 'react';
import { useSectionRefs } from '~/utils/ref-management';
import { useHomeObservers } from '~/utils/home-observers';
import { createSectionNavigationHandler, addSectionNavigationListener } from '~/utils/navigation';

export const useHomePage = (projectCount) => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const { intro, details, projectRefs, sections } = useSectionRefs(projectCount);

  const { 
    setupSectionObserver, 
    setupProjectObserver, 
    setupScrollIndicatorObserver 
  } = useHomeObservers({
    sections,
    visibleSections,
    setVisibleSections,
    setCurrentProject,
    setCurrentSectionIndex,
    setScrollIndicatorHidden,
    intro
  });

  // Section intersection observer
  useEffect(() => {
    if (!sections.every(section => section.current)) return;
    
    const observer = setupSectionObserver();
    return () => observer.disconnect();
  }, [sections, visibleSections]);

  // Project and scroll indicator observers
  useEffect(() => {
    const projectObserver = setupProjectObserver();
    const indicatorObserver = setupScrollIndicatorObserver();

    return () => {
      projectObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  // Section navigation
  useEffect(() => {
    const handler = createSectionNavigationHandler(sections, currentSectionIndex, setCurrentSectionIndex);
    return addSectionNavigationListener(handler);
  }, [currentSectionIndex, sections]);

  return {
    // State
    visibleSections,
    currentProject,
    scrollIndicatorHidden,
    currentSectionIndex,
    
    // Refs
    intro,
    details,
    projectRefs,
    sections
  };
};