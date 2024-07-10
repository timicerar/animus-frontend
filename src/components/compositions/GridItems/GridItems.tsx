import { StaticImageData } from 'next/image';
import NextImage from '@/components/components/NextImage/NextImage';
import classes from './GridItems.module.scss';

export type GridItem = {
  icon: StaticImageData;
  title: string;
  paragraph: string;
};

type GridItems = {
  heading?: string;
  items: GridItem[];
};

const GridItems = ({ heading, items }: GridItems) => {
  return (
    <div className={classes.container}>
      {heading && <h1 className={classes.heading}>{heading}</h1>}
      <div className={classes.grid}>
        {items?.map((item, index) => (
          <div key={index} className={classes.item}>
            <NextImage
              src={item?.icon}
              alt={`grid-icon-${index}`}
              width={48}
              height={48}
            />
            <h4 className={classes.title}>{item?.title}</h4>
            <p className={classes.paragraph}>{item?.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridItems;
