import React from "react";

function MyProfile() {
  return (
    <div className="Profile flex__container">
      <div className="Profile__mine flex__container">
        <div className="about__me flex__container">
          <p>"A passionte developer,<br/> 
          who loves to innovate new things"</p>
        </div>
        <div className="mine__photo flex__container">
          <p>Rishabh Raghwendra</p>
          <q>CSE Student,GNIT</q>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
