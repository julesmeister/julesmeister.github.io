import { useState, useCallback } from 'react';

export const useMagnifier = () => {
  const [magnifier, setMagnifier] = useState({
    isVisible: false,
    x: 0,
    y: 0,
    backgroundX: 0,
    backgroundY: 0,
    currentImage: null
  });

  const showMagnifier = useCallback((e, imageSrc) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate background position for magnifier (zoom effect)
    const backgroundX = (x / rect.width) * 100;
    const backgroundY = (y / rect.height) * 100;
    
    setMagnifier({
      isVisible: true,
      x: e.clientX - 100, // Center magnifier on cursor
      y: e.clientY - 100,
      backgroundX,
      backgroundY,
      currentImage: imageSrc
    });
  }, []);

  const hideMagnifier = useCallback(() => {
    setMagnifier(prev => ({ ...prev, isVisible: false }));
  }, []);

  const updateMagnifier = useCallback((e, imageSrc) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const backgroundX = (x / rect.width) * 100;
    const backgroundY = (y / rect.height) * 100;
    
    setMagnifier(prev => ({
      ...prev,
      x: e.clientX - 100,
      y: e.clientY - 100,
      backgroundX,
      backgroundY,
      currentImage: imageSrc
    }));
  }, []);

  return {
    magnifier,
    showMagnifier,
    hideMagnifier,
    updateMagnifier
  };
};