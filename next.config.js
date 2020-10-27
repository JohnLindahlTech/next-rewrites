module.exports = {
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'sv',
  },
  async redirects() {
    return [
      {
        source: `/_next/data/:deployment/hej.json`,
        destination: `/_next/data/:deployment/sv/hello.json`,
        permanent: true,
      }

    ];
  },
  async rewrites() {
    return [
      {
        source: '/hej',
        destination: '/sv/hello',
      }
    ];
  },
};
