import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';
import NextImage from '@/components/components/NextImage/NextImage';
import { Color } from '@/constants/colors';
import classes from './Section.module.scss';

type SectionProps = {
  id?: string;
  classes?: {
    section?: string;
    image?: string;
    content?: string;
  };
  backgroundImage?: StaticImageData;
  backgroundColor?: Color;
} & PropsWithChildren;

const Section = ({
  id,
  children,
  classes: styles,
  backgroundColor,
  backgroundImage,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={classNames(classes.container, styles?.section)}
      style={{ background: backgroundColor }}
    >
      {backgroundColor === undefined && backgroundImage && (
        <NextImage
          src={backgroundImage}
          alt="hero-image-background"
          className={classNames(classes.image, styles?.image)}
          placeholder="blur"
          priority
        />
      )}
      <div className={classNames(classes.children, styles?.content)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
