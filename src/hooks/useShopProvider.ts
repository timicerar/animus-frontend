import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { PayPalCreateOrderRequest } from '@/api/models/PayPal';
import { BookId } from '@/api/models/ShopProduct';
import { getShopProductByBookId, getShopProducts } from '@/utils/shopUtils';

const useShopProvider = () => {
  const params = useParams<{ product: BookId }>();
  const product = getShopProductByBookId(params?.product);

  const initialQuantityState = 1;
  const initialDataState: PayPalCreateOrderRequest = {
    bookId: product?.bookId || '',
    orderPrice: product
      ? product?.discountPrice && product?.discountPrice > 0
        ? product?.discountPrice
        : product?.price
      : 0,
  };

  const [quantity, setQuantity] = useState(initialQuantityState);
  const [data, setData] = useState<PayPalCreateOrderRequest>(initialDataState);

  const handleQuantityChange = (quantity: number) => {
    if (!product) {
      return;
    }

    let orderPrice = 0;

    if (product?.discountPrice && product?.discountPrice > 0) {
      orderPrice = Number((product?.discountPrice * quantity)?.toFixed(1));
    } else {
      orderPrice = Number((product?.price * quantity)?.toFixed(1));
    }

    setQuantity(quantity);
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
    handleQuantityChange,
    getShopProductByBookId,
  };
};

export default useShopProvider;
