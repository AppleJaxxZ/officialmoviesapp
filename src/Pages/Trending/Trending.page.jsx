import React from "react";
import TrendingMovies from "../../components/TrendingMovies/trending-movies.components";
import TrendingTitle from "../../components/TrendingMovies/trendingtitle";

export const TrendingPage = () => {
  return (
    <div>
      <TrendingTitle />
      <TrendingMovies />
    </div>
  );
};
export default TrendingPage;
