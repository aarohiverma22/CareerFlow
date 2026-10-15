import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";

import {
  createInterview,
  getInterviews,
  getInterviewById,
  updateInterview,
  deleteInterview,
} from "./interview.controller.js";

const router = Router();
router.use(authenticate);
router.route("/").post(createInterview).get(getInterviews);
router
  .route("/:id")
  .get(getInterviewById)
  .patch(updateInterview)
  .delete(deleteInterview);

export default router;
