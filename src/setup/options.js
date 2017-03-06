/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint-disable no-param-reassign */

import path from 'path';
import merge from 'merge';

export default function (options) {
  const env = process.env.NODE_ENV;
  const development = options.development || env === 'development';
  const cssLoader = development ?
    'css-loader?source-map-loader' : '-!css-loader?{"modules":true}!postcss-loader??postcss-ident';

  options = merge.recursive({

    /* Environment */
    name: 'main',
    development,
    env,

    /* HMR */
    domain: process.env.APP_URL,
    hot: options.devServer || development,

    /* devServer */
    indexPage: '/index.html',
    contentBase: process.env.APP_URL,

    /* Filenames and paths */
    filenames: development ? '[name]' : '[name].[hash]',
    devServer: 'http://localhost:8080',
    sourcePath: 'src',
    outputPath: 'public',

    /* Frameworks */
    react: true,

    /* Other options */
    linting: false,
    inlineLimit: 50000,

    /* Rules */
    rules: {
      js: {
        test: /\.js$/,
        use: 'babel-loader',
      },
      css: {
        test: /\.css$/,
        use: cssLoader,
      },
    },
  }, options);

  /* Uniformize source path and entry point */
  options.entry = options.sourcePath;
  options.sourcePath = path.resolve(path.dirname(options.sourcePath));

  return options;
}
