import { GetServerSideProps } from 'next';
import Head from '@/components/components/Head/Head';
import PurchaseSuccessfulPage from '@/components/containers/PurchaseSuccesfulPage/PurchaseSuccessfulPage';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import { Routes } from '@/constants/routes';
import { NextPageWithLayout } from '@/pages/_app';
import { withTrans } from '@/utils/withTrans';

const PurchaseSuccessful: NextPageWithLayout = () => {
  return (
    <>
      <Head route={Routes.PURCHASE_SUCCESSFUL} />
      <PurchaseSuccessfulPage />
    </>
  );
};

PurchaseSuccessful.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = withTrans(async () => {
  return {
    props: {},
  };
});

export default PurchaseSuccessful;
