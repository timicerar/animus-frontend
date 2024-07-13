import { useTranslation } from 'next-i18next';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from '@/styles/shared/PageWithHeading.module.scss';

const ShopProductPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Section classes={{ section: classes.pageTitleSection }}>
        <h1 className={classes.title}>{t('shopPage.pageTitle')}</h1>
      </Section>
      <Section
        classes={{ section: classes.pageSection }}
        backgroundColor={Colors.BACKGROUND}
      >
        TODO: Product details
      </Section>
    </div>
  );
};

export default ShopProductPage;
