import React, { createContext, useContext, useState } from 'react';

type SuggestionContextType = {
  suggestions: number[][];
  addSuggestion: (sug: number[]) => void;
};

const SuggestionContext = createContext<SuggestionContextType | undefined>(undefined);

export const SuggestionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [suggestions, setSuggestions] = useState<number[][]>([]);

  const addSuggestion = (sug: number[]) => {
    setSuggestions(prev => [...prev, sug]);
  };

  return (
    <SuggestionContext.Provider value={{ suggestions, addSuggestion }}>
      {children}
    </SuggestionContext.Provider>
  );
};

export const useSuggestion = () => {
  const context = useContext(SuggestionContext);
  if (!context) throw new Error('useSuggestion must be used within a SuggestionProvider');
  return context;
};
