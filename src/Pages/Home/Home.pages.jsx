import React from "react";
import Collage from "../../components/Collage/Collage.component";
import TopRated from "../../components/top-rated/Toprated.components";

const HomePage = () => (
  <div className="homepage">
    <Collage />

    <TopRated />
  </div>
);

export default HomePage;
