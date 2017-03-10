/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import baseConfig from '../../src/base';
import eslintConfig from '../../src/eslint';

describe('eslintConfig', () => {
  it('can merge loaders and plugins', () => {
    const config = baseConfig.merge(eslintConfig);

    let keyFound = false;

    if (config.module.rules.filter((item) => item.use === 'eslint-loader').length > 0) {
      keyFound = true;
    }

    expect(keyFound).toEqual(true);
  });
});
