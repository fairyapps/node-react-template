export default function devAssets() {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../../../webpack/browser.config");

  const compiler = webpack(webpackConfig);

  return [
    webpackDevMiddleware(compiler, {
      noInfo: true,
      lazy: true,
      publicPath: webpackConfig.output.publicPath
    }),
    webpackHotMiddleware(compiler)
  ];
}
