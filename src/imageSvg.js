/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import Config from 'webpack-config';

import imageSvgLoader from './loaders/loaders/image-svg';

export default new Config().merge({
  module: {
    rules: [imageSvgLoader],
  },
});
