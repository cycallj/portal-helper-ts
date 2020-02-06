const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: {
    app: path.join(__dirname, './../', 'app/pages/index.tsx')
  },
  output: {
    path: path.join(__dirname, './../', 'distribution'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        // 需要解析什么类型的文件
        test: /\.ts(x?)$/,
        // 使用什么规则解析对应文件
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {

            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'app/pages/index.html'
      }
    )
  ]
};

module.exports = webpackConfig;