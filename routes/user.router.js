import { Router } from "express";
import { signupUser, loginUser } from "../controllers/user.controller.js";
const router = Router();

router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);


export default router;