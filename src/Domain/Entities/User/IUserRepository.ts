import {FindOptionsWhere, UpdateResult} from "typeorm";

import {User} from "@infrastructure/Database/Models/User";

import UserEntity from "@domain/Entities/User/UserEntity";

type UserSearchFilter = FindOptionsWhere<User> | FindOptionsWhere<User>[];

export default interface IUserRepository {
    addUser(user: UserEntity): Promise<User>;
    getUserBySearch(searchFilters: UserSearchFilter): Promise<User | false>;
    getUsersBySearch(searchFilters: UserSearchFilter): Promise<User[] | []>;
    updateUser(user: UserEntity): Promise<UpdateResult>;
    removeUser(filters: FindOptionsWhere<User>): Promise<UpdateResult>;
}
