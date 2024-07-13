import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import ReadPage from '@/components/containers/ReadPage/ReadPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Read: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.READ} />
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
