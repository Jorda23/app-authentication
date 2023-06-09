import { userModel } from "../models/user.model.js";
import {validationResult}  from "express-validator";

export const findAllUser = async (req, res) => {
  try {
    const { count, rows } = await userModel.findAndCountAll();
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
    const users = await userModel.create(columns);

    res.status(200).json({
      msg: "User created successfully!",
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteForId = async (req, res) => {
  const { idUser } = req.params;

  try {
    const users = await userModel.destroy({ where: { idUser } });

    if (users) res.status(200).json("Deleted!");
    else
      res.status(404).json({
        msg: `User with id "${idUser} not found!"`,
      });
  } catch (error) {
    console.log(error);
  }
};
