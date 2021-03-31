import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Awesome Login Page</h1>

      <Route>
        <Login />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

    </div>
    </Router>
  );
}

export default App;
