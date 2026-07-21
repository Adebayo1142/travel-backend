import * as applicationModel from "../models/applicationModel.js";

/**
 * Business Logic Layer
 * Handles application-related business operations
 */

export async function createApplication(applicationData) {
  // Future business logic can be added here
  // Examples:
  // - Calculate loan eligibility
  // - Send confirmation email
  // - Notify admin
  // - Generate application reference number
  // - Write audit logs

  const application = await applicationModel.saveApplication(applicationData);

  return application;
}