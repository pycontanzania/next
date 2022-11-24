/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  images:{
     domains:['res.cloudinary.com']
  },
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};


//PWA
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);

module.exports = nextTranslate(nextConfig);
