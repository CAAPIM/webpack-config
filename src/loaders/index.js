/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import css from './loaders/css';
import fonts from './loaders/fonts';
import html from './loaders/html';
import images from './loaders/images';
import js from './loaders/js';
import json from './loaders/json';
import scss from './loaders/scss';
import webfonts from './loaders/webfonts';
import fontgen from './loaders/fontgen';
import eslint from './preloaders/eslint';
import sourcemap from './preloaders/sourceMap';

export default function (options) {
  return {
    fontgen: fontgen(options),
    css: css(options),
    eslint: eslint(options),
    fonts: fonts(options),
    html: html(options),
    images: images(options),
    js: js(options),
    json: json(options),
    scss: scss(options),
    webfonts: webfonts(options),
    sourcemap: sourcemap(options),
  };
}
