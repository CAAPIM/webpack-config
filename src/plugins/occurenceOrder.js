import webpack from 'webpack';

export default function () {
  return new webpack.optimize.OccurenceOrderPlugin(true);
}
