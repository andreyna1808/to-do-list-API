"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTaskService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interface = require("../interface");

var _dec, _dec2, _dec3, _dec4, _class;

let DeleteTaskService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TaskRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _interface.ITaskRepository === "undefined" ? Object : _interface.ITaskRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteTaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async delete(id, task_id) {
    const removeTask = await this.taskRepository.findById(id);

    if (!removeTask) {
      throw new _appError.AppError('Task not found', 404);
    }

    await this.taskRepository.remove(removeTask);
  }

}) || _class) || _class) || _class) || _class);
exports.DeleteTaskService = DeleteTaskService;