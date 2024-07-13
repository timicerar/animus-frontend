import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { PropsWithChildren } from 'react';
import { Route, Routes } from '@/constants/routes';
import { getSeoContent } from '@/utils/headUtils';

export type SEO = {
  title?: string;
  description?: string;
};

export type HeadProps = {
  route?: Route;
} & PropsWithChildren;

const Head = ({ route = Routes.HOME, ...props }: HeadProps) => {
  const { t } = useTranslation();
  const { asPath } = useRouter();

  const seo = route ? getSeoContent()?.[route] : undefined;

  const defaultTitle = t('seo.default.title');
  const defaultDescription = t('seo.default.description');
  const defaultImage = `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/animus_background_hero.png`;

  const title = seo?.title || defaultTitle;
  const description = seo?.description || defaultDescription;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:site_name" content={defaultTitle} />
      <meta name="og:site_name" content={defaultTitle} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${asPath}`}
      />
      <meta name="og:image" content={defaultImage} />
      <meta name="og:image:secure_url" content={defaultImage} />
      <meta name="image" property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {props?.children}
    </NextHead>
  );
};

export default Head;
