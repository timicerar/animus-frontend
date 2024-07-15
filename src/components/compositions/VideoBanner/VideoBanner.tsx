import { useTranslation } from 'next-i18next';
import ExternalLink from '@/components/components/ExternalLink/ExternalLink';
import Section from '@/components/compositions/Section/Section';
import classes from './VideoBanner.module.scss';

const VideoBanner = () => {
  const { t } = useTranslation();

  return (
    <Section className={classes.section}>
      <div className={classes.video}>
        <p className={classes.paragraph}>
          {t('homePage.sections.1.paragraph')}
        </p>
        <ExternalLink
          href={t('homePage.sections.1.videoUrl')}
          className={classes.link}
        >
          {t('homePage.sections.1.link')}
        </ExternalLink>
      </div>
    </Section>
  );
};

export default VideoBanner;
