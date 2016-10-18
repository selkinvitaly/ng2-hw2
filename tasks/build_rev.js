"use strict";

const gulp     = require("gulp");
const rev      = require("gulp-rev");
const config   = require("config");

module.exports = function(options) {
  let src      = config.get("gulp.tasks.rev.src");
  let dest     = config.get("gulp.tasks.rev.dest");
  let plugins  = config.get("gulp.plugins");

  return function() {
    return gulp.src(src)
      .pipe(rev())
      .pipe(gulp.dest(dest))
      .pipe(rev.manifest(plugins.rev.manifest))
      .pipe(gulp.dest(dest));
  };

};
