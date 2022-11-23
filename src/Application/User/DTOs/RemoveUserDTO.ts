import {IUserEntity} from "@domain/Entities/User/UserEntity";

type TRemoveUserDTO = Pick<IUserEntity, "userId">;

interface RemoveUserDTO extends TRemoveUserDTO {}

class RemoveUserDTO {
    constructor(body: TRemoveUserDTO) {
        this.userId = body.userId;
    }
}

export default RemoveUserDTO;
