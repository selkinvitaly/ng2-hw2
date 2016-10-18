"use strict";

const path    = require("path");
const webpack = require("webpack");
const envs    = require("./environments");

const isWatch = envs.isWatch;
const isProd  = envs.isProd;
const isDev   = envs.isDev;

module.exports = function(root) {

  let options = {
    watch: isWatch,
    context: root,
    entry: {
      app: ["./client/js/main"],
      vendor: [
        "@angular/common",
        "@angular/compiler",
        "@angular/core",
        "@angular/platform-browser",
        "@angular/platform-browser-dynamic",
        "zone.js/dist/zone",
        "core-js/es6/reflect",
        "core-js/es7/reflect"
      ]
    },
    output: {
      path: path.join(root, "./dist/assets/js/"),
      filename: "[name].js",
      chunkFilename: "[id].js",
      publicPath: "",
      pathinfo: isDev
    },
    devtool: isWatch ? "inline-source-map" : false,
    resolve: {
      modules: [ root, "node_modules" ],
      extensions: [".js", ".ts", ".json"],
      enforceModuleExtension: false,
      enforceExtension: false,
      mainFields: ["main"],
      mainFiles: ["index"],
      descriptionFiles: ["package.json"]
    },
    resolveLoader: {
      extensions: [".loader.js", ".js"]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        WATCH: JSON.stringify(process.env.WATCH)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity
      })
    ],
    module: {
      loaders: [{
        test: /\.ts$/,
        loaders: [
          "awesome-typescript-loader"
        ],
        include: [
          path.join(root, "./client")
        ]
      }, {
        test: /\.html$/,
        loader: "html-loader",
        include: [
          path.join(root, "./client")
        ],
        query: {
          attrs: false
        }
      }, {
        test: /\.styl$/,
        loader: !isProd
          ? "to-string-loader!css-loader!postcss-loader!stylus-loader?resolve url"
          : "to-string-loader!css-loader?minimize!postcss-loader!stylus-loader?resolve url"
      }],
      noParse: []
    }
  };

  if (isProd) {
    options.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          "warnings": false,
          "drop_debugger": true,
          "drop_console" : true,
          "unsafe": true
        }
      })
    );
  }

  return options;
};
