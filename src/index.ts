import express from "express";
import startApp from "./app";
import dotenv from 'dotenv';
import { initRoutes } from "./routes";

dotenv.config();
const port = Number(process.env.PORT);

function startMain(serverPort: number) {
    const app = express();
    initRoutes(app);
    startApp(app, serverPort);
}

startMain(port)