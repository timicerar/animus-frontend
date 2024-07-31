import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import { PurchaseUnitRequest } from '@paypal/checkout-server-sdk/lib/orders/lib';
import { v4 as uuidv4 } from 'uuid';
import { Category, Currency } from '@/api/models/PayPal';
import { BookId } from '@/api/models/ShopProduct';
import { Environment } from '@/constants/evnironment';
import { getShopProductByBookId } from '@/utils/shopUtils';

const configureEnvironment = () => {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET || '';

  return process.env.NEXT_PUBLIC_ENVIRONMENT === Environment.PRODUCTION
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

export const PayPalClient = () => {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};

export const getPurchaseUnitByBookId = (orderPrice: number, bookId: BookId) => {
  const product = getShopProductByBookId(bookId);

  if (!product) {
    return [
      {
        amount: {
          currency_code: Currency.EUR,
          value: '0',
        },
      },
    ];
  }

  const productPrice =
    product?.discountPrice && product?.discountPrice > 0
      ? product?.discountPrice
      : product?.price;

  const quantity = (orderPrice / productPrice).toString();

  return [
    {
      invoice_id: uuidv4(),
      amount: {
        currency_code: product?.currency,
        value: orderPrice?.toString(),
        breakdown: {
          item_total: {
            currency_code: product?.currency,
            value: orderPrice?.toString(),
          },
        },
      },
      items: [
        {
          name: product?.payPalTitle,
          description: product?.description,
          unit_amount: {
            currency_code: product?.currency,
            value: productPrice?.toString(),
          },
          quantity: quantity,
          category: Category.PHYSICAL_GOODS,
        },
      ],
    },
  ];
};
