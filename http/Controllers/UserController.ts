import container from "@infrastructure/DIContainer/Container"

import UserService from "@application/User/UserService";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

const userService = container.resolve(UserService);

class UserController {
    static async addUser(req) {
        const {body} = req;
        const addUserDTO = AddUserDTO.create(body);
        return await userService.addUser(addUserDTO);
    }

    static async getUsers(req) {
        const {query} = req;
        const getUserDTO = GetUserDTO.create(query);
        return await userService.getUsers(getUserDTO);
    }

    static async updateUser(req) {
        const {body} = req;
        const updateUserDTO = UpdateUserDTO.create(body);
        return await userService.updateUser(updateUserDTO);
    }

    static async removeUser(req) {
        const {query} = req;
        const removeUserDTO = RemoveUserDTO.create(query);
        return await userService.removeUser(removeUserDTO);
    }
}

export default UserController;

