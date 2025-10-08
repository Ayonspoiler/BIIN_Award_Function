import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  markProject,
  getProjectMarkings,
  getRegistrations,
  getStudentLeaderboard,
  getOrganisationLeaderboard,
  getIndividualGroupLeaderboard,
  checkMarking,
  getHeadCategories,
} from "../controllers/markingController.js";

const router = express.Router();

// Public leaderboard routes
router.get("/leaderboard/student", getStudentLeaderboard);
router.get("/leaderboard/organisation", getOrganisationLeaderboard);
router.get("/leaderboard/individual-group", getIndividualGroupLeaderboard);

// NEW: Get unique head categories (for dropdown population)
router.get("/head-categories", getHeadCategories);

// All routes below require authentication
router.use(authMiddleware);

// Get registrations with filters and search
router.post("/registrations", getRegistrations);

// Mark a project
router.post("/mark", markProject);

// Check if judge has already marked a project
router.get("/check/:projectId", checkMarking);

// Get individual markings for a project (all judges)
router.get("/project/:projectId", getProjectMarkings);

export default router;
