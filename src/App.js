import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from './components/Navbar/Navbar';

import "./App.css"

/* Lazy Load Pages */
const Mini = lazy(() => import("./pages/Mini"));
const Regular = lazy(() => import("./pages/Regular"));
const Blind = lazy(() => import("./pages/Blind"));

const App = () => {
  return(
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Suspense fallback={<div> Loading ... </div>}>
            <Route path="/2x2" component={Mini}/>
            <Route path="/3x3" component={Regular}/>
            <Route path="/3-bld" component={Blind}/>
          </Suspense>
          <Route path="/contact" component={Contact}/>
        </Switch>
    </Router>
  );
}

export default App;