import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import NextImage from '@/components/components/NextImage/NextImage';
import { ShopRoute } from '@/constants/routes';
import classes from './ShopItem.module.scss';

export type ShopItemType = {
  href: ShopRoute;
  image: StaticImageData;
  title: ReactNode;
  caption?: ReactNode;
  reverseCaption?: boolean;
};

export type ShopItemProps = {
  item: ShopItemType;
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
