import { Link } from "react-router-dom";

function Sidebar() {
  return (
    // Search input for filtering students dynamically
    <div className="w-52 bg-gray-200 min-h-screen p-4">
      <h2 className="font-bold mb-4">Dashboard</h2>

      <div className="flex flex-col gap-3">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/add-student">Add Student</Link>
      </div>
    </div>
  );
}

export default Sidebar;
