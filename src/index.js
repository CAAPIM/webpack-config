/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import base from './base';
import css from './css';
import scss from './scss';
import reactSvg from './reactSvg';
import fontgen from './fontgen';
import eslint from './eslint';
import flowStatus from './flowStatus';
import production from './production';
import browserSync from './browserSync';

export default base.merge(
  css,
  scss,
  reactSvg,
  fontgen,
  eslint,
  flowStatus,
  production,
  browserSync,
);
