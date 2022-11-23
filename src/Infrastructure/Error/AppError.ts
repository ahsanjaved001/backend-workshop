class AppError extends Error {
    public readonly statusCode: number;

    constructor(statusCode: number, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default AppError;
