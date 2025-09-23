import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Change if needed

export const checkUser = async (mobile: string) => {
  const res = await axios.post(`${API_URL}/check-user`, { mobile });
  return res.data;
};

export const sendOTP = async (mobile: string) => {
  const res = await axios.post(`${API_URL}/send-otp`, { mobile });
  return res.data;
};

export const verifyOTP = async (mobile: string, otp: string) => {
  const res = await axios.post(`${API_URL}/verify-otp`, { mobile, otp });
  return res.data;
};
