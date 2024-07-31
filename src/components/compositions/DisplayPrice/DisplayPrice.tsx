import { displayPrice } from '@/utils/stringUtils';
import classes from './DisplayPrice.module.scss';

type DisplayPriceProps = {
  price: number;
  discountPrice?: number;
};

const DisplayPrice = ({ price, discountPrice = 0 }: DisplayPriceProps) => {
  if (price === discountPrice || discountPrice === 0) {
    return (
      <p className={classes.price}>
        <span>{displayPrice(price)}</span>
      </p>
    );
  }

  return (
    <p className={classes.price}>
      <span className={classes.totalPrice}>{displayPrice(price)}</span>{' '}
      <span className={classes.discountPrice}>
        {displayPrice(discountPrice)}
      </span>
    </p>
  );
};

export default DisplayPrice;
