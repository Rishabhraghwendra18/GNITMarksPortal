import React from "react";
import login from "../../../assets/login.svg";

function Login() {
  return (
    <div className="Login flex__container">
      <div className="Login__box flex__container">
        <span>LOGIN</span>
        <span className="horizontal__line"></span>
        <div className="username__field">
          <span>Username</span>
          <input type="text" />
        </div>
        <div className="password__field">
          <span>Password</span>
          <input type="text" />
        </div>
        <div className="role__field">
          <span>Who you are ?</span>
          <input type="checkbox" name="Admin"/><span>Admin</span>
          <input type="checkbox" name="Teacher"/>
          <input type="checkbox" name="Student"/>
        </div>
      </div>
      <div className="Login__image">
        <img src={login} alt="Login svg" />
      </div>
    </div>
  );
}

export default Login;
