import React from "react";
import myPic from "../../../assets/my-pic.jpg";

function MyProfile() {
  return (
    <div className="Profile flex__container">
          <h3>Developed By</h3>
      <div className="Profile__mine flex__container">
        <div className="about__me flex__container">
          <p>
            "A passionte developer,
            <br /> <span></span>
            who loves to create innovations"
          </p>
        </div>
        <div className="mine__photo flex__container">
          <img src={myPic} alt="My Pic" />
          <p>Rishabh Raghwendra</p>
          <q>CSE Student,GNIT</q>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
