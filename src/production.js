/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';

const env = process.env.NODE_ENV;
const inProduction = env === 'production';

export default new Config().merge({
  plugins: inProduction ? [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 2048,
    }),
  ] : [],
});
