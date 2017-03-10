/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

process.env.NODE_ENV = 'development';
const config = require('../../src/production.js').default;

describe('production config in development mode', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('will contain no plugins if in development', () => {
    expect(config.plugins.length).toBe(0);
  });
});
