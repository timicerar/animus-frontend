import { GetServerSideProps } from 'next';
import { i18n } from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const withTrans = <T extends { [key: string]: unknown }>(
  gssp: GetServerSideProps<T>
): GetServerSideProps<T> => {
  return async (context) => {
    const gsspData = await gssp(context);

    if (!('props' in gsspData)) {
      throw new Error('invalid getSSP result');
    }

    return {
      ...('redirect' in gsspData ? { redirect: gsspData?.redirect } : {}),
      props: {
        ...(await serverSideTranslations(
          context?.locale ?? i18n?.defaultLocale
        )),
        ...gsspData.props,
      },
    };
  };
};
