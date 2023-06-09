import { body } from "express-validator";
import { permissionModel } from "../models/permission.model.js";

// Validation middleware for creating a permission
export const validatePermissionRules = [
  body("permissionName")
    .notEmpty()
    .withMessage("Permission name is required")
    .isString()
    .withMessage("Permission name must be a string")
    .custom(async (value) => {
      const permission = await permissionModel.findOne({
        where: { permissionName: value },
      });

      if (permission) {
        throw new Error("Permission name must be unique");
      }

      return true;
    })
];
