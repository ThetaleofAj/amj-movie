import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviePage from "./Components/MoviePage";
import WatchList from "./Components/WatchList";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import Explore from "./Components/Explore";
import ComingSoon from "./Components/ComingSoon";
import WhatsNew from "./Components/WhatsNew";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap'
import "./App.css";
function App(){
  //SETTING STATES
  const [films, setfilms] = useState([]);
  const[watchlist, setWatchlist] = useState([]);

  //CALLING FILMS FROM API AND STORING IN STATE
  const getFilm = async () => {
    const url = "http://andyson2.pythonanywhere.com/api"
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setfilms(responseJson);
  };
  useEffect(() => {
    getFilm();
  }, []);

  //SAVING FILMS ON DEVICE FOR WATCHLIST
  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setWatchlist(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
  
  const addToWatchlist = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
   };

  const removeFavouriteMovie = (movie) => {
		const newFavouriteList = watchlist.filter(
			(film) => film.id !== movie.id
		);
		setWatchlist(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

    return (
      <div>
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">AMJMOVIE</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/tvshows">Series</Nav.Link>
                          <Nav.Link href="/watchlist">WatchList</Nav.Link>
                            <Nav.Link href="/explore">Explore</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
          </Navbar>
            <Switch>
                <Route exact path="/">
               {/* What's New heading */} 
                <div>
                    <h1>Recommendations</h1>
                  <div className="film">
                  <WhatsNew films={films}/>
                  </div>
                  </div>
                   {/* Coming Soon heading */} 
                   <div>
                    <h1>Coming Soon</h1>
                  <div className="film">
                  <ComingSoon films={films}/>
                  </div>
                  </div>
                  <div>
                     </div>
                   </Route>
              <Route exact path={"/movie/:MovieId"}>
                <MoviePage films={films} addtowatchlistclick={addToWatchlist}/>
              </Route>
              <Route exact path="/watchlist">
                <div  className="movie">
                <WatchList films={watchlist} addtowatchlistclick={removeFavouriteMovie}/>
                </div>
              </Route>
              <Route exact path="/movies">
                <div className="movie">
                <Movies />
                </div>
               
              </Route>
              <Route exact path="/tvshows">
                <div className="movie">
                <TvShows />
                </div>
                 
              </Route>
              <Route exact path="/explore">
                  <Explore/>
              </Route>
            </Switch>
        </Router>
      </div>
      );
  }
  

export default App;
