"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("express-async-errors");
require("../typeorm");
var AppError_1 = require("../../errors/AppError");
var routes_1 = require("./routes");
require("../../container");
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal server error - " + err.message + " ",
    });
});
app.listen(3333, function () { return console.log("Server is running!"); });
