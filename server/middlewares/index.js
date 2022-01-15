require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const path = require("path")
const compression = require('compression')

const initMiddleware = (app) => {
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: false, limit: "2mb" }));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(logger("dev"));
  app.use(compression({ level: 6 }))
};

module.exports = initMiddleware;
