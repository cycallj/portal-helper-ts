const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

const entryObj = require('./entry/entry.config.js')
const plugins = require('./plugins')
const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const cssRules = require('./rules/cssRules')

const port = 8080

const webpackConfig = {
  entry: entryObj,
  output: {
    path: resolve('distribution'),
    filename: 'js/[name].[hash].js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './distribution',
    inline: true,
    hot: true,
    port: port,
    open: false,
    disableHostCheck: true,
  },
  module: {
    rules: [...jsRules, ...cssRules],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], //该参数将.jsx添加进去，可以再 js中 import加载.jsx
    plugins: [
      new TsconfigPathsPlugin({
        // 配置文件引入 tsconfig.json
        configFile: resolve('tsconfig.json'),
      }),
    ],
  },
  plugins: [...plugins, new webpack.HotModuleReplacementPlugin()],
}

module.exports = webpackConfig
