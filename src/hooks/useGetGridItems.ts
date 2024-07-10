import { useTranslation } from 'next-i18next';
import ChatIcon from 'public/images/icons/chat.svg';
import DoorIcon from 'public/images/icons/door.svg';
import DragonIcon from 'public/images/icons/dragon.svg';
import HandsIcon from 'public/images/icons/hands.svg';
import HeartIcon from 'public/images/icons/heart.svg';
import MoonIcon from 'public/images/icons/moon.svg';
import { useMemo } from 'react';
import { GridItem } from '@/components/compositions/GridItems/GridItems';

const useGetGridItems = () => {
  const { t } = useTranslation();
  const heading = t('homePage.sections.5.title');
  const items = useMemo<GridItem[]>(() => {
    return [
      {
        title: t('homePage.sections.5.subsections.1.title'),
        paragraph: t('homePage.sections.5.subsections.1.paragraph'),
        icon: MoonIcon,
      },
      {
        title: t('homePage.sections.5.subsections.2.title'),
        paragraph: t('homePage.sections.5.subsections.2.paragraph'),
        icon: DragonIcon,
      },
      {
        title: t('homePage.sections.5.subsections.3.title'),
        paragraph: t('homePage.sections.5.subsections.3.paragraph'),
        icon: HandsIcon,
      },
      {
        title: t('homePage.sections.5.subsections.4.title'),
        paragraph: t('homePage.sections.5.subsections.4.paragraph'),
        icon: ChatIcon,
      },
      {
        title: t('homePage.sections.5.subsections.5.title'),
        paragraph: t('homePage.sections.5.subsections.5.paragraph'),
        icon: DoorIcon,
      },
      {
        title: t('homePage.sections.5.subsections.6.title'),
        paragraph: t('homePage.sections.5.subsections.6.paragraph'),
        icon: HeartIcon,
      },
    ];
  }, [t]);

  return { heading, items };
};

export default useGetGridItems;
