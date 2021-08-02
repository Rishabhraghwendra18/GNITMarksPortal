import React from "react";
import logo from "../../../assets/GNITLogo.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav title="NavBar">
      <img src={logo} alt="Logo" title="navbar_logo"/>
      <div>
        <a href="#" title="home_anchor_tag">Home</a>
        {/* <Link to="/studentdashboard">
          Home
        </Link> */}
        <a href="#" title="login_anchor_tag">Login</a>
        <a href="#" title="contact_anchor_tag">Contact Us</a>
      </div>
    </nav>
  );
}

export default NavBar;
