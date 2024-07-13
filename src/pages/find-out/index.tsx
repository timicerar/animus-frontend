import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import FindOutPage from '@/components/containers/FindOutPage/FindOutPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const FindOut: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.FIND_OUT} />
      <FindOutPage />
    </>
  );
};

FindOut.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default FindOut;
