const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    // 修改 webpack 入口
    config.entry.app = ["./src/renderer/main.js"];

    // 别名
    config.resolve.alias['@'] = path.resolve(__dirname, "./src/renderer")
    
    // debug
    config.devtool = 'source-map'
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  assetsDir: "assets",
  productionSourceMap: false,
  devServer: {
    open: false,
    port: 8282
  }
})
