"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var user_routes_1 = require("./user.routes");
var router = express_1.Router();
exports.router = router;
router.use("/auth", user_routes_1.userRoutes);
