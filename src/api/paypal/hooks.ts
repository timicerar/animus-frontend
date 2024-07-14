import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { PayPalCaptureOrderResponse } from '@/api/models/PayPal';
import { paypalCaptureOrder } from '@/api/paypal/index';
import { Routes } from '@/constants/routes';

export const usePayPalCaptureOrder = () => {
  const { push } = useRouter();

  return useMutation<PayPalCaptureOrderResponse, Error, string>({
    mutationFn: paypalCaptureOrder,
    onSuccess: async (data) => {
      if (data?.order?.status === 'COMPLETED') {
        await push(Routes.PURCHASE_SUCCESSFUL);
      }
    },
  });
};
