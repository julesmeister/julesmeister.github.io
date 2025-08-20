import { useRef, useMemo } from 'react';

export const useDynamicRefs = (count) => {
  return useMemo(() => 
    Array.from({ length: count }, () => ({ current: null })), 
    [count]
  );
};

export const useSectionRefs = (projectCount) => {
  const intro = useRef();
  const details = useRef();
  const projectRefs = useDynamicRefs(projectCount);

  const sections = useMemo(() => [
    intro,
    ...projectRefs,
    details
  ], [projectRefs]);

  return {
    intro,
    details,
    projectRefs,
    sections
  };
};