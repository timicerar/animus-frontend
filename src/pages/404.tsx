import { GetStaticProps } from 'next';
import { i18n } from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NotFoundPage from '@/components/containers/NotFoundPage/NotFoundPage';
import { NextPageWithLayout } from './_app';

const Custom404: NextPageWithLayout = () => {
  return <NotFoundPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18n?.defaultLocale)),
    },
  };
};

export default Custom404;
