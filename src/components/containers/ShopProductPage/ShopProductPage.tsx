import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import PayPal from '@/components/compositions/PayPal/PayPal';
import Section from '@/components/compositions/Section/Section';
import { Colors } from '@/constants/colors';
import useShopProvider from '@/hooks/useShopProvider';
import classes from '@/styles/shared/PageWithHeading.module.scss';
import customClasses from './ShopProductPage.module.scss';

const ShopProductPage = () => {
  const { t } = useTranslation();
  const { product, data, quantity, handleQuantityChange } = useShopProvider();

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
        {product?.title}
        <br />
        {data?.orderPrice?.toFixed(2) + ' €'}
        <select
          value={quantity}
          onChange={(e) => handleQuantityChange(Number(e?.target?.value))}
        >
          <option defaultValue={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <PayPal data={data} />
      </Section>
    </div>
  );
};

export default ShopProductPage;
