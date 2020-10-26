import logo from './logo.svg';
import Times from './Times';
import ThreeDigitPlusMinus from './ThreeDigitPlusMinus';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/math">
            <Times />
            <ThreeDigitPlusMinus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
