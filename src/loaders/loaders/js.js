/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// TODO: Add HMR without overriding user defined babel configs
export default function (options) {
  return {
    ...options.rules.js,
    include: options.sourcePath,
  };
}
