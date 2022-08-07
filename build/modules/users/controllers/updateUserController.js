"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUsersControllers = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _UpdateUserService = require("../services/UpdateUserService");

class UpdateUsersControllers {
  async update(req, res) {
    const user = _tsyringe.container.resolve(_UpdateUserService.UpdateUsesService);

    const {
      name,
      email,
      password
    } = req.body;
    const {
      id
    } = req.params;
    const updateUsers = await user.update({
      id,
      name,
      email,
      password
    });
    return res.json((0, _classTransformer.instanceToInstance)(updateUsers));
  }

}

exports.UpdateUsersControllers = UpdateUsersControllers;