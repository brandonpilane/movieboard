import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Inception", release_date: 2010 },
    { id: 2, title: "Interstellar", release_date: 2014 },
    { id: 3, title: "The Dark Knight", release_date: 2008 },
    { id: 4, title: "Pulp Fiction", release_date: 1994 },
    { id: 5, title: "The Shawshank Redemption", release_date: 1994 },
    { id: 6, title: "The Godfather", release_date: 1972 },
    { id: 7, title: "Forrest Gump", release_date: 1994 },
    { id: 8, title: "Fight Club", release_date: 1999 },
    { id: 9, title: "The Matrix", release_date: 1999 },
    { id: 10, title: "Gladiator", release_date: 2000 },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a search query.");
      return;
    } else {
      console.log(`Searching for movies with query: ${searchQuery}`);
    }
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
