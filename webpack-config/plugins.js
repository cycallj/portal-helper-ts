const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { resolve, resolveAssetsRootDir } = require('./utils');

let plugins = [];

let files = glob.sync(path.resolve(resolve('app/pages'), '**/*.html'));
files.forEach((page) => {
  let key = page.replace(/(.*\/)*([^.]+).*/ig, '$2');
  
	plugins.push(new HtmlWebpackPlugin({
		hash: true,
		template: page,
    filename: key + '.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
	}));
});

plugins.push(
  new BundleAnalyzerPlugin(
    {
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: 'bundle-analyzer-report.html'
    }
  ),
  new MiniCssExtractPlugin(
    {
      filename: resolveAssetsRootDir('css/[name].[contenthash].css')
    }
  ),
)

module.exports = plugins;