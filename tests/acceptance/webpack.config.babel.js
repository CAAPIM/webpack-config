/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint-disable import/no-unresolved */

import Config from 'webpack-config';

export default new Config().extend('../../../lib/index.js').merge({
  output: {
    path: 'build',
  },
});
