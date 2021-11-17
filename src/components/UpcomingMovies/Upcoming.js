import React, { useState, useEffect } from "react";
import "./Upcoming.css";

const key = process.env.REACT_APP_APIKEY;

const UpcomingMovies = () => {
  const [upcoming, setUpcoming] = useState([]);
  console.log(key);

  useEffect(() => {
    const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;

    fetch(upcomingUrl)
      .then((response) => response.json())
      .then((data) => {
        setUpcoming(data.results);
      })
      .catch((error) => {
        console.log("Error!! Data interupted!:", error);
      });
  }, []);

  return (
    <div className="upcoming-container">
      {upcoming.map((item) => (
        <UpMovieDetail key={item.id} movieItem={item} />
      ))}
    </div>
  );
};

const getUpMovieDetail = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`;
  return fetch(url);
};

function UpMovieDetail({ movieItem }) {
  const [upMLink, setUpMLink] = useState(null);

  useEffect(() => {
    getUpMovieDetail(movieItem.id)
      .then((res) => res.json())
      .then((res) => {
        setUpMLink(res?.results?.US?.link);
      });
  }, [movieItem.id]);

  return (
    <div>
      <ul className="flexed-upcoming">
        <div className="poster-container" key={movieItem.id}>
          <a target="_blank" rel="noopener noreferrer" href={upMLink}>
            <li className="list-item">
              <img
                className="image-element"
                tabIndex="0"
                alt="movie poster"
                aria-label={movieItem.title}
                title={`--Title: ${movieItem.title}--  --Description:
         ${movieItem.overview}--  --Vote Average: ${movieItem.vote_average}`}
                src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
              />

              <h3 className="posterTitle">{movieItem.title}</h3>
            </li>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default UpcomingMovies;
