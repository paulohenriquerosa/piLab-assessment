import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateOutcomeUseCase } from "./CreateOutcomeUseCase";

class CreateOutcomeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, value } = request.body;
    const { id } = request.user;

    const createOutcomeUseCase = container.resolve(CreateOutcomeUseCase);

    const income = await createOutcomeUseCase.execute({
      description,
      value,
      owner_id: id,
    });

    return response.status(201).json(income);
  }
}

export { CreateOutcomeController };
