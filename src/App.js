import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Mini from "./pages/Mini/Mini";
import Regular from "./pages/Reg/Regular";
import Blind from "./pages/Blind/Blind";
import Saved from "./pages/Saved";
import Contact from "./pages/Contact/Contact";

import "./App.css";

const App = () => {
  const githubBaseRoute = "/Algo-Learn";

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={githubBaseRoute} exact component={Home} />
        <Route path={`${githubBaseRoute}/2x2`} component={Mini} />
        <Route path={`${githubBaseRoute}/3x3`} component={Regular} />
        <Route path={`${githubBaseRoute}/3-bld`} component={Blind} />
        <Route path={`${githubBaseRoute}/saved`} component={Saved} />
        <Route path={`${githubBaseRoute}/contact`} component={Contact} />

        <Route
          path="/"
          exact
          render={() => <Redirect to={githubBaseRoute} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
