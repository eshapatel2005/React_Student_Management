import { Link } from "react-router-dom";

function Sidebar({ darkMode }) {
  return (
    <div
      className={`w-52 min-h-screen p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h2 className="font-bold text-xl mb-6">Dashboard</h2>

      <div className="flex flex-col gap-3">
        <Link
          to="/"
          className="p-2 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Home
        </Link>

        <Link
          to="/students"
          className="p-2 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Students
        </Link>

        <Link
          to="/add-student"
          className="p-2 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Add Student
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
