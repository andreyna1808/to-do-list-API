"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUsersService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interface = require("../interface");

var _dec, _dec2, _dec3, _dec4, _class;

let ListUsersService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _interface.IUsersRepository === "undefined" ? Object : _interface.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async list({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const listUsers = await this.usersRepository.findAll({
      page,
      skip,
      take
    });
    return listUsers;
  }

  async listById(id) {
    const listUsers = await this.usersRepository.findById(id);

    if (!listUsers) {
      throw new _appError.AppError('User not found', 404);
    }

    return listUsers;
  }

}) || _class) || _class) || _class) || _class);
exports.ListUsersService = ListUsersService;