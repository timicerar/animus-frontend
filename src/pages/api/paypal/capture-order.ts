import PayPal from '@paypal/checkout-server-sdk';
import { Order } from '@paypal/checkout-server-sdk/lib/orders/lib';
import { HttpResponse } from '@paypal/paypalhttp';
import { NextApiRequest, NextApiResponse } from 'next';
import { PayPalClient } from '@/utils/payPalUtils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      try {
        const orderId = req?.body?.orderId;

        if (!orderId) {
          return res?.status?.(400)?.json({
            error: true,
            message: 'Please provide order ID.',
          });
        }

        const payPalHttpClient = PayPalClient();
        const request = new PayPal.orders.OrdersCaptureRequest(orderId);
        const response: HttpResponse<Order> =
          await payPalHttpClient?.execute?.(request);

        if (!response) {
          return res
            .status(500)
            .json({ error: true, message: 'Oops. Something went wrong.' });
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
