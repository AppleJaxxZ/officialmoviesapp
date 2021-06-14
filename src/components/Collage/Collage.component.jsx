import React from "react";
import MovieCollage from "../../media/moviecollage.jpg";
import "./Collage.styles.scss";

const Collage = () => {
  return (
    <div className="collage">
      <img className="collage-img" src={MovieCollage} alt="movies collage" />
    </div>
  );
};

export default Collage;
