const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolveAssetsRootDir } = require('./utils');

let plugins = [];

plugins.push(
  new HtmlWebpackPlugin(
    {
      template: 'app/pages/index.html'
    }
  ),
  new MiniCssExtractPlugin(
    {
      filename: resolveAssetsRootDir('css/[name].[contenthash].css')
    }
  ),
)

module.exports = plugins;