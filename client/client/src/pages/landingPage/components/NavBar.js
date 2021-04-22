import React from "react";
import logo from "../../../assets/GNITLogo.jpg";
function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <div>
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
}

export default NavBar;
