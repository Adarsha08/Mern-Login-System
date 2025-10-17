// Login.jsx
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setemail] =useState("");
  const [password, setpassword] =useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   if(email,password===""){
    alert("Please fill all the fields")
    return;
   }
    
    axios.post('http://localhost:3001/Login', { email, password })
  .then(res => {
    console.log(res.data);
    
    if (res.data.message === "Login Successful") {
      navigate("/home");  
    } else {
      alert("Invalid Credentials");  
    }
  })
  .catch(err => {
    console.error(err);
    alert("Server error");
  });
}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/" className="text-indigo-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
