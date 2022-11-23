import {Router} from "express";

import UserController from "@http/Controllers/UserController";

const router = Router();

router.post("/add", UserController.addUser);
router.get("/search", UserController.getUsers);
router.put("/edit", UserController.updateUser);
router.delete("/remove", UserController.removeUser);

export default router;
