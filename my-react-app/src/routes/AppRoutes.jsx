import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Students from "../pages/Students";
import AddStudent from "../pages/AddStudent";
import EditStudent from "../pages/EditStudent";
import StudentDetails from "../pages/StudentDetails";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/edit-student/:id" element={<EditStudent />} />
      <Route path="/student/:id" element={<StudentDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
