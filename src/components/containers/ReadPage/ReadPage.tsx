import { Trans, useTranslation } from 'next-i18next';
import MasaImage from 'public/images/people/masa.png';
import FirstBook from '@/components/compositions/BookSection/FirstBook';
import SecondBook from '@/components/compositions/BookSection/SecondBook';
import ThirdBook from '@/components/compositions/BookSection/ThirdBook';
import QuoteCard from '@/components/compositions/QuoteCard/QuoteCard';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from './ReadPage.module.scss';

const ReadPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section className={classes.pageTitleSection}>
        <h1 className={classes.title}>
          <Trans
            i18nKey="readPage.pageTitle"
            components={{ breakPoint: <br /> }}
          />
        </h1>
      </Section>
      <Section
        className={classes.bookSection}
        backgroundColor={Colors.BACKGROUND}
      >
        <FirstBook />
      </Section>
      <Section>
        <QuoteCard
          quote={{
            image: MasaImage,
            paragraph: t('readPage.sections.2.paragraph'),
            author: t('readPage.sections.2.author'),
          }}
        />
      </Section>
      <Section
        className={classes.bookSection}
        backgroundColor={Colors.BACKGROUND}
      >
        <SecondBook />
        <ThirdBook />
      </Section>
    </>
  );
};

export default ReadPage;
