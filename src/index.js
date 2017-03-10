/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import base from './base';
import css from './css';
import scss from './scss';
import fontgen from './fontgen';
import eslint from './eslint';
import flowStatus from './flowStatus';
import production from './production';

export default base.merge(
  css,
  scss,
  fontgen,
  eslint,
  flowStatus,
  production,
);
