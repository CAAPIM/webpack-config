/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default function () {
  return {
  	enforce: 'pre',
    test: /\.js$/,
    use: 'source-map-loader',
    exclude: /react-hot-loader/,
  };
}
