import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is required.",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid authorization format.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const customer = await prisma.customer.findUnique({
      where: {
        id: decoded.id,
      },
    });

    if (!customer) {
      return res.status(401).json({
        success: false,
        message: "Customer not found.",
      });
    }

    req.user = customer;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });

  }
};