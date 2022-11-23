import {IUserEntity} from "@domain/Entities/User/UserEntity";

import UserValidations from "@domain/Validations/UserValidation";

type TRemoveUserDTO = Pick<IUserEntity, "userId">;

interface RemoveUserDTO extends TRemoveUserDTO {}

class RemoveUserDTO {
    constructor(body: TRemoveUserDTO) {
        this.userId = body.userId;
    }

    static create(body: TRemoveUserDTO) {
        UserValidations.removeUserValidation(body);
        return new RemoveUserDTO(body);
    }
}

export default RemoveUserDTO;
