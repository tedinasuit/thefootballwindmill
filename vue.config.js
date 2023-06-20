const path = require('path');

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: require.resolve('url/'),
        timers: require.resolve('timers-browserify')
      }
    }
  },
  chainWebpack: (config) => {
    // Resolve 'xml2js' module to fix another potential error
    config.resolve.alias.set('xml2js', path.resolve(__dirname, 'node_modules/xml2js'));
  }
};