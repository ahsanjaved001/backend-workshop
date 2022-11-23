import {injectable, inject} from "tsyringe";

import AddUserDTO from "@application/User/DTOs/AddUserDTO";
import GetUserDTO from "@application/User/DTOs/GetUserDTO";
import UpdateUserDTO from "@application/User/DTOs/UpdateUserDTO";
import RemoveUserDTO from "@application/User/DTOs/RemoveUserDTO";

import UserEntity from "@domain/Entities/User/UserEntity";

import IUserRepository from "@domain/Entities/User/IUserRepository";

import HttpStatusCode from "@application/Utils/HttpStatusCode";
import HttpResp from "@application/Utils/HttpResp";
import logger from "@infrastructure/Logger/logger";

@injectable()
class UserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    async addUser(addUserDTO: AddUserDTO) {
        try {
            const isUser = await this.userRepository.getUserBySearch({
                email: addUserDTO.email
            });
    
            if (isUser) return HttpResp.create(HttpStatusCode.CONFLICT, { status: "error", message: "Already exists"});
    
            const userEntity = UserEntity.create(addUserDTO);
    
            await this.userRepository.addUser(userEntity);
    
            return HttpResp.create(HttpStatusCode.OK, userEntity);
        } catch (err) {
            logger.error(err.message);
            return HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
        }
    }

    async getUsers(getUserDTO: GetUserDTO) {
        try{
            const users = await this.userRepository.getUsersBySearch({
                firstName: getUserDTO.firstName,
                lastName: getUserDTO.lastName,
                country: getUserDTO.country
            });
    
            if (users.length === 0) return HttpResp.create(HttpStatusCode.CONFLICT, { status: "error", message: "Not found"});
            
            const userEntities = users.map(user => UserEntity.create(user));

            return HttpResp.create(HttpStatusCode.OK, userEntities);
        } catch (err) {
            logger.error(err.message);
            return HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
        }
    }

    async updateUser(updateUserDTO: UpdateUserDTO) {
        try {
            const isUser = await this.userRepository.getUserBySearch({
                userId: updateUserDTO.userId
            });
    
            if (!isUser) return HttpResp.create(HttpStatusCode.CONFLICT, { status: "error", message: "Not found"});
    
            const userEntity = UserEntity.create(updateUserDTO);
            await this.userRepository.updateUser(userEntity)
    
            return HttpResp.create(HttpStatusCode.OK, userEntity)
        } catch (err) {
            logger.error(err.message);
            return HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
        }
    }

    async removeUser(removeUserDTO: RemoveUserDTO) {
        try {
            const isUser = await this.userRepository.getUserBySearch({
                userId: removeUserDTO.userId
            });
    
            if (!isUser) return HttpResp.create(HttpStatusCode.CONFLICT, { status: "error", message: "Not found"});
    
            await this.userRepository.removeUser({
                userId: removeUserDTO.userId
            });
    
            return HttpResp.create(HttpStatusCode.OK, "");
        } catch (err) {
            logger.error(err.message);
            return HttpResp.create(HttpStatusCode.ERROR, { status: "error", message: err.message });
        }
    }
}

export default UserService;
