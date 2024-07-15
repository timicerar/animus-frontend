import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';
import { Color } from '@/constants/colors';
import classes from './Section.module.scss';

type SectionProps = {
  id?: string;
  className?: string;
  backgroundImage?: StaticImageData;
  backgroundColor?: Color;
} & PropsWithChildren;

const Section = ({
  id,
  children,
  className,
  backgroundColor,
  backgroundImage,
}: SectionProps) => {
  const style = useMemo<CSSProperties | undefined>(() => {
    if (backgroundImage) {
      return {
        background: `url('${backgroundImage?.src}') no-repeat center/cover`,
      };
    }

    if (backgroundColor) {
      return { background: backgroundColor };
    }

    return undefined;
  }, [backgroundColor, backgroundImage]);

  return (
    <section
      id={id}
      className={classNames(classes.container, className)}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
