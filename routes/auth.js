import { Router } from "express";
import { register, login, verifyOtp } from "../controllers/auth.js";
export const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verifyOtp);
