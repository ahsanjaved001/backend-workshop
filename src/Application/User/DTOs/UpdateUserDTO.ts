import {IUserEntity} from "@domain/Entities/User/UserEntity";

type TUpdateUserDTO = Pick<IUserEntity, "userId" | "firstName" | "lastName" | "email" | "country" | "address">;

interface UpdateUserDTO extends TUpdateUserDTO {}

class UpdateUserDTO {
    constructor(body: TUpdateUserDTO) {
        this.userId = body.userId;
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.email = body.email;
        this.country = body.country;
        this.address = body.address;
    }
}

export default UpdateUserDTO;
