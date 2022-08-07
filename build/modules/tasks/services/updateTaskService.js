"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTaskService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interface = require("../interface");

var _dec, _dec2, _dec3, _dec4, _class;

let UpdateTaskService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TaskRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _interface.ITaskRepository === "undefined" ? Object : _interface.ITaskRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateTaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async update({
    task_id,
    id,
    title,
    completed
  }) {
    const taskExists = await this.taskRepository.findByTitle(title);
    const updateTask = await this.taskRepository.findById(id);

    if (!updateTask) {
      throw new _appError.AppError('Task not found', 404);
    }

    if (taskExists && title !== updateTask.title) {
      throw new _appError.AppError('There is already one task with this name', 409);
    }

    updateTask.title = title;
    updateTask.completed = completed;
    await this.taskRepository.save(updateTask);
    return updateTask;
  }

}) || _class) || _class) || _class) || _class);
exports.UpdateTaskService = UpdateTaskService;