import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Work from "./Routes/Work";
import Sidebar from "./Components/Sidebar";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/work">
            <Work />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
