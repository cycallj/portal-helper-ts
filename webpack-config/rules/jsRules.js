const { resolve } = require('./../utils')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = [
  {
    // 需要解析什么类型的文件
    test: /\.ts(x?)$/,
    // 使用什么规则解析对应文件
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          cacheDirectory: resolve('.cache-loader'),
          babelOptions: {
            // 不需要 .babelrc文件
            babelrc: false,
            plugins: ['react-hot-loader/babel'],
          },
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                // true：使用组件的less文件
                // css：使用css文件，但同时不能定制主题
                style: true,
              }),
            ],
          }),
        },
      },
    ],
  },
]
