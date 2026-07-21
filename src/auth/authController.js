import { register, login } from "./authService.js";

export const registerCustomer = async (req, res) => {
  try {
    const customer = await register(req.body);

    return res.status(201).json({
      success: true,
      message: "Customer registered successfully.",
      data: customer,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
export const loginCustomer = async (req, res) => {

  try {

    const result = await login(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: result,
    });

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message,
    });

  }

};