import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#2c3e50", padding: "10px" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/courses" style={linkStyle}>Courses</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
};

export default Navbar;