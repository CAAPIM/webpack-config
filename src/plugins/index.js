/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import assets from './assets';
import browserSync from './browserSync';
import define from './define';
import flowStatus from './flowStatus';
import occurrenceOrder from './occurrenceOrder';
import provide from './provide';
import stats from './stats';
import uglify from './uglify';

export default function (options) {
  return {
    assets: assets(options),
    browserSync: browserSync(options),
    define: define(options),
    flowStatus: flowStatus(options),
    occurrenceOrder: occurrenceOrder(options),
    provide: provide(options),
    stats: stats(options),
    uglify: uglify(options),
  };
}
