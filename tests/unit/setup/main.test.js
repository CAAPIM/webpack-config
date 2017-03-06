/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import path from 'path';
import applications from '../../../src';

describe('setup/main', () => {
  let config;

  it('will not contain the hash in the development environment', () => {
    config = applications({
      development: true,
      outputPath: 'foobar',
    });

    expect(config.output.path).toEqual(path.resolve('foobar'));
    expect(config.output.filename).not.toContain('[hash]');
    expect(config.output.filename).not.toContain('[hash]');
  });

  it('will contain the hash if not in the development environment', () => {
    config = applications({
      development: false,
      outputPath: 'foobar',
    });

    expect(config.output.path).toEqual(path.resolve('foobar'));
    expect(config.output.filename).toContain('[hash]');
  });

  it('can enable HMR', () => {
    config = applications({
      hot: true,
    });

    expect(config.devServer.hot).toEqual(true);
  });

  it('can merge loaders and plugins', () => {
    config = applications({
      development: false,
      module: {
        rules: [
          { foo: 'bar' },
        ],
      },
      plugins: [
        { foo: 'bar' },
      ],
    });

    expect(config.module.rules[0]).toEqual({ foo: 'bar' });
    expect(config.plugins[0]).toEqual({ foo: 'bar' });
  });

  it('will add the eslint rules if the linting and dev options are enabled', () => {
    config = applications({
      linting: true,
      development: true,
    });
    let keyFound = false;

    if (config.module.rules.filter((item) => item.use === 'eslint-loader').length > 0) {
      keyFound = true;
    }

    expect(keyFound).toEqual(true);
  });
});
