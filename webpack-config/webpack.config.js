const TsconfigPahtsPlugin = require('tsconfig-paths-webpack-plugin');

const entryObj = require('./entry/entry.config.js');
const plugins = require('./plugins');
const { resolve } = require('./utils');
const jsRules = require('./rules/jsRules');
const cssRules = require('./rules/cssRules');

const webpackConfig = {
  entry: entryObj,
  output: {
    path: resolve('distribution'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [...jsRules, ...cssRules]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], //该参数将.jsx添加进去，可以再 js中 import加载.jsx
    plugins: [
      new TsconfigPahtsPlugin({
        // 配置文件引入 tsconfig.json
        configFile: resolve('tsconfig.json')
      })
    ]
  },
  plugins: [...plugins]
};

module.exports = webpackConfig;