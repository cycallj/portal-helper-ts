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
      },
      {
        test: /\.scss$/,
        // 只针对业务.scss文件进行编译
        include: [path.join(__dirname, './../', 'app')],
        use: [
          'style-loader',
          'css-loader', // 可选项：css module 
          'sass-loader'
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
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']//该参数将.jsx添加进去，可以再 js中 import加载.jsx
  }
};

module.exports = webpackConfig;