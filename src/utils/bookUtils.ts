import { i18n } from 'next-i18next';

type BookParagraphs = {
  paragraphs: string[];
  readMoreParagraphs: string[];
};

export const getFirstBookParagraphs = (): BookParagraphs => {
  if (!i18n) {
    return { paragraphs: [], readMoreParagraphs: [] };
  }

  const paragraphs = [
    i18n?.t('readPage.sections.1.paragraphs.1'),
    i18n?.t('readPage.sections.1.paragraphs.2'),
    i18n?.t('readPage.sections.1.paragraphs.3'),
  ];

  const readMoreParagraphs = [
    i18n?.t('readPage.sections.1.paragraphs.4'),
    i18n?.t('readPage.sections.1.paragraphs.5'),
    i18n?.t('readPage.sections.1.paragraphs.6'),
    i18n?.t('readPage.sections.1.paragraphs.7'),
    i18n?.t('readPage.sections.1.paragraphs.8'),
    i18n?.t('readPage.sections.1.paragraphs.9'),
    i18n?.t('readPage.sections.1.paragraphs.10'),
    i18n?.t('readPage.sections.1.paragraphs.11'),
    i18n?.t('readPage.sections.1.paragraphs.12'),
    i18n?.t('readPage.sections.1.paragraphs.13'),
    i18n?.t('readPage.sections.1.paragraphs.14'),
  ];

  return { paragraphs, readMoreParagraphs };
};

export const getSecondBookParagraphs = (): BookParagraphs => {
  if (!i18n) {
    return { paragraphs: [], readMoreParagraphs: [] };
  }

  const paragraphs = [
    i18n?.t('readPage.sections.3.book.2.paragraphs.1'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.2'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.3'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.4'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.5'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.6'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.7'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.8'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.9'),
  ];

  const readMoreParagraphs = [
    i18n?.t('readPage.sections.3.book.2.paragraphs.10'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.11'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.12'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.13'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.14'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.15'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.16'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.17'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.18'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.19'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.20'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.21'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.22'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.23'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.24'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.25'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.26'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.27'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.28'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.29'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.30'),
    i18n?.t('readPage.sections.3.book.2.paragraphs.31'),
  ];

  return { paragraphs, readMoreParagraphs };
};

export const getThirdBookParagraphs = (): BookParagraphs => {
  if (!i18n) {
    return { paragraphs: [], readMoreParagraphs: [] };
  }

  const paragraphs = [
    i18n?.t('readPage.sections.3.book.3.paragraphs.1'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.2'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.3'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.4'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.5'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.6'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.7'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.8'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.9'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.10'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.11'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.12'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.13'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.14'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.15'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.16'),
  ];

  const readMoreParagraphs = [
    i18n?.t('readPage.sections.3.book.3.paragraphs.17'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.18'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.19'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.20'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.21'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.22'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.23'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.24'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.25'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.26'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.27'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.28'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.29'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.30'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.31'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.32'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.33'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.34'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.35'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.36'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.37'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.38'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.39'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.40'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.41'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.42'),
    i18n?.t('readPage.sections.3.book.3.paragraphs.43'),
  ];

  return { paragraphs, readMoreParagraphs };
};
