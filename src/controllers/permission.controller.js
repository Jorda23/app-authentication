import { permissionModel } from "../models/permission.model.js";
import {validationResult}  from "express-validator";

export const findAllPermission = async (req, res) => {
  try {
    const { count, rows } = await permissionModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const columns = req.body;

  try {
    const permission = await permissionModel.create(columns);

    res.status(200).json({
      msg: "Permission created successfully!",
      permission,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idPermission } = req.params;

  try {
    const permission = await permissionModel.destroy({
      where: { idPermission },
    });

    if (permission) res.status(200).json("Deleted!");
    else
      res.status(404).json({
        msg: `Permission with id "${idPermission} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
