import { StaticImageData } from 'next/image';
import NextImage from '@/components/components/NextImage/NextImage';
import classes from './FeaturesList.module.scss';

export type FeatureItem = {
  icon: StaticImageData;
  title: string;
  paragraph: string;
};

type FeaturesListProps = {
  heading?: string;
  items: FeatureItem[];
};

const FeaturesList = ({ heading, items }: FeaturesListProps) => {
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

export default FeaturesList;
