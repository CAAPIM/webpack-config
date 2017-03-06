/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import path from 'path';
import Config from 'webpack-config';
import CleanPlugin from 'clean-webpack-plugin';
import objectPath from 'object-path';

export default function (options, rules, plugins) {
  let config = new Config().merge({
    cache: true,
    entry: {
      [options.name]: [`./${options.entry}`],
    },
    output: {
      pathinfo: options.development,
      path: path.resolve(options.outputPath),
      filename: `${options.filenames}.js`,
    },
    resolve: {
      extensions: ['*', '.js'],
    },
    plugins: objectPath.get(options, 'plugins', []),
    module: {
      rules: objectPath.get(options, 'module.rules', []),
    },
  });

  config.plugins.push(plugins.define);

  if (!options.development) {
    config = config.merge({
      devtool: false,
      output: {
        pathinfo: false,
      },
      plugins: [
        new CleanPlugin(options.outputPath, process.cwd()),
        plugins.uglify,
      ],
    });
  }

  return config;
}
