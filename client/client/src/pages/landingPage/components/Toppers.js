import React from "react";
import trophy from "../../../assets/trophy.svg";
function Toppers() {
  return (
    <div className="Toppers flex__container">
      <div className="Toppers__image">
        <img src={trophy} alt="Trophy" />
      </div>
      <div className="Toppers__list">
         <span className="vertical__line"></span>
      </div>
    </div>
  );
}

export default Toppers;
