"use strict";

module.exports = {
  isDev: process.env.NODE_ENV === "development",
  isWatch: process.env.WATCH === "true",
  isProd: process.env.NODE_ENV === "production"
};
