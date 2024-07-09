import { GetServerSideProps } from 'next';
import IllustrationsPage from '@/components/containers/IllustrationsPage/IllustrationsPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Illustrations: NextPageWithLayout = () => {
  return <IllustrationsPage />;
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
