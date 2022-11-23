import container from "@infrastructure/DIContainer/Container"

import UserValidations from "@domain/Validations/UserValidation";
import UserService from "@application/User/UserService";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

const userService = container.resolve(UserService);

class UserController {
    static async addUser(req) {
        const {body} = req;
        UserValidations.addUserValidation(body);
        const addUserDTO = new AddUserDTO(body);
        return await userService.addUser(addUserDTO);
    }

    static async getUsers(req) {
        const {query} = req;
        UserValidations.getUserValidation(query);
        const getUserDTO = new GetUserDTO(query);
        return await userService.getUsers(getUserDTO);
    }

    static async updateUser(req) {
        const {body} = req;
        UserValidations.updateUserValidation(body);
        const updateUserDTO = new UpdateUserDTO(body);
        return await userService.updateUser(updateUserDTO);
    }

    static async removeUser(req) {
        const {query} = req;
        UserValidations.removeUserValidation(query);
        const removeUserDTO = new RemoveUserDTO(query);
        return await userService.removeUser(removeUserDTO);
    }
}

export default UserController;

