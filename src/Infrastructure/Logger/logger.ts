import * as Logger from "bunyan";
import config from "@infrastructure/Config";

const logger = Logger.createLogger({
    name: config.server.APP_NAME,
    streams: [
        {
            level: "info",
            stream: process.stdout
        },
        {
            level: "debug",
            stream: process.stdout
        },
        {
            level: "error",
            stream: process.stdout
        }
    ]
});

export default logger;
