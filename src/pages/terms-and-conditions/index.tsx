import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import TermsAndConditionsPage from '@/components/containers/TermsAndConditionsPage/TermsAndConditionsPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const Shop: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.TERMS_AND_CONDITIONS} />
      <TermsAndConditionsPage />
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
