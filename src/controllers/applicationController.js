import {
  getAllApplications,
  createNewApplication,
} from "../services/applicationService.js";

import { generateReference } from "../utils/generateReference.js";

export const getApplications = async (req, res) => {
  try {
    const applications = await getAllApplications();

    return res.status(200).json({
      success: true,
      message: "Applications retrieved successfully",
      count: applications.length,
      data: applications,
    });

  } catch (error) {

    console.error("Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

  }
};

export const createApplication = async (req, res) => {
  try {
    const applicationData = {
      ...req.body,
      referenceNumber: generateReference(),
    };

    const application = await createNewApplication(applicationData);

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      data: application,
    });

  } catch (error) {

    console.error("Create Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create application.",
      error: error.message,
    });

  }
};