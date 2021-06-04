import React, { useState, useEffect } from "react";

function SearchResults({ movieItem }) {
  const [searchLink, setSearchLink] = useState(null);
  const key = "fde5ddeba3b7dec3fc1f51852ca0fb95";

  const getMovieProvider = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${key}`;
    return fetch(url);
  };

  useEffect(() => {
    getMovieProvider(movieItem.id)
      .then((res) => res.json())
      .then((res) => {
        setSearchLink(res?.results?.US?.link);
      });
  }, [movieItem.id]);

  return (
    <ul className="flexed-search">
      <div className="poster-container">
        <li className="list-item">
          <a target="_blank" rel="noopener noreferrer" href={searchLink}>
            <img
              className="image-element"
              tabIndex="0"
              alt="movie poster"
              title={`--Title: ${movieItem.title}--  --Description:    
       ${movieItem.overview}--  --Vote Average: ${movieItem.vote_average}`}
              aria-label={movieItem.title}
              src={
                movieItem.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`
                  : "https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg"
              }
            />
          </a>
          <h3 className="posterTitle">{movieItem.title}</h3>
        </li>
      </div>
    </ul>
  );
}

export default SearchResults;
