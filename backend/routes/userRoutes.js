import { Router } from "express";
import { signupUser, loginUser } from "../controllers/userController.js";
const router = Router();

router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);


export default router;