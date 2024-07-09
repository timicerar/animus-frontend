import { useTranslation } from 'next-i18next';
import IllustrationsBackground from 'public/images/illustrations_background.png';
import LearnMoreBackground from 'public/images/learn_more_background.png';
import ReadBackground from 'public/images/read_background.png';
import Banner from '@/components/compositions/Banner/Banner';
import HeroImage from '@/components/compositions/HeroImage/HeroImage';
import Section from '@/components/compositions/Section/Section';
import VideoBanner from '@/components/compositions/VideoBanner/VideoBanner';
import { Routes } from '@/constants/routes';
import { Sections } from '@/constants/sections';
import useScrollToSection from '@/hooks/useScrollToSection';

const HomePage = () => {
  const { t } = useTranslation();

  useScrollToSection();

  return (
    <>
      <HeroImage />
      <VideoBanner />
      <Section
        id={Sections.FIND_OUT_SECTION_ID}
        backgroundImage={LearnMoreBackground}
      >
        <Banner
          title={t('homePage.sections.2.title')}
          citation={{
            paragraph: t('homePage.sections.2.paragraph'),
            author: t('homePage.sections.2.author'),
          }}
          button={{
            href: Routes.FIND_OUT,
            color: 'Gray',
            children: t('homePage.sections.2.button'),
          }}
        />
      </Section>
      <Section></Section>
      <Section id={Sections.READ_SECTION_ID} backgroundImage={ReadBackground}>
        <Banner
          title={t('homePage.sections.4.title')}
          citation={{
            paragraph: t('homePage.sections.4.paragraph'),
            author: t('homePage.sections.4.author'),
          }}
          button={{
            href: Routes.READ,
            color: 'Gray',
            children: t('homePage.sections.4.button'),
          }}
        />
      </Section>
      <Section></Section>
      <Section
        id={Sections.ILLUSTRATIONS_SECTION_ID}
        backgroundImage={IllustrationsBackground}
      >
        <Banner
          title={t('homePage.sections.6.title')}
          citation={{
            paragraph: t('homePage.sections.6.paragraph'),
            author: t('homePage.sections.6.author'),
          }}
          button={{
            href: Routes.ILLUSTRATIONS,
            color: 'Gray',
            children: t('homePage.sections.6.button'),
          }}
        />
      </Section>
      <Section></Section>
    </>
  );
};

export default HomePage;
