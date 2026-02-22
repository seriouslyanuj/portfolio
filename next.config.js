/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['geist'],
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig
