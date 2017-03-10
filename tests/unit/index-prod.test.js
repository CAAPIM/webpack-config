/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// set production mode
process.env.NODE_ENV = 'production';
const config = require('../../src').default;

describe('index config in production mode', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('will contain the hash in the output filename', () => {
    expect(config.output.filename).toContain('[hash]');
  });
});
