import {container} from "tsyringe";

import UserRepository from "@infrastructure/Database/Repository/UserRepository";

container.register("IUserRepository", {useClass: UserRepository});

export default container;
