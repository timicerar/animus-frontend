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
  SHOP_PART_1: '/shop/part-one',
  SHOP_PART_2: '/shop/part-two',
  SHOP_PART_3: '/shop/part-three',
} as const;

export type ShopRoute = (typeof ShopRoutes)[keyof typeof ShopRoutes];
