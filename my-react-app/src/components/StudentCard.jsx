import { toast } from "react-toastify";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

function StudentCard({ student }) {
  // Component to display individual student details in a card format
  const { students, setStudents } = useContext(StudentContext);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);

      const updatedStudents = students.filter((student) => student.id !== id);

      setStudents(updatedStudents);

      toast.success("Student Deleted");
    } catch (error) {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 my-4 border hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">{student.name}</h2>

      <p className="text-gray-600 mt-2">{student.email}</p>

      <div className="flex gap-2 mt-4">
        <Link
          to={`/student/${student.id}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          View
        </Link>

        <Link
          to={`/edit-student/${student.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => handleDelete(student.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
