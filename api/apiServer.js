const express = require("express");
const router = require("express").Router();
console.log("server...");

// const apiRouter = require("../routers/routers");
const authRouter = require("../auth/authRouter");
const restrictedRouter = require("../restricted/restrictedRouter");
const apiRouter = require("./apiRouter");
const configureMiddleware = require("./configureMiddleware");

const server = express();
configureMiddleware(server);

server.use("/api", apiRouter);
server.use("/api/auth", authRouter);
server.use("/api/restricted", restrictedRouter);

server.get("/", (req, res) => {
  reson({ message: "\n\n\REDLIGHT DISTRICT UP AND RUNNIN\n\n" });
});
module.exports = server;
