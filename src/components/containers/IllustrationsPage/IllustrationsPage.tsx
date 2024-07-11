import { Trans, useTranslation } from 'next-i18next';
import AnaImage from 'public/images/people/ana.png';
import MarkoImage from 'public/images/people/marko.png';
import QuoteCard from '@/components/compositions/QuoteCard/QuoteCard';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from './IllustrationsPage.module.scss';

const IllustrationsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section className={classes.pageTitleSection}>
        <h1 className={classes.title}>
          <Trans
            i18nKey="illustrationsPage.pageTitle"
            components={{ breakPoint: <br /> }}
          />
        </h1>
      </Section>
      <Section
        className={classes.illustrationsSection}
        backgroundColor={Colors.BACKGROUND}
      ></Section>
      <Section>
        <QuoteCard
          quote={{
            image: AnaImage,
            title: t('illustrationsPage.sections.2.title'),
            paragraph: t('illustrationsPage.sections.2.paragraph'),
            author: t('illustrationsPage.sections.2.author'),
          }}
        />
      </Section>
      <Section
        className={classes.illustrationsSection}
        backgroundColor={Colors.BACKGROUND}
      ></Section>
      <Section>
        <QuoteCard
          quote={{
            image: MarkoImage,
            paragraph: (
              <Trans
                i18nKey="illustrationsPage.sections.4.paragraph"
                components={{ breakPoint: <br /> }}
              />
            ),
            author: t('illustrationsPage.sections.4.author'),
          }}
        />
      </Section>
    </>
  );
};

export default IllustrationsPage;
