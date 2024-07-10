import { useTranslation } from 'next-i18next';
import IllustrationsBackground from 'public/images/illustrations_background.png';
import LearnMoreBackground from 'public/images/learn_more_background.png';
import FilipImage from 'public/images/people/filip.png';
import JanImage from 'public/images/people/jan.png';
import ReadBackground from 'public/images/read_background.png';
import Banner from '@/components/compositions/Banner/Banner';
import GridItems from '@/components/compositions/GridItems/GridItems';
import HeroImage from '@/components/compositions/HeroImage/HeroImage';
import QuoteCard from '@/components/compositions/QuoteCard/QuoteCard';
import Section from '@/components/compositions/Section/Section';
import VideoBanner from '@/components/compositions/VideoBanner/VideoBanner';
import { Routes } from '@/constants/routes';
import { Sections } from '@/constants/sections';
import useGetGridItems from '@/hooks/useGetGridItems';
import useScrollToSection from '@/hooks/useScrollToSection';

const HomePage = () => {
  const { t } = useTranslation();
  const { heading, items } = useGetGridItems();

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
      <Section>
        <QuoteCard
          quote={{
            image: JanImage,
            title: t('homePage.sections.3.title'),
            paragraph: t('homePage.sections.3.paragraph'),
            author: t('homePage.sections.3.author'),
          }}
        />
      </Section>
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
      <Section>
        <GridItems heading={heading} items={items} />
      </Section>
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
      <Section>
        <QuoteCard
          quote={{
            image: FilipImage,
            paragraph: t('homePage.sections.7.paragraph'),
            author: t('homePage.sections.7.author'),
          }}
        />
      </Section>
    </>
  );
};

export default HomePage;
