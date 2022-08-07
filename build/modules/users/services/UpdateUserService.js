"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUsesService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interface = require("../interface");

var _dec, _dec2, _dec3, _dec4, _class;

let UpdateUsesService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _interface.IUsersRepository === "undefined" ? Object : _interface.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateUsesService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async update({
    id,
    name,
    email,
    password
  }) {
    const usersExists = await this.usersRepository.findByEmail(email);
    const updateUser = await this.usersRepository.findById(id);

    if (!updateUser) {
      throw new _appError.AppError('User not found', 404);
    }

    if (usersExists && email !== updateUser.email) {
      throw new _appError.AppError('There is already one user with this email', 409);
    }

    updateUser.name = name;
    updateUser.email = email;
    updateUser.password = password;
    await this.usersRepository.save(updateUser);
    return updateUser;
  }

}) || _class) || _class) || _class) || _class);
exports.UpdateUsesService = UpdateUsesService;