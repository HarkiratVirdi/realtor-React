import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FindHome from './pages/FindHome';
import HomeDetails from './pages/HomeDetails';
import "../src/scss/main.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/findHome">
            <FindHome />
          </Route>
          <Route path="/findHome/:id">
            <HomeDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
