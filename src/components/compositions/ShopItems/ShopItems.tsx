import ShopItem from '@/components/compositions/ShopItems/ShopItem/ShopItem';
import useShopProvider from '@/hooks/useShopProvider';
import classes from './ShopItems.module.scss';

const ShopItems = () => {
  const { products } = useShopProvider();

  return (
    <div className={classes.container}>
      {products?.map((p, index) => <ShopItem key={index} item={p} />)}
    </div>
  );
};

export default ShopItems;
