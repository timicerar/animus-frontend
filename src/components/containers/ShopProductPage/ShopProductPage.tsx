import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import ProductDetails from '@/components/compositions/ProductDetails/ProductDetails';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import classes from '@/styles/shared/PageWithHeading.module.scss';
import customClasses from './ShopProductPage.module.scss';

const ShopProductPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Section className={classes.pageTitleSection}>
        <h1 className={classes.title}>{t('shopPage.pageTitle')}</h1>
      </Section>
      <Section
        className={classNames(classes.pageSection, customClasses.pageSection)}
        backgroundColor={Colors.BACKGROUND}
        flexGrow
      >
        <ProductDetails />
      </Section>
    </div>
  );
};

export default ShopProductPage;
