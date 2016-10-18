"use strict";

module.exports = {

  clean: {
    dest: "./dist/assets"
  },

  css: {
    src: "./client/css/*.styl",
    dest: "./dist/assets/css/"
  },

  img: {
    src: ["./client/img/!(base64|svg-sprite|png-sprite)", "./client/img/!(base64|svg-sprite|png-sprite)/**/*.*"],
    dest: "./dist/assets/img/"
  },

  rev: {
    src: "./dist/assets/**/*",
    dest: "./temp/"
  },

  rename: {
    src: "./temp/**/*",
    dest: "./dist/assets/"
  },

  watch: {
    css: "./client/css/**/*.styl"
  }

};
