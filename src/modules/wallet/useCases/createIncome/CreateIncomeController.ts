import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateIncomeUseCase } from "./CreateIncomeUseCase";

class CreateIncomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, value } = request.body;
    const { id } = request.user;

    const createIncomeUseCase = container.resolve(CreateIncomeUseCase);

    const income = await createIncomeUseCase.execute({
      description,
      value,
      owner_id: id,
    });

    return response.status(201).json(income);
  }
}

export { CreateIncomeController };
