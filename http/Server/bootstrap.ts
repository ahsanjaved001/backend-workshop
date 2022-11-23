import * as express from "express";
import * as cors from "cors";

const limit = {limit: "50mb", extended: true};

const bootstrap = express();

bootstrap.use(express.json(limit));
bootstrap.use(express.urlencoded(limit));
bootstrap.use(cors());

export default bootstrap;
