/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/learning-nextjs' : '',
    basePath: isProd ? '/learning-nextjs' : '',
};

module.exports = nextConfig;
