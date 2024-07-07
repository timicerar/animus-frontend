/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'sl',
    locales: ['sl'],
    localeDetection: false,
  },
  localePath:
    typeof window === 'undefined'
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('path').resolve('./public/locales')
      : '/locales',
  ns: ['translation'],
  defaultNS: 'translation',
  reloadOnPrerender: true,
  returnObjects: true,
  preload: ['sl'],
};
