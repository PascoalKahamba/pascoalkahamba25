const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  ...nextTranslate(),
  swcMinify: true,
};

module.exports = nextConfig;
