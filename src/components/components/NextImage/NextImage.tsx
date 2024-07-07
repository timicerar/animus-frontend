import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';
import classes from './NextImage.module.scss';

export interface NextImageProps extends ImageProps {
  maxWidth?: number;
  maxHeight?: number;
  LinkProps?: LinkProps;
}

const NextImage = ({
  maxWidth,
  maxHeight,
  LinkProps,
  className,
  ...props
}: NextImageProps) => {
  const image = (
    <Image
      quality={100}
      {...props}
      alt={props?.alt}
      className={classNames(className, classes.nextImage)}
      style={{
        objectFit: 'contain',
        ...props?.style,
        maxWidth: `${maxWidth}px`,
        maxHeight: `${maxHeight}px`,
      }}
    />
  );

  return LinkProps?.href ? (
    <Link {...LinkProps} className={classNames(className, classes.link)}>
      {image}
    </Link>
  ) : (
    image
  );
};

export default NextImage;
