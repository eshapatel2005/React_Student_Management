import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/add-student">Add Student</Link>
      </div>
    </nav>
  );
}

export default Navbar;
