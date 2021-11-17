import { useEffect, useState } from "react";
import "./trending.css";

const key = process.env.REACT_APP_APIKEY;

const TrendingMovies = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const trendUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`;
    fetch(trendUrl)
      .then((response) => response.json())
      .then((data) => {
        setTrending(data.results);
      })
      .catch((error) => {
        console.log("Error!! Data interupted!:", error);
      });
  }, []);

  return (
    <div className="trending-container">
      {trending.map((item) => (
        <MovieDetail key={item.id} movieItem={item} />
      ))}
    </div>
  );
};

const getMovieDetail = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`;
  return fetch(url);
};

function MovieDetail({ movieItem }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetail(movieItem.id)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res?.results?.US?.link);
      });
  }, [movieItem.id]);

  return (
    <div className="flexed-wrap">
      <ul className="flexed-trending">
        <div className="poster-container">
          <a target="_blank" rel="noopener noreferrer" href={movie}>
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
        </div>
      </ul>
    </div>
  );
}

export default TrendingMovies;
