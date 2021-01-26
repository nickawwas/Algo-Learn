import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home/Home";
import Mini from "./pages/Mini";
import Regular from "./pages/Regular";
import Blind from "./pages/Blind";
import Contact from "./pages/Contact/Contact";

import Navbar from './components/Navbar/Navbar';

import "./App.css"

const App = () => {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/2x2" component={Mini}/>
        <Route path="/3x3" component={Regular}/>
        <Route path="/3-bld" component={Blind}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;