import express, { NextFunction, Request, Response } from "express";

import "reflect-metadata";
import "express-async-errors";
import "../typeorm";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";

import "../../container";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error - ${err.message} `,
    });
  }
);

app.listen(3333, () => console.log("Server is running!"));
