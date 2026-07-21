import express from "express";
import {
  getApplications,
  createApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

/*
 * GET all applications
 */
router.get("/", getApplications);

/*
 * POST new application
 */
router.post("/", createApplication);

export default router;