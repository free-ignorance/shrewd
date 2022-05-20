import app from "./app";

const PORT = process.env.PORT || 5000;

app
  .listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    logger.info(`app listening at http://${host}:${port}`);
  })
  .on("error", (e) => logger.error(e));
