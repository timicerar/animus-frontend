import { i18n } from 'next-i18next';
import AnimusPartOneImage from 'public/images/covers/animus_part_1.jpg';
import AnimusPartTwoImage from 'public/images/covers/animus_part_2.jpg';
import AnimusPartThreeImage from 'public/images/covers/animus_part_3.jpg';
import AnimusTrilogy from 'public/images/covers/animus_trilogy.png';
import { Currency } from '@/api/models/PayPal';
import { BookId, BookIds, ShopProduct } from '@/api/models/ShopProduct';
import { ShopRoutes } from '@/constants/routes';

export const getShopProducts = (): ShopProduct[] => {
  return [
    {
      bookId: BookIds.ANIMUS_TRILOGY,
      href: ShopRoutes.SHOP_TRILOGY,
      image: AnimusTrilogy,
      title: i18n?.t('shopPage.products.4.title') || '',
      payPalTitle: i18n?.t('shopPage.products.4.payPalTitle') || '',
      caption: i18n?.t('shopPage.products.4.caption') || '',
      price: 60,
      discountPrice: 0,
      currency: Currency.EUR,
    },
    {
      bookId: BookIds.ANIMUS_PART_1,
      href: ShopRoutes.SHOP_PART_1,
      image: AnimusPartOneImage,
      title: i18n?.t('shopPage.products.1.title') || '',
      payPalTitle: i18n?.t('shopPage.products.1.payPalTitle') || '',
      caption: i18n?.t('shopPage.products.1.caption') || '',
      price: 29.9,
      discountPrice: 0,
      currency: Currency.EUR,
    },
    {
      bookId: BookIds.ANIMUS_PART_2,
      href: ShopRoutes.SHOP_PART_2,
      image: AnimusPartTwoImage,
      title: i18n?.t('shopPage.products.2.title') || '',
      payPalTitle: i18n?.t('shopPage.products.2.payPalTitle') || '',
      caption: i18n?.t('shopPage.products.2.caption') || '',
      price: 29.9,
      discountPrice: 0,
      currency: Currency.EUR,
    },
    {
      bookId: BookIds.ANIMUS_PART_3,
      href: ShopRoutes.SHOP_PART_3,
      image: AnimusPartThreeImage,
      title: i18n?.t('shopPage.products.3.title') || '',
      payPalTitle: i18n?.t('shopPage.products.3.payPalTitle') || '',
      caption: i18n?.t('shopPage.products.3.caption') || '',
      price: 29.9,
      discountPrice: 0,
      currency: Currency.EUR,
    },
  ];
};

export const isValidShopProductParam = (param: string) => {
  if (!param) {
    return false;
  }

  const shopRoutes = Object.values(ShopRoutes);

  return shopRoutes?.some((route) => route?.endsWith(param));
};

export const getShopProductByBookId = (bookId: BookId) => {
  const products = getShopProducts();
  return products?.find((product) => product?.bookId === bookId);
};
