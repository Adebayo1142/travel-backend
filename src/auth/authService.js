import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import { generateToken } from "./jwt.js";

/**
 * Register Customer
 */
export const register = async (data) => {

  const existingCustomer = await prisma.customer.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingCustomer) {
    throw new Error("Email already registered.");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const customer = await prisma.customer.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: hashedPassword,
    },
  });

  // Link any existing applications
  await prisma.travelApplication.updateMany({
    where: {
      email: customer.email,
      customerId: null,
    },
    data: {
      customerId: customer.id,
    },
  });

  // Remove password before returning
  const { password, ...safeCustomer } = customer;

  return safeCustomer;
};

/**
 * Login Customer
 */
export const login = async (data) => {
  console.log("Login Email:", data.email);

  const customer = await prisma.customer.findUnique({
    where: {
      email: data.email,
    },
  });

  console.log("Customer Found:", customer);

  if (!customer) {
    throw new Error("Invalid email or password.");
  }

  console.log("Entered Password:", data.password);
  console.log("Stored Hash:", customer.password);

  const validPassword = await bcrypt.compare(
    data.password,
    customer.password
  );

  console.log("Password Match:", validPassword);

  if (!validPassword) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken(customer);

  const { password, ...safeCustomer } = customer;

  return {
    customer: safeCustomer,
    token,
  };
};