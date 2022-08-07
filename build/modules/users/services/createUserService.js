"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsersService = void 0;

var _tsyringe = require("tsyringe");

var _appError = require("../../../utils/appError");

var _interfaceHash = require("../../../utils/interfaceHash");

var _interface = require("../interface");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateUsersService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _interface.IUsersRepository === "undefined" ? Object : _interface.IUsersRepository, typeof _interfaceHash.IHashProvider === "undefined" ? Object : _interfaceHash.IHashProvider]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUsersService {
  constructor(usersRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async create({
    name,
    email,
    password
  }) {
    const usersExists = await this.usersRepository.findByEmail(email);

    if (usersExists) {
      throw new _appError.AppError('There is already one user with this email', 409);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);
    const createUser = this.usersRepository.create({
      name,
      email,
      password: hashedPassword
    });
    return createUser;
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateUsersService = CreateUsersService;