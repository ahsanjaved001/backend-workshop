import {z} from "zod";

class UserValidations {
    static addUserValidation(body) {
        const addUser = z.object({
            firstName: z.string().trim().min(1),
            lastName: z.string().trim().min(1),
            email: z.string().email(),
            country: z.string(),
            address: z.string()
        })

        return addUser.parse(body);
    }

    static getUserValidation(body) {
        const getUser = z.object({
            firstName: z.string().trim().min(1).optional(),
            lastName: z.string().trim().min(1).optional(),
            country: z.string().optional(),
        });

        return getUser.parse(body);
    }

    static updateUserValidation(body) {
        const updateUser = z.object({
            userId: z.string(),
            firstName: z.string().trim().min(1),
            lastName: z.string().trim().min(1),
            email: z.string().email(),
            country: z.string(),
            address: z.string()
        });

        return updateUser.parse(body);
    }

    static removeUserValidation(body) {
        const removeUser = z.object({
            userId: z.string()
        });

        return removeUser.parse(body);
    }
}

export default UserValidations;
