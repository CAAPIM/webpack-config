/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import Config from 'webpack-config';

import browserSync from './plugins/browserSync';

const isWebpackDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;

export default new Config().merge({
  plugins: isWebpackDevServer ? [
    browserSync,
  ] : [],
});
