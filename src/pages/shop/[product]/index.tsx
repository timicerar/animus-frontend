import { GetServerSideProps } from 'next';
import ShopPage from '@/components/containers/ShopPage/ShopPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const ShopProduct: NextPageWithLayout = () => {
  return <ShopPage />;
};

ShopProduct.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default ShopProduct;
