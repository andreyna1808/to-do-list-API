"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.task = void 0;

var _express = require("express");

var _isAuth = _interopRequireDefault(require("../../../utils/isAuth"));

var _createTaskController = require("../controllers/createTaskController");

var _deleteTaskController = require("../controllers/deleteTaskController");

var _listTaskController = require("../controllers/listTaskController");

var _updateTaskController = require("../controllers/updateTaskController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listTaskController = new _listTaskController.ListTaskControllers();
const createTaskController = new _createTaskController.CreateTaskControllers();
const updateTaskController = new _updateTaskController.UpdateTaskControllers();
const deleteTaskController = new _deleteTaskController.DeleteTaskControllers();
const task = (0, _express.Router)();
exports.task = task;
task.use(_isAuth.default);
task.get('/', listTaskController.list);
task.get('/:id', listTaskController.listById);
task.post('/', createTaskController.create);
task.put('/:id', updateTaskController.update);
task.delete('/:id', deleteTaskController.delete);