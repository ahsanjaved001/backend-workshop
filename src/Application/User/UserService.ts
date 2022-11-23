import {injectable, inject} from "tsyringe";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

import UserEntity from "@domain/Entities/User/UserEntity";

import IUserRepository from "@domain/Entities/User/IUserRepository";

import HttpResponse from "@application/Utils/HttpResponse";

@injectable()
class UserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    async addUser(addUserDTO: AddUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            email: addUserDTO.email
        });

        if (isUser) return HttpResponse.conflict();

        const userEntity = UserEntity.create(addUserDTO);

        await this.userRepository.addUser(userEntity);

        return HttpResponse.created(userEntity);
    }

    async getUsers(getUserDTO: GetUserDTO) {
        const users = await this.userRepository.getUsersBySearch({
            firstName: getUserDTO.firstName,
            lastName: getUserDTO.lastName,
            country: getUserDTO.country
        });

        if (users.length === 0) return HttpResponse.notFound();

        const userEntities = users.map(user => UserEntity.create(user));
        
        return HttpResponse.ok(userEntities);
    }

    async updateUser(updateUserDTO: UpdateUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            userId: updateUserDTO.userId
        });

        if (!isUser) return HttpResponse.notFound();

        const userEntity = UserEntity.create(updateUserDTO);
        await this.userRepository.updateUser(userEntity)

        return HttpResponse.noContent();
    }

    async removeUser(removeUserDTO: RemoveUserDTO) {
        const isUser = await this.userRepository.getUserBySearch({
            userId: removeUserDTO.userId
        });

        if (!isUser) return HttpResponse.notFound();

        await this.userRepository.removeUser({
            userId: removeUserDTO.userId
        });

        return HttpResponse.noContent();
    }
}

export default UserService;
