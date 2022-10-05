/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,


}
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");

module.exports = withPlugins([withImages], {
  images: {
    domains: ["dev.pricepally.com"]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }));
    return config;
  },

}),

  module.exports = nextConfig


