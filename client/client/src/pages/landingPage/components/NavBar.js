import React from "react";
import logo from "../../../assets/GNITLogo.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <div>
        <Link to="/studentDashboard">
          Home
        </Link>
        <a href="#">Login</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
}

export default NavBar;
