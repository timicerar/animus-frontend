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
  priority,
  LinkProps,
  className,
  ...props
}: NextImageProps) => {
  const image = (
    <Image
      {...props}
      alt={props?.alt}
      priority={priority}
      className={classNames(classes.nextImage, className)}
      style={{
        ...props?.style,
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        maxHeight: maxHeight ? `${maxHeight}px` : undefined,
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
