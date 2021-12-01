import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "./Toprated.styles.scss";
import SwiperCore, { FreeMode, Pagination, Keyboard, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);

const key = process.env.REACT_APP_APIKEY;

const TopRated = () => {
  const [toprated, setToprated] = useState([]);
  const key = process.env.REACT_APP_APIKEY;

  useEffect(() => {
    const topratedUrl = `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&region=US`;
    fetch(topratedUrl)
      .then((response) => response.json())
      .then((data) => setToprated(data.results))
      .catch((error) => {
        console.log("Error!! Top Rated data interrupted!:", error);
      });
  });

  return (
    <div className="topRated-main">
      <h1>Dont Miss Out On These Top Rated Features</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {toprated.map((item) => (
          <TopRatedMovies key={item.id} movieItem={item} />
        ))}
      </Swiper>
    </div>
  );
};

const getMovieImagesFromId = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`;
  return fetch(url);
};

const TopRatedMovies = ({ movieItem }) => {
  const [movieImage, setMovieImage] = useState(null);

  useEffect(() => {
    getMovieImagesFromId(movieItem.id)
      .then((res) => res.json())
      .then((res) => {
        setMovieImage(res?.results?.US?.link);
      });
  }, [movieItem.id]);

  return (
    <div className="topRated__container">
      <ul className="topRated__flex-list">
        <SwiperSlide>
          <a target="_blank" rel="noopener noreferrer" href={movieImage}>
            <li className="list-item">
              <img
                className="image-element"
                tabIndex={0}
                aria-label={movieItem.title}
                title={`--Title: ${movieItem.title}--  --Description:    ${movieItem.overview}--  --Vote Average: ${movieItem.vote_average}`}
                alt="movie poster"
                src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
              />
              <h3 className="posterTitle">{movieItem.title}</h3>
            </li>
          </a>
        </SwiperSlide>
      </ul>
    </div>
  );
};

export default TopRated;
