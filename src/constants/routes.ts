export const Routes = {
  HOME: '/',
  SHOP: '/shop',
  SHOP_PRODUCT: '/shop/:product',
  FIND_OUT: '/find-out',
  READ: '/read',
  ILLUSTRATIONS: '/illustrations',
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];
