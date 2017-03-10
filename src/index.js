/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';
import Config from 'webpack-config';

export default new Config().extend(
  resolve(__dirname, 'base.js'),
  resolve(__dirname, 'css.js'),
  resolve(__dirname, 'scss.js'),
  resolve(__dirname, 'fontgen.js'),
  resolve(__dirname, 'eslint.js'),
  resolve(__dirname, 'flowStatus.js'),
  resolve(__dirname, 'production.js'),
);
