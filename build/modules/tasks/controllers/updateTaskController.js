"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTaskControllers = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _updateTaskService = require("../services/updateTaskService");

class UpdateTaskControllers {
  async update(req, res) {
    const user = _tsyringe.container.resolve(_updateTaskService.UpdateTaskService);

    const {
      title,
      completed
    } = req.body;
    const {
      id
    } = req.params;
    const task_id = req.user.id;
    const updateTask = await user.update({
      task_id,
      id,
      title,
      completed
    });
    return res.json((0, _classTransformer.instanceToInstance)(updateTask));
  }

}

exports.UpdateTaskControllers = UpdateTaskControllers;