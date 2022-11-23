import * as dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";

import {dataSource} from "@infrastructure/Database/mysqlConnection";

import bootstrap from "@http/Server";
import logger from "@infrastructure/Logger/logger";
import config from "@infrastructure/Config";

const {server} = config;

(async () => {
    try {
        await dataSource.initialize();
        bootstrap.listen(server.PORT, () => {
            logger.debug(`${server.APP_NAME} Listening on port ${server.PORT} `);
        });
    } catch (e) {
        logger.error(`ServerError: ${e.message}`);
    }
})();
