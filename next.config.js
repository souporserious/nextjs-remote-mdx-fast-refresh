module.exports = {
  pageExtensions: ['mdx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [options.defaultLoaders.babel, '@mdx-js/loader'],
    })
    return config
  },
}
