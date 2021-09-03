import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import login from "../../../assets/login.svg";

function Login({ setUserLoginCredentials }) {
  const roles = ["Student", "Teacher", "Admin"];
  const [userName, setUserName] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [route, setRoute] = useState(null);
  const routing = useHistory();
  const loginInputBox = [
    {
      fieldName: "username",
      type: "text",
      setStateHook(e) {
        setUserName(e);
      },
    },
    {
      fieldName: "password",
      type: "password",
      setStateHook(e) {
        setUserPassword(e);
      },
    },
  ];
  async function queryLogin(credentials) {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    };
    try {
      const response = await fetch(
        `/${route}/dashboard`,
        params
      );
      const responeJson = await response.json();
      setUserLoginCredentials({
        route,
        body: responeJson,
        id: credentials.id,
        password: credentials.password,
      });
      console.log("response is: ", responeJson);
    } catch (error) {
      routing.push("/");
    }
  }
  return (
    <div className="Login flex__container" id="Login" title="Login">
      <div className="Login__box flex__container" title="Login_Box">
        <span>LOGIN</span>
        <span className="horizontal__line"></span>
        {loginInputBox.map((e, index) => {
          const FIRST_LETTER_INDEX = 0;
          const REST_OF_THE_WORD_STARTING_INDEX = 1;
          return (
            <div className={`${e.fieldName}__field`} key={index}>
              <span>{`${e.fieldName
                .charAt(FIRST_LETTER_INDEX)
                .toUpperCase()}${e.fieldName.slice(
                REST_OF_THE_WORD_STARTING_INDEX
              )}`}</span>
              <input
                type={e.type}
                onChange={(value) => e.setStateHook(value.target.value)}
              />
            </div>
          );
        })}
        <div className="role__field">
          <span>Who you are ?</span>
          {roles.map((e, index) => {
            return (
              <div id={e} key={index}>
                <input type="checkbox" name={e} onClick={() => setRoute(e)} />
                <span>{e}</span>
              </div>
            );
          })}
        </div>
        <div className="Login__button flex__container">
          <button
            type="submit"
            onClick={() => {
              if (!userName || !userPassword || !route) {
                console.log("username or password or route is null");
                console.log("user name is: ", userName);
                console.log("user password is: ", userPassword);
                console.log("can't login");
                alert("Please fill all the details login");
                return;
              }
              queryLogin({
                id: userName,
                password: userPassword,
              });
              routing.push(`${route}/dashboard`);
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="Login__image" title="Login_Image">
        <img src={login} alt="Login svg" />
      </div>
    </div>
  );
}

export default Login;
