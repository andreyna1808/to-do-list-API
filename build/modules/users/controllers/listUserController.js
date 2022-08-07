"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUsersControllers = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _ListUserService = require("../services/ListUserService");

class ListUsersControllers {
  async list(req, res) {
    const user = _tsyringe.container.resolve(_ListUserService.ListUsersService);

    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 15;
    const products = await user.list({
      page,
      limit
    });
    return res.status(200).json((0, _classTransformer.instanceToInstance)(products));
  }

  async listById(req, res) {
    const user = _tsyringe.container.resolve(_ListUserService.ListUsersService);

    const {
      id
    } = req.params;
    const productById = await user.listById(id);
    return res.status(200).json((0, _classTransformer.instanceToInstance)(productById));
  }

}

exports.ListUsersControllers = ListUsersControllers;