import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/recipe'>
              
            </Route>
            <Route path='/login'>

            </Route>
            <Route path='/Search'>
              
            </Route>
      </div>
    </Router>
  );
}

export default App;
