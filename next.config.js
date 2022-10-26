/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Error: Image Optimization using Next.js default loader is not compatible with `next export`.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
