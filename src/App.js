import React, { useEffect, useRef } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Scrollbar from "smooth-scrollbar";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FindHome from './pages/FindHome';
import HomeDetails from './pages/HomeDetails';
import "../src/scss/main.scss";


function App() {
  useEffect(() => {
    Scrollbar.init(document.querySelector('.App'));
  }, []);

  return (
    <Router>
      <div className="App" style={{width: '100%', height: '100%'}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/findHome">
            <FindHome />
          </Route>
          <Route exact path="/findHome/:id">
            <HomeDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
