const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    app: ["babel-polyfill", "./app/browser/index.js"]
  },

  output: {
    path: path.join(__dirname, "..", "public/dist"),
    chunkFilename: "[name]-[chunkhash].js",
    filename:
      process.env.NODE_ENV === "production"
        ? "[name]-[chunkhash].js"
        : "[name].js",
    publicPath: "/dist"
  },

  plugins:
    process.env.NODE_ENV === "production"
      ? [
          new webpack.DefinePlugin({
            "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
          }),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin(),
          // new BundleAnalyzerPlugin({
          //   analyzerMode: "static",
          //   openAnalyzer: true
          // }),
          new webpack.HashedModuleIdsPlugin(),
          new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            minChunks: function(module, count) {
              return (
                module.context && module.context.indexOf("node_modules") !== -1
              );
            }
          }),
          function() {
            this.plugin("done", function(stats) {
              require("fs").writeFileSync(
                path.join(__dirname, "..", "assets-manifest.json"),
                JSON.stringify(stats.toJson())
              );
            });
          }
        ]
      : [],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader?presets[]=env&presets[]=react"
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: "url-loader"
      }
    ]
  }
};

module.exports = config;
