import { useEffect, useRef, useState, useMemo } from 'react';
import { 
  createSectionObserver, 
  observeSections 
} from '~/utils/intersection-observers';
import { 
  createSectionNavigationHandler, 
  addSectionNavigationListener 
} from '~/utils/navigation';

export const useProjectPage = (sectionNames = []) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);

  // Create refs for each section dynamically
  const sectionRefs = useMemo(() => 
    sectionNames.reduce((refs, name) => {
      refs[name] = { current: null };
      return refs;
    }, {}), 
    [sectionNames]
  );

  // Create sections array for navigation
  const sections = useMemo(() => 
    sectionNames.map(name => sectionRefs[name]), 
    [sectionRefs, sectionNames]
  );

  // Section intersection observer
  useEffect(() => {
    if (!sections.every(section => section.current)) return;

    const handleSectionChange = (section, entry) => {
      const sectionIndex = sections.findIndex(s => s.current === section);
      
      if (visibleSections.includes(section)) return;
      
      setVisibleSections(prevSections => [...prevSections, section]);
      
      if (sectionIndex !== -1) {
        setCurrentSectionIndex(sectionIndex);
      }
    };

    const observer = createSectionObserver(handleSectionChange);
    observeSections(observer, sections);
    
    return () => observer.disconnect();
  }, [sections, visibleSections]);

  // Section navigation keyboard handler
  useEffect(() => {
    const handler = createSectionNavigationHandler(sections, currentSectionIndex, setCurrentSectionIndex);
    return addSectionNavigationListener(handler);
  }, [currentSectionIndex, sections]);

  return {
    currentSectionIndex,
    visibleSections,
    sectionRefs,
    sections
  };
};