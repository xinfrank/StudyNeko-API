import { Router } from "express";
import { GuideController } from "../controllers/guides.controller";

const router = Router();
const guideController = new GuideController();
router.route("/").get(guideController.create);

export default router;
