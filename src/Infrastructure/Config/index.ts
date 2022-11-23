import * as dotenv from "dotenv";
import server from "@infrastructure/Config/server";
import database from "@infrastructure/Config/database";

dotenv.config();

export default {
    server,
    database
};
