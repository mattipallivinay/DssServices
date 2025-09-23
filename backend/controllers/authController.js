import User from "../models/User.js";

// Temporary in-memory OTP store
const otpStore = {};

export const checkUserController = async (req, res) => {
  const { mobile } = req.body;
  const user = await User.findOne({ mobile });
  if (user) {
    return res.json({ status: "existing" });
  } else {
    return res.json({ status: "new" });
  }
};

export const sendOTPController = async (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  otpStore[mobile] = otp;
  console.log("OTP sent to", mobile, otp); // Replace with SMS API later
  res.json({ success: true });
};

export const verifyOTPController = async (req, res) => {
  const { mobile, otp } = req.body;
  if (otpStore[mobile] && otpStore[mobile].toString() === otp) {
    // OTP verified → create user if new
    let user = await User.findOne({ mobile });
    if (!user) {
      user = await User.create({ mobile });
    }
    delete otpStore[mobile];
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
};
