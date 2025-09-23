import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser, sendOTP, verifyOTP } from "../services/authService";
import "./Login.css";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle mobile number submission
  const handleMobileSubmit = async () => {
    if (!mobile || mobile.length < 10) {
      setError("Enter a valid mobile number");
      return;
    }

    try {
      const res = await checkUser(mobile); // call backend service
      if (res.status === "new") {
        await sendOTP(mobile);
        setStep("otp");
        setError("");
      } else {
        navigate("/home");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = async () => {
    if (!otp || otp.length < 4) {
      setError("Enter a valid OTP");
      return;
    }

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
    <div className="login-card">
      <h2 id="heading">DSS Services Login</h2>
      <div className="form">
        {step === "mobile" && (
          <>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="btn">
              <button className="button1" onClick={handleMobileSubmit}>
                Continue
              </button>
            </div>
          </>
        )}

        {step === "otp" && (
          <>
            <div className="field">
              <input
                type="text"
                className="input-field"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="btn">
              <button className="button2" onClick={handleOtpSubmit}>
                Verify OTP
              </button>
            </div>
          </>
        )}
      </div>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
