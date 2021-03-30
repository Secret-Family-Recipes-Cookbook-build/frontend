import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <h1>Secret Family Recipes</h1>
          <Link to='/'>Home</Link>
          <Link to='/recipe'></Link>
          <Link to='/login'>Login Here</Link>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/recipe'>
            
          </Route>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
