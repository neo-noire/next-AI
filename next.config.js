/** @type {import('next').NextConfig} */
const isProd = process.env.NEXTAPP_URL === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  // assetPrefix: isProd ? "http://localhost:3000/" : "http://localhost:3000/",
};

module.exports = nextConfig;
