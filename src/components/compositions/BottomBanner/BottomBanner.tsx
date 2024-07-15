import { useTranslation } from 'next-i18next';
import { useCallback, useMemo } from 'react';
import Button from '@/components/components/Button/Button';
import LinkButton from '@/components/components/LinkButton/LinkButton';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import { Routes } from '@/constants/routes';
import usePageLocation from '@/hooks/usePageLocation';
import useWindow from '@/hooks/useWindow';
import classes from './BottomBanner.module.scss';

const BottomBanner = () => {
  const { t } = useTranslation();
  const window = useWindow();
  const { isHomePage, isReadPage, isTermsPage } = usePageLocation();

  const backgroundColor = useMemo(() => {
    if (isReadPage) {
      return Colors.WHITE;
    } else {
      return Colors.BACKGROUND;
    }
  }, [isReadPage]);

  const handleBackToTop = useCallback(() => {
    if (!window) return;

    window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [window]);

  const content = useMemo(() => {
    if (isHomePage) {
      return (
        <>
          <LinkButton
            type="Outlined"
            color="Red"
            href={`mailto:${t('shared.infoEmail')}`}
            className={classes.button}
          >
            {t('shared.askUs')}
          </LinkButton>
          <Button
            type="Outlined"
            color="Red"
            className={classes.button}
            onClick={handleBackToTop}
          >
            {t('shared.backToTop')}
          </Button>
        </>
      );
    }

    if (isTermsPage) {
      return (
        <>
          <LinkButton
            type="Outlined"
            color="Red"
            href={`mailto:${t('shared.infoEmail')}`}
            className={classes.button}
          >
            {t('shared.askUs')}
          </LinkButton>
          <LinkButton
            type="Outlined"
            color="Red"
            className={classes.button}
            href={Routes.SHOP}
          >
            {t('shared.toShop')}
          </LinkButton>
        </>
      );
    }

    return (
      <>
        <LinkButton
          type="Outlined"
          color="Red"
          href={`mailto:${t('shared.infoEmail')}`}
          className={classes.button}
        >
          {t('shared.askUs')}
        </LinkButton>
        <LinkButton
          type="Outlined"
          color="Red"
          href={Routes.HOME}
          className={classes.button}
        >
          {t('shared.toHomePage')}
        </LinkButton>
      </>
    );
  }, [handleBackToTop, isHomePage, isTermsPage, t]);

  return (
    <Section className={classes.section} backgroundColor={backgroundColor}>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default BottomBanner;
