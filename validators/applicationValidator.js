import { body } from "express-validator";

export const createApplicationRules = [

    body("full_name")
        .trim()
        .notEmpty()
        .withMessage("Full name is required."),

    body("email")
        .optional({ checkFalsy: true })
        .isEmail()
        .withMessage("Invalid email address."),

    body("phone")
        .optional({ checkFalsy: true })
        .isLength({ min: 7 })
        .withMessage("Invalid phone number."),

    body("destination")
        .trim()
        .notEmpty()
        .withMessage("Destination is required."),

    body("travel_date")
        .isISO8601()
        .withMessage("Travel date is invalid."),

    body("travelers")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Travelers must be at least 1."),

    body("budget")
        .isFloat({ gt: 0 })
        .withMessage("Budget must be greater than zero.")

];