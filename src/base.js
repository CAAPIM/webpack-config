/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';
import autoprefixer from 'autoprefixer';
import ExtractText from 'extract-text-webpack-plugin';

import fontsLoader from './loaders/loaders/fonts';
import imagesLoader from './loaders/loaders/images';
import jsLoader from './loaders/loaders/js';

import browserSync from './plugins/browserSync';
import define from './plugins/define';
import stats from './plugins/stats';

const env = process.env.NODE_ENV;
const isWebpackDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;
const inProduction = env === 'production';
const filename = inProduction ? '[name].[hash]' : '[name]';

// SHARED CONFIGURATION BETWEEN ALL ENVIRONMENTS
export default new Config().merge({
  devtool: inProduction ? false : 'cheap-module-source-map',
  cache: true,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  entry: {
    main: ['./src/index.js'],
  },
  output: {
    pathinfo: !inProduction,
    path: `${process.cwd()}/build`,
    filename: `${filename}.js`,
    publicPath: '/',
    chunkFilename: `/${filename.replace('hash', 'chunkhash')}.js`,
  },

  // ADD WEBPACK DEV SERVER CONFIGURATION IN WATCH MODE
  ...(isWebpackDevServer ? {
    devServer: {
      contentBase: process.env.APP_URL,
      historyApiFallback: {
        index: '/index.html',
      },
      hot: true,
    },
  } : {}),

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        postcss: [autoprefixer],
      },
    }),
    new ExtractText({
      filename: `${filename}.css`,
      disable: false,
      allChunks: true,
    }),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /^\.\/(en-us)$/),
    define,

    // development plugins
    ...(!inProduction ? [
      stats,
    ] : []),

    // ADD HMR PLUGIN IN WATCH MODE
    ...(isWebpackDevServer ? [
      browserSync,
      new webpack.HotModuleReplacementPlugin(),
    ] : []),
  ],
  module: {
    rules: [
      fontsLoader,
      imagesLoader,
      jsLoader,
    ],
  },
});
