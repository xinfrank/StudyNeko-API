import { Router } from "express";
import { UserController } from "../controllers/users.controller";

const router = Router();
const userController = new UserController();
router.route("/").get(userController.create);

export default router;
