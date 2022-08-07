"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTaskService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interface = require("../interface");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateTaskService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TaskRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _interface.ITaskRepository === "undefined" ? Object : _interface.ITaskRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateTaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async create({
    task_id,
    title
  }) {
    const taskExists = await this.taskRepository.findByTitle(title);

    if (taskExists) {
      throw new _appError.AppError('There is already one task with this title', 409);
    }

    const createTask = await this.taskRepository.create({
      title,
      task_id
    });
    return createTask;
  }

}) || _class) || _class) || _class) || _class);
exports.CreateTaskService = CreateTaskService;