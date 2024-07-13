import { useMemo } from 'react';
import { getShopProducts } from '@/utils/shopUtils';

const useShopProducts = () => {
  const products = useMemo(() => {
    return getShopProducts();
  }, []);

  return { products };
};

export default useShopProducts;
