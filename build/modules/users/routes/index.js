"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;

var _express = require("express");

var _isAuth = _interopRequireDefault(require("../../../utils/isAuth"));

var _createUserController = require("../controllers/createUserController");

var _deleteUserController = require("../controllers/deleteUserController");

var _listUserController = require("../controllers/listUserController");

var _updateUserController = require("../controllers/updateUserController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listUsersController = new _listUserController.ListUsersControllers();
const createUsersController = new _createUserController.CreateUsersControllers();
const updateUsersController = new _updateUserController.UpdateUsersControllers();
const deleteUsersController = new _deleteUserController.DeleteUsersControllers();
const users = (0, _express.Router)();
exports.users = users;
users.get('/', _isAuth.default, listUsersController.list);
users.get('/:id', listUsersController.listById);
users.post('/', createUsersController.create);
users.put('/:id', updateUsersController.update);
users.delete('/:id', deleteUsersController.delete);