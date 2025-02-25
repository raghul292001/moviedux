import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import './styles.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) => 
      prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
    )
  }

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}></Route>
            <Route path='/watchlist' element={<Watchlist watchlist={watchlist} movies={movies}  toggleWatchlist={toggleWatchlist} />}></Route>
          </Routes>
        </Router>
      </div>
      <footer className='footer'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
