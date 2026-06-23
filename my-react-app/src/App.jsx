import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-5 w-full">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
