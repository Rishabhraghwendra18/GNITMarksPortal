import React from "react";
import trophy from "../../../assets/trophy.svg";
function Toppers() {
  return (
    <div className="Toppers flex__container" title="Toppers">
      <div className="Toppers__image" title="Toppers__image">
        <img src={trophy} alt="Trophy" />
      </div>
      <div className="Toppers__list" title="toppers_list">
         <span className="vertical__line"></span>
      </div>
    </div>
  );
}

export default Toppers;
