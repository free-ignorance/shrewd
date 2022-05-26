import * as express from "express";
import { DefaultController } from "./";
import { getLunarPhase } from "../models/lunar";
import {
  invalidDateMiddleware,
  invalidLanguageMiddleware,
} from "../middleware/validate";

class LunarController extends DefaultController {
  constructor() {
    super("/lunar");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getLunarPhase);
    this.router
      .all(this.path, invalidDateMiddleware)
      .all(this.path, invalidLanguageMiddleware);
  }

  private getLunarPhase = (
    request: express.Request,
    response: express.Response
  ) => {
    // no language defaulting to english
    const language = `${request.params.language}`;
    const date = `${request.params.date}`;

    response.status(200).send({
      data: {
        message: `${getLunarPhase(new Date(date), language)}`,
      },
      meta: {
        date: new Date(date).toISOString(),
      },
    });
  };
}

export default LunarController;
