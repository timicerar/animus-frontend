import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import IllustrationsPage from '@/components/containers/IllustrationsPage/IllustrationsPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Illustrations: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.ILLUSTRATIONS} />
      <IllustrationsPage />
    </>
  );
};

Illustrations.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Illustrations;
