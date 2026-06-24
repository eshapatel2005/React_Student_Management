import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link to="/">Home</Link>

          <Link to="/students">Students</Link>

          <Link to="/add-student">Add Student</Link>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black px-3 py-1 rounded"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
