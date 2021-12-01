import React, { useEffect } from "react";
import MovieCollage from "../../media/movieknight-background.webp";
import "./Collage.styles.scss";

const Collage = () => {
  const dateObj = new Date();
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  useEffect(() => {
    console.log(
      `To day is ${month}, ${day}, ${year}.  Please visit us back soon.`
    );
  });
  return (
    <div className="collage">
      <img className="collage-img" src={MovieCollage} alt="movies collage" />
      <span className="text-overlay">
        A Peacock semi-clone..
        <br /> Under Current Development {month}/{day}/{year}.
        <br /> All here on... <u>Movie Knight</u>
        <br />
      </span>
    </div>
  );
};

export default Collage;
