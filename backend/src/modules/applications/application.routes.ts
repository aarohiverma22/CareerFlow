import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";

import {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "./application.controller.js";

const router = Router();
router.use(authenticate);
router.route("/").post(createApplication).get(getApplications);
router
  .route("/:id")
  .get(getApplicationById)
  .patch(updateApplication)
  .delete(deleteApplication);

export default router;
