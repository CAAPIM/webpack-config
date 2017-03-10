/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import config from '../../src/flowStatus';
import flowStatus from '../../src/plugins/flowStatus';

describe('flowStatusConfig', () => {
  it('should contain flowStatus plugin', () => {
    expect(config.plugins).toContain(flowStatus);
  });
});
