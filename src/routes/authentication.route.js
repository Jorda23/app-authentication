import { Router } from "express";
import {
  authToken,
  privateArea
} from "../controllers/authentication.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/private", privateArea);
route.post("/auth/token", authToken);


export default route;
