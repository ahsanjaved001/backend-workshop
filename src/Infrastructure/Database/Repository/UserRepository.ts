import {injectable} from "tsyringe";
import {Repository, UpdateResult, FindOptionsWhere} from "typeorm";


import {dataSource} from "@infrastructure/Database/mysqlConnection";
import {User} from "@infrastructure/Database/Models/User";

import IUserRepository from "@domain/Entities/User/IUserRepository";
import UserEntity from "@domain/Entities/User/UserEntity";

type UserSearchFilter = FindOptionsWhere<User> | FindOptionsWhere<User>[];

@injectable()
class UserRepository implements IUserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }

    async addUser(user: UserEntity): Promise<User> {
        return await this.userRepository.save(user);
    }

    async getUserBySearch(searchFilters: UserSearchFilter): Promise<User | false> {
        const user = await this.userRepository.findOne({
            where: searchFilters
        });

        if (user) {
            return user;
        }

        return false;
    }

    async getUsersBySearch(searchFilters: UserSearchFilter): Promise<User[] | []> {
        const users = await this.userRepository.find({
            where: searchFilters
        });

        if (users.length > 0) {
            return users;
        }

        return [];
    }

    async updateUser(user: UserEntity): Promise<UpdateResult> {
        return await this.userRepository.update({userId: user.userId}, user);
    }

    async removeUser(filters: FindOptionsWhere<User>): Promise<UpdateResult> {
        return await this.userRepository.softDelete(filters);
    }
}

export default UserRepository;
