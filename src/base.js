/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';
import autoprefixer from 'autoprefixer';
import ExtractText from 'extract-text-webpack-plugin';

import loaders from './loaders';
import {
  browserSync,
  define,
  stats,
} from './plugins';

const env = process.env.NODE_ENV;
const isWebpackDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;
const inProduction = env === 'production';
const filename = inProduction ? '[name]' : '[name].[hash]';

// SHARED CONFIGURATION BETWEEN ALL ENVIRONMENTS
/* eslint-disable import/no-mutable-exports */
let config = new Config().merge({
  cache: true,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  entry: {
    vendors: ['./src/index.js'],
  },
  output: {
    pathinfo: !inProduction,
    path: '/build',
    filename: `${filename}.js`,
    publicPath: '/',
    chunkFilename: `/${filename.replace('hash', 'chunkhash')}.js`,
  },
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
    new webpack.optimize.CommonsChunkPlugin({
      name: `${filename}.js`,
      children: true,
    }),
    define,
  ],
  module: {
    rules: [
      loaders.fonts,
      loaders.images,
      loaders.js,
    ],
  },
});

// NON PRODUCTION CONFIGURATION
if (!inProduction) {
  config = config.merge({
    plugins: [
      stats,
    ],
  });

  // ADD WEBPACK DEV SERVER CONFIGURATION IN WATCH MODE
  if (isWebpackDevServer || process.env.NODE_ENV === 'development') {
    config = config.merge({
      devServer: {
        contentBase: process.env.APP_URL,
        historyApiFallback: {
          index: '/index.html',
        },
        hot: true,
      },
      plugins: [
        browserSync,
        new webpack.HotModuleReplacementPlugin(),
      ],
    });
  }
}

export default config;
