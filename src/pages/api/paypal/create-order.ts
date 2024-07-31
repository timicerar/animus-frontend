import PayPal from '@paypal/checkout-server-sdk';
import { Order } from '@paypal/checkout-server-sdk/lib/orders/lib';
import { HttpResponse } from '@paypal/paypalhttp';
import { NextApiRequest, NextApiResponse } from 'next';
import { Intent } from '@/api/models/PayPal';
import { BookId } from '@/api/models/ShopProduct';
import { getPurchaseUnitByBookId, PayPalClient } from '@/utils/payPalUtils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      try {
        const { orderPrice, bookId } = req?.body as {
          orderPrice?: number;
          bookId?: BookId;
        };

        if (!orderPrice || !bookId) {
          return res?.status?.(400)?.json({
            error: true,
            message: 'Please provide price order and book ID.',
          });
        }

        const payPalHttpClient = PayPalClient();
        const request = new PayPal.orders.OrdersCreateRequest();

        request.headers['Prefer'] = 'return=representation';

        console.log(
          JSON.stringify(getPurchaseUnitByBookId(orderPrice, bookId))
        );

        request.requestBody({
          intent: Intent.CAPTURE,
          purchase_units: getPurchaseUnitByBookId(orderPrice, bookId),
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
