import React from "react";
import trophy from "../../../assets/trophy.svg";
function Toppers() {
  return (
    <div className="Toppers flex__container">
      <div className="Toppers__image">
        <img src={trophy} alt="Trophy" />
      </div>
      <div className="Toppers__list">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae eum inventore. Totam exercitationem a vero inventore aspernatur deleniti, ipsam assumenda perferendis itaque ut! Asperiores voluptatibus ipsum blanditiis sit enim.</p>
      </div>
    </div>
  );
}

export default Toppers;
