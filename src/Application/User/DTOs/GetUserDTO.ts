import {IUserEntity} from "@domain/Entities/User/UserEntity";

import UserValidations from "@domain/Validations/UserValidation";

type TGetUserDTO = Pick<IUserEntity, "firstName" | "lastName" | "country">;

interface GetUserDTO extends TGetUserDTO {}

class GetUserDTO {
    constructor(body: TGetUserDTO) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.country = body.country;
    }

    static create(body: TGetUserDTO) {
        UserValidations.getUserValidation(body);
        return new GetUserDTO(body);
    }
}

export default GetUserDTO;
