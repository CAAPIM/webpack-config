/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';

process.env.NODE_ENV = 'production';
const config = require('../../src/production.js').default;

describe('production config in production mode', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('should contain UglifyJsPlugin plugin if in production', () => {
    expect(config.plugins[0]).toBeInstanceOf(webpack.optimize.UglifyJsPlugin);
    expect(config.plugins[1]).toBeInstanceOf(webpack.optimize.AggressiveMergingPlugin);
    expect(config.plugins[2]).toBeInstanceOf(webpack.optimize.MinChunkSizePlugin);
  });
});
