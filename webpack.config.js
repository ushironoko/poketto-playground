/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

const outputPath = resolve(__dirname, 'dist')

/** @type {import('webpack').ConfigurationFactory} */
const config = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.prod ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true,
    hot: true,
    stats: 'minimal',
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'bundle.js',
  },
  entry: [resolve(__dirname, 'src/main.ts')],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue: '@vue/runtime-dom',
      '~': resolve('src'),
    },
    extensions: ['.ts', 'd.ts', '.tsx', '.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
  ],
})

module.exports = config
