/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'casafroid.com',
      },
      {
        protocol: 'https',
        hostname: 'froidel.ma',
      },
    ],
  },
}

module.exports = nextConfig
