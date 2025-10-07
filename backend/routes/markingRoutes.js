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
} from "../controllers/markingController.js";

const router = express.Router();
router.get("/leaderboard/student", getStudentLeaderboard);
router.get("/leaderboard/organisation", getOrganisationLeaderboard);
router.get("/leaderboard/individual-group", getIndividualGroupLeaderboard);

// All routes require authentication
router.use(authMiddleware);

// Get registrations with filters and search
router.post("/registrations", getRegistrations);

// Mark a project
router.post("/mark", markProject);

// Check if judge has already marked a project
router.get("/check/:projectId", checkMarking);

// Get individual markings for a project (all judges)
router.get("/project/:projectId", getProjectMarkings);

// Get leaderboards - Three separate categories


export default router;
