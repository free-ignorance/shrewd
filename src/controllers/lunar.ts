import * as express from "express";
import { getLunarPhase } from "../models/lunar";
import { validateDate, validateLanguage } from "../middleware/validate";

class LunarController {
  public path = "/lunar";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getLunarPhase);
  }

  private getLunarPhase = (
    request: express.Request,
    response: express.Response
  ) => {
    // no language defaulting to english

    const language = `${request.query.language}`;
    const date = `${request.query.date}`;

    if (!validateDate(date)) {
      response.status(400).send("Invalid date");
      return;
    }

    if (!validateLanguage(language)) {
      response.status(400).send("Invalid language");
      return;
    }

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
