import { body } from "express-validator";
import { userModel } from "../models/user.model.js";

export const userValidationRules = [
  body("userName")
    .notEmpty()
    .withMessage("The username is required.")
    .custom(async (value) => {
      const user = await userModel.findOne({
        where: { userName: value },
      });

      if (user) {
        throw new Error("User name must be unique");
      }

      return true;
    }),
  body("password").notEmpty().withMessage("The password is required."),
  body("idPermission").notEmpty().withMessage("The id permission is required."),
];
