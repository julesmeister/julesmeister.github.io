import { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('scroll');

  return (
    <ViewContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewProvider');
  }
  return context;
};