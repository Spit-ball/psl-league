import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Login with Discord</h1>
        <p>Click the button below to login with Discord</p>
      </div>
    </div>
  );
};

export default LoginPage;
