import container from "@infrastructure/DIContainer/Container"

import UserService from "@application/User/UserService";

import HttpResp from "@application/Utils/HttpResp";
import HttpStatusCode from "@application/Utils/HttpStatusCode";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

const userService = container.resolve(UserService);

class UserController {
    static async addUser(req, res) {
        try{
            const {body} = req;
            const addUserDTO = AddUserDTO.create(body);
            const httpResponse = await userService.addUser(addUserDTO);
            return HttpResp.convertToExpress(res, httpResponse);
        } catch (err) {
            const httpResponse = HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
            return HttpResp.convertToExpress(res, httpResponse);
        }
    }

    static async getUsers(req, res) {
        try {
            const {query} = req;
            const getUserDTO = GetUserDTO.create(query);
            const httpResponse = await userService.getUsers(getUserDTO);
            return HttpResp.convertToExpress(res, httpResponse);
        } catch (err) {
            const httpResponse = HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
            return HttpResp.convertToExpress(res, httpResponse);
        }
    }

    static async updateUser(req, res) {
        try {
            const {body} = req;
            const updateUserDTO = UpdateUserDTO.create(body);
            const httpResponse = await userService.updateUser(updateUserDTO);
            return HttpResp.convertToExpress(res, httpResponse);
        } catch (err) {
            const httpResponse = HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
            return HttpResp.convertToExpress(res, httpResponse);
        }
    }

    static async removeUser(req, res) {
        try {
            const {query} = req;
            const removeUserDTO = RemoveUserDTO.create(query);
            const httpResponse = await userService.removeUser(removeUserDTO);
            return HttpResp.convertToExpress(res, httpResponse);
        } catch (err) {
            const httpResponse = HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
            return HttpResp.convertToExpress(res, httpResponse);
        }
    }
}

export default UserController;

