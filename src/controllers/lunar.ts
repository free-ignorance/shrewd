import * as express from "express";
import { getLunarPhase } from "../models/lunar";
import {
  invalidDateMiddleware,
  invalidLanguageMiddleware,
} from "../middleware/validate";

class LunarController {
  public path = "/lunar";
  public router = express.Router();

  constructor() {
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

    const language = `${request.query.language}`;
    const date = `${request.query.date}`;

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
