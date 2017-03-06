/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default function (options) {
  return {
    test: /\.(png|gif|jpe?g|svg)/,
    use: [`url-loader?limit=${options.inlineLimit}`, 'image-webpack-loader?bypassOnDebug'],
  };
}
