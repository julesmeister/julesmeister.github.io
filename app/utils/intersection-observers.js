export const createSectionObserver = (onSectionChange, options = {}) => {
  const defaultOptions = {
    rootMargin: '-20% 0px -20% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onSectionChange(entry.target, entry);
      }
    });
  }, defaultOptions);
};

export const createProjectObserver = (sections, setCurrentProject, options = {}) => {
  const defaultOptions = {
    rootMargin: '-50% 0px -50% 0px',
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const section = entry.target;
      if (entry.isIntersecting) {
        const sectionIndex = sections.findIndex(s => s.current === section);
        if (sectionIndex !== -1) {
          setCurrentProject(sectionIndex);
        }
      }
    });
  }, defaultOptions);
};

export const createScrollIndicatorObserver = (setScrollIndicatorHidden, options = {}) => {
  const defaultOptions = {
    rootMargin: '-100% 0px 0px 0px',
    ...options
  };

  return new IntersectionObserver(([entry]) => {
    setScrollIndicatorHidden(!entry.isIntersecting);
  }, defaultOptions);
};

export const observeSections = (observer, sections) => {
  sections.forEach(section => {
    if (section.current) {
      observer.observe(section.current);
    }
  });
};