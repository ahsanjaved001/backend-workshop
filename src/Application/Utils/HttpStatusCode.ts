class HttpStatusCode {
    static get OK(): number {
        return 200;
    }

    static get ERROR(): number {
        return 400;
    }

    static get NOT_FOUND(): number {
        return 404;
    }

    static get NOT_AUTHORIZED(): number {
        return 401;
    }

    static get ALREADY_EXIST(): number {
        return 409
    }

    static get CONFLICT(): number {
        return 409;
    }

    static get PASSWORD_EXPIRED(): number {
        return 406;
    }

    static get INTERNAL_SERVER_ERROR(): number {
        return 500;
    }
}

export default HttpStatusCode;
