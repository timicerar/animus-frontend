import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import PayPal from '@/components/compositions/PayPal/PayPal';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import { Products } from '@/constants/products';
import classes from '@/styles/shared/PageWithHeading.module.scss';
import customClasses from './ShopProductPage.module.scss';

const ShopProductPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Section classes={{ section: classes.pageTitleSection }}>
        <h1 className={classes.title}>{t('shopPage.pageTitle')}</h1>
      </Section>
      <Section
        classes={{
          section: classNames(classes.pageSection, customClasses.pageSection),
          content: customClasses.pageContent,
        }}
        backgroundColor={Colors.BACKGROUND}
      >
        <PayPal
          data={{
            bookId: Products.ANIMUS_PART_1,
            orderPrice: '15',
          }}
        />
      </Section>
    </div>
  );
};

export default ShopProductPage;
