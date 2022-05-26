import * as express from "express";
import { getHealthCheck } from "../models/health";

class HealthCheckController {
  public path = "/health";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getHealthCheck);
  }

  private getHealthCheck = (
    request: express.Request,
    response: express.Response
  ) => {
    response.status(200).send(getHealthCheck());
  };
}

export default HealthCheckController;
