import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import StudentProvider from "./context/StudentContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/AuthContext";


createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
  <AuthProvider>
    <StudentProvider>
      <App />
      <ToastContainer position="top-right" />
    </StudentProvider>
  </AuthProvider>
</BrowserRouter>
  </StrictMode>
)
