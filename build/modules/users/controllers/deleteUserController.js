"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUsersControllers = void 0;

var _tsyringe = require("tsyringe");

var _deleteUserService = require("../services/deleteUserService");

class DeleteUsersControllers {
  async delete(req, res) {
    const user = _tsyringe.container.resolve(_deleteUserService.DeleteUsersService);

    const {
      id
    } = req.params;
    await user.delete(id);
    return res.status(200).json({
      message: 'User removed successfully'
    });
  }

}

exports.DeleteUsersControllers = DeleteUsersControllers;