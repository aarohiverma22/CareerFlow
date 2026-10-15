import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { getProfile, updateProfile } from "./profile.controller.js";

const router = Router();

router.use(authenticate);

router.get("/", getProfile);
router.patch("/", updateProfile);

export default router;
