// src/pages/Home/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    animation: "gradientBG 10s ease infinite",
    backgroundSize: "200% 200%",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #61dafb, #f39c12)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#e0e0e0",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "1.1em",
    marginTop: "15px",
    backgroundColor: "#61dafb",
    color: "#1f1c2c",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    textDecoration: "none",
    minWidth: "220px",
    transition: "all 0.3s ease",
    fontWeight: "600",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
  };

  const buttonHover = {
    transform: "scale(1.05)",
    backgroundColor: "#00c4ff",
  };

  // Custom handler untuk efek hover
  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, buttonHover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Selamat Datang di Aplikasi Todo List</h1>

      {user ? (
        <>
          <h2>Halo, {user.name || user.email} 👋</h2>
          <p style={subtitleStyle}>Kelola semua tugas Anda dengan mudah dan efisien.</p>

          <button
            onClick={() => navigate("/todos")}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            📋 Lihat Daftar Todo
          </button>

          <button
            onClick={handleLogout}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            🚪 Logout
          </button>
        </>
      ) : (
        <>
          <p style={subtitleStyle}>Kelola semua tugas Anda dengan mudah dan efisien.</p>

          <button
            onClick={() => navigate("/todos")}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            📋 Lihat Daftar Todo
          </button>

          <button
            onClick={() => navigate("/register")}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            📝 Register
          </button>

          <button
            onClick={() => navigate("/login")}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            🔑 Login
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;
