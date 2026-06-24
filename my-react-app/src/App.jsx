import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      {location.pathname !== "/login" && (
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}

      <div className="flex">
        {location.pathname !== "/login" && (
          <Sidebar darkMode={darkMode} />
        )}

        <div className="p-5 w-full">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;