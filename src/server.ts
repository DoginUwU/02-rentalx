import "dotenv/config";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import "./database";
import "./shared/container";

import { exceptionHandling } from "./middlewares/exceptionHandling";
import { router } from "./routes";
import swaggerDocument from "./swagger.json";

const app = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.use(exceptionHandling);

app.listen(3333, () => {
    console.log("Server is running on port 3333");
});
