import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import CreateCharacterPage from './pages/CreateChar';
import Register from './pages/Register';


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/cards" exact>
          <CardPage />
        </Route>

        <Route path="/landing" exact>
          <LandingPage />
        </Route>

        <Route path = "/about" exact>
          <AboutUs />
        </Route>

        <Route path = "/createcharacterpage" exact>
          <CreateCharacterPage />
        </Route>

        <Route path = "/register" exact>
          <Register />
        </Route>

        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
