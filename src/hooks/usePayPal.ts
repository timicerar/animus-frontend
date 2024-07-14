import { PayPalScriptOptions } from '@paypal/paypal-js/types/script-options';
import { CurrencyType } from '@/api/models/PayPal';

const usePayPal = (currency: CurrencyType = 'EUR') => {
  const options: PayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
    merchantId: process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID,
    intent: 'capture',
    currency: currency,
  };

  if (!process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID) {
    delete options.merchantId;
  }

  return { options };
};

export default usePayPal;
