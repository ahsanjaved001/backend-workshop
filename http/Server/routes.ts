import app from "@http/Server/bootstrap";

import UserRoutes from "@http/Routes/UserRoutes";

const apiVersion = "api/v1";

app.use(`/${apiVersion}/user`, UserRoutes);
