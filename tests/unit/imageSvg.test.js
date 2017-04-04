/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import config from '../../src/imageSvg';

describe('imageSvgConfig', () => {
  it('should contain imageSvg loader', () => {
    expect(config.module.rules[0].test).toEqual(/\.(svg)/);
  });
});
