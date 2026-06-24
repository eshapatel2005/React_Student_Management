import { Link } from "react-router-dom";

function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">

        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/students">
            Students
          </Link>
          <Link to="/add-student">
            Add Student
          </Link>
        </div>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="bg-white text-black px-3 py-1 rounded"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;