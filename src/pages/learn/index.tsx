import { GetServerSideProps } from 'next';
import LearnPage from '@/components/containers/LearnPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Learn: NextPageWithLayout = () => {
  return <LearnPage />;
};

Learn.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Learn;
