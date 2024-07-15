import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Routes } from '@/constants/routes';

const usePageLocation = () => {
  const { pathname } = useRouter();

  const isHomePage = useMemo(() => {
    return pathname === Routes.HOME;
  }, [pathname]);

  const isShopPage = useMemo(() => {
    return pathname?.includes(Routes.SHOP);
  }, [pathname]);

  const isReadPage = useMemo(() => {
    return pathname?.includes(Routes.READ);
  }, [pathname]);

  const isFindOutPage = useMemo(() => {
    return pathname?.includes(Routes.FIND_OUT);
  }, [pathname]);

  const isIllustrationsPage = useMemo(() => {
    return pathname?.includes(Routes.ILLUSTRATIONS);
  }, [pathname]);

  const isTermsPage = useMemo(() => {
    return pathname?.includes(Routes.TERMS_AND_CONDITIONS);
  }, [pathname]);

  const isPurchaseSuccessPage = useMemo(() => {
    return pathname?.includes(Routes.PURCHASE_SUCCESSFUL);
  }, [pathname]);

  return {
    isHomePage,
    isShopPage,
    isReadPage,
    isFindOutPage,
    isIllustrationsPage,
    isTermsPage,
    isPurchaseSuccessPage,
  };
};

export default usePageLocation;
