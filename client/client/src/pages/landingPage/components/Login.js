import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import login from "../../../assets/login.svg";

function Login() {
  const roles=["Student","Teacher","Admin"];
  const [route,setRoute]=useState("/");
  const routing=useHistory();
  return (
    <div className="Login flex__container" title="Login">
      <div className="Login__box flex__container" title="Login_Box">
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
         {roles.map((e,index)=>{
           return (
            <div id={e} key={index}>
              <input type="checkbox" name={e} key={index} onClick={()=>setRoute(e)}/>
              <span key={index}>{e}</span>
            </div>
           );
         })}
        </div>
        <div className="Login__button flex__container">
          <button type="submit" onClick={()=>routing.push(`${route}/dashboard`)}>Login</button>
        </div>
      </div>
      <div className="Login__image"  title="Login_Image">
        <img src={login} alt="Login svg" />
      </div>
    </div>
  );
}

export default Login;
