import { useEffect } from 'react';
import useSectionProvider from '@/hooks/useSectionProvider';

const useScrollToSection = () => {
  const { previousSection } = useSectionProvider();

  useEffect(() => {
    if (!previousSection) return;

    const element = document?.getElementById(previousSection);

    if (!element) return;

    element?.scrollIntoView({ behavior: 'smooth' });
  }, [previousSection]);
};

export default useScrollToSection;
