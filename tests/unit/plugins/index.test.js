/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import flowStatus from '../../../src/plugins/flowStatus';

describe('flowStatus', () => {
  it('should contain onError handler', () => {
    const flowStatusError = flowStatus.options.onError;
    flowStatusError('error message');

    expect(flowStatus.options.onError.length).toEqual(1);
    expect(typeof flowStatusError).toBe('function');
  });

  it('should contain onSuccess handler', () => {
    const flowStatusSuccess = flowStatus.options.onSuccess;
    flowStatusSuccess('error message');

    expect(flowStatus.options.onSuccess.length).toEqual(1);
    expect(typeof flowStatusSuccess).toBe('function');
  });
});
