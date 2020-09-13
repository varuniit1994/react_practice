import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Greet from "./components/Greet"

function App()
{ 
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/user/:name" exact component={Greet}></Route>
      </Switch>
    </Router>
  )
}

export default App;
