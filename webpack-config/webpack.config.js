const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPahtsPlugin = require('tsconfig-paths-webpack-plugin');

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
              useCache: true,
              cacheDirectory: path.join(__dirname, './../','.cache-loader')
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
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(__dirname, './../','.cache-loader')
            }
          },
          'css-loader', // 可选项：css module options or ('typings-for-css-modules-loader')
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.join(__dirname, './../', 'app/assets/css')]
              }
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
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], //该参数将.jsx添加进去，可以再 js中 import加载.jsx
    plugins: [
      new TsconfigPahtsPlugin({
        // 配置文件引入 tsconfig.json
        configFile: path.join(__dirname, './../', 'tsconfig.json')
      })
    ]
  }
};

module.exports = webpackConfig;