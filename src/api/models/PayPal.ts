import { Status } from '@paypal/checkout-server-sdk/lib/payments/lib';

export type CurrencyType = 'EUR' | 'USD';

export type LayoutType = 'vertical' | 'horizontal';

export type ShapeType = 'rect' | 'pill';

export type ColorType = 'gold' | 'blue' | 'silver' | 'white' | 'black';

export type LabelType =
  | 'paypal'
  | 'checkout'
  | 'buynow'
  | 'pay'
  | 'installment'
  | 'subscribe'
  | 'donate';

export const Intent = {
  CAPTURE: 'CAPTURE',
  AUTHORIZE: 'AUTHORIZE',
} as const;

export const Currency = {
  EUR: 'EUR',
  USD: 'USD',
} as const;

export type PayPalCreateOrderRequest = {
  bookId: string;
  orderPrice: string;
};

export type PayPalCreateOrderResponse = {
  success: boolean;
  order: {
    id: string;
    status: Status;
  };
};

export type PayPalCaptureOrderResponse = {
  success: boolean;
  order: {
    id: string;
    status: Status;
  };
};

export type PayPalErrorResponse = {
  error: boolean;
  message: string;
};
