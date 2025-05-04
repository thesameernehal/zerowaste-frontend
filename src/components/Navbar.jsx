// src/components/Navbar.jsx
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 p-4">
      <ul className="flex flex-col sm:flex-row sm:space-x-4 gap-2 text-white font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Always show NGO link */}
        <li><Link to="/ngo">NGO</Link></li>
        <li><Link to="/signup">Signup</Link></li>

        {/* Show Dashboard link if user is logged in */}
        {user && (
          <li><Link to="/dashboard">Dashboard</Link></li>
        )}

        {/* Show Logout or Login depending on login status */}
        {user ? (
          <li>
            <button onClick={handleLogout} className="hover:text-yellow-300">
              Logout
            </button>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
