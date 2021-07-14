import React, { useContext } from "react";
import Hero from "./landingPage/components/Hero";
import Toppers from "./landingPage/components/Toppers";
import Login from "./landingPage/components/Login";
import MyProfile from "./landingPage/components/MyProfile";
import { setUserLoginCredentialsContext } from "./App";

function Home() {
  const setUserLoginCredentials=useContext(setUserLoginCredentialsContext);
  return (
    <div className="Home" title="Home">
      <Hero />
      <Toppers />
      <Login setUserLoginCredentials={setUserLoginCredentials} />
      <MyProfile />
    </div>
  );
}

export default Home;
