import { useTranslation } from 'next-i18next';
import AnimusPartOneImage from 'public/images/covers/animus_part_1.jpg';
import NextImage from '@/components/components/NextImage/NextImage';
import BookParagraphs from '@/components/compositions/BookSection/BookParagraphs';
import { getFirstBookParagraphs } from '@/utils/bookUtils';
import classes from './BookSection.module.scss';

const FirstBook = () => {
  const { t } = useTranslation();
  const { paragraphs, readMoreParagraphs } = getFirstBookParagraphs();

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{t('readPage.sections.1.bookTitle')}</h3>
      <BookParagraphs
        paragraphs={paragraphs}
        readMoreParagraphs={readMoreParagraphs}
      />
      <NextImage
        src={AnimusPartOneImage}
        alt="animus-part-one-book"
        className={classes.image}
        priority
      />
    </div>
  );
};

export default FirstBook;
