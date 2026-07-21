import express from "express";
import { authenticate } from "../auth/authMiddleware.js";
import { getProfile } from "../controllers/customerController.js";

const router = express.Router();

router.get("/profile", authenticate, getProfile);

export default router;