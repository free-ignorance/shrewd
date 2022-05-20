import express from "express";
import { Application } from "express";
import * as bodyParser from "body-parser";
import { getLunarPhase } from "./models/lunar";

import * as pkjson from "../package.json";

// Create Express server
const app: Application = express();

// Express configuration
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

let requestsCount = 0;

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
app.get("/", (req, res) => {
  requestsCount++;
  let date = "";
  const { lang = "en" } = req.query;

  if (req.query.date && req.query.date.length > 0) {
    date = `${req.query.date}`;
    const parsedDate = new Date(date);
    res.status(200).send({
      data: {
        message: `${getLunarPhase(parsedDate, lang)}`,
        version: pkjson.version,
      },
      meta: {
        date: new Date().toISOString(),
        requests: requestsCount,
        version: pkjson.version,
      },
    });
  } else {
    res.status(200).send({
      data: {
        message: `${getLunarPhase(new Date(), lang)}`,
        version: pkjson.version,
      },
      meta: {
        date: new Date().toISOString(),
        requests: requestsCount,
        version: pkjson.version,
      },
    });
  }
});

// /**
//  * @param {Request} req - Express request object
//  * @param {Response} res - Express response object
//  */
// app.get("/health", (req, res) => {
//   requestsCount++;
//   const time = process.uptime();
//   const uptime = sst.format.toDDHHMMSS(time + "");
//   const response = {
//     data: {
//       message: "ok",
//       uptime: uptime,
//       version: pkjson.version,
//     },
//     meta: {
//       date: new Date().toISOString(),
//       requests: requestsCount,
//       version: pkjson.version,
//     },
//   };
//   res.status(200).send(response);
// });

export default app;
