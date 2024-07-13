import { useTranslation } from 'next-i18next';
import EyeImage from 'public/images/eye.png';
import GalHouseImage from 'public/images/gal_house.png';
import KlarejaHeroImage from 'public/images/klareja_background_1.png';
import KlarejaBackgroundHeroImage from 'public/images/klareja_background_2.png';
import ToneImage from 'public/images/people/tone.png';
import ReadBackground from 'public/images/read_background.png';
import SquareImage from 'public/images/square.png';
import Banner from '@/components/compositions/Banner/Banner';
import BookSummary from '@/components/compositions/BookSummary/BookSummary';
import HeroImage from '@/components/compositions/HeroImage/HeroImage';
import QuoteCard from '@/components/compositions/QuoteCard/QuoteCard';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from './FindOutPage.module.scss';

const FindOutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroImage
        backgroundImage={KlarejaBackgroundHeroImage}
        image={KlarejaHeroImage}
        classes={{
          section: classes.heroImageSection,
          image: classes.heroImage,
        }}
      />
      <Section classes={{ section: classes.pageTitleSection }}>
        <h1 className={classes.title}>{t('findOutPage.pageTitle')}</h1>
      </Section>
      <Section
        backgroundColor={Colors.BACKGROUND}
        classes={{ section: classes.bookSection }}
      >
        <BookSummary
          content={
            <>
              <p className={classes.marginBottom}>
                {t('findOutPage.sections.1.paragraphs.1')}
              </p>
              <p>{t('findOutPage.sections.1.paragraphs.2')}</p>
            </>
          }
        />
        <BookSummary
          image={{
            src: GalHouseImage,
            position: 'left',
          }}
          content={
            <>
              <p>{t('findOutPage.sections.1.paragraphs.3')}</p>
              <p>{t('findOutPage.sections.1.paragraphs.4')}</p>
              <p>{t('findOutPage.sections.1.paragraphs.5')}</p>
            </>
          }
        />
        <BookSummary
          image={{
            src: SquareImage,
            position: 'right',
          }}
          content={
            <>
              <p>{t('findOutPage.sections.1.paragraphs.6')}</p>
              <p>{t('findOutPage.sections.1.paragraphs.7')}</p>
              <p>{t('findOutPage.sections.1.paragraphs.8')}</p>
            </>
          }
        />
        <BookSummary
          image={{
            src: EyeImage,
            position: 'left',
          }}
          content={
            <>
              <p>{t('findOutPage.sections.1.paragraphs.9')}</p>
              <p>{t('findOutPage.sections.1.paragraphs.10')}</p>
              <p>{t('findOutPage.sections.1.paragraphs.11')}</p>
            </>
          }
        />
      </Section>
      <Section backgroundImage={ReadBackground}>
        <Banner
          title={t('findOutPage.sections.2.title')}
          citation={{
            paragraph: t('findOutPage.sections.2.paragraph'),
            author: t('findOutPage.sections.2.author'),
          }}
        />
      </Section>
      <Section>
        <QuoteCard
          quote={{
            image: ToneImage,
            paragraph: t('findOutPage.sections.3.paragraph'),
            author: t('findOutPage.sections.3.author'),
          }}
        />
      </Section>
    </>
  );
};

export default FindOutPage;
