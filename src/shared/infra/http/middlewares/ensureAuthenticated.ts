import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/account/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

dotenv.config();

interface IPlayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token is missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const decoded = verify(
      token,
      process.env.SECRET_KEY as string
    ) as IPlayload;

    const { sub: id } = decoded;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    request.user = {
      id: user.id,
    };
    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
