/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: isProd ? true : false,
    },
    assetPrefix: isProd ? '/learning-nextjs' : undefined,
    basePath: isProd ? '/learning-nextjs' : '',
};

module.exports = nextConfig;
