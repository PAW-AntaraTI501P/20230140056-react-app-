// src/pages/Register/RegisterPage.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (error) {
      console.error("Registrasi gagal:", error.response?.data || error.message);
      alert("Registrasi gagal. Coba lagi.");
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(-45deg, #1f1c2c, #928dab, #1e3c72, #2a5298)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 15s ease infinite",
    fontFamily: "'Poppins', sans-serif",
  };

  const cardStyle = {
    backgroundColor: "rgba(40, 44, 52, 0.95)",
    padding: "40px 30px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
    textAlign: "center",
    color: "white",
  };

  const titleStyle = {
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #61dafb, #f39c12)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const formGroupStyle = {
    marginBottom: "1.2rem",
    textAlign: "left",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.4rem",
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#dcdcdc",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #444",
    borderRadius: "10px",
    backgroundColor: "#2f3542",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "1em",
    marginTop: "0.5rem",
    background: "linear-gradient(90deg, #61dafb, #3498db)",
    color: "#1f1c2c",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    width: "100%",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Registrasi</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 8px #61dafb, 0 0 16px #61dafb")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 8px #61dafb, 0 0 16px #61dafb")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 8px #61dafb, 0 0 16px #61dafb")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 25px rgba(97,218,251,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.3)";
            }}
          >
            Register
          </button>
        </form>

        <p style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
          Sudah punya akun?{" "}
          <Link to="/login" style={{ color: "#61dafb", fontWeight: "600" }}>
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
