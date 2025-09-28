import React from "react";
import Card from "../components/card"; // adjust path based on your folder structure

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      {/* Card Component */}
      <Card />
    </div>
  );
};

export default Login;
