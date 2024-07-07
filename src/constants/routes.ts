export const Routes = {
  HOME: '/',
  SHOP: '/shop',
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];
