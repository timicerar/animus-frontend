import { useTranslation } from 'next-i18next';
import AnimusPartTwoImage from 'public/images/covers/animus_part_2.jpg';
import NextImage from '@/components/components/NextImage/NextImage';
import BookParagraphs from '@/components/compositions/BookSection/BookParagraphs';
import { getSecondBookParagraphs } from '@/utils/bookUtils';
import classes from './BookSection.module.scss';

const SecondBook = () => {
  const { t } = useTranslation();
  const { paragraphs, readMoreParagraphs } = getSecondBookParagraphs();

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        {t('readPage.sections.3.book.2.bookTitle')}
      </h3>
      <BookParagraphs
        paragraphs={paragraphs}
        readMoreParagraphs={readMoreParagraphs}
      />
      <NextImage
        src={AnimusPartTwoImage}
        alt="animus-part-two-book"
        className={classes.image}
        priority
      />
    </div>
  );
};

export default SecondBook;
