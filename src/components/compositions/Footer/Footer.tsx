import { useTranslation } from 'next-i18next';
import classes from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes.container}>
      <p className={classes.copyrights}>{t('footer.copyrights')}</p>
    </footer>
  );
};

export default Footer;
