const express = require("express");

const server = express();
const recipesRouter = require("./recipes/recipes-router.js");

server.use("api/recipes", recipesRouter);
server.use(express.json());
server.use(logger);

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "host"
    )}`
  );
  next();
}

module.exports = server;