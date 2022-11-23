import {IUserEntity} from "@domain/Entities/User/UserEntity";

type TGetUserDTO = Pick<IUserEntity, "firstName" | "lastName" | "country">;

interface GetUserDTO extends TGetUserDTO {}

class GetUserDTO {
    constructor(body: TGetUserDTO) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.country = body.country;
    }
}

export default GetUserDTO;
