import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const users = {
  admin: "admin123",
};

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (users[username] === password) {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

<div className="login-logo">
  <img src={logo} alt="Wind Energy Logo" />
</div>
        <h1>Wind Energy Procurement Dashboard</h1>

        <p>
          Secure access to day-ahead wind generation forecasts and procurement
          insights.
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Sign In
        </button>

        <div className="login-demo">
          <strong>Demo Credentials</strong>
          <br />
          Username: admin
          <br />
          Password: admin123
        </div>

      </div>
    </div>
  );
}