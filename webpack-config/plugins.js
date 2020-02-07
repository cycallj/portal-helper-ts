const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [];

plugins.push(
  new HtmlWebpackPlugin(
    {
      template: 'app/pages/index.html'
    }
  )
)

module.exports = plugins;