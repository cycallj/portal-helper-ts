const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { resolveAssetsRootDir } = require('./utils');

let plugins = [];

plugins.push(
  new HtmlWebpackPlugin(
    {
      template: 'app/pages/index.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }
  ),
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