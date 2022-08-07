"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _taskEntitie = _interopRequireDefault(require("../../../infra/entities/taskEntitie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TaskRepository {
  constructor() {
    _defineProperty(this, "ormRepository", void 0);

    this.ormRepository = (0, _typeorm.getRepository)(_taskEntitie.default);
  }

  async create({
    title,
    task_id
  }) {
    const task = this.ormRepository.create({
      title,
      task_id
    });
    await this.ormRepository.save(task);
    return task;
  }

  async save(task) {
    await this.ormRepository.save(task);
    return task;
  }

  async remove(task) {
    const tasks = await this.ormRepository.remove(task);
    return tasks;
  }

  async findAll({
    page,
    skip,
    take
  }) {
    const [tasks, count] = await this.ormRepository.createQueryBuilder().skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: tasks
    };
    return result;
  }

  async find() {
    const task = await this.ormRepository.find();
    return task;
  }

  async findByTitle(title) {
    const task = await this.ormRepository.findOne({
      title
    });
    return task;
  }

  async findById(id) {
    const task = await this.ormRepository.findOne({
      id
    });
    return task;
  }

  async findByUserId(task_id) {
    const task = await this.ormRepository.findOne({
      task_id
    });
    return task;
  }

}

var _default = TaskRepository;
exports.default = _default;