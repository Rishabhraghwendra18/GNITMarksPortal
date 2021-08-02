import React from "react";
import myPic from "../../../assets/my-pic.jpg";

function MyProfile() {
  return (
    <div className="Profile flex__container" title="Profile">
          <h3 title="heading">Developed By</h3>
      <div className="Profile__mine flex__container" title="Profile_me">
        <div className="about__me flex__container" title="about_me">
          <p>
            "A passionte developer,
            <br /> <span></span>
            who loves to create innovations"
          </p>
        </div>
        <div className="mine__photo flex__container">
          <img src={myPic} alt="My Pic" title="mine_pic" />
          <p title="my_name">Rishabh Raghwendra</p>
          <q title="title">CSE Student,GNIT</q>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
