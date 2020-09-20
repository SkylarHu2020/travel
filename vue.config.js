const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 前端服务器的端口
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles/'))
      .set('@', path.join(__dirname, './src/'))
  }
}
