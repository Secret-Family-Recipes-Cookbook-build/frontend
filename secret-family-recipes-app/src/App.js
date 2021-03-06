import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Login from './Login';
import Main from './Main';
import Cards from './Cards';

function App() {
  return (
    <Router>
      <div className='App'>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/main'>
              <Main />
            </Route>
            <Route path='/recipe'>
              <Cards />
            </Route>
      </div>
    </Router>
  );
}

export default App;
