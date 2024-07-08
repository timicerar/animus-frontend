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

  return { isHomePage, isShopPage };
};

export default usePageLocation;
