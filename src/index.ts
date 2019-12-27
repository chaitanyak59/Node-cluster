import express from "express";
import startApp from "./app";

import { initRoutes } from "./routes";

require('dotenv').config();

const port = Number(process.env.PORT);

function startMain(serverPort: number) {
    const app = express();
    initRoutes(app);
    startApp(app, serverPort);
}

startMain(port)