import { useTranslation } from 'next-i18next';
import AterImage from 'public/images/ater.png';
import LinkButton from '@/components/components/LinkButton/LinkButton';
import NextImage from '@/components/components/NextImage/NextImage';
import { Routes } from '@/constants/routes';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <NextImage src={AterImage} alt="animus-logo" className={classes.image} />
      <div className={classes.wrapper}>
        <h1 className={classes.title}>{t('pageNotFound.title')}</h1>
        <LinkButton href={Routes.HOME} color="Red">
          {t('shared.toHomePage')}
        </LinkButton>
      </div>
    </div>
  );
};

export default NotFoundPage;
