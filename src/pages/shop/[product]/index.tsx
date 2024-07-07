import { GetServerSideProps } from 'next';
import ShopPage from '@/components/containers/ShopPage/ShopPage';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const ShopProduct: NextPageWithLayout = () => {
  return <ShopPage />;
};

ShopProduct.getLayout = (page) => {
  return <div>{page}</div>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default ShopProduct;
