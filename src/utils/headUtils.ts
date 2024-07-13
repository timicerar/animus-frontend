import { i18n } from 'next-i18next';
import { SEO } from '@/components/components/Head/Head';
import { Route, Routes } from '@/constants/routes';

export const getSeoContent = (): Partial<Record<Route, SEO>> => ({
  [Routes.HOME]: {
    title: i18n?.t('seo.home.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.FIND_OUT]: {
    title: i18n?.t('seo.findOut.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.READ]: {
    title: i18n?.t('seo.read.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.ILLUSTRATIONS]: {
    title: i18n?.t('seo.illustrations.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.SHOP]: {
    title: i18n?.t('seo.shop.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.SHOP_PRODUCT]: {
    title: i18n?.t('seo.shop.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.SHOP_SUCCESS]: {
    title: i18n?.t('seo.shop.title'),
    description: i18n?.t('seo.default.description'),
  },
  [Routes.TERMS_AND_CONDITIONS]: {
    title: i18n?.t('seo.termsAndConditions.title'),
    description: i18n?.t('seo.default.description'),
  },
});
