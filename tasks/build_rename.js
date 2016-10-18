"use strict";

const gulp   = require("gulp");
const config = require("config");
const del    = require("del");

module.exports = function(options) {
  let src  = config.get("gulp.tasks.rename.src");
  let dest = config.get("gulp.tasks.rename.dest");
  let temp = config.get("gulp.tasks.rev.dest");

  return function() {
    return gulp.src(src)
      .pipe(gulp.dest(dest))
      .on("end", function() {
        del.sync([temp]);
      });
  };

};
