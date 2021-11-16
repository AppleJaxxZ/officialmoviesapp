import React from "react";
import MovieCollage from "../../media/movieknight-background.webp";
import "./Collage.styles.scss";

const Collage = () => {
  return (
    <div className="collage">
      <img className="collage-img" src={MovieCollage} alt="movies collage" />
      <span className="text-overlay">
        A Peacock semi-clone..
        <br /> Your favorite movies...
        <br /> All here on... <u>Movie Knight</u>
        <button className="homepage-signup">Sign Up</button>
      </span>
    </div>
  );
};

export default Collage;
