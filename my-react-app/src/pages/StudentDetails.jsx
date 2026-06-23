import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentDetails() {
  const { id } = useParams();

  const { students } = useContext(StudentContext);

  const student = students.find((student) => student.id == id);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Student Details</h1>

      <div className="space-y-4">
        <p>
          <span className="font-bold">ID:</span> {student?.id}
        </p>

        <p>
          <span className="font-bold">Name:</span> {student?.name}
        </p>

        <p>
          <span className="font-bold">Email:</span> {student?.email}
        </p>
      </div>
    </div>
  );
}

export default StudentDetails;
