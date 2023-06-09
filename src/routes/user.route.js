import { Router } from "express";
import {
  create,
  findAllUser,
  deleteForId,
} from "../controllers/user.controller.js";

import { userValidationRules } from "../validation/user.validate.js";
const route = Router();

// Routes y validaciones correspondientes
route.get("/users", findAllUser);
route.post("/user/create", userValidationRules, create);
route.delete("/user/:idUser", deleteForId);

export default route;
