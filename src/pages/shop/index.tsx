import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import ShopPage from '@/components/containers/ShopPage/ShopPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Shop: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.SHOP} />
      <ShopPage />
    </>
  );
};

Shop.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default Shop;
