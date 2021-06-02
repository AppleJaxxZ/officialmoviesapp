import "./SearchBar.css";
import React, { useState } from "react";
import SearchResults from "../SearchResults/SearchResults.components";

const SearchBar = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");

  // Input Field
  const onUserInput = ({ target }) => {
    setInput(target.value);
  };

  //  Api Call
  const SearchApi = (event) => {
    const aUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=fde5ddeba3b7dec3fc1f51852ca0fb95";
    const newUrl = aUrl + "&query=" + input;
    event.preventDefault();

    fetch(newUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          setSearch(data.results);
        },
        () => console.log(search)
      )
      .catch((error) => {
        console.log("Error!! Data interupted!:", error);
      });
  };

  return (
    //   Heading
    <div>
      <div className="container">
        {/* Input Field and Button Form */}
        <form onSubmit={SearchApi}>
          <input
            value={input}
            onChange={onUserInput}
            type="text"
            className="searchbar"
            aria-label="searchbar"
            placeholder="search"
            required
          />
          <br></br>
          <button type="submit" aria-label="searchbutton" className="searchBtn">
            Movie Express Search
          </button>
        </form>
        <h1 className="row-label" id="searchTitle" tabIndex="0">
          Movies Related To Your Search
        </h1>
      </div>

      <div className="byName-container">
        {search.map((item) => (
          <SearchResults key={item.id} movieItem={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
