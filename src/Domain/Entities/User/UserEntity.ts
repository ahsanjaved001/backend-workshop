import * as uuid from "uuid";

export interface IUserEntity {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    address: string;
}

interface UserEntity extends IUserEntity {}

class UserEntity {
    constructor(userEntity: IUserEntity) {
        this.userId = userEntity.userId ? userEntity.userId : uuid.v4();
        this.firstName = userEntity.firstName;
        this.lastName = userEntity.lastName;
        this.email = userEntity.email;
        this.country = userEntity.country;
        this.address = userEntity.address;
    }
    static create(userEntity): UserEntity {
        return new UserEntity(userEntity);
    }
}

export default UserEntity;
