import classNames from 'classnames';
import { StaticImageData } from 'next/image';
import NextImage from '@/components/components/NextImage/NextImage';
import classes from './QuoteCard.module.scss';

type QuoteCardProps = {
  quote: {
    image?: StaticImageData;
    title?: string;
    paragraph: string;
    author?: string;
  };
};

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <div className={classes.container}>
      {quote?.image && (
        <NextImage
          src={quote?.image}
          alt="author-image"
          className={classes.image}
        />
      )}
      <div className={classes.wrapper}>
        {quote?.title && <h3 className={classes.title}>{quote?.title}</h3>}
        <div className={classNames(classes.wrapper, classes.gap)}>
          <p className={classes.paragraph}>{quote?.paragraph}</p>
          {quote?.author && <p className={classes.author}>- {quote?.author}</p>}
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
