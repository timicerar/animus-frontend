import { i18n } from 'next-i18next';
import AnimusPartOneImage from 'public/images/covers/animus_part_1.jpg';
import AnimusPartTwoImage from 'public/images/covers/animus_part_2.jpg';
import AnimusPartThreeImage from 'public/images/covers/animus_part_3.jpg';
import { ShopItemType } from '@/components/compositions/ShopItems/ShopItem/ShopItem';
import { ShopRoutes } from '@/constants/routes';

export const getShopProducts = (): ShopItemType[] => {
  return [
    {
      href: ShopRoutes.SHOP_PART_1,
      image: AnimusPartOneImage,
      title: i18n?.t('shopPage.products.1.title') || '',
      caption: i18n?.t('shopPage.products.1.caption') || '',
    },
    {
      href: ShopRoutes.SHOP_PART_2,
      image: AnimusPartTwoImage,
      title: i18n?.t('shopPage.products.2.title') || '',
      caption: i18n?.t('shopPage.products.2.caption') || '',
    },
    {
      href: ShopRoutes.SHOP_PART_3,
      image: AnimusPartThreeImage,
      title: i18n?.t('shopPage.products.3.title') || '',
      caption: i18n?.t('shopPage.products.3.caption') || '',
    },
  ];
};
