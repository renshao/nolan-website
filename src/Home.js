import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div id="homepage">
      <h1>Nolan S</h1>
      <nav>
        <Link to="/math">Math</Link>
      </nav>
    </div>
  );
}

export default Home;