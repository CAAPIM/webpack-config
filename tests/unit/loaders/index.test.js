/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import css from '../../../src/loaders/loaders/css';
import fontgen from '../../../src/loaders/loaders/fontgen';
import fonts from '../../../src/loaders/loaders/fonts';
import js from '../../../src/loaders/loaders/js';
import scss from '../../../src/loaders/loaders/scss';

describe('loaders', () => {
  it('should test for .css extensions when using the css loader', () => {
    expect(css.test).toEqual(/\.css$/);
  });

  it('should test for .font.json extensions when using the fontgen loader', () => {
    expect(fontgen.test).toEqual(/\.font\.json$/);
  });

  it('should test for .ttf, .eot, .woff and .woff2 extensions when using the fonts loader', () => {
    expect(fonts.test).toEqual(/\.(ttf|eot|woff|woff2)/);
  });

  it('should test for .js extensions when using the js loader', () => {
    expect(js.test).toEqual(/\.js$/);
  });

  it('should test for .scss extensions when using the scss loader', () => {
    expect(scss.test).toEqual(/\.scss$/);
  });
});
