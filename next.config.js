/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.example.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
