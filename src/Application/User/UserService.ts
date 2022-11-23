import {injectable, inject} from "tsyringe";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

import UserEntity from "@domain/Entities/User/UserEntity";

import IUserRepository from "@domain/Entities/User/IUserRepository";

import AppError from "@infrastructure/Error/AppError";
import HttpStatusCode from "@application/Utils/HttpStatusCode";

@injectable()
class UserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    async addUser(addUserDTO: AddUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            email: addUserDTO.email
        });

        if (isUser) throw new AppError(HttpStatusCode.CONFLICT, "Already exists");

        const userEntity = UserEntity.create(addUserDTO);

        await this.userRepository.addUser(userEntity);

        return userEntity;
    }

    async getUsers(getUserDTO: GetUserDTO) {
        const users = await this.userRepository.getUsersBySearch({
            firstName: getUserDTO.firstName,
            lastName: getUserDTO.lastName,
            country: getUserDTO.country
        });

        if (users.length === 0) throw new AppError(HttpStatusCode.NOT_FOUND, "Not found");
        
        return users.map(user => UserEntity.create(user));
    }

    async updateUser(updateUserDTO: UpdateUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            userId: updateUserDTO.userId
        });

        if (!isUser) throw new AppError(HttpStatusCode.NOT_FOUND, "Not found");

        const userEntity = UserEntity.create(updateUserDTO);
        await this.userRepository.updateUser(userEntity)

        return userEntity;
    }

    async removeUser(removeUserDTO: RemoveUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            userId: removeUserDTO.userId
        });

        if (!isUser) throw new AppError(HttpStatusCode.NOT_FOUND, "Not found");

        await this.userRepository.removeUser({
            userId: removeUserDTO.userId
        });

        return;
    }
}

export default UserService;
