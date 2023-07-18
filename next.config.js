/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    API_URL: process.env.API_URL,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
  }
}

module.exports = nextConfig
