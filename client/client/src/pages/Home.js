import React from "react";
import Hero from "./landingPage/components/Hero";
import Toppers from "./landingPage/components/Toppers";
import Login from "./landingPage/components/Login";
import MyProfile from "./landingPage/components/MyProfile";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Toppers />
      <Login />
      <MyProfile />
    </div>
  );
}

export default Home;
