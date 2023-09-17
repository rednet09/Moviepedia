import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./Components/MovieCard";
import "./App.css";

// bbd7085a
const API_URL = "https://www.omdbapi.com?apikey=bbd7085a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log("---ata", data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="app">
      <h1>Moviepedia</h1>

      <div className="search">
        <input
          placeholder="search movies"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchVal)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
