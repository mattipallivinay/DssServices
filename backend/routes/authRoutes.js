import express from "express";
import { checkUserController, sendOTPController, verifyOTPController } from "../controllers/authController.js";

const router = express.Router();

router.post("/check-user", checkUserController);
router.post("/send-otp", sendOTPController);
router.post("/verify-otp", verifyOTPController);

export default router;
