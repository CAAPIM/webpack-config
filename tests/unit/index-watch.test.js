/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// set watch mode
process.argv = ['', 'webpack-dev-server'];
const config = require('../../src').default;

describe('index config with webpack-dev-server running', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('will enable HMR', () => {
    expect(config.devServer.hot).toEqual(true);
  });
});
