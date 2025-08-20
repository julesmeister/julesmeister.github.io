export const createSectionNavigationHandler = (sections, currentSectionIndex, setCurrentSectionIndex) => {
  return (event) => {
    const direction = event.detail;
    const newIndex = direction === 'up' 
      ? currentSectionIndex - 1 
      : currentSectionIndex + 1;

    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrentSectionIndex(newIndex);
      sections[newIndex].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
};

export const addSectionNavigationListener = (handler) => {
  window.addEventListener('navigate-section', handler);
  return () => window.removeEventListener('navigate-section', handler);
};