import { GetServerSideProps } from 'next';
import ReadPage from '@/components/containers/ReadPage/ReadPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Read: NextPageWithLayout = () => {
  return <ReadPage />;
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
