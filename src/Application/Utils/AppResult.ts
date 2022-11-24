import RESPONSE_MESSAGES from "@application/Utils/Constants";
import HttpStatusCode from "@application/Utils/HttpStatusCode";

class AppResult {
    readonly statusCode: number;
    readonly body: unknown;

    constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }

    static ok(body) {
        return new AppResult(HttpStatusCode.OK, body);
    }

    static created(body) {
        return new AppResult(HttpStatusCode.CREATED, body);
    }

    static noContent() {
        return new AppResult(HttpStatusCode.NO_CONTENT, null);
    }

    static error(body) {
        return new AppResult(HttpStatusCode.ERROR, body);
    }

    static notFound(body = RESPONSE_MESSAGES.NOT_FOUND) {
        return new AppResult(HttpStatusCode.NOT_FOUND, body);
    }

    static conflict(body = RESPONSE_MESSAGES.CONFLICT) {
        return new AppResult(HttpStatusCode.CONFLICT, body);
    }
}

export default AppResult;
