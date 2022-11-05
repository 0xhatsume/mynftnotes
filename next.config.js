/** @type {import('next').NextConfig} */


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/mynftnotes/' : '',
  images: {
    loader: 'akamai',
    path: '/',
  },
}
