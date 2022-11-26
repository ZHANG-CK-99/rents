const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  // babel node_modules 进行转义，安全性， 缺点： 耗时
  transpileDependencies: true,

  // 关闭eslint， build serve将不会进行eslint检查
  // lintOnSave: false,
  // 书写原生的webpack配置项
  configureWebpack: {
    devServer: {
      open: true,
      port: 8080,
      host: 'localhost',
      proxy: {
        // 百度地图定位接口api
        '/map': {
          target: 'http://api.map.baidu.com/location/ip',
          pathRewrite: { '^/map': '' },
          changeOrigin: true,
          secure: false
        }
      }
    },
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components')
      }
    }
  }
})
