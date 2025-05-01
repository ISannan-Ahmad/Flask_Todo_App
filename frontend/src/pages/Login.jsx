import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include", // important for session cookies
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", "true");
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
        {error && (
          <p className="text-center text-sm mt-4 text-red-500 animate-fade-in">{error}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
        >
          Login
        </button>
      </form>
      
    </div>
  );
};

export default Login;
