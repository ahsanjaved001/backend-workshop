import {injectable, inject} from "tsyringe";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

import UserEntity from "@domain/Entities/User/UserEntity";

import IUserRepository from "@domain/Entities/User/IUserRepository";

import AppResult from "@application/Utils/AppResult";

@injectable()
class UserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    async addUser(addUserDTO: AddUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            email: addUserDTO.email
        });

        if (isUser) return AppResult.conflict();

        const userEntity = UserEntity.create(addUserDTO);

        await this.userRepository.addUser(userEntity);

        return AppResult.created(userEntity);
    }

    async getUsers(getUserDTO: GetUserDTO) {
        const users = await this.userRepository.getUsersBySearch({
            firstName: getUserDTO.firstName,
            lastName: getUserDTO.lastName,
            country: getUserDTO.country
        });

        if (users.length === 0) return AppResult.notFound();

        const userEntities = users.map(user => UserEntity.create(user));
        
        return AppResult.ok(userEntities);
    }

    async updateUser(updateUserDTO: UpdateUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            userId: updateUserDTO.userId
        });

        if (!isUser) return AppResult.notFound();

        const userEntity = UserEntity.create(updateUserDTO);
        await this.userRepository.updateUser(userEntity)

        return AppResult.noContent();
    }

    async removeUser(removeUserDTO: RemoveUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            userId: removeUserDTO.userId
        });

        if (!isUser) return AppResult.notFound();

        await this.userRepository.removeUser({
            userId: removeUserDTO.userId
        });

        return AppResult.noContent();
    }
}

export default UserService;
