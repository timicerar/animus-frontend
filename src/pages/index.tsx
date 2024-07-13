import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import HomePage from '@/components/containers/HomePage/HomePage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.HOME} />
      <HomePage />
    </>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Home;
