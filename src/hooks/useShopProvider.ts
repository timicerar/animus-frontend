import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { PayPalCreateOrderRequest } from '@/api/models/PayPal';
import { BookId } from '@/api/models/ShopProduct';
import { getShopProductByBookId, getShopProducts } from '@/utils/shopUtils';

const useShopProvider = () => {
  const params = useParams<{ product: BookId }>();
  const product = getShopProductByBookId(params?.product);

  const initialQuantityState = 1;
  const initialPrice = useMemo(
    () =>
      product
        ? product?.discountPrice && product?.discountPrice > 0
          ? product?.discountPrice
          : product?.price
        : 0,
    [product]
  );
  const initialTotalPrice = useMemo(
    () => (product ? product?.price : 0),
    [product]
  );
  const initialDataState: PayPalCreateOrderRequest = {
    bookId: product?.bookId || '',
    orderPrice: initialPrice,
  };

  const options = [
    { isDefault: true, value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ];

  const [quantity, setQuantity] = useState(initialQuantityState);
  const [data, setData] = useState<PayPalCreateOrderRequest>(initialDataState);
  const [totalPrice, setTotalPrice] = useState<number>(initialTotalPrice);

  const handleQuantityChange = (quantity: number) => {
    if (!product) {
      return;
    }

    const totalPrice = Number((product?.price * quantity)?.toFixed(1));
    let orderPrice = 0;

    if (product?.discountPrice && product?.discountPrice > 0) {
      orderPrice = Number((product?.discountPrice * quantity)?.toFixed(1));
    } else {
      orderPrice = Number((product?.price * quantity)?.toFixed(1));
    }

    setQuantity(quantity);
    setTotalPrice(totalPrice);
    setData((prevState) => ({ ...prevState, orderPrice: orderPrice }));
  };

  const products = useMemo(() => {
    return getShopProducts();
  }, []);

  return {
    product,
    products,
    data,
    quantity,
    options,
    totalPrice,
    handleQuantityChange,
    getShopProductByBookId,
  };
};

export default useShopProvider;
