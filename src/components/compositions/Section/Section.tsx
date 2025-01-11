import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import NextImage from '@/components/components/NextImage/NextImage';
import { Color } from '@/constants/colors';
import classes from './Section.module.scss';

type SectionProps = {
  id?: string;
  className?: string;
  backgroundImage?: StaticImageData;
  backgroundColor?: Color;
  flexGrow?: boolean;
} & PropsWithChildren;

const Section = ({
  id,
  children,
  className,
  backgroundColor,
  backgroundImage,
  flexGrow,
}: SectionProps) => {
  const style = useMemo<CSSProperties | undefined>(() => {
    if (backgroundColor) {
      return { background: backgroundColor };
    }

    return undefined;
  }, [backgroundColor]);

  return (
    <section
      id={id}
      className={classNames(classes.container, {
        [classes.flexGrow]: flexGrow,
      })}
      style={style}
    >
      {backgroundImage && (
        <NextImage
          src={backgroundImage}
          alt="section-background"
          priority
          quality={100}
          className={classes.image}
        />
      )}
      <div className={classNames(classes.children, className)}>{children}</div>
    </section>
  );
};

export default Section;
