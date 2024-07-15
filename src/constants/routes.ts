import { BookIds } from '@/api/models/ShopProduct';

export const Routes = {
  HOME: '/',
  SHOP: '/shop',
  SHOP_PRODUCT: '/shop/:product',
  PURCHASE_SUCCESSFUL: '/purchase-successful',
  FIND_OUT: '/find-out',
  READ: '/read',
  ILLUSTRATIONS: '/illustrations',
  TERMS_AND_CONDITIONS: '/terms-and-conditions',
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];

export const ShopRoutes = {
  SHOP_PART_1: `/shop/${BookIds.ANIMUS_PART_1}`,
  SHOP_PART_2: `/shop/${BookIds.ANIMUS_PART_2}`,
  SHOP_PART_3: `/shop/${BookIds.ANIMUS_PART_3}`,
} as const;

export type ShopRoute = (typeof ShopRoutes)[keyof typeof ShopRoutes];
