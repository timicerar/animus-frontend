import { useTranslation } from 'next-i18next';
import AnimusPartThreeImage from 'public/images/covers/animus_part_3.jpg';
import NextImage from '@/components/components/NextImage/NextImage';
import BookParagraphs from '@/components/compositions/BookSection/BookParagraphs';
import { getThirdBookParagraphs } from '@/utils/bookUtils';
import classes from './BookSection.module.scss';

const ThirdBook = () => {
  const { t } = useTranslation();
  const { paragraphs, readMoreParagraphs } = getThirdBookParagraphs();

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        {t('readPage.sections.3.book.3.bookTitle')}
      </h3>
      <BookParagraphs
        paragraphs={paragraphs}
        readMoreParagraphs={readMoreParagraphs}
      />
      <NextImage
        src={AnimusPartThreeImage}
        alt="animus-part-three-book"
        className={classes.image}
      />
    </div>
  );
};

export default ThirdBook;
