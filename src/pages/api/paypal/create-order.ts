import PayPal from '@paypal/checkout-server-sdk';
import { Order } from '@paypal/checkout-server-sdk/lib/orders/lib';
import { HttpResponse } from '@paypal/paypalhttp';
import { NextApiRequest, NextApiResponse } from 'next';
import { Currency, Intent } from '@/api/models/PayPal';
import PayPalClient from '@/utils/payPalUtils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      try {
        // TODO: Add quantity of book
        const orderPrice = req?.body?.orderPrice;
        const bookId = req?.body?.bookId;

        if (!orderPrice || !bookId) {
          return res?.status?.(400)?.json({
            error: true,
            message: 'Please provide price order and book ID.',
          });
        }

        const payPalHttpClient = PayPalClient();
        const request = new PayPal.orders.OrdersCreateRequest();

        request.headers['Prefer'] = 'return=representation';

        // TODO: Generate purchase_units for all three books
        request.requestBody({
          intent: Intent.CAPTURE,
          purchase_units: [
            {
              amount: {
                currency_code: Currency.EUR,
                value: orderPrice,
                breakdown: {
                  item_total: {
                    currency_code: Currency.EUR,
                    value: orderPrice,
                  },
                  discount: {
                    currency_code: Currency.EUR,
                    value: '0',
                  },
                  handling: {
                    currency_code: Currency.EUR,
                    value: '0',
                  },
                  insurance: {
                    currency_code: Currency.EUR,
                    value: '0',
                  },
                  shipping: {
                    currency_code: Currency.EUR,
                    value: '0',
                  },
                  shipping_discount: {
                    currency_code: Currency.EUR,
                    value: '0',
                  },
                  tax_total: {
                    currency_code: Currency.EUR,
                    value: '0',
                  },
                },
              },
              items: [
                {
                  name: 'Animus: V svetu senc',
                  description: 'Prva knjiga v trilogiji',
                  unit_amount: {
                    currency_code: Currency.EUR,
                    value: '15',
                  },
                  quantity: '1',
                  category: 'PHYSICAL_GOODS',
                },
              ],
            },
          ],
        });

        const response: HttpResponse<Order> =
          await payPalHttpClient?.execute?.(request);

        if (response?.statusCode !== 201) {
          return res.status(500).json({
            error: true,
            statusCode: 500,
            message: 'Oops. Something went wrong.',
          });
        }

        return res.status(200).json({
          success: true,
          order: {
            id: response?.result?.id,
            status: response?.result?.status,
          },
        });
      } catch (e) {
        const error = e as Error;
        return res.status(500).send({ message: error?.message });
      }
    default:
      return res.status(405).json({
        message: `The HTTP ${req.method} method is not supported at this route.`,
      });
  }
}
