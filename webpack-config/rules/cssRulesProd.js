const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { resolve } = require('../utils')
const theme = require('../theme')

module.exports = [
  {
    test: /\.scss$/,
    // 只针对业务.scss文件进行编译
    include: [resolve('app')],
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: resolve('.cache-loader'),
        },
      },
      {
        loader: 'css-loader', // 可选项：css module options or ('typings-for-css-modules-loader')
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [resolve('app/assets/css')],
          },
        },
      },
    ],
  },
  {
    test: /\.less$/,
    // 只针对node_modules里面的less文件进行编译
    include: [resolve('node_modules')],
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          // 根据antd官网进行主题修改
          modifyVars: theme,
          // 禁用内联js代码，这个功能用于禁用在样式表里面写js代码
          javascriptEnabled: true,
        },
      },
    ],
  },
]
