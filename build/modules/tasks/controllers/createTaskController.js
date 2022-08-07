"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTaskControllers = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _createTaskService = require("../services/createTaskService");

class CreateTaskControllers {
  async create(req, res) {
    const task = _tsyringe.container.resolve(_createTaskService.CreateTaskService);

    const {
      title
    } = req.body;
    const task_id = req.user.id;
    const createTask = await task.create({
      title,
      task_id
    });
    return res.status(201).json((0, _classTransformer.instanceToInstance)(createTask));
  }

}

exports.CreateTaskControllers = CreateTaskControllers;