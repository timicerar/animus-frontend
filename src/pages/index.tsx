import { GetServerSideProps } from 'next';
import HomePage from '@/components/containers/HomePage/HomePage';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = (page) => {
  return <div>{page}</div>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Home;
