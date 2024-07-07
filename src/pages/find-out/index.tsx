import { GetServerSideProps } from 'next';
import FindOutPage from '@/components/containers/FindOutPage';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const FindOut: NextPageWithLayout = () => {
  return <FindOutPage />;
};

FindOut.getLayout = (page) => {
  return <div>{page}</div>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default FindOut;
