import React from "react";
import login from "../../../assets/login.svg";

function Login() {
  return (
    <div className="Login flex__container" title="Login">
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
          <div id="admin">
            <input type="checkbox" name="Admin" />
            <span>Admin</span>
          </div>
          <div id="teacher">
            <input type="checkbox" name="Teacher" />
            <span>Teacher</span>
          </div>
          <div id="student">
          <input type="checkbox" name="Student" />
          <span>Student</span>
          </div>
        </div>
        <div className="Login__button flex__container">
          <button type="submit">Login</button>
        </div>
      </div>
      <div className="Login__image">
        <img src={login} alt="Login svg" />
      </div>
    </div>
  );
}

export default Login;
