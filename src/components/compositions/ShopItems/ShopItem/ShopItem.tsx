import classNames from 'classnames';
import Link from 'next/link';
import { ShopProduct } from '@/api/models/ShopProduct';
import NextImage from '@/components/components/NextImage/NextImage';
import classes from './ShopItem.module.scss';

export type ShopItemProps = {
  item: ShopProduct;
};

const ShopItem = ({ item }: ShopItemProps) => {
  return (
    <Link
      href={item?.href}
      className={classNames(classes.container, classes.clickable)}
    >
      <div className={classes.imageWrapper}>
        <NextImage
          src={item?.image}
          alt={item?.href}
          placeholder="blur"
          className={classes.image}
        />
      </div>
      <div
        className={classNames(classes.wrapper, {
          [classes.reverse]: item?.reverseCaption,
        })}
      >
        <h3 className={classes.title}>{item?.title}</h3>
        {item?.caption && <p className={classes.caption}>{item?.caption}</p>}
      </div>
    </Link>
  );
};

export default ShopItem;
