function MovieCard({ movie }) {
  function onFavouriteClick() {
    console.log("Favourite clicked");
    console.log(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ❤️
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
