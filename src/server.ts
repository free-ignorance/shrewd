import App from "./app";

import HealthCheckController from "./controllers/health";
import LunarController from "./controllers/lunar";

const app = new App([new HealthCheckController(), new LunarController()]);

app.listen();
