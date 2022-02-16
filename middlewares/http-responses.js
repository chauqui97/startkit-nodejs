"use strict";

const sourcePackage = require("../package.json");
// const logger = require()

const metadata = {
  api_name: process.env.API_NAME || sourcePackage["name"],
  api_version: process.env.API_VERSION || sourcePackage["version"],
};

module.exports = function (option) {
  return function (req, res, next) {
    res.setHeader("Content-type", "application.json");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Expires", "0");
    // Cros
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,OPTIONS,PATH,DELETE"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "Content-Type, Authorization, Content-Length, X-Requested-With, Accept"
    );
    // Custom metadata info
    res.setHeader("X-API", `${metadata.api_name}/${metadata.api_version}`);

    next();
  };
};
