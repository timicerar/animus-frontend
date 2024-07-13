import { useTranslation } from 'next-i18next';
import Section from '@/components/compositions/Section/Section';
import ShopItems from '@/components/compositions/ShopItems/ShopItems';
import { Colors } from '@/constants/colors';
import classes from '@/styles/shared/PageWithHeading.module.scss';

const ShopPage = () => {
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
        <ShopItems />
      </Section>
    </div>
  );
};

export default ShopPage;
