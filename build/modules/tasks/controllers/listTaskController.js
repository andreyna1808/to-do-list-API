"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTaskControllers = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _listTaskService = require("../services/listTaskService");

class ListTaskControllers {
  async list(req, res) {
    const task = _tsyringe.container.resolve(_listTaskService.ListTaskService);

    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 500;
    const {
      id
    } = req.user;
    const products = await task.list({
      page,
      limit
    }, id);
    return res.status(200).json((0, _classTransformer.instanceToInstance)(products));
  }

  async listById(req, res) {
    const task = _tsyringe.container.resolve(_listTaskService.ListTaskService);

    const {
      id
    } = req.params;
    const productById = await task.listById(id);
    return res.status(200).json((0, _classTransformer.instanceToInstance)(productById));
  }

}

exports.ListTaskControllers = ListTaskControllers;