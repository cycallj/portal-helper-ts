const TsconfigPahtsPlugin = require('tsconfig-paths-webpack-plugin');

const plugins = require('./plugins');
const { resolve } = require('./utils');
const jsRules = require('./rules/jsRules');
const cssRules = require('./rules/cssRulesProd');

const webpackConfig = {
  entry: {
    app: resolve('app/pages/index.tsx')
  },
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