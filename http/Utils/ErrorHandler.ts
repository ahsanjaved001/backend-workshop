import {ZodError} from "zod";

import AppError from "@infrastructure/Error/AppError";
import HttpStatusCode from "@application/Utils/HttpStatusCode";

import logger from "@infrastructure/Logger/logger";

function ErrorHandler(err, req, res) {
    logger.error(err);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }

    if (err instanceof ZodError) {
        return res.status(HttpStatusCode.ERROR).json({
            status: "error",
            message: JSON.parse(JSON.stringify(err))
        });
    }

    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        status: "error",
        message: "Internal server error"
    });
}

export default ErrorHandler;

