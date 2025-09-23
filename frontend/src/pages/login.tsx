import { useState } from "react";
import { checkUser, sendOTP, verifyOTP } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // ✅ Import CSS

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleMobileSubmit = async () => {
    try {
      const res = await checkUser(mobile);
      if (res.status === "new") {
        await sendOTP(mobile);
        setStep("otp");
      } else {
        navigate("/home");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const res = await verifyOTP(mobile, otp);
      if (res.success) {
        navigate("/home");
      } else {
        setError("Invalid OTP");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>DSS Services Login</h2>

        {step === "mobile" && (
          <>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={handleMobileSubmit}>Continue</button>
          </>
        )}

        {step === "otp" && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleOtpSubmit}>Verify OTP</button>
          </>
        )}

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
