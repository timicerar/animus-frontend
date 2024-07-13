import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import ShopProductPage from '@/components/containers/ShopProductPage/ShopProductPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const ShopProduct: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.SHOP_PRODUCT} />
      <ShopProductPage />
    </>
  );
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
