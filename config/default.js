"use strict";

const path = require("path");

const environments= require("./cfg/environments");

const root = process.cwd();

let config = module.exports = {};

config.root = root;
config.env = environments;
