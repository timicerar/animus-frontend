import { apiInstance } from '@/api/axios';
import {
  PayPalCaptureOrderResponse,
  PayPalCreateOrderRequest,
  PayPalCreateOrderResponse,
} from '@/api/models/PayPal';
import { ApiRoutes } from '@/constants/apiRoutes';

export const payPalCreateOrder = async (data: PayPalCreateOrderRequest) => {
  const response = await apiInstance?.post<PayPalCreateOrderResponse>(
    ApiRoutes.PAYPAL_CREATE_ORDER,
    data
  );

  return response?.data?.order?.id;
};

export const paypalCaptureOrder = async (orderId: string) => {
  const response = await apiInstance?.post<PayPalCaptureOrderResponse>(
    ApiRoutes.PAYPAL_CAPTURE_ORDER,
    {
      orderId,
    }
  );

  return response?.data;
};
