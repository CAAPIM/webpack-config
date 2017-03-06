/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import loader from '../../../../src/loaders/loaders/js';

describe('loaders/loaders/js', () => {
  let config;

  it('contains babel loader', () => {
    config = loader({
      react: true,
      sourcePath: 'foobar',
      rules: {
        js: {
          test: /\.js$/,
          use: 'babel-loader',
        },
      },
    });

    /* eslint-disable */
    expect(config).toEqual({"include": "foobar", "test": /\.js$/, "use": "babel-loader"});
  });
});
