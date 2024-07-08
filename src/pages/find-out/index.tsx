import { GetServerSideProps } from 'next';
import FindOutPage from '@/components/containers/FindOutPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const FindOut: NextPageWithLayout = () => {
  return <FindOutPage />;
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
