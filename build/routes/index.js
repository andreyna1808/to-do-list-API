"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _routes = require("../modules/tasks/routes");

var _routes2 = require("../modules/users/routes");

var _routes3 = require("../modules/userToken/routes");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.get('/', (req, res) => {
  res.json('Hello Dev!! Welcome To Do List API by Andreyna Carvalho, please use routes BASE_URL/todo-doc');
});
routes.use('/users', _routes2.users);
routes.use('/session', _routes3.session);
routes.use('/task', _routes.task);