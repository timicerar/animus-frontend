import ShopItem from '@/components/compositions/ShopItems/ShopItem/ShopItem';
import useShopProducts from '@/hooks/useShopProducts';
import classes from './ShopItems.module.scss';

const ShopItems = () => {
  const { products } = useShopProducts();

  return (
    <div className={classes.container}>
      {products?.map((p, index) => <ShopItem key={index} item={p} />)}
    </div>
  );
};

export default ShopItems;
