import {ZodError} from "zod";

import HttpStatusCode from "@application/Utils/HttpStatusCode";
import RESPONSE_MESSAGES from "@application/Utils/Constants";

import logger from "@infrastructure/Logger/logger";

function ErrorHandler(err, req, res) {
    logger.error(err);

    if (err instanceof ZodError) {
        return res.status(HttpStatusCode.ERROR).json({
            status: "error",
            message: JSON.parse(JSON.stringify(err))
        });
    }

    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        status: "error",
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
    });
}

export default ErrorHandler;

