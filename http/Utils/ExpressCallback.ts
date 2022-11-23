import ErrorHandler from "@http/Utils/ErrorHandler";

function ExpressCallback(controller) {
    return async (req, res) => {
        try {
            const httpResponse = await controller(req);

            return res.status(httpResponse.statusCode).json({
                status: "success",
                body: httpResponse.body
            });
        } catch (err) {
            ErrorHandler(err, req, res);
        }
    };
}

export default ExpressCallback;
