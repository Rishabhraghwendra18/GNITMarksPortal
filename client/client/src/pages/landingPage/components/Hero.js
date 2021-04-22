import React from "react";
import girlStudyingBookImage from "../../../assets/girl-studying-book.svg";
function Hero() {
  return (
    <div className="Hero flex__container">
      <div className="Hero__quote">
        <q><cite>
          Life is like riding a bicycle. To keep your balance you must keep
          moving.
        </cite>
        </q>
        ~Albert Einstein 
      </div>
      <div className="Hero__image">
            <img src={girlStudyingBookImage} alt="Girl Studying Book"/>
      </div>
    </div>
  );
}

export default Hero;
