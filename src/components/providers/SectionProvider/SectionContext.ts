import { createContext, Dispatch, SetStateAction } from 'react';
import { Section } from '@/constants/sections';

type SectionContextType = {
  previousSection: Section | undefined;
  setPreviousSection: Dispatch<SetStateAction<Section | undefined>>;
};

export const SectionContext = createContext<SectionContextType>({
  previousSection: undefined,
  setPreviousSection: async () => {
    return;
  },
});
