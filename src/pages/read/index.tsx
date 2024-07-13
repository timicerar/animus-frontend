import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import ReadPage from '@/components/containers/ReadPage/ReadPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Read: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('routes.read')}</title>
      </Head>
      <ReadPage />
    </>
  );
};

Read.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Read;
