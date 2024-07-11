import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import { ReactNode, useMemo } from 'react';
import NextImage from '@/components/components/NextImage/NextImage';
import classes from './BookSummary.module.scss';

type BookSummaryProps = {
  content: ReactNode;
  image?: {
    src: StaticImageData;
    position: 'left' | 'right';
  };
};

const BookSummary = ({ content, image }: BookSummaryProps) => {
  const imageContent = useMemo(() => {
    if (image?.position === 'left') {
      return (
        <>
          <div>
            <NextImage
              src={image?.src}
              alt="paragraph-image"
              className={classes.image}
            />
          </div>
          <div className={classes.content}>{content}</div>
        </>
      );
    } else if (image?.position === 'right') {
      return (
        <>
          <div className={classes.content}>{content}</div>
          <div>
            <NextImage
              src={image?.src}
              alt="paragraph-image"
              className={classes.image}
            />
          </div>
        </>
      );
    } else {
      return null;
    }
  }, [content, image?.position, image?.src]);

  if (image) {
    return (
      <div
        className={classNames(classes.container, {
          [classes.left]: image?.position === 'left',
          [classes.right]: image?.position === 'right',
        })}
      >
        {imageContent}
      </div>
    );
  }

  return (
    <div className={classNames(classes.container, classes.content)}>
      {content}
    </div>
  );
};

export default BookSummary;
