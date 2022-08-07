"use strict";

var _tsyringe = require("tsyringe");

var _bcryptHash = _interopRequireDefault(require("../config/bcryptHash"));

var _repositories = _interopRequireDefault(require("../modules/tasks/repositories"));

var _repositories2 = _interopRequireDefault(require("../modules/users/repositories"));

var _repositories3 = _interopRequireDefault(require("../modules/userToken/repositories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UserRepository', _repositories2.default);

_tsyringe.container.registerSingleton('UserTokenRepository', _repositories3.default);

_tsyringe.container.registerSingleton('TaskRepository', _repositories.default);

_tsyringe.container.registerSingleton('HashProvider', _bcryptHash.default);