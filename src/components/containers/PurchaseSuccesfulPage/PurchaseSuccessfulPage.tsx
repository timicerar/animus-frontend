import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from '@/styles/shared/PageWithHeading.module.scss';
import customClasses from './PurchaseSuccessfulPage.module.scss';

const PurchaseSuccessfulPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Section classes={{ section: classes.pageTitleSection }}>
        <h1 className={classes.title}>{t('purchaseSuccessPage.pageTitle')}</h1>
      </Section>
      <Section
        classes={{
          section: classNames(classes.pageSection, customClasses.pageSection),
        }}
        backgroundColor={Colors.BACKGROUND}
      >
        <p className={customClasses.paragraph}>
          {t('purchaseSuccessPage.paragraph')}
        </p>
      </Section>
    </div>
  );
};

export default PurchaseSuccessfulPage;
