"use strict";

const gulp = require("gulp");
const sync = require("browser-sync").create();
const root = require("config").get("root");
const path = require("path");

function lazyRequire(passedPath) {
  let args = Array.prototype.slice.call(arguments, 1);

  return function(done) {
    let taskPath = transformPath(passedPath);
    let taskFunc = require("./" + taskPath).apply(this, args);

    return taskFunc(done);
  };

  function transformPath(relativePath) {
    let absolute = path.resolve(root, relativePath);

    return path.relative(__dirname, absolute);
  }
};

gulp.task("build:clean", lazyRequire("./tasks/build_clean"));
gulp.task("build:bsync", lazyRequire("./tasks/build_bsync", { sync }));
gulp.task("build:css", lazyRequire("./tasks/build_css", { sync }));
gulp.task("build:webpack", lazyRequire("./tasks/build_webpack", { sync }));
gulp.task("build:img", lazyRequire("./tasks/build_img"));
gulp.task("build:base", gulp.parallel("build:css", "build:webpack", "build:img"));
gulp.task("build:watch", lazyRequire("./tasks/build_watch"));
gulp.task("build:rev", lazyRequire("./tasks/build_rev"));
gulp.task("build:rename", lazyRequire("./tasks/build_rename"));
gulp.task("build:dev", gulp.series("build:clean", "build:base"));
gulp.task("build:prod", gulp.series("build:clean", "build:base", "build:rev", "build:clean", "build:rename"));
