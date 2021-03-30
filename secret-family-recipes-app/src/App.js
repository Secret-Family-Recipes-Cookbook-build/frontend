import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Link to='/'>Home</Link>
          <Link to='./archives'></Link>
          <Link to='/recipe'></Link>
          <Link to='/login'>Login Here</Link>
          <h1>Secret Family Recipes</h1>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/recipe'>
            
          </Route>
          <Route path='/login'>

          </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
