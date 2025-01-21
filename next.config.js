/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    serverActions: {
      enabled: true
    }
  },
  images: {
    domains: ['sjc.microlink.io'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  output: 'standalone',
}

module.exports = nextConfig 