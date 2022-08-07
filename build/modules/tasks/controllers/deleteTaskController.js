"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTaskControllers = void 0;

var _tsyringe = require("tsyringe");

var _deleteTaskService = require("../services/deleteTaskService");

class DeleteTaskControllers {
  async delete(req, res) {
    const task = _tsyringe.container.resolve(_deleteTaskService.DeleteTaskService);

    const {
      id
    } = req.params;
    const task_id = req.user.id;
    await task.delete(id, task_id);
    return res.status(200).json({
      message: 'Task removed successfully'
    });
  }

}

exports.DeleteTaskControllers = DeleteTaskControllers;