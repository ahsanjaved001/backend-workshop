import {IUserEntity} from "@domain/Entities/User/UserEntity";

type TAddUserDTO = Pick<IUserEntity, "firstName" | "lastName" | "email" | "country" | "address">;

interface AddUserDTO extends TAddUserDTO {}

class AddUserDTO {
    constructor(body: TAddUserDTO) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.email = body.email;
        this.country = body.country;
        this.address = body.address;
    }
}

export default AddUserDTO;
