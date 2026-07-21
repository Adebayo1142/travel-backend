import prisma from "../config/prisma.js";

export const getAllApplications = async () => {
  return await prisma.travelApplication.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createNewApplication = async (applicationData) => {
  return await prisma.travelApplication.create({
    data: applicationData,
  });
};