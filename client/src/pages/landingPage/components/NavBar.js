import React from "react";
import logo from "../../../assets/GNITLogo.jpg";

function NavBar() {
  return (
    <nav title="NavBar">
      <img src={logo} alt="Logo" title="navbar_logo"/>
      <div>
      {/* eslint-disable-next-line */}
        <a href="#" title="home_anchor_tag">Home</a>
        {/* <Link to="/studentdashboard">
          Home
        </Link> */}
         {/* eslint-disable-next-line */}
        <a href="#" title="login_anchor_tag">Login</a>
        {/* eslint-disable-next-line */}
        <a href="#" title="contact_anchor_tag">Contact Us</a>
      </div>
    </nav>
  );
}

export default NavBar;
