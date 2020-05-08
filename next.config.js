const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
    webpack(config) {
      config.resolve.modules.push(__dirname)
      return config;
    },
  })