import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import {
  ColorType,
  CurrencyType,
  LabelType,
  LayoutType,
  PayPalCreateOrderRequest,
  ShapeType,
} from '@/api/models/PayPal';
import { payPalCreateOrder } from '@/api/paypal';
import { usePayPalCaptureOrder } from '@/api/paypal/hooks';
import usePayPal from '@/hooks/usePayPal';

type PayPalStyleOptions = {
  color?: ColorType;
  disableMaxWidth?: boolean;
  height?: number;
  label?: LabelType;
  layout?: LayoutType;
  shape?: ShapeType;
  tagline?: boolean;
};

type PayPalProps = {
  data: PayPalCreateOrderRequest;
  currency?: CurrencyType;
  disabled?: boolean;
  style?: PayPalStyleOptions;
};

const PayPal = ({
  data,
  currency = 'EUR',
  disabled = false,
  style: { layout = 'vertical', label = 'buynow', height = 55, ...styles } = {},
}: PayPalProps) => {
  const { options } = usePayPal(currency);
  const { mutate } = usePayPalCaptureOrder();

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons
        style={{ layout, label, height, ...styles }}
        disabled={disabled}
        createOrder={() => payPalCreateOrder(data)}
        onApprove={async (data) => mutate(data?.orderID)}
        // TODO: Handle error with react-toastify
        onError={() => void 0}
      />
    </PayPalScriptProvider>
  );
};

export default PayPal;
