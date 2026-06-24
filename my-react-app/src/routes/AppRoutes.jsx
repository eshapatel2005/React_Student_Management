import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Students from "../pages/Students";
import AddStudent from "../pages/AddStudent";
import EditStudent from "../pages/EditStudent";
import StudentDetails from "../pages/StudentDetails";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-student"
        element={
          <ProtectedRoute>
            <AddStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-student/:id"
        element={
          <ProtectedRoute>
            <EditStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/:id"
        element={
          <ProtectedRoute>
            <StudentDetails />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;