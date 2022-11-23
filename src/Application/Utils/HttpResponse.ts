import RESPONSE_MESSAGES from "@application/Utils/Constants";
import HttpStatusCode from "@application/Utils/HttpStatusCode";

class HttpResponse {
    readonly statusCode: number;
    readonly body: unknown;

    constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }

    static ok(body) {
        return new HttpResponse(HttpStatusCode.OK, body);
    }

    static created(body) {
        return new HttpResponse(HttpStatusCode.CREATED, body);
    }

    static noContent() {
        return new HttpResponse(HttpStatusCode.NO_CONTENT, null);
    }

    static error(body) {
        return new HttpResponse(HttpStatusCode.ERROR, body);
    }

    static notFound(body = RESPONSE_MESSAGES.NOT_FOUND) {
        return new HttpResponse(HttpStatusCode.NOT_FOUND, body);
    }

    static conflict(body = RESPONSE_MESSAGES.CONFLICT) {
        return new HttpResponse(HttpStatusCode.CONFLICT, body);
    }
}

export default HttpResponse;
