"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsersControllers = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _createUserService = require("../services/createUserService");

class CreateUsersControllers {
  async create(req, res) {
    const user = _tsyringe.container.resolve(_createUserService.CreateUsersService);

    const {
      name,
      email,
      password
    } = req.body;
    const createUsers = await user.create({
      name,
      email,
      password
    });
    return res.status(201).json((0, _classTransformer.instanceToInstance)(createUsers));
  }

}

exports.CreateUsersControllers = CreateUsersControllers;