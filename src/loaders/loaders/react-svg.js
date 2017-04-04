/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';

export default {
  test: /\.svg$/,
  include: [resolve('./src')],
  loaders: ['babel-loader',
    {
      loader: 'react-svg-loader',
      query: {
        svgo: {
          plugins: [{ removeTitle: false }],
          floatPrecision: 2,
        },
      },
    },
  ],
};

