"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../../../../modules/account/useCases/CreateUserController");
var userRoutes = express_1.Router();
exports.userRoutes = userRoutes;
var createuserController = new CreateUserController_1.CreateUserController();
userRoutes.post("/signup", createuserController.handle);
