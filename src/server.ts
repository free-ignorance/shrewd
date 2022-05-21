import app from "./app";
import logger from "./utils/logger";
const PORT = process.env.PORT || 5000;

app
  .listen(PORT, () => {
    logger.info(`app listening at http://${PORT}`);
  })
  .on("error", (e) => logger.error(e));
