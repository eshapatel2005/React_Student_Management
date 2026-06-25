import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Home() {
  const { students } = useContext(StudentContext);

  //Home page displaying the student dashboard

  return (
      <div className="min-h-screen p-6">
      {" "}
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-white-800">
          Student Dashboard 📊
        </h1>
        <p className="text-white-600 mt-1">
          Manage and track all student records in one place
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-4xl font-bold mt-2">{students.length}</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Active Students</h2>
          <p className="text-4xl font-bold mt-2">{students.length}</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold">Registered</h2>
          <p className="text-4xl font-bold mt-2">{students.length}</p>
        </div>
      </div>
      {/* Recent Students Section */}
      <div className="bg-white p-6 rounded-xl shadow text-black">
        <h2 className="text-2xl font-bold mb-4 ">Recent Students</h2>

        {students.length === 0 ? (
          <p className="text-gray-500">
            No students found. Start by adding new students.
          </p>
        ) : (
          <ul className="space-y-3">
            {students.slice().map((student, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
              >
                <span className="font-medium">
                  {student.name || "Unnamed Student"}
                </span>

                <span className="text-sm text-gray-600">
                  ID: {student.id || index + 1}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
