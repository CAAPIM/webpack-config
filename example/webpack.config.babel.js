/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import Config from 'webpack-config';
import { resolve } from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default new Config().extend(resolve(__dirname, '../')).merge({
  output: {
    path: '/build',
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: 'body',
      template: 'index_template.html',
    }),
  ],
});
