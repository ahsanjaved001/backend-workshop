import ErrorHandler from "@http/Utils/ErrorHandler";
import HttpStatusCode from "@application/Utils/HttpStatusCode";

function ExpressCallback(controller) {
    return async (req, res) => {
        try {
            const httpResponse = await controller(req);

            return res.status(
                httpResponse && httpResponse.statusCode ? httpResponse.statusCode : HttpStatusCode.OK
            ).json({
                status: "success",
                body: httpResponse
            });
        } catch (err) {
            ErrorHandler(err, req, res);
        }
    };
}

export default ExpressCallback;
