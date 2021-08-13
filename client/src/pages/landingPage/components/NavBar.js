import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../../assets/GNITLogo.jpg";

function NavBar({ isLoggedIn, setUserLoginCredentials }) {
  const routing = useHistory();
  function LogOutOptionInNavForLoggedInUser() {
    return (
      // eslint-disable-next-line
      <a
        href="#"
        title="log_out_button"
        onClick={() => {
          setUserLoginCredentials(null);
          routing.push("/");
        }}
      >
        Log Out
      </a>
    );
  }
  function DefaultOptionForNotLoggedInUser() {
    return (
      <>
        {/* eslint-disable-next-line */}
        <a href="#Home" title="home_anchor_tag">
          Home
        </a>
        {/* <Link to="/studentdashboard">
        Home
      </Link> */}
        {/* eslint-disable-next-line */}
        <a href="#Login" title="login_anchor_tag">
          Login
        </a>
        {/* eslint-disable-next-line */}
        <a href="#" title="contact_anchor_tag">
          Contact Us
        </a>
      </>
    );
  }
  return (
    <nav title="NavBar">
      <img src={logo} alt="Logo" title="navbar_logo" />
      <div>
        {isLoggedIn
          ? LogOutOptionInNavForLoggedInUser()
          : DefaultOptionForNotLoggedInUser()
        }
      </div>
    </nav>
  );
}

export default NavBar;
