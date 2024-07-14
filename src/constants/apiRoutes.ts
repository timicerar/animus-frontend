export const ApiRoutes = {
  PAYPAL_CREATE_ORDER: '/api/paypal/create-order',
  PAYPAL_CAPTURE_ORDER: '/api/paypal/capture-order',
} as const;

export type ApiRoute = (typeof ApiRoutes)[keyof typeof ApiRoutes];
