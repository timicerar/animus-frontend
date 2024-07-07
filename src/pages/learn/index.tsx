import { GetServerSideProps } from 'next';
import LearnPage from '@/components/containers/LearnPage';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Learn: NextPageWithLayout = () => {
  return <LearnPage />;
};

Learn.getLayout = (page) => {
  return <div>{page}</div>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Learn;
