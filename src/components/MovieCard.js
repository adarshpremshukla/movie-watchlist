import React from 'react';

const MovieCard = ({ movie, user }) => {
  const watchlist = JSON.parse(localStorage.getItem(`${user}-watchlist`)) || [];

  const addToWatchlist = () => {
    const updatedWatchlist = [...watchlist, movie];
    localStorage.setItem(`${user}-watchlist`, JSON.stringify(updatedWatchlist));
    alert('Added to watchlist!');
  };

  const removeFromWatchlist = () => {
    const updatedWatchlist = watchlist.filter(item => item.imdbID !== movie.imdbID);
    localStorage.setItem(`${user}-watchlist`, JSON.stringify(updatedWatchlist));
    alert('Removed from watchlist!');
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={addToWatchlist}>Add to Watchlist</button>
      <button onClick={removeFromWatchlist}>Remove from Watchlist</button>
    </div>
  );
};

export default MovieCard;
