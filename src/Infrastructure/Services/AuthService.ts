import * as jwt from "jsonwebtoken";

import config from "@infrastructure/Config";
const {server} = config;

class AuthService {
    async authToken(id) {
        return await jwt.sign(id, server.SECRET);
    }

    async verifyToken(token) {
        return await jwt.verify(token, server.SECRET);
    }

    verifyAppVersion(tokenVersion) {
        return tokenVersion === server.APP_VERSION;
    }
}

export default new AuthService();
