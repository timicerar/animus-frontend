import '@/styles/globals.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation, useTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';
import { ReactElement, ReactNode, useState } from 'react';
import FacebookPixel from '@/components/components/FacebookPixel/FacebookPixel';
import FontProvider from '@/components/providers/FontProvider/FontProvider';
import NavbarProvider from '@/components/providers/NavbarProvider/NavbarProvider';
import { Colors } from '@/constants/colors';

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<T> = AppProps<T> & {
  Component: NextPageWithLayout<T>;
};

function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState: DehydratedState }>) {
  const { t } = useTranslation();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retryOnMount: true,
          },
        },
      })
  );
  const getLayout = Component?.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <FontProvider>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <NavbarProvider>
            <NextNProgress
              height={2}
              options={{ showSpinner: false }}
              color={Colors.RED}
            />
            <Head>
              <title>{t('meta.title')}</title>
              <meta name="description" content={t('meta.description')} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            {getLayout(<Component {...pageProps} />)}
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
              <GoogleAnalytics
                gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
              />
            )}
            {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
              <FacebookPixel id={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID} />
            )}
          </NavbarProvider>
        </HydrationBoundary>
      </FontProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
