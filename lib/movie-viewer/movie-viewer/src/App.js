import React, {useState, setState} from 'react';
import {Route, Link, Switch} from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import ShowPane from "./components/ShowPane";

import movies from "./data.json";

function App() {
  const [movieData, setMovieData] = useState({
    movies: movies.movies
  })
  
  
  return (
    <div className="App">
      <Header />
      <body>
        <SideBar movies={movieData.movies}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
            path="/:episode"
            render={(props) => <ShowPane {...props} movies={movieData.movies}/>} />
        </Switch>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
