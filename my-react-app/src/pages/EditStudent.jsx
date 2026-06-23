import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";

function EditStudent() {

  //Components for editing existing students details
  const { id } = useParams();
  const navigate = useNavigate();

  const { students, setStudents } = useContext(StudentContext);

  const student = students.find((student) => student.id == id);

  const [formData, setFormData] = useState({
    name: student?.name || "",
    email: student?.email || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudents = students.map((stu) =>
      stu.id == id
        ? {
            ...stu,
            name: formData.name,
            email: formData.email,
          }
        : stu,
    );

    setStudents(updatedStudents);

    toast.success("Student Updated");

    navigate("/students");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-4">Edit Student</h1>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full mb-3"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Student
      </button>
    </form>
  );
}

export default EditStudent;
