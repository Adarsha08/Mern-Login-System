import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-b-xl shadow-md">
        <h1 className="text-2xl font-bold text-white">MyApp</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white font-semibold hover:text-gray-200 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-white font-semibold hover:text-gray-200 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Welcome Section */}
      <header className="text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome Back!
        </h2>
        <p className="text-white text-lg md:text-xl max-w-xl mx-auto">
          You have successfully logged in. Explore your dashboard, manage your data, and enjoy your experience.
        </p>
      </header>

      {/* Cards / Dashboard */}
      <section className="mt-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition">
          <h3 className="text-xl font-bold text-white mb-2">Profile</h3>
          <p className="text-white">View and update your profile information.</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition">
          <h3 className="text-xl font-bold text-white mb-2">Messages</h3>
          <p className="text-white">Check your latest messages and notifications.</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transform transition">
          <h3 className="text-xl font-bold text-white mb-2">Settings</h3>
          <p className="text-white">Manage your app preferences and settings.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-white text-sm mb-6">
        &copy; 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
