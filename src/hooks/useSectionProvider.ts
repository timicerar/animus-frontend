import { useContext } from 'react';
import { SectionContext } from '@/components/providers/SectionProvider/SectionContext';

const useSectionProvider = () => {
  return useContext(SectionContext);
};

export default useSectionProvider;
