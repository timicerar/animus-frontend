import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import { Environment } from '@/constants/evnironment';

const configureEnvironment = () => {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '';
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET || '';

  return process.env.NODE_ENV === Environment.PRODUCTION
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const PayPalClient = () => {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};

export default PayPalClient;
