import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { getStudents } from "../services/studentService";
import SearchBar from "../components/SearchBar";
import StudentCard from "../components/StudentCard";

function Students() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const { students, setStudents, loading, setLoading } =
    useContext(StudentContext);

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }

      if (sortOrder === "desc") {
        return b.name.localeCompare(a.name);
      }

      return 0;
    });

  useEffect(() => {
    if (students.length === 0) {
      async function fetchStudents() {
        try {
          setLoading(true);

          const res = await getStudents();

          setStudents(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      fetchStudents();
    }
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold">Students Page</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="">Sort Students</option>

        <option value="asc">A - Z</option>

        <option value="desc">Z - A</option>
      </select>

      {loading && <h2>Loading...</h2>}

      <p>Total Students : {students.length}</p>

      {filteredStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </>
  );
}

export default Students;
