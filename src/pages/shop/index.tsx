import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import ShopPage from '@/components/containers/ShopPage/ShopPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Shop: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('routes.shop')}</title>
      </Head>
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
