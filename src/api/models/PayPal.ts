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

export type PriceCurrency = (typeof Currency)[keyof typeof Currency];

export const Category = {
  DIGITAL_GOODS: 'DIGITAL_GOODS',
  PHYSICAL_GOODS: 'PHYSICAL_GOODS',
  DONATION: 'DONATION',
} as const;

export type PayPalCreateOrderRequest = {
  bookId: string;
  orderPrice: number;
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
