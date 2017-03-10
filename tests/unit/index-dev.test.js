/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// set dev mode
process.env.NODE_ENV = 'development';
const config = require('../../src').default;

describe('index config in development mode', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('will not contain the hash in the output filename', () => {
    expect(config.output.filename).not.toContain('[hash]');
  });

  it('can merge loaders and plugins', () => {
    const newConfig = config.merge({
      watch: true,
      module: {
        rules: [
          { foo: 'bar' },
        ],
      },
      plugins: [
        { foo: 'bar' },
      ],
    });

    expect(newConfig.module.rules[newConfig.module.rules.length - 1]).toEqual({ foo: 'bar' });
    expect(newConfig.plugins[newConfig.plugins.length - 1]).toEqual({ foo: 'bar' });
  });
});
