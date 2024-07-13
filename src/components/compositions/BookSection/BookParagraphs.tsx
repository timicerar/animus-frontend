import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Collapse from '@/components/compositions/Collapse/Collapse';
import classes from './BookSection.module.scss';

type BookParagraphsProps = {
  paragraphs: string[];
  readMoreParagraphs: string[];
};

const BookParagraphs = ({
  paragraphs,
  readMoreParagraphs,
}: BookParagraphsProps) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  return (
    <div>
      {paragraphs?.map((value, index) => (
        <p key={index} className={classes.paragraph}>
          {value}
        </p>
      ))}
      {!show && (
        <p onClick={() => setShow(true)} className={classes.readMoreLess}>
          {t('shared.readMore')}
        </p>
      )}
      <Collapse show={show}>
        {readMoreParagraphs?.map((value, index) => (
          <p key={index} className={classes.paragraph}>
            {value}
          </p>
        ))}
        {show && (
          <p onClick={() => setShow(false)} className={classes.readMoreLess}>
            {t('shared.readLess')}
          </p>
        )}
      </Collapse>
    </div>
  );
};

export default BookParagraphs;
