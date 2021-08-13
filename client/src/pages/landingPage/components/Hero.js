import React from "react";
import girlStudyingBookImage from "../../../assets/girl-studying-book.svg";
function Hero() {
  return (
    <div className="Hero flex__container" id="Home" title="Hero">
      <div className="Hero__quote" title="Hero_Quote">
        <q><cite>
          Life is like riding a bicycle. To keep your balance you must keep
          moving.
        </cite>
        </q>
        ~Albert Einstein 
      </div>
      <div className="Hero__image" title="Hero_Image">
            <img src={girlStudyingBookImage} alt="Girl Studying Book"/>
      </div>
    </div>
  );
}

export default Hero;
