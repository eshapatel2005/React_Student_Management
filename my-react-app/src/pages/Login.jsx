import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  //Login page for user authentication

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      login();

      toast.success("Login Successful");

      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black px-10 py-14 rounded-xl shadow-lg w-[450px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full mb-4 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
