// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  output: 'standalone',
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/',
        headers: headers,
      },
      {
        source: '/(.*)',
        headers: headers,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

const cspHeader = `
    default-src 'self';
    connect-src 'self' blob: data: https://*.google-analytics.com/ https://*.paypal.com/ https://aljatera.com/ https://*.vercel.app/;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: https://www.googletagmanager.com/ https://*.google-analytics.com/ https://connect.facebook.net/ https://*.paypal.com/;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://*.google-analytics.com/ https://www.googletagmanager.com/ https://www.facebook.com/ https://*.paypalobjects.com/ https://*.paypal.com/;
    font-src 'self' data: https://fonts.gstatic.com;
    frame-src 'self' data: https://*.paypal.com/;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

const permissionHeader = `
  accelerometer=(),
  camera=(),
  geolocation=(),
  gyroscope=(),
  magnetometer=(),
  microphone=(),
  payment=(),
  usb=()
`;

const headers = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: permissionHeader.replace(/\n/g, ''),
  },
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\n/g, ''),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];
