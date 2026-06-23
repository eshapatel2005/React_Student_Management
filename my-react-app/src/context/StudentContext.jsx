import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();
// Provides global state management for student data including CRUD operations using Context API

function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        loading,
        setLoading,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;
