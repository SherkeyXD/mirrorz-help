const withStyle9 = require('style9-webpack/next');

/** @type {import('next').NextConfig} */
module.exports = withStyle9({
  incrementalClassnames: false,
  minifyProperties: process.env.NODE_ENV === 'production'
})({
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    runtime: 'nodejs',
    legacyBrowsers: false,
    sharedPool: true,
    workerThreads: true,
    optimizeCss: process.env.NODE_ENV === 'production' ? {
      logLevel: 'warn'
    } : false
  }
});
