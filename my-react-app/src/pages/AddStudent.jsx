import { useState, useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";
import { createStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const { students, setStudents } = useContext(StudentContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name === "" || formData.email === "") {
      toast.error("All fields are required");
      return;
    }

    try {
      await createStudent(formData);

      setStudents([
        ...students,
        {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
        },
      ]);

      toast.success("Student Added");

      navigate("/students");
    } catch (error) {
      toast.error("Failed to Add Student");
    }
  };

  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold mb-4">Add Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
