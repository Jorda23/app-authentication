import { Router } from "express";
import userRoute from "./permission.route.js";
import permissionRoute from "./user.route.js"
import authenticationRoute from "./authentication.route.js"

const router = Router();

router.use(userRoute);
router.use(permissionRoute);
router.use(authenticationRoute);

export default router;