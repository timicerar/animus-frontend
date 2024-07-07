import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { i18n } from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from './_app';

const Custom404: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return <>{t('pageNotFound.title')}</>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18n?.defaultLocale)),
    },
  };
};

export default Custom404;
