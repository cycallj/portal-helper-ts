module.exports = {
  // 缓存 webpack 固定生成的代码块，改代码通常不变，用于维系各个代码块关系的代码
  runtimeChunk: {
    name: 'manifest',
  },
  // 指定需要进行分块的代码，和分块后的文件名
  splitChunks: {
    cacheGroups: {
      default: false,
      vendors: false,
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'initial',
        enforce: true,
        priority: 10,
        name: 'vendor',
      },
      common: {
        chunks: 'all',
        minChunks: 2,
        enforce: true,
        priority: 5,
        name: 'common',
      },
    },
  },
}
