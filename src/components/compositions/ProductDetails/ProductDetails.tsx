import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Checkbox from '@/components/components/Checkbox/Checkbox';
import NextImage from '@/components/components/NextImage/NextImage';
import Select from '@/components/components/Select/Select';
import CashOnDelivery from '@/components/compositions/CashOnDelivery/CashOnDelivery';
import PayPal from '@/components/compositions/PayPal/PayPal';
import { Routes } from '@/constants/routes';
import useShopProvider from '@/hooks/useShopProvider';
import { displayPrice } from '@/utils/stringUtils';
import classes from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { t } = useTranslation();
  const { replace } = useRouter();
  const { product, data, options, handleQuantityChange } = useShopProvider();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!product) {
      replace(Routes.SHOP);
    }
  }, [product, replace]);

  if (!product) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.coverWrapper}>
        <h2 className={classes.title}>{product?.title}</h2>
        <div className={classes.imageContainer}>
          <NextImage
            src={product?.image}
            alt={product?.bookId || 'product-image'}
            placeholder="blur"
            className={classes.image}
          />
        </div>
        <p className={classes.shipping}>
          <Trans
            i18nKey="shopPage.productDetails.shipping"
            components={{ breakPoint: <br /> }}
          />
          <FontAwesomeIcon icon={faTruckFast} />
        </p>
      </div>
      <div className={classes.priceWrapper}>
        <p className={classes.price}>{displayPrice(data?.orderPrice)}</p>
        <div className={classes.numberOfCopies}>
          <p>{t('shopPage.productDetails.numberOfCopies')}</p>
          <Select
            option={options}
            onChange={(value) => handleQuantityChange(value as number)}
          />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div>
          <Checkbox
            label={
              <Trans
                i18nKey="shopPage.productDetails.termsAndConditions"
                components={{
                  linkComponent: (
                    <Link
                      href={Routes.TERMS_AND_CONDITIONS}
                      className={classes.link}
                      target="_blank"
                    />
                  ),
                }}
              />
            }
            checked={checked}
            onChange={setChecked}
          />
          <PayPal data={data} disabled={!checked} />
          <CashOnDelivery disabled={!checked} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
