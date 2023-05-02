/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.svg.com', 'tailwindui.com'],
},
}

module.exports = nextConfig
