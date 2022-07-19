import * as express from "express";
import { DefaultController } from "./";
import { getLunarPhase } from "../models/lunar";
import {
  invalidDateMiddleware,
  invalidLanguageMiddleware,
} from "../middleware/validate";

class LunarController extends DefaultController {
  constructor() {
    super("/");
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
    const date = new Date();

    const lunarPhase = getLunarPhase(date, language);
    response.status(200).send({
      data: {
        message: lunarPhase,
      },
      meta: {
        date: `${date}`,
      },
    });
  };
}

export default LunarController;
