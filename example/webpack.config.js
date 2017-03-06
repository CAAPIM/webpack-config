/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('../');

module.exports = config({
  sourcePath: 'src',
  outputPath: 'build',
  hot: true,
  linting: true,
  plugins: [
    new HTMLWebpackPlugin({
      inject: 'body',
      template: 'index_template.html',
    }),
  ],
});
