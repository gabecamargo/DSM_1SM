import { createContext, useContext } from "react";

interface LetterCtxType {
  name: string;
  setName: (name: string) => void;
}

export const LetterCtx = createContext<LetterCtxType | undefined>(undefined);

export const useLetterCtx = () => {
  const context = useContext(LetterCtx);
  if (!context) {
    throw new Error("useLetterCtx deve ser usado dentro de um LetterCtx.Provider");
  }
  return context;
};