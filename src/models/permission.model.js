import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { userModel } from "../models/user.model.js";

export const permissionModel = sequelize.define(
  "permission",
  {
    idPermission: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    permissionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

permissionModel.hasMany(userModel, {
  foreignKey: "idPermission",
});

userModel.belongsTo(permissionModel, {
  foreignKey: "idPermission",
});
