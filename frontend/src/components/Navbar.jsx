import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedIn"); // Optional if you're using localStorage
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Wind Energy Logo" />

        <div>
          <h2>Wind Energy Procurement Dashboard</h2>
          <p>UK Day-Ahead Forecast Decision Support</p>
        </div>
      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}