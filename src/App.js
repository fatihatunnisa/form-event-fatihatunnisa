import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Profiler, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

  import Home from './pages/Home';
  import Register from './pages/Register';
  import Login from './pages/Login';

function App() {
  return(
  <Router> 
    <div className="App">
    <header>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/login">Login</Link></li>
          <li><Link to ="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;
