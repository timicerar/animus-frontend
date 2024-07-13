import { Trans, useTranslation } from 'next-i18next';
import Illustration1 from 'public/images/illustrations/illustration_1.jpg';
import Illustration2 from 'public/images/illustrations/illustration_2.jpg';
import Illustration3 from 'public/images/illustrations/illustration_3.jpg';
import Illustration4 from 'public/images/illustrations/illustration_4.jpg';
import Illustration5 from 'public/images/illustrations/illustration_5.jpg';
import Illustration6 from 'public/images/illustrations/illustration_6.jpg';
import Illustration7 from 'public/images/illustrations/illustration_7.jpg';
import Illustration8 from 'public/images/illustrations/illustration_8.jpg';
import AnaImage from 'public/images/people/ana.png';
import MarkoImage from 'public/images/people/marko.png';
import NextImage from '@/components/components/NextImage/NextImage';
import QuoteCard from '@/components/compositions/QuoteCard/QuoteCard';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from './IllustrationsPage.module.scss';

const IllustrationsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section classes={{ section: classes.pageTitleSection }}>
        <h1 className={classes.title}>
          <Trans
            i18nKey="illustrationsPage.pageTitle"
            components={{ breakPoint: <br /> }}
          />
        </h1>
      </Section>
      <Section
        classes={{ section: classes.illustrationsSection }}
        backgroundColor={Colors.BACKGROUND}
      >
        <div className={classes.illustrationsWrapper}>
          <NextImage
            src={Illustration1}
            alt="illustration-1"
            className={classes.image}
          />
          <NextImage
            src={Illustration2}
            alt="illustration-2"
            className={classes.image}
          />
          <div className={classes.illustrationFullWidth}>
            <NextImage
              src={Illustration3}
              alt="illustration-3"
              className={classes.image}
            />
          </div>
        </div>
      </Section>
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
        classes={{ section: classes.illustrationsSection }}
        backgroundColor={Colors.BACKGROUND}
      >
        <div className={classes.illustrationsWrapper}>
          <NextImage
            src={Illustration4}
            alt="illustration-4"
            className={classes.image}
          />
          <NextImage
            src={Illustration5}
            alt="illustration-5"
            className={classes.image}
          />
          <div className={classes.illustrationFullWidth}>
            <NextImage
              src={Illustration6}
              alt="illustration-6"
              className={classes.image}
            />
          </div>
          <NextImage
            src={Illustration7}
            alt="illustration-7"
            className={classes.image}
          />
          <NextImage
            src={Illustration8}
            alt="illustration-8"
            className={classes.image}
          />
        </div>
      </Section>
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
