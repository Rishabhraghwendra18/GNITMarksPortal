import React from "react";
import NavBar from "./landingPage/components/NavBar";
import Hero from "./landingPage/components/Hero";
import Toppers from "./landingPage/components/Toppers";
import Login from "./landingPage/components/Login";
import MyProfile from "./landingPage/components/MyProfile";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Hero />
      <Toppers />
      <Login />
      <MyProfile />
    </div>
  );
}

export default Home;
