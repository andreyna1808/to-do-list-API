"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTaskService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interface = require("../../users/interface");

var _interface2 = require("../interface");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let ListTaskService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('TaskRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _interface2.ITaskRepository === "undefined" ? Object : _interface2.ITaskRepository, typeof _interface.IUsersRepository === "undefined" ? Object : _interface.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListTaskService {
  constructor(taskRepository, usersRepository) {
    this.taskRepository = taskRepository;
    this.usersRepository = usersRepository;
  }

  async list({
    page,
    limit
  }, id) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listByUserId = await this.usersRepository.findById(id);
    const listTasks = await this.taskRepository.findAll({
      page,
      skip,
      take
    });
    const result = listTasks.data.filter(dados => dados.task_id === listByUserId.id);
    return { ...listTasks,
      data: result,
      total: result.length
    };
  }

  async listById(id) {
    const listTasks = await this.taskRepository.findById(id);

    if (!listTasks) {
      throw new _appError.AppError('List not found', 404);
    }

    return listTasks;
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.ListTaskService = ListTaskService;