import {Router} from "express";

import UserController from "@http/Controllers/UserController";
import ExpressCallback from "@http/Utils/ExpressCallback";

const router = Router();

router.post("/add", ExpressCallback(UserController.addUser));
router.get("/search", ExpressCallback(UserController.getUsers));
router.put("/edit", ExpressCallback(UserController.updateUser));
router.delete("/remove", ExpressCallback(UserController.removeUser));

export default router;
