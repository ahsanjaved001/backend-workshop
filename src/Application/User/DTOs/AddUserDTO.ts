import {IUserEntity} from "@domain/Entities/User/UserEntity";

import UserValidations from "@domain/Validations/UserValidation";

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

    static create(body: TAddUserDTO) {
        UserValidations.addUserValidation(body);
        return new AddUserDTO(body);
    }
}

export default AddUserDTO;
