"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.session = void 0;

var _express = require("express");

var _sessionControllers = require("../controllers/sessionControllers");

const sessionController = new _sessionControllers.SessionsControllers();
const session = (0, _express.Router)();
exports.session = session;
session.post('/', sessionController.createSession);