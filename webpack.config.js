
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import { DefinePlugin } from 'webpack'

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
    },
    extensions: ['.ts', 'd.ts', '.tsx', '.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
    new DefinePlugin({
      __DEV__: JSON.stringify(!env.prod),
      __BROWSER__: 'true',
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
})

export default config
