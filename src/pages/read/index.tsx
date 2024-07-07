import { GetServerSideProps } from 'next';
import ReadPage from '@/components/containers/ReadPage';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Read: NextPageWithLayout = () => {
  return <ReadPage />;
};

Read.getLayout = (page) => {
  return <div>{page}</div>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Read;
