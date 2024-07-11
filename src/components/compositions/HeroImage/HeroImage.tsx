import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import NextImage from '@/components/components/NextImage/NextImage';
import Section from '@/components/compositions/Section/Section';
import classes from './HeroImage.module.scss';

type HeroImageProps = {
  classes?: {
    section?: string;
    image?: string;
  };
  backgroundImage: StaticImageData;
  image: StaticImageData;
};

const HeroImage = ({
  backgroundImage,
  image,
  classes: styles,
}: HeroImageProps) => {
  return (
    <Section
      className={classNames(classes.container, styles?.section)}
      backgroundImage={backgroundImage}
    >
      <NextImage
        src={image}
        alt="hero-image"
        className={classNames(classes.image, styles?.image)}
      />
    </Section>
  );
};

export default HeroImage;
