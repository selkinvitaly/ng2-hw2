"use strict";

const path   = require("path");
const isProd = require("./environments").isProd;

module.exports = function(root) {

  return {
    autoprefixer: {
      browsers: ["last 2 versions", "Firefox ESR", "ie >= 9"]
    },

    browserSync: {
      server: {
        baseDir: "dist",
        index: "index.html"
      },
      ghostMode: false,
      ui: false,
      notify: false,
      open: false
    },

    stylus: {
      compress: isProd
    },

    cssBase64: {
      baseDir: "client/img/base64/",
      extensions: [/\.svg#base64/i],
      exclude: [],
      maxImageSize: 10 * 1024, // bytes
      debug: false
    },

    imagemin: {
      progressive: true
    },

    rev: {
      manifest: "manifest.json"
    },

    webpackOutput: {
      hash: true,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      chunkModules: false,
      children: false,
      reasons: false,
      source: false,
      errorDetails: true,
      chunkOrigins: false,
      modules: true,
      cached: true,
      colors: true
    }
  };

};
