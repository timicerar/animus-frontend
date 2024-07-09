import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';
import { SectionContext } from '@/components/providers/SectionProvider/SectionContext';
import { Section, Sections } from '@/constants/sections';
import usePageLocation from '@/hooks/usePageLocation';

type SectionProviderProps = PropsWithChildren;

const SectionProvider = ({ children }: SectionProviderProps) => {
  const { events } = useRouter();
  const { isFindOutPage, isReadPage, isIllustrationsPage } = usePageLocation();
  const [previousSection, setPreviousSection] = useState<Section | undefined>(
    undefined
  );

  useEffect(() => {
    const handleRouteChange = () => {
      if (isFindOutPage) {
        setPreviousSection(Sections.FIND_OUT_SECTION_ID);
      } else if (isReadPage) {
        setPreviousSection(Sections.READ_SECTION_ID);
      } else if (isIllustrationsPage) {
        setPreviousSection(Sections.ILLUSTRATIONS_SECTION_ID);
      } else {
        setPreviousSection(undefined);
      }
    };

    events?.on('routeChangeStart', handleRouteChange);

    return () => {
      events?.off('routeChangeStart', handleRouteChange);
    };
  }, [events, isFindOutPage, isIllustrationsPage, isReadPage]);

  return (
    <SectionContext.Provider value={{ previousSection, setPreviousSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
