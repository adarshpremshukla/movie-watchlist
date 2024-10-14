import React, { useState } from 'react';
import Search from './components/Search';
import Watchlist from './components/Watchlist';
import Auth from './components/Auth';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('auth');
  const [searchedMovies, setSearchedMovies] = useState([]);

  return (
    <div>
      {page === 'auth' && <Auth setUser={setUser} setPage={setPage} />}
      {page === 'home' && (
        <Search
          user={user}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          setPage={setPage}
          setSearchedMovies={setSearchedMovies}
          searchedMovies={searchedMovies}
        />
      )}
      {page === 'myLists' && (
        <Watchlist
          user={user}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          setPage={setPage}
        />
      )}
      {page === 'details' && <MovieDetail movie={searchedMovies[0]} setPage={setPage} />} 
    </div>
  );
};

export default App;
